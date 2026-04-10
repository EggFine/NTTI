'use client';

import { useState } from 'react';
import type { DimensionId, DimensionLevel } from '@/lib/types';
import { MODELS, DIMENSION_MAP } from '@/lib/data/dimensions';

interface DimensionChartProps {
  levels: Record<DimensionId, DimensionLevel>;
  rawScores: Record<DimensionId, number>;
}

const LEVEL_BG: Record<DimensionLevel, string> = {
  L: 'bg-sky-500/12 dark:bg-sky-400/10',
  M: 'bg-warm/12 dark:bg-warm/10',
  H: 'bg-accent/12 dark:bg-accent/10',
};

const LEVEL_TEXT: Record<DimensionLevel, string> = {
  L: 'text-sky-600 dark:text-sky-400',
  M: 'text-warm dark:text-warm-light',
  H: 'text-accent-dim dark:text-accent-light',
};

const LEVEL_BAR_W: Record<DimensionLevel, string> = {
  L: 'w-[30%]',
  M: 'w-[60%]',
  H: 'w-[92%]',
};

const LEVEL_BAR_COLOR: Record<DimensionLevel, string> = {
  L: 'bg-sky-500/50 dark:bg-sky-400/40',
  M: 'bg-warm/50 dark:bg-warm/40',
  H: 'bg-accent/60 dark:bg-accent/40',
};

// Short labels for grid cells
const SHORT_NAMES: Record<DimensionId, string> = {
  S1: '自尊', S2: '清晰度', S3: '价值观',
  E1: '安全感', E2: '投入度', E3: '边界',
  A1: '世界观', A2: '规则', A3: '意义感',
  Ac1: '动机', Ac2: '决策', Ac3: '执行',
  So1: '主动性', So2: '边界感', So3: '真实度',
};

export function DimensionChart({ levels, rawScores }: DimensionChartProps) {
  const [expandedDim, setExpandedDim] = useState<DimensionId | null>(null);

  return (
    <div className="space-y-4">
      {/* ── Compact 5-column grid ── */}
      <div className="grid grid-cols-5 gap-2 md:gap-3">
        {/* Column headers */}
        {MODELS.map(model => (
          <div key={model.id} className="text-center mb-1">
            <span className="text-[10px] md:text-xs font-medium text-muted tracking-wide">
              {model.name.replace('模型', '')}
            </span>
          </div>
        ))}

        {/* 3 rows × 5 columns = 15 dimension cells */}
        {[0, 1, 2].map(row =>
          MODELS.map(model => {
            const dimId = model.dimensions[row];
            const dim = DIMENSION_MAP[dimId];
            const level = levels[dimId];
            const score = rawScores[dimId];
            const isExpanded = expandedDim === dimId;

            return (
              <button
                key={dimId}
                type="button"
                onClick={() => setExpandedDim(isExpanded ? null : dimId)}
                className={`
                  dim-cell relative glass rounded-xl p-2.5 md:p-3
                  transition-all duration-200 cursor-pointer text-left
                  hover:border-accent/30
                  ${isExpanded ? 'ring-1 ring-accent/30 border-accent/20' : ''}
                `}
              >
                {/* Dim short name */}
                <div className="text-[10px] md:text-xs text-muted mb-1.5 truncate">
                  {SHORT_NAMES[dimId]}
                </div>

                {/* Level badge */}
                <div className={`
                  inline-flex items-center justify-center
                  w-7 h-7 md:w-8 md:h-8 rounded-lg
                  text-xs md:text-sm font-bold
                  ${LEVEL_BG[level]} ${LEVEL_TEXT[level]}
                `}>
                  {level}
                </div>

                {/* Mini bar */}
                <div className="w-full h-1 bg-bar-track rounded-full mt-2 overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-700 ${LEVEL_BAR_W[level]} ${LEVEL_BAR_COLOR[level]}`} />
                </div>

                {/* Score */}
                <div className="text-[9px] text-muted/60 font-mono mt-1 text-right">
                  {score}分
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* ── Expanded explanation panel ── */}
      {expandedDim && (() => {
        const dim = DIMENSION_MAP[expandedDim];
        const level = levels[expandedDim];
        return (
          <div className="glass rounded-xl p-4 animate-scale-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground/80">
                {dim.name}
              </span>
              <span className={`
                inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-bold
                ${LEVEL_BG[level]} ${LEVEL_TEXT[level]}
              `}>
                {level} · {rawScores[expandedDim]}分
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {dim.levels[level]}
            </p>
          </div>
        );
      })()}

      <p className="text-[10px] text-muted/40 text-center">
        点击维度格子查看解读
      </p>
    </div>
  );
}
