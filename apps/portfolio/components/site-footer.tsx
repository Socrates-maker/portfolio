"use client";

import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-7 flex flex-wrap justify-between gap-3 font-mono text-[13px] text-muted max-[640px]:px-4 max-[640px]:py-6 max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center">
        <span>{t("copy")}</span>
        <span>{t("madeBy")}</span>
      </div>
    </footer>
  );
}
