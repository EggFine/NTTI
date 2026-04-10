'use client';

import { useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import type { Question, SpecialQuestion, QuestionOption } from '@/lib/types';
import { shuffle } from '@/lib/utils';

interface QuestionCardProps {
  question: Question | SpecialQuestion;
  index: number;
  total: number;
  selected: number | undefined;
  onSelect: (value: number) => void;
}

const OPTION_CODES = ['A', 'B', 'C', 'D'];

export function QuestionCard({ question, index, total, selected, onSelect }: QuestionCardProps) {
  const shuffledOptions = useMemo<QuestionOption[]>(
    () => shuffle(question.options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id],
  );

  // Keyboard shortcuts — uses shuffled order so A/B/C matches display
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const key = e.key.toUpperCase();
      const idx = 'ABCD'.indexOf(key);
      if (idx >= 0 && idx < shuffledOptions.length && selected === undefined) {
        onSelect(shuffledOptions[idx].value);
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [shuffledOptions, selected, onSelect]);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto glass rounded-2xl p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0, x: 50, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -50, scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center justify-center h-7 px-3 rounded-full bg-accent/10 text-accent text-xs font-medium font-mono">
          {index + 1} / {total}
        </span>
      </div>

      <h2 className="text-base md:text-lg font-medium leading-relaxed mb-7 text-foreground/85">
        {question.text}
      </h2>

      <div className="flex flex-col gap-2.5">
        {shuffledOptions.map((opt, i) => {
          const isSelected = selected === opt.value;
          return (
            <motion.button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`
                group relative flex items-center gap-3.5 w-full py-3.5 px-4 rounded-xl
                text-left cursor-pointer border transition-colors duration-150
                ${isSelected
                  ? 'bg-selected-bg border-selected-border'
                  : 'bg-subtle/50 border-transparent hover:bg-option-hover hover:border-card-border'
                }
              `}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <span className={`
                flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg
                text-xs font-semibold font-mono transition-colors duration-150
                ${isSelected
                  ? 'bg-accent/20 text-accent'
                  : 'bg-background/60 text-muted group-hover:text-foreground/60'
                }
              `}>
                {OPTION_CODES[i] || String(i + 1)}
              </span>

              <span className={`
                text-sm leading-relaxed transition-colors duration-150 flex-1
                ${isSelected ? 'text-foreground' : 'text-foreground/65 group-hover:text-foreground/85'}
              `}>
                {opt.label}
              </span>

              {isSelected && (
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-accent-light flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
