'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Question, SpecialQuestion } from '@/lib/types';
import { SPECIAL_QUESTIONS } from '@/lib/data/questions';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';

interface TestScreenProps {
  questions: (Question | SpecialQuestion)[];
  onComplete: (answers: Record<string, number>, finalQuestions: (Question | SpecialQuestion)[]) => void;
  extraPrompt?: string;
}

export function TestScreen({ questions: initialQuestions, onComplete, extraPrompt }: TestScreenProps) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showPromptCard, setShowPromptCard] = useState(!!extraPrompt);

  useEffect(() => {
    setQuestions(initialQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setShowPromptCard(!!extraPrompt);
  }, [initialQuestions, extraPrompt]);

  const currentQuestion = questions[currentIndex];
  const totalAnswered = Object.keys(answers).filter(k =>
    questions.some(q => q.id === k)
  ).length;

  const goTo = useCallback((idx: number) => {
    setCurrentIndex(idx);
  }, []);

  const handleSelect = useCallback((value: number) => {
    if (!currentQuestion) return;

    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentQuestion.id === 'drink_gate_q1' && value === 3) {
      const trigger = SPECIAL_QUESTIONS.find(q => q.kind === 'drink_trigger');
      if (trigger && !questions.some(q => q.id === trigger.id)) {
        const updated = [...questions];
        updated.splice(currentIndex + 1, 0, trigger);
        setQuestions(updated);
      }
    }

    if (currentQuestion.id === 'drink_gate_q1' && value !== 3) {
      const triggerIdx = questions.findIndex(q => q.id === 'drink_gate_q2');
      if (triggerIdx !== -1) {
        const updated = [...questions];
        updated.splice(triggerIdx, 1);
        setQuestions(updated);
        delete newAnswers['drink_gate_q2'];
      }
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        goTo(currentIndex + 1);
      } else {
        onComplete(newAnswers, questions);
      }
    }, 400);
  }, [currentQuestion, currentIndex, questions, answers, onComplete, goTo]);

  if (!currentQuestion) return null;

  // Extra round interstitial card
  if (showPromptCard && extraPrompt) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative z-10">
        <motion.div
          className="w-full max-w-md glass rounded-2xl p-6 sm:p-8 text-center space-y-6"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        >
          {/* icon */}
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          <p className="text-base sm:text-lg font-medium text-foreground/85 leading-relaxed">
            {extraPrompt}
          </p>

          <p className="text-xs text-muted">
            还有 {questions.length} 道补充题
          </p>

          <motion.button
            onClick={() => setShowPromptCard(false)}
            className="px-10 py-3.5 rounded-full bg-accent text-white font-medium text-sm cursor-pointer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 28px var(--glow)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            开始吧
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      {/* top progress */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-divider px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-2xl mx-auto">
          <ProgressBar current={totalAnswered} total={questions.length} />
        </div>
      </div>

      {/* question area */}
      <div className="flex-1 flex items-center justify-center px-3 sm:px-6 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            index={currentIndex}
            total={questions.length}
            selected={answers[currentQuestion.id]}
            onSelect={handleSelect}
          />
        </AnimatePresence>
      </div>

      {/* bottom nav */}
      <div className="sticky bottom-0 z-20 bg-background/80 backdrop-blur-md border-t border-divider px-4 sm:px-6 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => currentIndex > 0 && goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="text-xs sm:text-sm text-muted hover:text-foreground/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            ← 上一题
          </button>

          <span className="text-xs text-muted/60 font-mono hidden sm:inline">
            按 A / B / C 快速选择
          </span>

          <button
            onClick={() => {
              if (answers[currentQuestion.id] !== undefined) {
                if (currentIndex < questions.length - 1) {
                  goTo(currentIndex + 1);
                } else {
                  onComplete(answers, questions);
                }
              }
            }}
            disabled={answers[currentQuestion.id] === undefined}
            className="text-xs sm:text-sm text-muted hover:text-foreground/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {currentIndex === questions.length - 1 ? '查看结果 →' : '下一题 →'}
          </button>
        </div>
      </div>
    </div>
  );
}
