"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { LANG_COOKIE, type Locale } from "@/lib/locale";
import { SITE } from "@/lib/site";

const TB_BTN =
  "appearance-none bg-transparent border border-on-cover/30 text-on-cover h-8 px-2.5 rounded-[3px] font-mono text-[11px] leading-none tracking-[0.04em] uppercase cursor-pointer inline-flex items-center gap-1.5 transition-colors hover:bg-gold-on-cover/16 hover:border-gold-on-cover focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-on-cover focus-visible:outline-offset-2 max-phone:h-10 max-phone:px-2";

export function SiteHeader() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const otherLocale: Locale = locale === "fr" ? "en" : "fr";
  const isWorkPage = pathname === "/work";

  const toggleLang = () => {
    document.cookie = `${LANG_COOKIE}=${otherLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  // On the dedicated /work page there's no #experience/#skills/#contact
  // section to jump to, so those links need to go back to the home page
  // first. "Work" itself just marks as active — it already is the page.
  const navLinks = [
    { href: isWorkPage ? "/work" : "#work", label: t("nav.work"), active: isWorkPage },
    { href: isWorkPage ? "/#experience" : "#experience", label: t("nav.experience"), active: false },
    { href: isWorkPage ? "/#skills" : "#skills", label: t("nav.skills"), active: false },
    { href: isWorkPage ? "/#contact" : "#contact", label: t("nav.contact"), active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cover text-on-cover border-b-[3px] border-double border-gold-on-cover">
      <div className="flex items-center justify-between gap-6 h-16 w-[var(--col)] mx-auto max-phone:gap-2.5">
        <a
          href="#top"
          className="flex items-center gap-[10px] font-serif text-base font-bold tracking-[0.02em] uppercase no-underline text-on-cover"
        >
          <span
            className="w-[26px] h-[26px] rounded-full border-[1.5px] border-gold-on-cover flex items-center justify-center font-serif text-xs font-bold text-gold-on-cover shrink-0"
            aria-hidden="true"
          >
            {SITE.nameFirst.charAt(0)}
          </span>
          <span>{SITE.brandShort}</span>
        </a>

        <nav className="flex gap-1 max-phone:hidden" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`font-mono text-xs leading-none tracking-[0.06em] uppercase no-underline px-3.5 py-2.5 border transition-colors hover:text-on-cover hover:border-gold-on-cover/50 hover:bg-gold-on-cover/10 ${
                link.active
                  ? "text-on-cover border-gold-on-cover/50 bg-gold-on-cover/10"
                  : "text-on-cover/72 border-transparent"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 max-phone:gap-1">
          <button
            type="button"
            className={TB_BTN}
            onClick={toggleLang}
            aria-label="Switch language"
          >
            <span className="text-on-cover">{locale.toUpperCase()}</span>
            <span className="text-gold-on-cover">/</span>
            <span className="text-on-cover/55">{otherLocale.toUpperCase()}</span>
          </button>
          <button
            type="button"
            className={`${TB_BTN} w-8 px-0 justify-center max-phone:w-10`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            suppressHydrationWarning
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                className="w-3.5 h-3.5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className={`${TB_BTN} w-8 px-0 justify-center max-phone:w-10 hidden max-phone:inline-flex`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                className="w-3.5 h-3.5"
              >
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                className="w-3.5 h-3.5"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary mobile"
        className="hidden max-phone:data-[open=true]:block bg-cover border-t border-gold-on-cover/40"
        data-open={mobileOpen}
      >
        <div className="w-[var(--col)] mx-auto flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              aria-current={link.active ? "page" : undefined}
              className={`flex items-center gap-[10px] py-4 px-1 font-mono text-[13px] uppercase tracking-[0.05em] no-underline border-b border-on-cover/15 last:border-b-0 hover:text-on-cover ${
                link.active ? "text-on-cover" : "text-on-cover/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
