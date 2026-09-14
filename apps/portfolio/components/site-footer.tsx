"use client";

import { useLang } from "@/components/lang-provider";

export function SiteFooter() {
  const { data } = useLang();
  return (
    <footer className="site-footer">
      <div className="inner">
        <span>{data.footer.copy}</span>
      </div>
    </footer>
  );
}
