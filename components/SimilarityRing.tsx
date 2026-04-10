'use client';

import { motion } from 'motion/react';
import { useDict } from '@/lib/i18n/context';

export function SimilarityRing({ value }: { value: number }) {
  const dict = useDict();
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
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
        <span className="text-[10px] text-muted mt-1">{dict.result.matchPercent}</span>
      </div>
    </div>
  );
}
