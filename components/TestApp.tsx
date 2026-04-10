'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Screen, Question, SpecialQuestion, TestResult } from '@/lib/types';
import { buildSession, buildExtraQuestions, computeResult, EXTRA_ROUND_PROMPTS } from '@/lib/scoring';
import { selectRandom } from '@/lib/utils';
import { addUnlocked } from '@/lib/codex';
import { IntroScreen } from './IntroScreen';
import { TestScreen } from './TestScreen';
import { ResultScreen } from './ResultScreen';
import { ThemeToggle } from './ThemeToggle';

type AppScreen = Screen | 'unlock';

export function TestApp() {
  const [screen, setScreen] = useState<AppScreen>('intro');
  const [allQuestions, setAllQuestions] = useState<(Question | SpecialQuestion)[]>([]);
  const [currentBatchQuestions, setCurrentBatchQuestions] = useState<(Question | SpecialQuestion)[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<TestResult | null>(null);
  const [extraRound, setExtraRound] = useState(0);
  const [extraPrompt, setExtraPrompt] = useState('');
  const [newUnlock, setNewUnlock] = useState(false);

  const handleStart = useCallback(() => {
    const questions = buildSession();
    setAllQuestions(questions);
    setCurrentBatchQuestions(questions);
    setAnswers({});
    setResult(null);
    setNewUnlock(false);
    setExtraRound(0);
    setExtraPrompt('');
    setScreen('test');
    window.scrollTo({ top: 0 });
  }, []);

  const handleBatchComplete = useCallback((batchAnswers: Record<string, number>, batchQuestions: (Question | SpecialQuestion)[]) => {
    const mergedAnswers = { ...answers, ...batchAnswers };
    setAnswers(mergedAnswers);

    const mergedQuestions = [...allQuestions];
    for (const q of batchQuestions) {
      if (!mergedQuestions.some(existing => existing.id === q.id)) {
        mergedQuestions.push(q);
      }
    }
    setAllQuestions(mergedQuestions);

    const extras = buildExtraQuestions(mergedAnswers, mergedQuestions);

    if (extras.length > 0) {
      const nextRound = extraRound + 1;
      setExtraRound(nextRound);
      if (nextRound === 1) {
        setExtraPrompt(EXTRA_ROUND_PROMPTS.first);
      } else {
        setExtraPrompt(selectRandom(EXTRA_ROUND_PROMPTS.rest, 1)[0]);
      }
      setCurrentBatchQuestions(extras);
      setScreen('test');
      window.scrollTo({ top: 0 });
    } else {
      const r = computeResult(mergedAnswers, mergedQuestions);
      setResult(r);

      // Check if this is a new unlock
      const isNew = addUnlocked(r.finalType.code);
      setNewUnlock(isNew);

      if (isNew) {
        setScreen('unlock');
      } else {
        setScreen('result');
      }
      window.scrollTo({ top: 0 });
    }
  }, [answers, allQuestions, extraRound]);

  const handleQuickTest = useCallback(() => {
    // Build session, auto-fill random answers, compute result — full pipeline
    const questions = buildSession();
    const autoAnswers: Record<string, number> = {};
    for (const q of questions) {
      const opts = q.options;
      autoAnswers[q.id] = opts[Math.floor(Math.random() * opts.length)].value;
    }
    const r = computeResult(autoAnswers, questions);
    setResult(r);
    setAllQuestions(questions);
    setAnswers(autoAnswers);

    const isNew = addUnlocked(r.finalType.code);
    setNewUnlock(isNew);
    setScreen(isNew ? 'unlock' : 'result');
    window.scrollTo({ top: 0 });
  }, []);

  const handleRestart = useCallback(() => {
    setScreen('intro');
    window.scrollTo({ top: 0 });
  }, []);

  const handleUnlockContinue = useCallback(() => {
    setScreen('result');
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <AnimatePresence mode="wait">
        {screen === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <IntroScreen onStart={handleStart} onQuickTest={handleQuickTest} />
          </motion.div>
        )}
        {screen === 'test' && (
          <motion.div
            key={`test-${extraRound}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <TestScreen
              questions={currentBatchQuestions}
              onComplete={handleBatchComplete}
              extraPrompt={extraPrompt}
            />
          </motion.div>
        )}
        {screen === 'unlock' && result && (
          <motion.div
            key="unlock"
            className="min-h-screen flex items-center justify-center px-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {/* glow burst */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6] }}
              transition={{ duration: 1.5, times: [0, 0.3, 1] }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-warm/8 blur-[60px]" />
            </motion.div>

            <motion.div
              className="relative glass rounded-2xl p-8 sm:p-10 max-w-sm w-full text-center space-y-5"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 250, damping: 22, delay: 0.15 }}
            >
              {/* star icon */}
              <motion.div
                className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto"
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
              >
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs text-accent font-medium mb-2">解锁新人格！</p>
                <h2 className="text-3xl sm:text-4xl font-display italic gradient-text py-1 px-2 leading-tight">
                  {result.finalType.code}
                </h2>
                <p className="text-base font-medium text-foreground/75 mt-1">{result.finalType.cn}</p>
                <p className="text-sm text-foreground/45 italic mt-2">
                  &ldquo;{result.finalType.intro}&rdquo;
                </p>
              </motion.div>

              <motion.button
                onClick={handleUnlockContinue}
                className="px-10 py-3.5 rounded-full bg-accent text-white font-medium text-sm cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 28px var(--glow)' }}
                whileTap={{ scale: 0.97 }}
              >
                查看详细结果
              </motion.button>
            </motion.div>
          </motion.div>
        )}
        {screen === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <ResultScreen result={result} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
