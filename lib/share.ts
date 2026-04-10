import type { DimensionId, DimensionLevel, TestResult } from './types';
import { DIMENSION_IDS } from './data/dimensions';

const SECRET = 'ntti-2024-jade-oracle';

/** Simple hash for signing — djb2 + xor fold to 8 hex chars */
function sign(data: string): string {
  const raw = data + ':' + SECRET;
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

/** Encode a TestResult into a shareable URL path: /r?d=<payload>&s=<sig> */
export function encodeShareUrl(result: TestResult, baseUrl: string): string {
  const levels = DIMENSION_IDS.map(d => result.levels[d]).join('');
  const payload: SharePayload = {
    t: result.finalType.code,
    s: result.bestNormal.similarity,
    l: levels,
    e: result.bestNormal.exact,
    x: result.special ? 1 : 0,
  };

  const data = toBase64Url(JSON.stringify(payload));
  const sig = sign(data);

  const url = new URL('/r', baseUrl);
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

/** Decode and verify a share URL. Returns null if invalid/tampered. */
export function decodeShareUrl(d: string, s: string): DecodedShare | null {
  // verify signature
  const expectedSig = sign(d);
  if (s !== expectedSig) return null;

  try {
    const json = fromBase64Url(d);
    const payload: SharePayload = JSON.parse(json);

    if (!payload.t || typeof payload.s !== 'number' || !payload.l || payload.l.length !== 15) {
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
      exact: payload.e || 0,
      special: payload.x === 1,
    };
  } catch {
    return null;
  }
}
