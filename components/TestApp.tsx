'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Screen, Question, SpecialQuestion, TestResult } from '@/lib/types';
import { buildSession, buildExtraQuestions, computeResult, EXTRA_ROUND_PROMPTS } from '@/lib/scoring';
import { selectRandom, shuffle } from '@/lib/utils';
import { PERSONALITY_TYPES } from '@/lib/data/personalities';
import { DIMENSION_IDS } from '@/lib/data/dimensions';
import { IntroScreen } from './IntroScreen';
import { TestScreen } from './TestScreen';
import { ResultScreen } from './ResultScreen';
import { ThemeToggle } from './ThemeToggle';

export function TestApp() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [allQuestions, setAllQuestions] = useState<(Question | SpecialQuestion)[]>([]);
  const [currentBatchQuestions, setCurrentBatchQuestions] = useState<(Question | SpecialQuestion)[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<TestResult | null>(null);
  const [extraRound, setExtraRound] = useState(0);
  const [extraPrompt, setExtraPrompt] = useState('');

  const handleStart = useCallback(() => {
    const questions = buildSession();
    setAllQuestions(questions);
    setCurrentBatchQuestions(questions);
    setAnswers({});
    setResult(null);
    setExtraRound(0);
    setExtraPrompt('');
    setScreen('test');
    window.scrollTo({ top: 0 });
  }, []);

  const handleBatchComplete = useCallback((batchAnswers: Record<string, number>, batchQuestions: (Question | SpecialQuestion)[]) => {
    // Merge answers
    const mergedAnswers = { ...answers, ...batchAnswers };
    setAnswers(mergedAnswers);

    // Merge questions list
    const mergedQuestions = [...allQuestions];
    for (const q of batchQuestions) {
      if (!mergedQuestions.some(existing => existing.id === q.id)) {
        mergedQuestions.push(q);
      }
    }
    setAllQuestions(mergedQuestions);

    // Check consistency — do we need extra questions?
    const extras = buildExtraQuestions(mergedAnswers, mergedQuestions);

    if (extras.length > 0) {
      // Launch extra round
      const nextRound = extraRound + 1;
      setExtraRound(nextRound);

      if (nextRound === 1) {
        setExtraPrompt(EXTRA_ROUND_PROMPTS.first);
      } else {
        const pool = EXTRA_ROUND_PROMPTS.rest;
        setExtraPrompt(selectRandom(pool, 1)[0]);
      }

      setCurrentBatchQuestions(extras);
      setScreen('test');
      window.scrollTo({ top: 0 });
    } else {
      // All consistent — compute final result
      const r = computeResult(mergedAnswers, mergedQuestions);
      setResult(r);
      setScreen('result');
      window.scrollTo({ top: 0 });
    }
  }, [answers, allQuestions, extraRound]);

  const handleRestart = useCallback(() => {
    setScreen('intro');
    window.scrollTo({ top: 0 });
  }, []);

  const handleDebug = useCallback(() => {
    // Pick a random personality type and generate a fake result that matches it
    const type = shuffle([...PERSONALITY_TYPES])[0];
    const pattern = type.pattern.replace(/-/g, '').split('') as ('L' | 'M' | 'H')[];
    const scoreMap = { L: 3, M: 6, H: 8 };
    const rawScores = {} as Record<string, number>;
    const levels = {} as Record<string, string>;
    DIMENSION_IDS.forEach((dim, i) => {
      levels[dim] = pattern[i];
      rawScores[dim] = scoreMap[pattern[i]];
    });
    const fakeResult: TestResult = {
      rawScores: rawScores as TestResult['rawScores'],
      levels: levels as TestResult['levels'],
      finalType: type,
      bestNormal: { ...type, distance: 0, exact: 15, similarity: 95 },
      modeKicker: '随机预览',
      badge: `预览模式 · ${type.code}`,
      sub: '这是随机生成的结果预览，不代表真实测试。',
      special: false,
      secondaryType: null,
    };
    setResult(fakeResult);
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
            <IntroScreen onStart={handleStart} onDebug={handleDebug} />
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
