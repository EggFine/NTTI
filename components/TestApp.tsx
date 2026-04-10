'use client';

import { useState, useCallback } from 'react';
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
  const [fadeOut, setFadeOut] = useState(false);

  const transition = useCallback((next: Screen, setup?: () => void) => {
    setFadeOut(true);
    setTimeout(() => {
      setup?.();
      setScreen(next);
      setFadeOut(false);
      window.scrollTo({ top: 0 });
    }, 300);
  }, []);

  const handleStart = useCallback(() => {
    transition('test', () => {
      const questions = buildSession();
      setSessionQuestions(questions);
      setResult(null);
    });
  }, [transition]);

  const handleComplete = useCallback((answers: Record<string, number>, finalQuestions: (Question | SpecialQuestion)[]) => {
    transition('result', () => {
      const r = computeResult(answers, finalQuestions);
      setResult(r);
    });
  }, [transition]);

  const handleRestart = useCallback(() => {
    transition('intro');
  }, [transition]);

  return (
    <>
      {/* 右上角主题切换 */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className={`transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        {screen === 'intro' && <IntroScreen onStart={handleStart} />}
        {screen === 'test' && <TestScreen questions={sessionQuestions} onComplete={handleComplete} />}
        {screen === 'result' && result && <ResultScreen result={result} onRestart={handleRestart} />}
      </div>
    </>
  );
}
