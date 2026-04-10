'use client';

const MODELS = [
  { label: '自我', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
  { label: '情感', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { label: '态度', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: '行动', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: '社交', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
];

const SAMPLE_TYPES = ['CTRL', 'BOSS', 'SEXY', 'MONK', 'GOGO', 'FUCK', 'SOLO', 'DEAD'];

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-10 overflow-hidden">
      {/* ── background decorations ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-warm/[0.03] blur-[80px] pointer-events-none" />

      {/* floating scattered type codes as subtle background texture */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {SAMPLE_TYPES.map((code, i) => {
          const positions = [
            'top-[12%] left-[8%] -rotate-12',
            'top-[18%] right-[10%] rotate-6',
            'top-[45%] left-[4%] rotate-3',
            'top-[40%] right-[5%] -rotate-6',
            'bottom-[30%] left-[12%] rotate-12',
            'bottom-[25%] right-[8%] -rotate-3',
            'bottom-[12%] left-[6%] -rotate-6',
            'bottom-[8%] right-[15%] rotate-9',
          ];
          return (
            <span
              key={code}
              className={`absolute font-display italic text-foreground/[0.03] text-2xl md:text-3xl ${positions[i]}`}
            >
              {code}
            </span>
          );
        })}
      </div>

      <div className="flex flex-col items-center max-w-lg text-center animate-fade-in relative">
        {/* ── Title block ── */}
        <h1 className="text-7xl md:text-9xl font-display italic tracking-tight gradient-text py-3 px-6 select-none">
          NTTI
        </h1>
        <p className="text-lg md:text-xl font-medium text-foreground/75 mt-1">
          不太正经人格测试
        </p>
        <p className="text-sm text-accent mt-3 font-medium">
          SBTI 已经过时，NTTI 来了。
        </p>

        {/* ── 5-model icons row ── */}
        <div className="flex items-center justify-center gap-5 md:gap-7 mt-8">
          {MODELS.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1.5 group">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-subtle flex items-center justify-center transition-colors group-hover:bg-accent/10">
                <svg className="w-4.5 h-4.5 md:w-5 md:h-5 text-muted group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={m.icon} />
                </svg>
              </div>
              <span className="text-[10px] md:text-xs text-muted/70 group-hover:text-foreground/60 transition-colors">{m.label}</span>
            </div>
          ))}
        </div>

        {/* ── Description ── */}
        <p className="text-sm text-muted leading-relaxed max-w-sm mt-7">
          基于五大模型、15个维度的交叉匹配，每次从题库中随机抽取30道题，找到属于你的那个不太正经的人格标签。
        </p>

        {/* ── Stats row ── */}
        <div className="flex items-center gap-6 mt-6">
          <div className="text-center">
            <div className="text-xl font-bold font-mono text-foreground/80">15</div>
            <div className="text-[10px] text-muted mt-0.5">测试维度</div>
          </div>
          <div className="w-px h-8 bg-divider" />
          <div className="text-center">
            <div className="text-xl font-bold font-mono text-foreground/80">40+</div>
            <div className="text-[10px] text-muted mt-0.5">人格类型</div>
          </div>
          <div className="w-px h-8 bg-divider" />
          <div className="text-center">
            <div className="text-xl font-bold font-mono text-foreground/80">100+</div>
            <div className="text-[10px] text-muted mt-0.5">随机题库</div>
          </div>
          <div className="w-px h-8 bg-divider" />
          <div className="text-center">
            <div className="text-xl font-bold font-mono text-foreground/80">~5</div>
            <div className="text-[10px] text-muted mt-0.5">分钟完成</div>
          </div>
        </div>

        {/* ── CTA ── */}
        <button
          onClick={onStart}
          className="
            mt-9 relative px-12 py-4 rounded-full
            bg-accent text-white font-medium text-base
            transition-all duration-300
            hover:bg-accent-dim hover:shadow-[0_0_32px_var(--glow)]
            hover:scale-[1.04] active:scale-100
            cursor-pointer
          "
        >
          开始测试
        </button>

        {/* ── Bottom ── */}
        <div className="mt-8 pt-6 border-t border-divider w-full max-w-sm space-y-2.5 text-center">
          <p className="text-[11px] text-muted/40">
            仅供娱乐 · 不具备任何科学依据
          </p>
          <p className="text-[10px] text-muted/30 leading-relaxed">
            SBTI 原作者 B站@Q肉儿串儿，NTTI 基于 SBTI 体系、题库和人格改进优化而成
          </p>
          <p className="text-[10px] text-muted/25 flex items-center justify-center gap-1">
            Powered by
            <svg className="w-3 h-3 inline-block" viewBox="0 0 32 32" fill="currentColor">
              <path d="M17.87 13.47l-12.65 5.6a1.16 1.16 0 01-.47.1 1.08 1.08 0 01-.72-.27 1.15 1.15 0 01-.36-1.1l2.17-9.43a3.24 3.24 0 012.88-2.5l12.33-1.03a.53.53 0 01.42.15.56.56 0 01.14.43l-.52 5.15a3.24 3.24 0 01-3.22 2.9z" />
              <path d="M28.93 13.67L16.6 14.7a3.24 3.24 0 00-2.88 2.5L11.55 26.63a1.15 1.15 0 00.36 1.1 1.08 1.08 0 001.19.17l12.65-5.6a3.24 3.24 0 001.96-2.47l.52-5.15a.56.56 0 00-.14-.43.53.53 0 00-.42-.15l-.74.06z" />
            </svg>
            Cloudflare Pages
          </p>
        </div>
      </div>
    </div>
  );
}
