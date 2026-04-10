'use client';

import { useEffect, useRef } from 'react';
import QRCodeLib from 'qrcode';

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
  /** Force color mode regardless of system theme */
  colorMode?: 'auto' | 'light' | 'dark';
}

export function QRCode({ value, size = 160, className = '', colorMode = 'auto' }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !value) return;

    let isDark: boolean;
    if (colorMode === 'auto') {
      isDark = document.documentElement.classList.contains('dark');
    } else {
      isDark = colorMode === 'dark';
    }

    QRCodeLib.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 2,
      color: {
        dark: isDark ? '#e7e5e4' : '#1c1917',
        light: '#00000000',
      },
      errorCorrectionLevel: 'M',
    });
  }, [value, size, colorMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`rounded-xl ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
