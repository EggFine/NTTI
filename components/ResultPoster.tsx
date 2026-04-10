'use client';

import { forwardRef } from 'react';
import type { TestResult, DimensionId, DimensionLevel } from '@/lib/types';
import { useI18n } from '@/lib/i18n/context';
import { t as tpl } from '@/lib/i18n';
import { getLocaleData } from '@/lib/data/locale';
import { QRCode } from './QRCode';

export type PosterTheme = 'light' | 'dark';

interface ResultPosterProps {
  result: TestResult;
  shareUrl: string;
  siteUrl: string;
  theme: PosterTheme;
}

const SHORT_ZH: Record<DimensionId, string> = {
  S1: '自尊', S2: '清晰', S3: '价值',
  E1: '安全', E2: '投入', E3: '边界',
  A1: '世界', A2: '规则', A3: '意义',
  Ac1: '动机', Ac2: '决策', Ac3: '执行',
  So1: '社交', So2: '界限', So3: '真实',
};

const SHORT_EN: Record<DimensionId, string> = {
  S1: 'Esteem', S2: 'Clarity', S3: 'Values',
  E1: 'Secure', E2: 'Invest', E3: 'Bounds',
  A1: 'World', A2: 'Rules', A3: 'Purpose',
  Ac1: 'Drive', Ac2: 'Decide', Ac3: 'Execute',
  So1: 'Social', So2: 'Limits', So3: 'Real',
};

const themes = {
  light: {
    bg: 'linear-gradient(160deg, #faf9f7 0%, #f3f2ef 50%, #eeecea 100%)',
    color: '#1c1917',
    muted: '#78716c',
    dimMuted: '#a8a29e',
    accent: '#0d9488',
    cardBg: 'rgba(0,0,0,0.03)',
    cardBorder: 'rgba(0,0,0,0.06)',
    qrBg: 'rgba(0,0,0,0.04)',
    htmlBg: '#faf9f7',
    levelL: '#0284c7',
    levelM: '#b45309',
    levelH: '#0f766e',
  },
  dark: {
    bg: 'linear-gradient(160deg, #0c1315 0%, #0f1a1c 50%, #121e20 100%)',
    color: '#e7e5e4',
    muted: '#6b7280',
    dimMuted: '#9ca3af',
    accent: '#14b8a6',
    cardBg: 'rgba(255,255,255,0.04)',
    cardBorder: 'rgba(255,255,255,0.06)',
    qrBg: 'rgba(255,255,255,0.05)',
    htmlBg: '#0c1315',
    levelL: '#38bdf8',
    levelM: '#d97706',
    levelH: '#0d9488',
  },
};

export const ResultPoster = forwardRef<HTMLDivElement, ResultPosterProps>(
  function ResultPoster({ result, shareUrl, siteUrl, theme }, ref) {
    const { locale, dict } = useI18n();
    const data = getLocaleData(locale);
    const SHORT = locale === 'zh' ? SHORT_ZH : SHORT_EN;

    const { finalType, bestNormal, levels } = result;
    const t = themes[theme];

    const levelColor = (l: DimensionLevel) =>
      l === 'L' ? t.levelL : l === 'M' ? t.levelM : t.levelH;

    return (
      <div
        ref={ref}
        style={{
          width: 440,
          padding: 32,
          background: t.bg,
          color: t.color,
          fontFamily: 'system-ui, sans-serif',
          position: 'absolute',
          left: -9999,
          top: 0,
        }}
      >
        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 11, color: t.muted, marginBottom: 8 }}>{dict.poster.header}</div>
          <div style={{
            fontSize: 48,
            fontWeight: 700,
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            color: t.accent,
            lineHeight: 1.1,
          }}>
            {finalType.code}
          </div>
          <div style={{ fontSize: 18, fontWeight: 500, color: t.color, marginTop: 4 }}>
            {finalType.cn}
          </div>
          <div style={{ fontSize: 12, color: t.dimMuted, fontStyle: 'italic', marginTop: 8 }}>
            &ldquo;{finalType.intro}&rdquo;
          </div>
        </div>

        {/* similarity */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          gap: 4,
          marginBottom: 20,
        }}>
          <span style={{ fontSize: 32, fontWeight: 700, fontFamily: 'monospace', color: t.accent }}>
            {bestNormal.similarity}
          </span>
          <span style={{ fontSize: 12, color: t.muted }}>{dict.poster.matchPercent}</span>
          <span style={{ fontSize: 11, color: t.muted, marginLeft: 8 }}>
            {tpl(dict.poster.hitDimensions, { exact: bestNormal.exact })}
          </span>
        </div>

        {/* 15 dimensions compact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 6,
          marginBottom: 20,
        }}>
          {data.models.map(m => (
            <div key={m.id} style={{ textAlign: 'center', fontSize: 9, color: t.muted, paddingBottom: 2 }}>
              {locale === 'zh' ? m.name.replace('模型', '') : m.name.replace(' Model', '')}
            </div>
          ))}
          {[0, 1, 2].map(row =>
            data.models.map(model => {
              const dimId = model.dimensions[row];
              const level = levels[dimId];
              return (
                <div key={dimId} style={{
                  background: t.cardBg,
                  border: `1px solid ${t.cardBorder}`,
                  borderRadius: 8,
                  padding: '6px 4px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 8, color: t.muted, marginBottom: 3 }}>
                    {SHORT[dimId]}
                  </div>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: levelColor(level),
                  }}>
                    {level}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* description snippet */}
        <div style={{
          fontSize: 11,
          color: t.dimMuted,
          lineHeight: 1.6,
          marginBottom: 24,
          padding: '12px 14px',
          background: t.cardBg,
          borderRadius: 12,
          border: `1px solid ${t.cardBorder}`,
        }}>
          {finalType.desc.length > 120 ? finalType.desc.slice(0, 120) + '……' : finalType.desc}
        </div>

        {/* bottom: QR + prompt */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{
            background: t.qrBg,
            borderRadius: 12,
            padding: 8,
            flexShrink: 0,
          }}>
            <QRCode value={shareUrl} size={80} colorMode={theme} />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: t.color, marginBottom: 4 }}>
              {dict.poster.scanFullResult}
            </div>
            <div style={{ fontSize: 10, color: t.muted, lineHeight: 1.5 }}>
              {dict.poster.scanOrTest}
            </div>
            <div style={{ fontSize: 9, color: t.muted, marginTop: 6, opacity: 0.6 }}>
              {siteUrl.replace(/^https?:\/\//, '')}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
