import type { Locale } from './i18n';

export function buildLocaleUrl(pathname: string, locale: Locale, search: string): string {
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
  const nextPath = `/${locale}${pathWithoutLocale || '/'}`;
  if (!search) return nextPath;
  return `${nextPath}${search.startsWith('?') ? search : `?${search}`}`;
}
