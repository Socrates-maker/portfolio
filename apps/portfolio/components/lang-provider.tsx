"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Lang, PORTFOLIO_DATA, PortfolioContent } from "@/lib/portfolio-data";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  data: PortfolioContent;
};

const LangContext = createContext<LangContextValue | null>(null);

const COOKIE_KEY = "portfolio.lang";

/**
 * initialLang comes from the "portfolio.lang" cookie, read server-side in
 * layout.tsx, so the first client render already matches what the server
 * sent — no post-mount flash from a default language to the stored one.
 */
export function LangProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "fr"
        ? "Socrates Ekpaliguidime — Développeur logiciel"
        : "Socrates Ekpaliguidime — Software developer";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      document.cookie = `${COOKIE_KEY}=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "fr" ? "en" : "fr");
  }, [lang, setLang]);

  const value: LangContextValue = {
    lang,
    setLang,
    toggleLang,
    data: PORTFOLIO_DATA[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
