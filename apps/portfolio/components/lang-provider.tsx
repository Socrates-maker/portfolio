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

const STORAGE_KEY = "portfolio.lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "en") setLangState(stored);
    } catch {}
  }, []);

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
      window.localStorage.setItem(STORAGE_KEY, next);
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
