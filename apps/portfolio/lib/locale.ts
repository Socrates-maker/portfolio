/**
 * Locale constants shared between server (i18n/request.ts, which reads
 * next/headers) and client components (the language toggle). Kept in its
 * own file with no server-only imports so client components can import it
 * without pulling next/headers into the browser bundle.
 */
export const LANG_COOKIE = "portfolio.lang";
export type Locale = "en" | "fr";
export const DEFAULT_LOCALE: Locale = "en";
