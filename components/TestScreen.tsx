'use client';

import { useState, useCallback, useEffect } from 'react';
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
  const [animClass, setAnimClass] = useState('animate-slide-in');

  const currentQuestion = questions[currentIndex];
  const totalAnswered = Object.keys(answers).filter(k =>
    questions.some(q => q.id === k)
  ).length;

  const handleSelect = useCallback((value: number) => {
    if (!currentQuestion) return;

    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    // 饮酒门控逻辑：选了"饮酒"则插入后续题
    if (currentQuestion.id === 'drink_gate_q1' && value === 3) {
      const trigger = SPECIAL_QUESTIONS.find(q => q.kind === 'drink_trigger');
      if (trigger && !questions.some(q => q.id === trigger.id)) {
        const updated = [...questions];
        updated.splice(currentIndex + 1, 0, trigger);
        setQuestions(updated);
      }
    }

    // 如果选了非"饮酒"，移除已插入的后续题
    if (currentQuestion.id === 'drink_gate_q1' && value !== 3) {
      const triggerIdx = questions.findIndex(q => q.id === 'drink_gate_q2');
      if (triggerIdx !== -1) {
        const updated = [...questions];
        updated.splice(triggerIdx, 1);
        setQuestions(updated);
        delete newAnswers['drink_gate_q2'];
      }
    }

    // 自动切换到下一题（延迟动画）
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setAnimClass('animate-slide-out');
        setTimeout(() => {
          setCurrentIndex(prev => {
            // 重新计算，因为 questions 可能已变
            return prev + 1;
          });
          setAnimClass('animate-slide-in');
        }, 280);
      } else {
        // 最后一题已作答，提交
        onComplete(newAnswers, questions);
      }
    }, 350);
  }, [currentQuestion, currentIndex, questions, answers, onComplete]);

  // 键盘快捷键
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
      {/* 顶部进度条 */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-divider px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <ProgressBar current={totalAnswered} total={questions.length} />
        </div>
      </div>

      {/* 问题区域 */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          index={currentIndex}
          total={questions.length}
          selected={answers[currentQuestion.id]}
          onSelect={handleSelect}
          animClass={animClass}
        />
      </div>

      {/* 底部导航 */}
      <div className="sticky bottom-0 z-20 bg-background/80 backdrop-blur-md border-t border-divider px-6 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => {
              if (currentIndex > 0) {
                setAnimClass('');
                setCurrentIndex(currentIndex - 1);
                setTimeout(() => setAnimClass('animate-slide-in'), 10);
              }
            }}
            disabled={currentIndex === 0}
            className="text-sm text-muted hover:text-foreground/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            ← 上一题
          </button>

          <span className="text-xs text-muted/50 font-mono">
            按 A / B / C 快速选择
          </span>

          <button
            onClick={() => {
              if (answers[currentQuestion.id] !== undefined && currentIndex < questions.length - 1) {
                setAnimClass('animate-slide-out');
                setTimeout(() => {
                  setCurrentIndex(currentIndex + 1);
                  setAnimClass('animate-slide-in');
                }, 280);
              } else if (answers[currentQuestion.id] !== undefined && currentIndex === questions.length - 1) {
                onComplete(answers, questions);
              }
            }}
            disabled={answers[currentQuestion.id] === undefined}
            className="text-sm text-muted hover:text-foreground/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {currentIndex === questions.length - 1 ? '查看结果 →' : '下一题 →'}
          </button>
        </div>
      </div>
    </div>
  );
}
