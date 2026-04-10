'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Screen, Question, SpecialQuestion, TestResult } from '@/lib/types';
import { buildSession, computeResult } from '@/lib/scoring';
import { IntroScreen } from './IntroScreen';
import { TestScreen } from './TestScreen';
import { ResultScreen } from './ResultScreen';
import { ThemeToggle } from './ThemeToggle';

export function TestApp() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [sessionQuestions, setSessionQuestions] = useState<(Question | SpecialQuestion)[]>([]);
  const [result, setResult] = useState<TestResult | null>(null);

  const handleStart = useCallback(() => {
    const questions = buildSession();
    setSessionQuestions(questions);
    setResult(null);
    setScreen('test');
    window.scrollTo({ top: 0 });
  }, []);

  const handleComplete = useCallback((answers: Record<string, number>, finalQuestions: (Question | SpecialQuestion)[]) => {
    const r = computeResult(answers, finalQuestions);
    setResult(r);
    setScreen('result');
    window.scrollTo({ top: 0 });
  }, []);

  const handleRestart = useCallback(() => {
    setScreen('intro');
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
            <IntroScreen onStart={handleStart} />
          </motion.div>
        )}
        {screen === 'test' && (
          <motion.div
            key="test"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <TestScreen questions={sessionQuestions} onComplete={handleComplete} />
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
