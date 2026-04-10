'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2 px-1">
        <span className="text-xs text-muted font-mono">{current} / {total}</span>
        <span className="text-xs text-muted font-mono">{Math.round(percent)}%</span>
      </div>
      <div className="w-full h-1.5 bg-bar-track rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-dim via-accent to-accent-light transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
