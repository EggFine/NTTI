'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

const LEVEL_BAR_COLOR: Record<DimensionLevel, string> = {
  L: 'bg-sky-500/50 dark:bg-sky-400/40',
  M: 'bg-warm/50 dark:bg-warm/40',
  H: 'bg-accent/60 dark:bg-accent/40',
};

const SHORT_NAMES: Record<DimensionId, string> = {
  S1: '自尊', S2: '清晰度', S3: '价值观',
  E1: '安全感', E2: '投入度', E3: '边界',
  A1: '世界观', A2: '规则', A3: '意义感',
  Ac1: '动机', Ac2: '决策', Ac3: '执行',
  So1: '主动性', So2: '边界感', So3: '真实度',
};

export function DimensionChart({ levels, rawScores }: DimensionChartProps) {
  const [expandedDim, setExpandedDim] = useState<DimensionId | null>(null);

  let cellIndex = 0;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-5 gap-2">
        {/* column headers */}
        {MODELS.map((model, mi) => (
          <motion.div
            key={model.id}
            className="text-center py-1.5"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: mi * 0.04, type: 'spring', stiffness: 300, damping: 25 }}
          >
            <span className="text-[10px] md:text-xs font-medium text-muted">
              {model.name.replace('模型', '')}
            </span>
          </motion.div>
        ))}

        {/* 3 rows x 5 columns */}
        {[0, 1, 2].map(row =>
          MODELS.map(model => {
            const dimId = model.dimensions[row];
            const level = levels[dimId];
            const score = rawScores[dimId];
            const isExpanded = expandedDim === dimId;
            const idx = cellIndex++;

            return (
              <motion.button
                key={dimId}
                type="button"
                onClick={() => setExpandedDim(isExpanded ? null : dimId)}
                className={`
                  glass rounded-xl p-2.5 cursor-pointer text-left
                  border transition-colors duration-150 hover:border-accent/25
                  ${isExpanded ? 'ring-1 ring-accent/25 border-accent/15' : 'border-transparent'}
                `}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.06 + idx * 0.03, type: 'spring', stiffness: 350, damping: 25 }}
                whileHover={{ y: -1.5 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* name */}
                <div className="text-[10px] text-muted mb-1.5 truncate leading-none">
                  {SHORT_NAMES[dimId]}
                </div>

                {/* level + score inline */}
                <div className="flex items-center justify-between">
                  <span className={`
                    inline-flex items-center justify-center w-7 h-7 rounded-lg
                    text-xs font-bold ${LEVEL_BG[level]} ${LEVEL_TEXT[level]}
                  `}>
                    {level}
                  </span>
                  <span className="text-[10px] text-muted/70 font-mono">{score}</span>
                </div>

                {/* bar */}
                <div className="w-full h-[3px] bg-bar-track rounded-full mt-2 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${LEVEL_BAR_COLOR[level]}`}
                    initial={{ width: 0 }}
                    animate={{ width: level === 'L' ? '30%' : level === 'M' ? '60%' : '92%' }}
                    transition={{ delay: 0.25 + idx * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.button>
            );
          })
        )}
      </div>

      {/* expanded panel */}
      <AnimatePresence mode="wait">
        {expandedDim && (() => {
          const dim = DIMENSION_MAP[expandedDim];
          const level = levels[expandedDim];
          return (
            <motion.div
              key={expandedDim}
              className="glass rounded-xl p-4"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground/80">{dim.name}</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold ${LEVEL_BG[level]} ${LEVEL_TEXT[level]}`}>
                  {level} · {rawScores[expandedDim]}分
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{dim.levels[level]}</p>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <p className="text-[11px] text-muted/70 text-center pt-1">点击格子查看维度解读</p>
    </div>
  );
}
