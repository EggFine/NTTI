"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { QRCode } from "./QRCode";

const emptySubscribe = () => () => {};
function useSiteUrl() {
  return useSyncExternalStore(
    emptySubscribe,
    () => window.location.origin,
    () => '',
  );
}

const MODELS = [
  {
    label: "自我",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  },
  {
    label: "情感",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    label: "态度",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  { label: "行动", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  {
    label: "社交",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const SAMPLE_TYPES = [
  "CTRL",
  "BOSS",
  "SEXY",
  "MONK",
  "GOGO",
  "FUCK",
  "SOLO",
  "DEAD",
];

interface IntroScreenProps {
  onStart: () => void;
  onQuickTest?: () => void;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.4,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.2 + 0.04,
    }));

    function draw() {
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const isDark = document.documentElement.classList.contains("dark");
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        if (p.y < 0) p.y = window.innerHeight;
        if (p.y > window.innerHeight) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = isDark
          ? `rgba(20,184,166,${p.opacity})`
          : `rgba(13,148,136,${p.opacity})`;
        ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
};

function useIsDebug() {
  return useSyncExternalStore(
    emptySubscribe,
    () => window.location.search.includes('debug'),
    () => false,
  );
}

function DebugQuickTestButton({ onQuickTest }: { onQuickTest?: () => void }) {
  const isDebug = useIsDebug();
  if (!isDebug || !onQuickTest) return null;

  return (
    <motion.div variants={fadeUp} className="mt-3">
      <button
        onClick={onQuickTest}
        className="px-4 py-2 rounded-full glass text-xs text-muted cursor-pointer hover:text-foreground/70 transition-colors"
      >
        [DEBUG] 随机数据快速测试
      </button>
    </motion.div>
  );
}

export function IntroScreen({ onStart, onQuickTest }: IntroScreenProps) {
  const siteUrl = useSiteUrl();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative z-10 overflow-hidden">
      <ParticleField />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(420px,90vw)] h-[min(420px,90vw)] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[min(260px,60vw)] h-[min(260px,60vw)] rounded-full bg-warm/[0.03] blur-[80px] pointer-events-none" />

      {/* floating type codes — hidden on very small screens */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden sm:block"
        aria-hidden="true"
      >
        {SAMPLE_TYPES.map((code, i) => {
          const positions = [
            "top-[14%] left-[8%]",
            "top-[20%] right-[10%]",
            "top-[48%] left-[5%]",
            "top-[42%] right-[6%]",
            "bottom-[28%] left-[10%]",
            "bottom-[24%] right-[9%]",
            "bottom-[10%] left-[7%]",
            "bottom-[6%] right-[14%]",
          ];
          const rotations = [-12, 6, 3, -6, 12, -3, -6, 9];
          return (
            <motion.span
              key={code}
              className={`absolute font-display italic text-foreground/[0.035] text-xl md:text-2xl ${positions[i]}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: rotations[i] }}
              transition={{ delay: 1 + i * 0.1, duration: 1.5 }}
              style={{
                animationName: "float",
                animationDuration: `${5 + i * 0.8}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${i * 0.6}s`,
              }}
            >
              {code}
            </motion.span>
          );
        })}
      </div>

      <motion.div
        className="flex flex-col items-center max-w-md w-full text-center relative"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* title */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-[8.5rem] font-display italic tracking-tight gradient-text py-3 px-4 sm:px-6 select-none leading-none"
          variants={fadeUp}
        >
          NTTI
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg font-medium text-foreground/70 mt-2"
        >
          不太正经人格测试
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-sm text-accent mt-2.5 font-medium"
        >
          SBTI 已经过时，NTTI 来了。
        </motion.p>

        {/* 5-model icons in a glass card */}
        <motion.div
          variants={fadeUp}
          className="glass rounded-2xl px-4 sm:px-6 py-4 mt-8 w-full"
        >
          <div className="flex items-center justify-around sm:justify-between">
            {MODELS.map((m) => (
              <motion.div
                key={m.label}
                className="flex flex-col items-center gap-1 sm:gap-1.5 group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-subtle flex items-center justify-center transition-colors duration-200 group-hover:bg-accent/10">
                  <svg
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-muted group-hover:text-accent transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.icon}
                    />
                  </svg>
                </div>
                <span className="text-[9px] sm:text-[10px] text-muted/80 group-hover:text-foreground/60 transition-colors duration-200">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* description */}
        <motion.p
          variants={fadeUp}
          className="text-sm text-muted leading-relaxed mt-6 px-2"
        >
          基于五大模型、15个维度交叉匹配，每次从题库中随机抽取45道题，找到属于你的那个不太正经的人格标签。
        </motion.p>

        {/* stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-6 w-full"
        >
          {[
            { n: "15", l: "测试维度" },
            { n: "40+", l: "人格类型" },
            { n: "100+", l: "随机题库" },
            { n: "~8", l: "分钟完成" },
          ].map((s) => (
            <div key={s.l} className="text-center py-2.5 glass rounded-xl">
              <div className="text-base sm:text-lg font-bold font-mono text-foreground/80">
                {s.n}
              </div>
              <div className="text-[10px] text-muted mt-0.5">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
          <motion.button
            onClick={onStart}
            className="px-10 sm:px-14 py-3.5 sm:py-4 rounded-full bg-accent text-white font-medium text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px var(--glow)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            开始测试
          </motion.button>
          <Link href="/codex">
            <motion.span
              className="inline-flex items-center gap-1.5 px-4 py-3.5 sm:py-4 rounded-full glass text-sm text-muted cursor-pointer hover:text-foreground/70 transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              图鉴
            </motion.span>
          </Link>
        </motion.div>

        {/* debug quick test (only with ?debug) */}
        <DebugQuickTestButton onQuickTest={onQuickTest} />

        {/* QR code */}
        {siteUrl && (
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <div className="glass rounded-2xl p-3">
              <QRCode value={siteUrl} size={120} />
            </div>
            <p className="text-[11px] text-muted">分享给朋友</p>
          </motion.div>
        )}

        {/* footer */}
        <motion.div
          variants={fadeUp}
          className="mt-6 pt-5 border-t border-divider w-full space-y-1.5 text-center"
        >
          <p className="text-xs text-muted">仅供娱乐 · 不具备任何科学依据</p>
          <p className="text-[11px] text-muted/80 leading-relaxed">
            SBTI 原作者 B站@Q肉儿串儿，NTTI 基于 SBTI 体系改进优化
          </p>
          <div className="flex items-center justify-center gap-3 text-[11px] text-muted/60">
            <a
              href="https://github.com/EggFine/NTTI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground/60 transition-colors"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <span className="text-muted/30">|</span>
            <span className="inline-flex items-center gap-1">
              Powered by
              <svg className="w-3 h-3" viewBox="0 0 32 32" fill="currentColor">
                <path d="M17.87 13.47l-12.65 5.6a1.16 1.16 0 01-.47.1 1.08 1.08 0 01-.72-.27 1.15 1.15 0 01-.36-1.1l2.17-9.43a3.24 3.24 0 012.88-2.5l12.33-1.03a.53.53 0 01.42.15.56.56 0 01.14.43l-.52 5.15a3.24 3.24 0 01-3.22 2.9z" />
                <path d="M28.93 13.67L16.6 14.7a3.24 3.24 0 00-2.88 2.5L11.55 26.63a1.15 1.15 0 00.36 1.1 1.08 1.08 0 001.19.17l12.65-5.6a3.24 3.24 0 001.96-2.47l.52-5.15a.56.56 0 00-.14-.43.53.53 0 00-.42-.15l-.74.06z" />
              </svg>
              Cloudflare
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
