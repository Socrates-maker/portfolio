"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

function Sparkle({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`absolute text-accent ${className}`}>
      <path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="max-w-[1200px] mx-auto px-6 pt-24 pb-[88px] flex flex-wrap items-end gap-14 max-[1100px]:pt-16 max-[1100px]:pb-[72px] max-[1100px]:gap-12 max-[1100px]:justify-center max-[640px]:px-4 max-[640px]:pt-10 max-[640px]:pb-14 max-[640px]:gap-10"
    >
      <div className="hero-enter flex-[999_1_560px] min-w-0 flex flex-col gap-7 max-[1100px]:basis-full max-[1100px]:items-center max-[1100px]:text-center">
        <h1 className="m-0 font-bold text-[clamp(40px,7vw,96px)] leading-[0.98] tracking-[-0.035em] whitespace-pre-line">
          {t("title")}
        </h1>
        <p className="m-0 max-w-[620px] text-[21px] leading-normal text-muted max-[1100px]:mx-auto max-[640px]:text-lg">
          {t("bio")}
        </p>
        <div className="flex flex-wrap gap-3 mt-2 max-[1100px]:justify-center max-[640px]:w-full">
          <a
            href="#work"
            className="inline-flex items-center justify-center min-h-[52px] px-[26px] bg-accent text-on-accent rounded-[10px] no-underline font-medium transition-opacity hover:opacity-85 max-[640px]:flex-[1_1_100%]"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[52px] px-[26px] border border-line rounded-[10px] no-underline font-medium transition-colors hover:bg-fg/5 max-[640px]:flex-[1_1_100%]"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>

      <div className="hero-enter flex-[1_1_480px] min-w-0 max-w-[540px] max-[1100px]:basis-full max-[1100px]:max-w-[480px] max-[1100px]:mx-auto max-[640px]:max-w-[360px]">
        <div className="relative mt-6 mr-7 mb-7 ml-5 max-[640px]:mt-4 max-[640px]:mr-[18px] max-[640px]:mb-[22px] max-[640px]:ml-3.5">
          <div
            aria-hidden="true"
            className="arch absolute top-7 left-7 -right-7 -bottom-7 bg-accent max-[640px]:top-[18px] max-[640px]:left-[18px] max-[640px]:-right-[18px] max-[640px]:-bottom-[18px]"
          />
          <div className="arch relative aspect-[4/5] overflow-hidden bg-surface">
            <Image
              src="/images/soc1.jpeg"
              alt={t("photoAlt")}
              fill
              priority
              sizes="(max-width: 640px) 360px, (max-width: 1100px) 480px, 540px"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -left-5 top-[22%] w-[132px] h-[132px] rounded-full bg-fg text-bg flex flex-col items-center justify-center gap-2 p-4 box-border text-center -rotate-9 text-[13px] font-bold leading-[1.2] tracking-[0.02em] uppercase max-[640px]:w-24 max-[640px]:h-24 max-[640px]:p-2.5 max-[640px]:text-[10px] max-[640px]:gap-[5px] max-[640px]:-left-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
            <span>{t("badge")}</span>
          </div>

          <div className="absolute -right-6 top-[10%] px-5 py-3 bg-surface text-fg border border-line rounded-full text-sm font-bold tracking-[0.08em] uppercase whitespace-nowrap max-[640px]:text-[11px] max-[640px]:px-[13px] max-[640px]:py-2 max-[640px]:-right-3">
            {t("tag")}
          </div>

          <div className="absolute -left-2 -bottom-3.5 w-[132px] h-[132px] rounded-full border-[6px] border-bg bg-surface overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.18)] max-[640px]:w-[92px] max-[640px]:h-[92px] max-[640px]:border-4">
            <Image
              src="/images/avatar.jpg"
              alt={t("avatarAlt")}
              fill
              sizes="(max-width: 640px) 92px, 132px"
              className="object-cover"
            />
          </div>

          <Sparkle className="w-[34px] h-[34px] -right-1.5 -top-[26px]" />
          <Sparkle className="w-[18px] h-[18px] -right-[50px] bottom-[16%] max-[640px]:-right-3.5" />
        </div>
      </div>
    </section>
  );
}
