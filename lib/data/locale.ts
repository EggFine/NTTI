import type { Locale } from '../i18n';
import type { Question, SpecialQuestion, PersonalityType, DimensionInfo } from '../types';

// Chinese data (original files)
import { QUESTION_BANK as QUESTION_BANK_ZH, SPECIAL_QUESTIONS as SPECIAL_QUESTIONS_ZH } from './questions';
import { PERSONALITY_TYPES as PERSONALITY_TYPES_ZH, DRUNK_TYPE as DRUNK_TYPE_ZH, FALLBACK_TYPE as FALLBACK_TYPE_ZH } from './personalities';
import { DIMENSIONS as DIMENSIONS_ZH, MODELS as MODELS_ZH, DIMENSION_MAP as DIMENSION_MAP_ZH } from './dimensions';

// English data
import { QUESTION_BANK as QUESTION_BANK_EN, SPECIAL_QUESTIONS as SPECIAL_QUESTIONS_EN } from './questions.en';
import { PERSONALITY_TYPES as PERSONALITY_TYPES_EN, DRUNK_TYPE as DRUNK_TYPE_EN, FALLBACK_TYPE as FALLBACK_TYPE_EN } from './personalities.en';
import { DIMENSIONS as DIMENSIONS_EN, MODELS as MODELS_EN, DIMENSION_MAP as DIMENSION_MAP_EN } from './dimensions.en';

import type { DimensionId } from '../types';

export interface LocaleData {
  questionBank: Record<string, Question[]>;
  specialQuestions: SpecialQuestion[];
  personalityTypes: PersonalityType[];
  drunkType: PersonalityType;
  fallbackType: PersonalityType;
  dimensions: DimensionInfo[];
  models: { id: string; name: string; dimensions: DimensionId[] }[];
  dimensionMap: Record<DimensionId, DimensionInfo>;
}

const dataByLocale: Record<Locale, LocaleData> = {
  zh: {
    questionBank: QUESTION_BANK_ZH,
    specialQuestions: SPECIAL_QUESTIONS_ZH,
    personalityTypes: PERSONALITY_TYPES_ZH,
    drunkType: DRUNK_TYPE_ZH,
    fallbackType: FALLBACK_TYPE_ZH,
    dimensions: DIMENSIONS_ZH,
    models: MODELS_ZH,
    dimensionMap: DIMENSION_MAP_ZH,
  },
  en: {
    questionBank: QUESTION_BANK_EN,
    specialQuestions: SPECIAL_QUESTIONS_EN,
    personalityTypes: PERSONALITY_TYPES_EN,
    drunkType: DRUNK_TYPE_EN,
    fallbackType: FALLBACK_TYPE_EN,
    dimensions: DIMENSIONS_EN,
    models: MODELS_EN,
    dimensionMap: DIMENSION_MAP_EN,
  },
};

export function getLocaleData(locale: Locale): LocaleData {
  return dataByLocale[locale];
}
