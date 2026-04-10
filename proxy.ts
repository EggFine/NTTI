import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['zh', 'en'];
const defaultLocale = 'zh';

const LOCALE_COOKIE = 'NEXT_LOCALE';

function getLocaleFromHeaders(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language') || '';
  for (const part of acceptLang.split(',')) {
    const lang = part.split(';')[0].trim().toLowerCase();
    if (lang.startsWith('en')) return 'en';
    if (lang.startsWith('zh')) return 'zh';
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already has locale prefix — no redirect needed
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) return;

  // Priority: cookie (user's explicit choice) > Accept-Language > default
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = (cookieLocale && locales.includes(cookieLocale))
    ? cookieLocale
    : getLocaleFromHeaders(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|.*\\..*).*)'],
};
