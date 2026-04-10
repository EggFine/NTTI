'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import type { TestResult } from '@/lib/types';
import { DimensionChart } from './DimensionChart';

interface ResultScreenProps {
  result: TestResult;
  onRestart: () => void;
}

function SimilarityRing({ value }: { value: number }) {
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-32 h-32 md:w-36 md:h-36">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--ring-track)" strokeWidth="4.5" />
        <motion.circle
          cx="50" cy="50" r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl md:text-4xl font-bold font-mono text-accent-light leading-none">
          {value}
        </span>
        <span className="text-[10px] text-muted mt-1">匹配度%</span>
      </div>
    </div>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring' as const, stiffness: 260, damping: 28, delay },
});

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { finalType, modeKicker, badge, sub, special, secondaryType } = result;
  const [displaySimilarity, setDisplaySimilarity] = useState(0);
  const [descExpanded, setDescExpanded] = useState(false);

  useEffect(() => {
    const target = result.bestNormal.similarity;
    const duration = 1100;
    const start = performance.now();
    function tick(now: number) {
      const p = Math.min((now - start) / duration, 1);
      setDisplaySimilarity(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [result.bestNormal.similarity]);

  const descTruncated = finalType.desc.length > 180;
  const descText = descExpanded || !descTruncated
    ? finalType.desc
    : finalType.desc.slice(0, 180) + '……';

  return (
    <div className="min-h-screen relative z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-5 py-12 md:py-16">

        {/* ════ HERO CARD ════ */}
        <motion.div
          className="glass rounded-2xl p-6 md:p-8"
          {...fadeUp(0)}
        >
          <div className="flex flex-col items-center text-center gap-5">
            {/* kicker */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/8 text-[11px] text-accent font-medium">
              {modeKicker}
            </span>

            {/* type code + ring side by side on desktop */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full">
              <div className="flex-1 text-center md:text-left space-y-2">
                <motion.h1
                  className="text-5xl md:text-7xl font-display italic tracking-tight gradient-text leading-none py-2 px-2"
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  {finalType.code}
                </motion.h1>
                <p className="text-lg md:text-xl font-medium text-foreground/75">{finalType.cn}</p>
                <p className="text-sm text-foreground/45 italic leading-relaxed">
                  &ldquo;{finalType.intro}&rdquo;
                </p>
              </div>

              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.25 }}
              >
                <SimilarityRing value={displaySimilarity} />
              </motion.div>
            </div>

            <p className="text-[11px] text-muted font-mono">{badge}</p>
          </div>
        </motion.div>

        {/* ════ DESCRIPTION ════ */}
        <motion.div className="mt-4 glass rounded-2xl p-5 md:p-6" {...fadeUp(0.2)}>
          <p className="text-sm text-foreground/65 leading-relaxed">
            {descText}
          </p>
          {descTruncated && (
            <button
              onClick={() => setDescExpanded(!descExpanded)}
              className="mt-2.5 text-xs text-accent hover:text-accent-light transition-colors cursor-pointer font-medium"
            >
              {descExpanded ? '收起 ↑' : '展开全文 ↓'}
            </button>
          )}
        </motion.div>

        {/* DRUNK secondary */}
        {secondaryType && (
          <motion.div className="mt-3 glass rounded-xl p-4 flex items-center gap-3 flex-wrap" {...fadeUp(0.3)}>
            <span className="text-xs text-muted">常规匹配（被酒精覆盖）：</span>
            <span className="font-bold gradient-text text-sm">{secondaryType.code}</span>
            <span className="text-xs text-foreground/50">({secondaryType.cn})</span>
            <span className="text-[11px] text-muted font-mono ml-auto">{secondaryType.similarity}%</span>
          </motion.div>
        )}

        {/* ════ 15 DIMENSIONS ════ */}
        <motion.div className="mt-8" {...fadeUp(0.35)}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-divider" />
            <h2 className="text-sm font-medium text-muted tracking-wide px-2">15 维度画像</h2>
            <div className="h-px flex-1 bg-divider" />
          </div>
          <DimensionChart levels={result.levels} rawScores={result.rawScores} />
        </motion.div>

        {/* ════ FOOTER ════ */}
        <motion.div className="mt-10 text-center space-y-5" {...fadeUp(0.5)}>
          <div className="space-y-1.5">
            <p className="text-xs text-muted leading-relaxed max-w-sm mx-auto">
              {special
                ? '本测试仅供娱乐。隐藏人格和兜底结果属于彩蛋，请勿当成任何学术依据。'
                : '本测试仅供娱乐，别拿它当诊断、面试或人生判决书。可以笑，别当真。'
              }
            </p>
            <p className="text-xs text-muted/70">{sub}</p>
          </div>

          <motion.button
            onClick={onRestart}
            className="px-10 py-3.5 rounded-full bg-accent text-white font-medium text-sm cursor-pointer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 28px var(--glow)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            再测一次
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
