import type { DimensionId, DimensionLevel, TestResult } from './types';
import { DIMENSION_IDS } from './data/dimensions';

const CHECKSUM_SALT = 'ntti-2024-jade-oracle';

/** Client-visible checksum for detecting damaged links, not a security signature. */
function checksum(data: string): string {
  const raw = data + ':' + CHECKSUM_SALT;
  let h1 = 5381;
  let h2 = 52711;
  for (let i = 0; i < raw.length; i++) {
    const c = raw.charCodeAt(i);
    h1 = ((h1 << 5) + h1 + c) >>> 0;
    h2 = ((h2 << 5) + h2 + c) >>> 0;
  }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

interface SharePayload {
  /** type code, e.g. "BOSS" */
  t: string;
  /** similarity percentage */
  s: number;
  /** 15 dimension levels concatenated, e.g. "HHHMHHMHHHHHHMH" */
  l: string;
  /** exact match count */
  e: number;
  /** special flag (drunk/fallback) */
  x: number;
}

function toBase64Url(str: string): string {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(str: string): string {
  let s = str.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return atob(s);
}

/** Encode a TestResult into a shareable URL path: /<locale>/r?d=<payload>&s=<sig> */
export function encodeShareUrl(result: TestResult, baseUrl: string, locale: string = 'zh'): string {
  const levels = DIMENSION_IDS.map(d => result.levels[d]).join('');
  const payload: SharePayload = {
    t: result.finalType.code,
    s: result.bestNormal.similarity,
    l: levels,
    e: result.bestNormal.exact,
    x: result.special ? 1 : 0,
  };

  const data = toBase64Url(JSON.stringify(payload));
  const sig = checksum(data);

  const url = new URL(`/${locale}/r`, baseUrl);
  url.searchParams.set('d', data);
  url.searchParams.set('s', sig);
  return url.toString();
}

export interface DecodedShare {
  typeCode: string;
  similarity: number;
  levels: Record<DimensionId, DimensionLevel>;
  exact: number;
  special: boolean;
}

/** Decode and validate a share URL. Returns null if malformed or damaged. */
export function decodeShareUrl(d: string, s: string): DecodedShare | null {
  const expectedSig = checksum(d);
  if (s !== expectedSig) return null;

  try {
    const json = fromBase64Url(d);
    const payload: SharePayload = JSON.parse(json);

    if (
      typeof payload.t !== 'string'
      || payload.t.length < 1
      || payload.t.length > 16
      || !Number.isInteger(payload.s)
      || payload.s < 0
      || payload.s > 100
      || typeof payload.l !== 'string'
      || payload.l.length !== 15
      || !Number.isInteger(payload.e)
      || payload.e < 0
      || payload.e > 15
      || (payload.x !== 0 && payload.x !== 1)
    ) {
      return null;
    }

    const levels = {} as Record<DimensionId, DimensionLevel>;
    for (let i = 0; i < 15; i++) {
      const ch = payload.l[i];
      if (ch !== 'L' && ch !== 'M' && ch !== 'H') return null;
      levels[DIMENSION_IDS[i]] = ch;
    }

    return {
      typeCode: payload.t,
      similarity: payload.s,
      levels,
      exact: payload.e,
      special: payload.x === 1,
    };
  } catch {
    return null;
  }
}
