export const LOCALES = ['en', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en' || value === 'ru';
}

/**
 * Extract locale from a pathname like:
 *  - /en/about
 *  - /ru/
 */
export function getLocaleFromPathname(pathname: string): Locale | null {
  const seg = pathname.split('/').filter(Boolean)[0];
  return isLocale(seg) ? seg : null;
}

/**
 * Remove /en or /ru prefix from a pathname.
 * Examples:
 *  - /en/about -> /about
 *  - /ru/ -> /
 */
export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  const first = parts[0];
  const rest = isLocale(first) ? parts.slice(1) : parts;
  return '/' + rest.join('/');
}

/**
 * Build a locale-aware pathname.
 * Examples:
 *  - toLocalePath('ru','/about') -> /ru/about
 *  - toLocalePath('en','/') -> /en/
 */
export function toLocalePath(locale: Locale, pathname: string): string {
  const clean = stripLocalePrefix(pathname);
  const normalized = clean === '/' ? '' : clean;
  return `/${locale}${normalized === '' ? '/' : normalized}`;
}
