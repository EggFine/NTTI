'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [systemDark, setSystemDark] = useState(false);

  // Watch for dark class changes on <html>
  useEffect(() => {
    if (colorMode !== 'auto') return;
    setSystemDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setSystemDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [colorMode]);

  useEffect(() => {
    if (!canvasRef.current || !value) return;

    const isDark = colorMode === 'auto' ? systemDark : colorMode === 'dark';

    QRCodeLib.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 2,
      color: {
        dark: isDark ? '#e7e5e4' : '#1c1917',
        light: '#00000000',
      },
      errorCorrectionLevel: 'M',
    });
  }, [value, size, colorMode, systemDark]);

  return (
    <canvas
      ref={canvasRef}
      className={`rounded-xl ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
