"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLang } from "@/components/lang-provider";

export function SiteHeader() {
  const { data, toggleLang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const ui = data.ui;

  const navLinks = [
    { href: "#work", label: data.nav.work },
    { href: "#experience", label: data.nav.experience },
    { href: "#skills", label: data.nav.skills },
    { href: "#contact", label: data.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="inner">
        <a href="#top" className="brand">
          <span className="brand-seal" aria-hidden="true">
            {data.hero.nameFirst.charAt(0)}
          </span>
          <span>{data.header.brandShort}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="toolbar">
          <button
            type="button"
            className="tb-btn"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            <span style={{ color: "var(--on-cover)" }}>{ui.lang}</span>
            <span style={{ color: "var(--gold-on-cover)" }}>/</span>
            <span style={{ color: "color-mix(in oklab, var(--on-cover) 55%, transparent)" }}>{ui.langSwitch}</span>
          </button>
          <button
            type="button"
            className="tb-btn icon"
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
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="tb-btn icon menu-toggle"
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
        className="mobile-nav"
        data-open={mobileOpen}
      >
        <div className="mobile-nav-inner">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
