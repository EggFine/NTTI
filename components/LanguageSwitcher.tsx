'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { useI18n } from '@/lib/i18n/context';
import { locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { locale, dict } = useI18n();
  const pathname = usePathname();

  const other = locales.find(l => l !== locale) as Locale;

  function switchTo() {
    // Persist choice so proxy remembers it on next visit
    document.cookie = `NEXT_LOCALE=${other};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
    window.location.href = `/${other}${pathWithoutLocale || '/'}`;
  }

  return (
    <motion.button
      onClick={switchTo}
      className="w-9 h-9 flex items-center justify-center rounded-full glass cursor-pointer text-[10px] font-bold text-muted hover:text-foreground/70 transition-colors"
      aria-label={`Switch to ${dict.lang.switchLabel}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {dict.lang.switchLabel}
    </motion.button>
  );
}
