'use client';

import type { Question, SpecialQuestion } from '@/lib/types';

interface QuestionCardProps {
  question: Question | SpecialQuestion;
  index: number;
  total: number;
  selected: number | undefined;
  onSelect: (value: number) => void;
  animClass: string;
}

const OPTION_CODES = ['A', 'B', 'C', 'D'];

export function QuestionCard({ question, index, total, selected, onSelect, animClass }: QuestionCardProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto ${animClass}`}>
      {/* 题号 */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex items-center justify-center h-7 px-3 rounded-full bg-accent/15 text-accent-light text-xs font-medium font-mono">
          {index + 1} / {total}
        </span>
        {'dim' in question && (
          <span className="text-xs text-muted">
            {question.dim}
          </span>
        )}
      </div>

      {/* 题目 */}
      <h2 className="text-lg md:text-xl font-medium leading-relaxed mb-8 text-foreground/90">
        {question.text}
      </h2>

      {/* 选项 */}
      <div className="flex flex-col gap-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={i}
              onClick={() => onSelect(opt.value)}
              className={`
                group relative flex items-center gap-4 w-full p-4 rounded-xl
                text-left transition-all duration-200 cursor-pointer
                ${isSelected
                  ? 'bg-accent/15 border-accent/40 ring-1 ring-accent/30'
                  : 'glass hover:bg-option-hover'
                }
                border border-transparent
              `}
            >
              {/* 选项编号 */}
              <span className={`
                flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg
                text-sm font-medium font-mono transition-colors duration-200
                ${isSelected
                  ? 'bg-accent/25 text-accent-light'
                  : 'bg-subtle text-muted group-hover:text-foreground/70'
                }
              `}>
                {OPTION_CODES[i] || String(i + 1)}
              </span>

              {/* 选项文本 */}
              <span className={`
                text-sm md:text-base leading-relaxed transition-colors duration-200
                ${isSelected ? 'text-foreground' : 'text-foreground/70 group-hover:text-foreground/90'}
              `}>
                {opt.label}
              </span>

              {/* 选中指示器 */}
              {isSelected && (
                <span className="absolute right-4 w-2 h-2 rounded-full bg-accent-light animate-scale-in" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
