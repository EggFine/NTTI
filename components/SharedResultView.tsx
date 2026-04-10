'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { decodeShareUrl } from '@/lib/share';
import { reconstructFromShare } from '@/lib/scoring';
import { useI18n } from '@/lib/i18n/context';
import { getLocaleData } from '@/lib/data/locale';
import { DimensionChart } from './DimensionChart';

interface SharedResultViewProps {
  d?: string;
  s?: string;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring' as const, stiffness: 260, damping: 28, delay },
});

export function SharedResultView({ d, s }: SharedResultViewProps) {
  const { locale, dict } = useI18n();
  const data = getLocaleData(locale);

  // validate
  if (!d || !s) {
    return <ErrorView message={dict.shared.errorIncomplete} />;
  }

  const decoded = decodeShareUrl(d, s);
  if (!decoded) {
    return <ErrorView message={dict.shared.errorInvalid} />;
  }

  const result = reconstructFromShare(
    decoded.typeCode,
    decoded.similarity,
    decoded.levels,
    decoded.exact,
    decoded.special,
    data,
  );

  if (!result) {
    return <ErrorView message={dict.shared.errorUnknownType} />;
  }

  return (
    <div className="min-h-screen relative z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(500px,90vw)] h-[min(350px,60vw)] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-5 py-10 sm:py-12 md:py-16">
        {/* shared badge */}
        <motion.div className="text-center mb-8" {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            {dict.shared.badge}
          </span>
        </motion.div>

        {/* result card */}
        <motion.div className="glass rounded-2xl p-5 sm:p-6 md:p-8" {...fadeUp(0.1)}>
          <div className="flex flex-col items-center text-center gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/8 text-[11px] text-accent font-medium">
              {result.special ? dict.shared.hiddenType : dict.shared.primaryType}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display italic tracking-tight gradient-text leading-none py-2 px-2">
              {result.finalType.code}
            </h1>
            <p className="text-lg md:text-xl font-medium text-foreground/75">{result.finalType.cn}</p>

            {/* similarity */}
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold font-mono text-accent-light">{result.similarity}</span>
              <span className="text-sm text-muted">{dict.shared.matchPercent}</span>
            </div>

            <p className="text-sm text-foreground/45 italic leading-relaxed max-w-md">
              &ldquo;{result.finalType.intro}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* description */}
        <motion.div className="mt-4 glass rounded-2xl p-4 sm:p-5 md:p-6" {...fadeUp(0.2)}>
          <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">
            {result.finalType.desc}
          </p>
        </motion.div>

        {/* dimensions */}
        <motion.div className="mt-8" {...fadeUp(0.3)}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-divider" />
            <h2 className="text-sm font-medium text-muted tracking-wide px-2">{dict.shared.dimensionTitle}</h2>
            <div className="h-px flex-1 bg-divider" />
          </div>
          <DimensionChart levels={result.levels} rawScores={result.rawScores} />
        </motion.div>

        {/* CTA */}
        <motion.div className="mt-10 text-center space-y-4" {...fadeUp(0.4)}>
          <p className="text-sm text-foreground/60">
            {dict.shared.ctaText}
          </p>
          <Link href={`/${locale}`}>
            <motion.span
              className="inline-block px-10 py-3.5 rounded-full bg-accent text-white font-medium text-sm cursor-pointer"
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px var(--glow)' }}
              whileTap={{ scale: 0.97 }}
            >
              {dict.shared.ctaButton}
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function ErrorView({ message }: { message: string }) {
  const { locale, dict } = useI18n();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <motion.div
        className="glass rounded-2xl p-8 max-w-sm w-full text-center space-y-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
          <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p className="text-sm text-foreground/70">{message}</p>
        <Link href={`/${locale}`}>
          <motion.span
            className="inline-block px-8 py-3 rounded-full bg-accent text-white font-medium text-sm cursor-pointer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {dict.shared.errorGoTest}
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
