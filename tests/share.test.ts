import assert from 'node:assert/strict';
import test from 'node:test';
import { DIMENSION_IDS } from '../lib/data/dimensions';
import { decodeShareUrl, encodeShareUrl } from '../lib/share';
import type { DimensionId, DimensionLevel, PersonalityType, TestResult } from '../lib/types';

function makeResult(overrides: {
  typeCode?: string;
  similarity?: number;
  exact?: number;
} = {}): TestResult {
  const personality: PersonalityType = {
    code: overrides.typeCode ?? 'BOSS',
    cn: 'Boss',
    intro: '',
    desc: '',
    pattern: 'MMM-MMM-MMM-MMM-MMM',
  };
  const levels = Object.fromEntries(
    DIMENSION_IDS.map(id => [id, 'M']),
  ) as Record<DimensionId, DimensionLevel>;
  const rawScores = Object.fromEntries(
    DIMENSION_IDS.map(id => [id, 6]),
  ) as Record<DimensionId, number>;
  const bestNormal = {
    ...personality,
    distance: 0,
    exact: overrides.exact ?? 8,
    similarity: overrides.similarity ?? 72,
  };

  return {
    rawScores,
    levels,
    finalType: personality,
    bestNormal,
    modeKicker: '',
    badge: '',
    sub: '',
    special: false,
    secondaryType: null,
  };
}

function roundTrip(result: TestResult) {
  const url = new URL(encodeShareUrl(result, 'https://example.com', 'zh'));
  return decodeShareUrl(url.searchParams.get('d')!, url.searchParams.get('s')!);
}

function checksum(data: string): string {
  const raw = `${data}:ntti-2024-jade-oracle`;
  let h1 = 5381;
  let h2 = 52711;
  for (let i = 0; i < raw.length; i++) {
    const code = raw.charCodeAt(i);
    h1 = ((h1 << 5) + h1 + code) >>> 0;
    h2 = ((h2 << 5) + h2 + code) >>> 0;
  }
  return h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');
}

function encodePayload(payload: object): [string, string] {
  const data = btoa(JSON.stringify(payload))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  return [data, checksum(data)];
}

test('accepts a valid existing share payload', () => {
  const decoded = roundTrip(makeResult());

  assert.equal(decoded?.typeCode, 'BOSS');
  assert.equal(decoded?.similarity, 72);
  assert.equal(decoded?.exact, 8);
});

test('rejects checksummed payloads with invalid similarity values', () => {
  assert.equal(roundTrip(makeResult({ similarity: -1 })), null);
  assert.equal(roundTrip(makeResult({ similarity: 101 })), null);
  assert.equal(roundTrip(makeResult({ similarity: 72.5 })), null);
});

test('rejects checksummed payloads with invalid exact-match counts', () => {
  assert.equal(roundTrip(makeResult({ exact: -1 })), null);
  assert.equal(roundTrip(makeResult({ exact: 16 })), null);
  assert.equal(roundTrip(makeResult({ exact: 7.5 })), null);
});

test('rejects empty and oversized type codes', () => {
  assert.equal(roundTrip(makeResult({ typeCode: '' })), null);
  assert.equal(roundTrip(makeResult({ typeCode: 'X'.repeat(17) })), null);
});

test('rejects a checksummed payload with an invalid special flag', () => {
  const [data, signature] = encodePayload({
    t: 'BOSS',
    s: 72,
    l: 'M'.repeat(15),
    e: 8,
    x: 2,
  });

  assert.equal(decodeShareUrl(data, signature), null);
});

test('rejects special flags that conflict with the result type', () => {
  const [normalData, normalChecksum] = encodePayload({
    t: 'BOSS', s: 72, l: 'M'.repeat(15), e: 8, x: 1,
  });
  const [specialData, specialChecksum] = encodePayload({
    t: 'DRUNK', s: 72, l: 'M'.repeat(15), e: 8, x: 0,
  });

  assert.equal(decodeShareUrl(normalData, normalChecksum), null);
  assert.equal(decodeShareUrl(specialData, specialChecksum), null);
});
