'use client';

import { useEffect, useState } from 'react';
import type { TestResult } from '@/lib/types';
import { DimensionChart } from './DimensionChart';

interface ResultScreenProps {
  result: TestResult;
  onRestart: () => void;
}

/** SVG circular progress ring */
function SimilarityRing({ value }: { value: number }) {
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--ring-track)" strokeWidth="5" />
        <circle
          cx="50" cy="50" r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="animate-ring-fill transition-[stroke-dashoffset] duration-1000 ease-out"
          style={{ '--ring-fill-target': offset } as React.CSSProperties}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl md:text-3xl font-bold font-mono text-accent-light leading-none">
          {value}
        </span>
        <span className="text-[10px] text-muted mt-0.5">匹配度%</span>
      </div>
    </div>
  );
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { finalType, modeKicker, badge, sub, special, secondaryType } = result;
  const [displaySimilarity, setDisplaySimilarity] = useState(0);
  const [descExpanded, setDescExpanded] = useState(false);

  // count-up animation
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

  const descTruncated = finalType.desc.length > 160;
  const descText = descExpanded || !descTruncated
    ? finalType.desc
    : finalType.desc.slice(0, 160) + '...';

  return (
    <div className="min-h-screen relative z-10">
      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[320px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-5 py-12 md:py-16">

        {/* ════════ HERO ════════ */}
        <div className="animate-fade-in">
          {/* row: type info + ring */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">

            {/* left: type identity */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] text-muted">
                {modeKicker}
              </span>

              <h1 className="text-5xl md:text-7xl font-display italic tracking-tight gradient-text leading-none">
                {finalType.code}
              </h1>
              <p className="text-lg md:text-xl font-medium text-foreground/75">
                {finalType.cn}
              </p>

              <p className="text-sm text-foreground/50 italic leading-relaxed max-w-md">
                &ldquo;{finalType.intro}&rdquo;
              </p>

              <p className="text-[11px] text-muted font-mono">{badge}</p>
            </div>

            {/* right: similarity ring */}
            <div className="flex-shrink-0">
              <SimilarityRing value={displaySimilarity} />
            </div>
          </div>
        </div>

        {/* ════════ DESCRIPTION ════════ */}
        <div className="mt-8 glass rounded-2xl p-5 md:p-6 animate-slide-up" style={{ animationDelay: '150ms' }}>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {descText}
          </p>
          {descTruncated && (
            <button
              onClick={() => setDescExpanded(!descExpanded)}
              className="mt-2 text-xs text-accent hover:text-accent-light transition-colors cursor-pointer"
            >
              {descExpanded ? '收起' : '展开全文'}
            </button>
          )}
        </div>

        {/* DRUNK secondary type */}
        {secondaryType && (
          <div className="mt-4 glass rounded-xl p-4 flex items-center gap-3 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <span className="text-xs text-muted">常规匹配（被酒精覆盖）</span>
            <span className="font-bold gradient-text text-sm">{secondaryType.code}</span>
            <span className="text-xs text-foreground/50">({secondaryType.cn})</span>
            <span className="text-[11px] text-muted font-mono ml-auto">{secondaryType.similarity}%</span>
          </div>
        )}

        {/* ════════ 15 DIMENSIONS ════════ */}
        <div className="mt-10 animate-slide-up" style={{ animationDelay: '250ms' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-divider" />
            <h2 className="text-sm font-medium text-muted tracking-wide">15 维度画像</h2>
            <div className="h-px flex-1 bg-divider" />
          </div>
          <DimensionChart levels={result.levels} rawScores={result.rawScores} />
        </div>

        {/* ════════ FOOTER ════════ */}
        <div className="mt-10 text-center space-y-4 animate-slide-up" style={{ animationDelay: '350ms' }}>
          <p className="text-[11px] text-muted/40 leading-relaxed max-w-sm mx-auto">
            {special
              ? '本测试仅供娱乐。隐藏人格和兜底结果属于彩蛋，请勿当成任何学术依据。'
              : '本测试仅供娱乐，别拿它当诊断、面试或人生判决书。可以笑，别当真。'
            }
          </p>
          <p className="text-xs text-muted/30">{sub}</p>

          <button
            onClick={onRestart}
            className="
              px-8 py-3 rounded-full bg-accent text-white
              font-medium text-sm transition-all duration-300
              hover:bg-accent-dim hover:shadow-[0_0_24px_var(--glow)]
              hover:scale-[1.04] active:scale-100
              cursor-pointer
            "
          >
            再测一次
          </button>
        </div>
      </div>
    </div>
  );
}
