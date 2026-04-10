'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import type { PersonalityType, TestResult } from '@/lib/types';
import { DIMENSION_IDS } from '@/lib/data/dimensions';
import { getUnlocked, clearUnlocked } from '@/lib/codex';
import { shuffle } from '@/lib/utils';
import { useI18n } from '@/lib/i18n/context';
import { t as tpl } from '@/lib/i18n';
import { getLocaleData } from '@/lib/data/locale';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ResultScreen } from './ResultScreen';

export function CodexView() {
  const { locale, dict } = useI18n();
  const data = getLocaleData(locale);

  const ALL_TYPES: PersonalityType[] = [...data.personalityTypes, data.drunkType, data.fallbackType];

  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const [viewing, setViewing] = useState<TestResult | null>(null);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  useEffect(() => {
    setUnlocked(getUnlocked());
    setMounted(true);
  }, []);

  const isDebugMode = mounted && window.location.search.includes('debug');

  function buildFakeResult(type: PersonalityType): TestResult {
    const pattern = (type.pattern || 'MMM-MMM-MMM-MMM-MMM').replace(/-/g, '').split('') as ('L' | 'M' | 'H')[];
    const scoreMap = { L: 3, M: 6, H: 8 };
    const rawScores = {} as Record<string, number>;
    const levels = {} as Record<string, string>;
    DIMENSION_IDS.forEach((dim, i) => {
      const lvl = pattern[i] || 'M';
      levels[dim] = lvl;
      rawScores[dim] = scoreMap[lvl];
    });
    return {
      rawScores: rawScores as TestResult['rawScores'],
      levels: levels as TestResult['levels'],
      finalType: type,
      bestNormal: { ...type, distance: 0, exact: 15, similarity: 95 },
      modeKicker: dict.scoring.modeKickerCodex,
      badge: tpl(dict.scoring.badgeCodex, { code: type.code }),
      sub: dict.scoring.subCodex,
      special: false,
      secondaryType: null,
    };
  }

  const handleView = useCallback((type: PersonalityType) => {
    setViewing(buildFakeResult(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dict]);

  const handleRandom = useCallback(() => {
    const unlockedTypes = ALL_TYPES.filter(t => unlocked.includes(t.code));
    if (unlockedTypes.length === 0) return;
    const pick = shuffle(unlockedTypes)[0];
    setViewing(buildFakeResult(pick));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlocked, dict]);

  const handleClear = useCallback(() => {
    clearUnlocked();
    setUnlocked([]);
    setShowConfirmClear(false);
  }, []);

  // Viewing a personality detail
  if (viewing) {
    return (
      <>
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <ResultScreen
          result={viewing}
          onRestart={() => setViewing(null)}
          hideShare={!isDebugMode}
        />
      </>
    );
  }

  const unlockedCount = unlocked.length;
  const totalCount = ALL_TYPES.length;

  return (
    <div className="min-h-screen relative z-10">
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-5 py-10 sm:py-14">
        {/* header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <Link href={`/${locale}`} className="text-xs text-muted hover:text-foreground/70 transition-colors">
            {dict.codex.backHome}
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground/90 mt-4">
            {dict.codex.title}
          </h1>
          <p className="text-sm text-muted mt-2">
            {dict.codex.unlocked} <span className="text-accent font-mono font-bold">{unlockedCount}</span> / {totalCount} {dict.codex.total}
          </p>

          {/* progress bar */}
          <div className="w-full max-w-xs mx-auto mt-3 h-1.5 bg-bar-track rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-dim via-accent to-accent-light"
              initial={{ width: 0 }}
              animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
          </div>
        </motion.div>

        {/* action buttons */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={handleRandom}
            disabled={unlockedCount === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-foreground/70 cursor-pointer hover:text-foreground/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            {dict.codex.randomView}
          </button>

          <button
            onClick={() => setShowConfirmClear(true)}
            disabled={unlockedCount === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-muted cursor-pointer hover:text-red-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            {dict.codex.clearData}
          </button>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
          {ALL_TYPES.map((type, i) => {
            const isOpen = unlocked.includes(type.code);
            return (
              <motion.button
                key={type.code}
                onClick={() => isOpen && handleView(type)}
                disabled={!isOpen}
                className={`
                  glass rounded-xl p-3 sm:p-4 text-center cursor-pointer
                  border transition-all duration-150
                  ${isOpen
                    ? 'border-transparent hover:border-accent/30'
                    : 'border-transparent opacity-50 cursor-not-allowed grayscale'
                  }
                `}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.015, type: 'spring', stiffness: 350, damping: 25 }}
                whileHover={isOpen ? { y: -2, scale: 1.02 } : {}}
                whileTap={isOpen ? { scale: 0.97 } : {}}
              >
                {isOpen ? (
                  <>
                    <div className="text-base sm:text-lg font-bold font-display italic gradient-text leading-tight">
                      {type.code}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted mt-1 truncate">{type.cn}</div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl sm:text-3xl font-bold text-muted/30">?</div>
                    <div className="text-[10px] text-muted/30 mt-1">{dict.codex.locked}</div>
                  </>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* hint */}
        <p className="text-xs text-muted/70 text-center mt-6">
          {dict.codex.hint}
        </p>
      </div>

      {/* confirm clear modal */}
      <AnimatePresence>
        {showConfirmClear && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowConfirmClear(false)} />
            <motion.div
              className="relative glass rounded-2xl p-6 max-w-xs w-full text-center space-y-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            >
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-sm text-foreground/80">{dict.codex.confirmTitle}</p>
              <p className="text-xs text-muted">{tpl(dict.codex.confirmDesc, { n: unlockedCount })}</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowConfirmClear(false)}
                  className="px-5 py-2 rounded-full glass text-sm text-foreground/70 cursor-pointer hover:text-foreground/90 transition-colors"
                >
                  {dict.codex.cancel}
                </button>
                <button
                  onClick={handleClear}
                  className="px-5 py-2 rounded-full bg-red-500 text-white text-sm font-medium cursor-pointer hover:bg-red-600 transition-colors"
                >
                  {dict.codex.confirmClear}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
