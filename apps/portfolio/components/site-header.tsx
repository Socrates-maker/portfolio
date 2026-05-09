"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLang } from "@/components/lang-provider";

export function SiteHeader() {
  const { data, toggleLang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const ui = data.ui;

  return (
    <header className="site-header">
      <div className="inner">
        <a href="#top" className="brand">
          <span className="brand-dot" aria-hidden="true" />
          <span>{data.header.brandShort}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#work">
            <span className="num">01</span>
            {data.nav.work}
          </a>
          <a href="#experience">
            <span className="num">02</span>
            {data.nav.experience}
          </a>
          <a href="#skills">
            <span className="num">03</span>
            {data.nav.skills}
          </a>
          <a href="#contact">
            <span className="num">04</span>
            {data.nav.contact}
          </a>
        </nav>

        <div className="toolbar">
          <button
            type="button"
            className="tb-btn"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            <span style={{ color: "var(--fg)" }}>{ui.lang}</span>
            <span style={{ color: "var(--fg-soft)" }}>/</span>
            <span style={{ color: "var(--fg-soft)" }}>{ui.langSwitch}</span>
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
        </div>
      </div>
    </header>
  );
}
