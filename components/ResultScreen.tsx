'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { TestResult } from '@/lib/types';
import { encodeShareUrl } from '@/lib/share';
import { DimensionChart } from './DimensionChart';
import { QRCode } from './QRCode';
import { ResultPoster } from './ResultPoster';
import type { PosterTheme } from './ResultPoster';

interface ResultScreenProps {
  result: TestResult;
  onRestart: () => void;
  hideShare?: boolean;
}

function SimilarityRing({ value }: { value: number }) {
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

export function ResultScreen({ result, onRestart, hideShare }: ResultScreenProps) {
  const { finalType, modeKicker, badge, sub, special, secondaryType } = result;
  const [displaySimilarity, setDisplaySimilarity] = useState(0);
  const [descExpanded, setDescExpanded] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [showShareQR, setShowShareQR] = useState(false);
  const [showPosterPicker, setShowPosterPicker] = useState(false);
  const [saving, setSaving] = useState(false);
  const [posterTheme, setPosterTheme] = useState<PosterTheme>('light');
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShareUrl(encodeShareUrl(result, window.location.origin));
    setSiteUrl(window.location.origin);
  }, [result]);

  const handleSavePoster = useCallback(async (theme: PosterTheme) => {
    setPosterTheme(theme);
    setSaving(true);
    // Wait a tick for the poster to re-render with new theme
    await new Promise(r => setTimeout(r, 100));
    if (!posterRef.current) { setSaving(false); return; }
    try {
      const html2canvas = (await import('html2canvas-pro')).default;
      const bgColor = theme === 'dark' ? '#0c1315' : '#faf9f7';
      const canvas = await html2canvas(posterRef.current, {
        scale: 2,
        backgroundColor: bgColor,
        useCORS: true,
        logging: false,
      });
      const link = document.createElement('a');
      link.download = `NTTI-${finalType.code}-${finalType.cn}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error('Failed to save poster:', e);
    } finally {
      setSaving(false);
      setShowPosterPicker(false);
    }
  }, [finalType.code, finalType.cn]);

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(500px,90vw)] h-[min(350px,60vw)] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-5 py-10 sm:py-12 md:py-16">

        {/* ════ HERO CARD ════ */}
        <motion.div className="glass rounded-2xl p-5 sm:p-6 md:p-8" {...fadeUp(0)}>
          <div className="flex flex-col items-center text-center gap-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/8 text-[11px] text-accent font-medium">
              {modeKicker}
            </span>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full">
              <div className="flex-1 text-center md:text-left space-y-2">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-7xl font-display italic tracking-tight gradient-text leading-none py-2 px-2"
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

        {/* ════ SHARE ════ */}
        {!hideShare && <motion.div className="mt-8" {...fadeUp(0.45)}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-divider" />
            <h2 className="text-sm font-medium text-muted tracking-wide px-2">分享结果</h2>
            <div className="h-px flex-1 bg-divider" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <motion.button
                onClick={() => setShowShareQR(!showShareQR)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-foreground/70 cursor-pointer hover:text-foreground/90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                {showShareQR ? '收起二维码' : '分享二维码'}
              </motion.button>

              <motion.button
                onClick={() => setShowPosterPicker(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-foreground/70 cursor-pointer hover:text-foreground/90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                保存海报
              </motion.button>
            </div>

            {/* share QR */}
            <AnimatePresence>
              {showShareQR && shareUrl && (
                <motion.div
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                >
                  <div className="glass rounded-2xl p-4">
                    <QRCode value={shareUrl} size={160} />
                  </div>
                  <p className="text-[11px] text-muted text-center max-w-xs leading-relaxed">
                    朋友扫码可查看你的人格结果，并被引导去测试
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* poster modal is rendered at component root */}
          </div>
        </motion.div>}

        {/* ════ FOOTER ════ */}
        <motion.div className="mt-10 text-center space-y-5" {...fadeUp(0.55)}>
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
            {hideShare ? '返回主页' : '再测一次'}
          </motion.button>
        </motion.div>
      </div>

      {/* ════ POSTER MODAL ════ */}
      <AnimatePresence>
        {showPosterPicker && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => !saving && setShowPosterPicker(false)} />

            {/* modal content */}
            <motion.div
              className="relative glass rounded-2xl p-5 sm:p-6 max-w-sm w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            >
              {/* close button */}
              <button
                onClick={() => !saving && setShowPosterPicker(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-option-hover text-muted hover:text-foreground/70 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-sm font-medium text-foreground/80 mb-4 text-center">选择海报风格</h3>

              <div className="grid grid-cols-2 gap-3">
                {(['light', 'dark'] as const).map(theme => (
                  <button
                    key={theme}
                    onClick={() => handleSavePoster(theme)}
                    disabled={saving}
                    className={`
                      rounded-xl overflow-hidden border-2 transition-all cursor-pointer
                      disabled:opacity-50 disabled:cursor-not-allowed
                      ${posterTheme === theme && saving ? 'border-accent' : 'border-card-border hover:border-accent/50'}
                    `}
                  >
                    <div className={`p-3 ${theme === 'dark' ? 'bg-[#0c1315]' : 'bg-[#faf9f7]'}`}>
                      <div className="text-center space-y-1.5">
                        <div className={`text-[8px] ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>NTTI</div>
                        <div className={`text-sm font-bold font-display italic ${theme === 'dark' ? 'text-teal-400' : 'text-teal-700'}`}>
                          {finalType.code}
                        </div>
                        <div className={`text-[9px] ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {finalType.cn}
                        </div>
                        <div className={`text-[10px] font-mono font-bold ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>
                          {result.bestNormal.similarity}%
                        </div>
                        <div className="grid grid-cols-5 gap-[2px] px-1">
                          {Object.values(result.levels).map((l, i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full ${
                                l === 'H' ? (theme === 'dark' ? 'bg-teal-500/60' : 'bg-teal-500/40') :
                                l === 'M' ? (theme === 'dark' ? 'bg-amber-500/50' : 'bg-amber-500/30') :
                                (theme === 'dark' ? 'bg-sky-500/50' : 'bg-sky-500/30')
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="py-2 text-center text-xs text-foreground/70 bg-card-bg">
                      {saving && posterTheme === theme ? '生成中...' : theme === 'light' ? '亮色' : '暗色'}
                    </div>
                  </button>
                ))}
              </div>

              <p className="text-[10px] text-muted/70 text-center mt-3">点击预览卡片即可保存对应风格的海报</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* hidden poster for html2canvas */}
      {shareUrl && <ResultPoster ref={posterRef} result={result} shareUrl={shareUrl} siteUrl={siteUrl} theme={posterTheme} />}
    </div>
  );
}
