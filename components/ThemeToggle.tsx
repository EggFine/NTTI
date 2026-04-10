'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <motion.button
      onClick={toggle}
      aria-label={dark ? '切换到亮色模式' : '切换到暗色模式'}
      className="
        relative w-9 h-9 flex items-center justify-center rounded-full
        glass cursor-pointer
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.svg
            key="sun"
            className="w-4 h-4 text-warm-light"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            className="w-4 h-4 text-foreground/60"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
