export type Locale = 'en' | 'pt';

const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'pt'] as const;

export const DEFAULT_LOCALE: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
    return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}