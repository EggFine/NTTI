import type { DimensionId, DimensionLevel, Question, SpecialQuestion, RankedType, TestResult } from './types';
import { DIMENSION_IDS } from './data/dimensions';
import { QUESTION_BANK, SPECIAL_QUESTIONS } from './data/questions';
import { PERSONALITY_TYPES, DRUNK_TYPE, FALLBACK_TYPE } from './data/personalities';
import { shuffle, selectRandom } from './utils';

/** 从题库中为每个维度随机选2题，并混入特殊题 */
export function buildSession(): (Question | SpecialQuestion)[] {
  const selected: Question[] = [];
  for (const dim of DIMENSION_IDS) {
    const pool = QUESTION_BANK[dim];
    if (pool) {
      selected.push(...selectRandom(pool, 2));
    }
  }
  const shuffled = shuffle(selected);

  // 在随机位置插入饮酒门控题
  const gate = SPECIAL_QUESTIONS.find(q => q.kind === 'drink_gate')!;
  const insertAt = Math.floor(Math.random() * (shuffled.length - 5)) + 5;
  shuffled.splice(insertAt, 0, gate as unknown as Question);

  return shuffled as (Question | SpecialQuestion)[];
}

/** 维度总分 → 等级 */
export function scoreToLevel(score: number): DimensionLevel {
  if (score <= 3) return 'L';
  if (score === 4) return 'M';
  return 'H';
}

const LEVEL_NUM: Record<DimensionLevel, number> = { L: 1, M: 2, H: 3 };

function levelNum(l: DimensionLevel): number {
  return LEVEL_NUM[l];
}

function parsePattern(pattern: string): DimensionLevel[] {
  return pattern.replace(/-/g, '').split('') as DimensionLevel[];
}

/** 根据答案计算完整测试结果 */
export function computeResult(
  answers: Record<string, number>,
  sessionQuestions: (Question | SpecialQuestion)[],
): TestResult {
  // 1. 计算每维度得分
  const rawScores = {} as Record<DimensionId, number>;
  for (const dim of DIMENSION_IDS) {
    rawScores[dim] = 0;
  }
  for (const q of sessionQuestions) {
    if ('dim' in q && answers[q.id] !== undefined) {
      rawScores[q.dim] += answers[q.id];
    }
  }

  // 2. 得分 → 等级
  const levels = {} as Record<DimensionId, DimensionLevel>;
  for (const dim of DIMENSION_IDS) {
    levels[dim] = scoreToLevel(rawScores[dim]);
  }

  // 3. 构建用户模式向量
  const userVector = DIMENSION_IDS.map(dim => levelNum(levels[dim]));

  // 4. 与所有类型比对
  const ranked: RankedType[] = PERSONALITY_TYPES.map(type => {
    const vector = parsePattern(type.pattern).map(levelNum);
    let distance = 0;
    let exact = 0;
    for (let i = 0; i < vector.length; i++) {
      const diff = Math.abs(userVector[i] - vector[i]);
      distance += diff;
      if (diff === 0) exact += 1;
    }
    const similarity = Math.max(0, Math.round((1 - distance / 30) * 100));
    return { ...type, distance, exact, similarity };
  }).sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (b.exact !== a.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });

  const bestNormal = ranked[0];

  // 5. 特殊类型检查
  const drunkTriggered = answers['drink_gate_q2'] === 2;

  let finalType = bestNormal;
  let modeKicker = '你的主类型';
  let badge = `匹配度 ${bestNormal.similarity}% · 精准命中 ${bestNormal.exact}/15 维`;
  let sub = '维度命中度较高，当前结果可视为你的第一人格画像。';
  let special = false;
  let secondaryType: RankedType | null = null;

  if (drunkTriggered) {
    finalType = { ...DRUNK_TYPE, distance: 0, exact: 15, similarity: 100 };
    secondaryType = bestNormal;
    modeKicker = '隐藏人格已激活';
    badge = '匹配度 100% · 酒精异常因子已接管';
    sub = '乙醇亲和性过强，系统已直接跳过常规人格审判。';
    special = true;
  } else if (bestNormal.similarity < 50) {
    finalType = { ...FALLBACK_TYPE, distance: bestNormal.distance, exact: bestNormal.exact, similarity: bestNormal.similarity };
    modeKicker = '系统强制兜底';
    badge = `标准人格库最高匹配仅 ${bestNormal.similarity}%`;
    sub = '标准人格库对你的脑回路集体罢工了，于是系统把你强制分配给了 HHHH。';
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
) {
  // Find the matching personality type
  let matchedType = PERSONALITY_TYPES.find(t => t.code === typeCode);
  if (!matchedType) {
    if (typeCode === 'DRUNK') matchedType = DRUNK_TYPE;
    else if (typeCode === 'HHHH') matchedType = FALLBACK_TYPE;
    else return null;
  }

  // Reconstruct raw scores from levels (approximate: L→2, M→4, H→5)
  const rawScores = {} as Record<DimensionId, number>;
  for (const dim of DIMENSION_IDS) {
    rawScores[dim] = levels[dim] === 'L' ? 2 : levels[dim] === 'M' ? 4 : 5;
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
