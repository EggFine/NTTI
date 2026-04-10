// ─── Locale config ───

export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export function isValidLocale(lang: string): lang is Locale {
  return (locales as readonly string[]).includes(lang);
}

// ─── Dictionary type ───

export interface Dictionary {
  meta: { title: string; description: string };
  intro: {
    subtitle: string;
    tagline: string;
    models: string[];
    description: string;
    stats: { n: string; l: string }[];
    startTest: string;
    codex: string;
    shareToFriends: string;
    footer: string;
    credit: string;
    debugQuickTest: string;
  };
  test: {
    extraRemaining: string;
    letsGo: string;
    prevQuestion: string;
    nextQuestion: string;
    viewResult: string;
    keyboardHint: string;
  };
  unlock: { newPersonality: string; viewDetail: string };
  result: {
    matchPercent: string;
    collapse: string;
    expandFull: string;
    normalMatchOverridden: string;
    dimensionTitle: string;
    shareTitle: string;
    shareQR: string;
    hideQR: string;
    savePoster: string;
    qrHint: string;
    disclaimerSpecial: string;
    disclaimerNormal: string;
    restartTest: string;
    backHome: string;
    posterStyleTitle: string;
    posterLight: string;
    posterDark: string;
    posterGenerating: string;
    posterHint: string;
  };
  shared: {
    badge: string;
    hiddenType: string;
    primaryType: string;
    matchPercent: string;
    dimensionTitle: string;
    ctaText: string;
    ctaButton: string;
    errorIncomplete: string;
    errorInvalid: string;
    errorUnknownType: string;
    errorGoTest: string;
  };
  codex: {
    backHome: string;
    title: string;
    unlocked: string;
    total: string;
    randomView: string;
    clearData: string;
    locked: string;
    hint: string;
    confirmTitle: string;
    confirmDesc: string;
    cancel: string;
    confirmClear: string;
  };
  dimension: { clickHint: string; score: string };
  poster: {
    header: string;
    matchPercent: string;
    hitDimensions: string;
    scanFullResult: string;
    scanOrTest: string;
  };
  theme: { switchToLight: string; switchToDark: string };
  scoring: {
    extraPromptFirst: string;
    extraPromptRest: string[];
    modeKickerPrimary: string;
    modeKickerHidden: string;
    modeKickerFallback: string;
    modeKickerCodex: string;
    badgeNormal: string;
    badgeDrunk: string;
    badgeFallback: string;
    badgeCodex: string;
    subNormal: string;
    subDrunk: string;
    subFallback: string;
    subCodex: string;
  };
  lang: { switchLabel: string };
}

// ─── Dictionary loader ───

const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  zh: () => import('./locales/zh'),
  en: () => import('./locales/en'),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = await dictionaries[locale]();
  return mod.default;
}

/** Simple template string replacer: replaces {key} with values */
export function t(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    values[key] !== undefined ? String(values[key]) : `{${key}}`
  );
}
