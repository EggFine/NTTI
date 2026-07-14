import assert from 'node:assert/strict';
import test from 'node:test';
import { buildExtraQuestions, normalizeRawScore } from '../lib/scoring';
import type { LocaleData } from '../lib/data/locale';
import type { DimensionId, Question } from '../lib/types';

function question(id: string, dim: DimensionId): Question {
  return {
    id,
    dim,
    text: id,
    options: [
      { label: 'low', value: 1 },
      { label: 'mid', value: 2 },
      { label: 'high', value: 3 },
    ],
  };
}

function localeData(questionBank: Record<string, Question[]>): LocaleData {
  return {
    questionBank,
    specialQuestions: [],
    personalityTypes: [],
    drunkType: { code: 'DRUNK', cn: '', intro: '', desc: '', pattern: '' },
    fallbackType: { code: 'HHHH', cn: '', intro: '', desc: '', pattern: '' },
    dimensions: [],
    models: [],
    dimensionMap: {} as LocaleData['dimensionMap'],
  };
}

test('adds one unused question for an inconsistent unsupplemented dimension', () => {
  const used = [question('S1_q1', 'S1'), question('S1_q2', 'S1'), question('S1_q3', 'S1')];
  const extra = question('S1_q4', 'S1');
  const answers = { S1_q1: 1, S1_q2: 2, S1_q3: 3 };

  const result = buildExtraQuestions(
    answers,
    used,
    localeData({ S1: [...used, extra] }),
    new Set<DimensionId>(),
  );

  assert.deepEqual(result.map(item => item.id), ['S1_q4']);
});

test('does not add another question for a supplemented dimension', () => {
  const used = [question('S1_q1', 'S1'), question('S1_q2', 'S1'), question('S1_q3', 'S1')];
  const answers = { S1_q1: 1, S1_q2: 2, S1_q3: 3 };

  const result = buildExtraQuestions(
    answers,
    used,
    localeData({ S1: [...used, question('S1_q4', 'S1')] }),
    new Set<DimensionId>(['S1']),
  );

  assert.deepEqual(result, []);
});

test('normalizes any answer count back to the three-question scale', () => {
  assert.equal(normalizeRawScore(5, 3), 5);
  assert.equal(normalizeRawScore(9, 7), 4);
  assert.equal(normalizeRawScore(21, 7), 9);
  assert.equal(normalizeRawScore(0, 0), 3);
});
