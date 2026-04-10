'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import type { Question, SpecialQuestion } from '@/lib/types';
import { SPECIAL_QUESTIONS } from '@/lib/data/questions';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';

interface TestScreenProps {
  questions: (Question | SpecialQuestion)[];
  onComplete: (answers: Record<string, number>, finalQuestions: (Question | SpecialQuestion)[]) => void;
}

export function TestScreen({ questions: initialQuestions, onComplete }: TestScreenProps) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

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

    // drink gate logic
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

    // auto-advance
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        goTo(currentIndex + 1);
      } else {
        onComplete(newAnswers, questions);
      }
    }, 400);
  }, [currentQuestion, currentIndex, questions, answers, onComplete, goTo]);

  // keyboard shortcuts
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!currentQuestion) return;
      const opts = currentQuestion.options;
      const key = e.key.toUpperCase();
      const idx = 'ABCD'.indexOf(key);
      if (idx >= 0 && idx < opts.length && answers[currentQuestion.id] === undefined) {
        handleSelect(opts[idx].value);
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentQuestion, answers, handleSelect]);

  if (!currentQuestion) return null;

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
