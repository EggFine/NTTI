import assert from 'node:assert/strict';
import test from 'node:test';
import { buildExtraQuestions, computeResult, normalizeRawScore } from '../lib/scoring';
import type { LocaleData } from '../lib/data/locale';
import type { Dictionary } from '../lib/i18n';
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

function scoringDictionary(): Dictionary {
  return {
    scoring: {
      extraPromptFirst: '',
      extraPromptRest: [],
      modeKickerPrimary: 'primary',
      modeKickerHidden: 'hidden',
      modeKickerFallback: 'fallback',
      modeKickerCodex: 'codex',
      badgeNormal: '{sim}/{exact}',
      badgeDrunk: 'drunk',
      badgeFallback: '{sim}',
      badgeCodex: 'codex',
      subNormal: '',
      subDrunk: '',
      subFallback: '',
      subCodex: '',
    },
  } as unknown as Dictionary;
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

test('adds one unused question for each inconsistent unsupplemented dimension', () => {
  const usedS1 = [question('S1_q1', 'S1'), question('S1_q2', 'S1'), question('S1_q3', 'S1')];
  const usedS2 = [question('S2_q1', 'S2'), question('S2_q2', 'S2'), question('S2_q3', 'S2')];
  const answers = {
    S1_q1: 1, S1_q2: 2, S1_q3: 3,
    S2_q1: 3, S2_q2: 2, S2_q3: 1,
  };

  const result = buildExtraQuestions(
    answers,
    [...usedS1, ...usedS2],
    localeData({
      S1: [...usedS1, question('S1_q4', 'S1')],
      S2: [...usedS2, question('S2_q4', 'S2')],
    }),
    new Set<DimensionId>(),
  );

  assert.equal(result.length, 2);
  assert.deepEqual(result.map(item => item.dim).sort(), ['S1', 'S2']);
  assert.deepEqual(result.map(item => item.id).sort(), ['S1_q4', 'S2_q4']);
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

test('computeResult uses normalized scores for supplemental answers', () => {
  const questions = Array.from({ length: 7 }, (_, index) =>
    question(`S1_q${index + 1}`, 'S1'),
  );
  const answers = Object.fromEntries(
    questions.map((item, index) => [item.id, index < 2 ? 2 : 1]),
  );
  const data = localeData({ S1: questions });
  data.personalityTypes = [{
    code: 'LOW', cn: '', intro: '', desc: '', pattern: 'LLL-LLL-LLL-LLL-LLL',
  }];

  const result = computeResult(answers, questions, data, scoringDictionary());

  assert.equal(result.rawScores.S1, 4);
  assert.equal(result.levels.S1, 'L');
});
