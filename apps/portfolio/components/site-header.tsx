"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { LANG_COOKIE, type Locale } from "@/lib/locale";
import { SITE } from "@/lib/site";

const ICON_BTN =
  "items-center justify-center w-11 h-11 rounded-full border border-line bg-transparent text-fg cursor-pointer transition-colors hover:bg-fg/5 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

const LOCALES: Locale[] = ["fr", "en"];

export function SiteHeader({ cvUrl }: { cvUrl: string | null }) {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before mount we don't know the stored theme; assume the default (dark).
  const isDark = !mounted || resolvedTheme === "dark";
  const isWorkPage = pathname === "/work";

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  // On the dedicated /work page there's no #experience/#skills/#contact
  // section to jump to, so those links need to go back to the home page
  // first. "Work" itself just marks as active — it already is the page.
  const prefix = isWorkPage ? "/" : "";
  const navLinks = [
    { href: isWorkPage ? "/work" : "#work", label: t("work"), active: isWorkPage },
    { href: `${prefix}#skills`, label: t("skills"), active: false },
    { href: `${prefix}#experience`, label: t("experience"), active: false },
    { href: `${prefix}#contact`, label: t("contact"), active: false },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <nav className="max-w-[1200px] mx-auto px-6 py-5 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 max-[960px]:flex max-[960px]:justify-between max-[640px]:px-4 max-[640px]:py-3.5">
        <a
          href={isWorkPage ? "/" : "#top"}
          aria-label={SITE.brand}
          className="flex items-center gap-2.5 shrink-0 no-underline font-mono text-[15px] font-medium"
        >
          <span
            className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-accent text-on-accent font-medium"
            aria-hidden="true"
          >
            {SITE.nameFirst.charAt(0)}
            {SITE.nameLast.charAt(0)}
          </span>
          <span className="max-[480px]:hidden">{SITE.brandShort}</span>
        </a>

        <div className="flex items-center justify-center gap-x-2 text-[15px] max-[960px]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className="px-3 py-2.5 whitespace-nowrap no-underline transition-opacity hover:opacity-75 aria-[current=page]:underline aria-[current=page]:decoration-accent aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-self-end items-center gap-2">
          <div
            role="group"
            aria-label={t("language")}
            className="inline-flex p-[3px] border border-line rounded-full font-mono text-[13px]"
          >
            {LOCALES.map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={locale === l}
                onClick={() => setLocale(l)}
                className="min-w-11 min-h-[38px] px-2.5 border-0 rounded-full bg-transparent text-fg font-medium cursor-pointer aria-pressed:bg-fg aria-pressed:text-bg focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`${ICON_BTN} inline-flex`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? t("toLight") : t("toDark")}
            title={isDark ? t("toLight") : t("toDark")}
            suppressHydrationWarning
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={`${ICON_BTN} hidden max-[960px]:inline-flex`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>

          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="ml-2 inline-flex justify-center whitespace-nowrap no-underline px-3.5 py-2.5 border border-fg rounded-full font-mono text-sm transition-colors hover:bg-fg hover:text-bg max-[960px]:hidden"
            >
              {t("cv")}
            </a>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="hidden max-[960px]:flex flex-col px-4 pt-2 pb-5 border-t border-line text-xl font-medium"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={link.active ? "page" : undefined}
              className="flex items-center min-h-[52px] no-underline border-b border-line"
            >
              {link.label}
            </a>
          ))}
          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center min-h-[52px] mt-4 no-underline border border-fg rounded-full font-mono text-[15px]"
            >
              {t("cv")}
            </a>
          )}
        </div>
      )}
    </header>
  );
}
