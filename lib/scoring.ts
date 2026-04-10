import type { DimensionId, DimensionLevel, Question, SpecialQuestion, PersonalityType, RankedType, TestResult } from './types';
import { DIMENSION_IDS } from './data/dimensions';
import { shuffle, selectRandom } from './utils';
import type { Dictionary } from './i18n';
import { t as tpl } from './i18n';
import type { LocaleData } from './data/locale';

// ─── Constants ───

const QUESTIONS_PER_DIM = 3;

/** Probability of each level given raw score (3-question regime, score range 3-9) */
const SCORE_PROB: Record<number, [number, number, number]> = {
  // [P(L), P(M), P(H)]
  3: [0.95, 0.05, 0.00],
  4: [0.75, 0.20, 0.05],
  5: [0.25, 0.55, 0.20],
  6: [0.05, 0.55, 0.40],
  7: [0.00, 0.25, 0.75],
  8: [0.00, 0.05, 0.95],
  9: [0.00, 0.00, 1.00],
};

const LEVEL_NUM: Record<DimensionLevel, number> = { L: 1, M: 2, H: 3 };
const LEVELS: DimensionLevel[] = ['L', 'M', 'H'];
const DEFAULT_WEIGHT = 2;

// ─── Session building ───

/** Build initial session: 3 questions per dimension + drink gate */
export function buildSession(data: LocaleData): (Question | SpecialQuestion)[] {
  const selected: Question[] = [];
  for (const dim of DIMENSION_IDS) {
    const pool = data.questionBank[dim];
    if (pool) {
      selected.push(...selectRandom(pool, QUESTIONS_PER_DIM));
    }
  }
  const shuffled = shuffle(selected);

  const gate = data.specialQuestions.find(q => q.kind === 'drink_gate')!;
  const insertAt = Math.floor(Math.random() * (shuffled.length - 8)) + 8;
  shuffled.splice(insertAt, 0, gate as unknown as Question);

  return shuffled as (Question | SpecialQuestion)[];
}

/** Check consistency and generate extra questions for inconsistent dims */
export function buildExtraQuestions(
  answers: Record<string, number>,
  allSessionQuestions: (Question | SpecialQuestion)[],
  data: LocaleData,
): Question[] {
  const extras: Question[] = [];
  const usedIds = new Set(allSessionQuestions.map(q => q.id));

  for (const dim of DIMENSION_IDS) {
    // Gather scores for this dimension
    const dimScores: number[] = [];
    for (const q of allSessionQuestions) {
      if ('dim' in q && q.dim === dim && answers[q.id] !== undefined) {
        dimScores.push(answers[q.id]);
      }
    }

    if (dimScores.length < 2) continue;

    // Check consistency: max - min >= 2
    const maxS = Math.max(...dimScores);
    const minS = Math.min(...dimScores);
    if (maxS - minS >= 2) {
      // Find an unused question from this dim's pool
      const pool = data.questionBank[dim] || [];
      const available = pool.filter(q => !usedIds.has(q.id));
      if (available.length > 0) {
        const picked = selectRandom(available, 1)[0];
        extras.push(picked);
        usedIds.add(picked.id);
      }
    }
  }

  return shuffle(extras);
}

// ─── Scoring helpers ───

function parsePattern(pattern: string): DimensionLevel[] {
  return pattern.replace(/-/g, '').split('') as DimensionLevel[];
}

function parseWeights(weights?: string): number[] {
  if (!weights || weights.length !== 15) return DIMENSION_IDS.map(() => DEFAULT_WEIGHT);
  return weights.split('').map(c => {
    const n = parseInt(c, 10);
    return (n >= 1 && n <= 3) ? n : DEFAULT_WEIGHT;
  });
}

/** Get probability distribution for a raw score */
function getProbs(score: number): [number, number, number] {
  const clamped = Math.max(3, Math.min(9, score));
  return SCORE_PROB[clamped] || [0.33, 0.34, 0.33];
}

/** Compute expected distance between a probabilistic user dim and a fixed type level */
function expectedDimDistance(userProbs: [number, number, number], typeLevel: DimensionLevel): number {
  const tn = LEVEL_NUM[typeLevel];
  let dist = 0;
  for (let i = 0; i < 3; i++) {
    dist += userProbs[i] * Math.abs(LEVELS.map(l => LEVEL_NUM[l])[i] - tn);
  }
  return dist;
}

/** Best single level for display (argmax of probability) */
function bestLevel(probs: [number, number, number]): DimensionLevel {
  let maxIdx = 0;
  for (let i = 1; i < 3; i++) {
    if (probs[i] > probs[maxIdx]) maxIdx = i;
  }
  return LEVELS[maxIdx];
}

// ─── Main scoring ───

export function computeResult(
  answers: Record<string, number>,
  sessionQuestions: (Question | SpecialQuestion)[],
  data: LocaleData,
  dict: Dictionary,
): TestResult {
  // 1. Raw scores per dimension
  const rawScores = {} as Record<DimensionId, number>;
  for (const dim of DIMENSION_IDS) {
    rawScores[dim] = 0;
  }
  for (const q of sessionQuestions) {
    if ('dim' in q && answers[q.id] !== undefined) {
      rawScores[q.dim] += answers[q.id];
    }
  }

  // 2. Probability distributions per dimension
  const dimProbs = {} as Record<DimensionId, [number, number, number]>;
  for (const dim of DIMENSION_IDS) {
    dimProbs[dim] = getProbs(rawScores[dim]);
  }

  // 3. Best display levels
  const levels = {} as Record<DimensionId, DimensionLevel>;
  for (const dim of DIMENSION_IDS) {
    levels[dim] = bestLevel(dimProbs[dim]);
  }

  // 4. Weighted probabilistic matching against all types
  const ranked: RankedType[] = data.personalityTypes.map(type => {
    const pattern = parsePattern(type.pattern);
    const weights = parseWeights(type.weights);
    let totalWeightedDist = 0;
    let totalWeight = 0;
    let exact = 0;

    for (let i = 0; i < DIMENSION_IDS.length; i++) {
      const dim = DIMENSION_IDS[i];
      const w = weights[i];
      totalWeightedDist += w * expectedDimDistance(dimProbs[dim], pattern[i]);
      totalWeight += w;
      if (levels[dim] === pattern[i]) exact += 1;
    }

    // Normalize: max possible distance per dim is 2, so max total = totalWeight * 2
    const maxDist = totalWeight * 2;
    const similarity = Math.max(0, Math.round((1 - totalWeightedDist / maxDist) * 100));

    return { ...type, distance: totalWeightedDist, exact, similarity };
  }).sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (b.exact !== a.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });

  const bestNormal = ranked[0];

  // 5. Special type checks
  const drunkTriggered = answers['drink_gate_q2'] === 2;

  const s = dict.scoring;

  let finalType = bestNormal;
  let modeKicker = s.modeKickerPrimary;
  let badge = tpl(s.badgeNormal, { sim: bestNormal.similarity, exact: bestNormal.exact });
  let sub = s.subNormal;
  let special = false;
  let secondaryType: RankedType | null = null;

  if (drunkTriggered) {
    finalType = { ...data.drunkType, distance: 0, exact: 15, similarity: 100 };
    secondaryType = bestNormal;
    modeKicker = s.modeKickerHidden;
    badge = s.badgeDrunk;
    sub = s.subDrunk;
    special = true;
  } else if (bestNormal.similarity < 50) {
    finalType = { ...data.fallbackType, distance: bestNormal.distance, exact: bestNormal.exact, similarity: bestNormal.similarity };
    modeKicker = s.modeKickerFallback;
    badge = tpl(s.badgeFallback, { sim: bestNormal.similarity });
    sub = s.subFallback;
    special = true;
  }

  return {
    rawScores,
    levels,
    finalType,
    bestNormal,
    modeKicker,
    badge,
    sub,
    special,
    secondaryType,
  };
}

/** Reconstruct a partial result from shared data (for /r page) */
export function reconstructFromShare(
  typeCode: string,
  similarity: number,
  levels: Record<DimensionId, DimensionLevel>,
  exact: number,
  isSpecial: boolean,
  data: LocaleData,
) {
  let matchedType = data.personalityTypes.find(t => t.code === typeCode);
  if (!matchedType) {
    if (typeCode === 'DRUNK') matchedType = data.drunkType;
    else if (typeCode === 'HHHH') matchedType = data.fallbackType;
    else return null;
  }

  const rawScores = {} as Record<DimensionId, number>;
  for (const dim of DIMENSION_IDS) {
    rawScores[dim] = levels[dim] === 'L' ? 3 : levels[dim] === 'M' ? 6 : 8;
  }

  return {
    finalType: matchedType,
    similarity,
    exact,
    levels,
    rawScores,
    special: isSpecial,
  };
}
