export type DimensionId =
  | 'S1' | 'S2' | 'S3'
  | 'E1' | 'E2' | 'E3'
  | 'A1' | 'A2' | 'A3'
  | 'Ac1' | 'Ac2' | 'Ac3'
  | 'So1' | 'So2' | 'So3';

export type DimensionLevel = 'L' | 'M' | 'H';

export interface QuestionOption {
  label: string;
  value: number; // 1, 2, or 3
}

export interface Question {
  id: string;
  dim: DimensionId;
  text: string;
  options: QuestionOption[];
}

export interface SpecialQuestion {
  id: string;
  kind: 'drink_gate' | 'drink_trigger';
  text: string;
  options: QuestionOption[];
}

export interface DimensionInfo {
  id: DimensionId;
  name: string;
  model: string;
  levels: Record<DimensionLevel, string>;
}

export interface PersonalityType {
  code: string;
  cn: string;
  intro: string;
  desc: string;
  pattern: string; // e.g. "HHH-HMH-MHH-HHH-MHM"
}

export interface TestResult {
  rawScores: Record<DimensionId, number>;
  levels: Record<DimensionId, DimensionLevel>;
  finalType: PersonalityType;
  bestNormal: RankedType;
  modeKicker: string;
  badge: string;
  sub: string;
  special: boolean;
  secondaryType: RankedType | null;
}

export interface RankedType extends PersonalityType {
  distance: number;
  exact: number;
  similarity: number;
}

export type Screen = 'intro' | 'test' | 'result';
