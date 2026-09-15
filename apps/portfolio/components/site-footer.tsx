"use client";

import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations();
  return (
    <footer className="border-t-[3px] border-double border-gold-on-cover bg-cover text-on-cover/65 py-7 font-mono text-[10.5px] tracking-[0.06em] uppercase">
      <div className="w-[var(--col)] mx-auto flex justify-center gap-[18px] flex-wrap text-center">
        <span>{t("footer.copy")}</span>
      </div>
    </footer>
  );
}
