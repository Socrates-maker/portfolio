"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SITE } from "@/lib/site";
import { ArrowIcon } from "@/components/icons/arrow-icon";

const FIELD_ROW =
  "py-3 border-b border-hairline grid grid-cols-[140px_1fr] gap-4 items-baseline first:pt-0 max-tablet:grid-cols-1 max-tablet:gap-1 ";
const FIELD_LABEL =
  "font-mono text-[10px] tracking-[0.1em] uppercase text-fg-soft";
const FIELD_VALUE = "font-serif font-semibold";

const BTN =
  "appearance-none cursor-pointer whitespace-nowrap font-mono text-[9.5px] md:text-[13px] leading-none font-semibold tracking-[0.02em] md:tracking-[0.05em] uppercase px-2 md:px-[22px] py-3.5 rounded-[3px] inline-flex items-center justify-center gap-1.5 md:gap-2.5 transition-[transform,background-color,color,border-color] duration-200 no-underline border-2 border-transparent group";

export function Hero() {
  const t = useTranslations();

  return (
    <section
      className="w-[var(--col)] mx-auto pt-[clamp(40px,7vh,88px)] pb-[clamp(48px,7vh,88px)]"
      id="top"
    >
      <div className="border border-hairline-strong bg-[color-mix(in_oklab,var(--color-bg)_96%,var(--color-cover)_4%)] relative hero-enter">
        <div className="grid grid-cols-[minmax(200px,280px)_1fr] gap-[clamp(24px,4vw,48px)] p-[clamp(24px,4vw,40px)] max-tablet:grid-cols-1">
          <div>
            <div className="relative w-full aspect-[4/5] border-2 border-fg bg-bg-2 overflow-hidden max-tablet:w-[148px] max-tablet:mx-auto max-tablet:aspect-square max-tablet:rounded-full">
              <Image
                src="/images/soc1.jpeg"
                alt={`${SITE.nameFirst} ${SITE.nameLast}`}
                fill
                priority
                sizes="(max-width: 880px) 100vw, 280px"
                className="object-cover object-top"
              />
            </div>
            <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-fg-soft text-center mt-2 max-tablet:w-[148px] max-tablet:mx-auto">
              {t("hero.photoCaption")}
            </div>
          </div>

          <div className="flex flex-col">
            <div className={FIELD_ROW}>
              <span className={FIELD_LABEL}>{t("ui.fieldName")}</span>
              <h1
                className={`${FIELD_VALUE} text-[clamp(30px,4.4vw,52px)] leading-[1.02] tracking-[-0.01em] text-fg`}
              >
                {SITE.nameFirst}{" "}
                <em className="italic text-stamp">{SITE.nameLast}</em>
              </h1>
            </div>

            <div className={FIELD_ROW}>
              <span className={FIELD_LABEL}>{t("ui.fieldProfession")}</span>
              <p className="font-sans font-medium text-[clamp(15px,1.6vw,18px)] text-fg-muted">
                {t("hero.role")}
                <span className="inline-block whitespace-nowrap font-mono font-normal text-[0.75em] bg-gold/20 border border-gold px-2 py-0.5 rounded-sm ml-2 uppercase tracking-[0.04em]">
                  {t("hero.roleAccent")}
                </span>
              </p>
            </div>

            <div className={FIELD_ROW}>
              <span className={FIELD_LABEL}>{t("ui.fieldLocation")}</span>
              <p className="font-mono font-normal text-[13px] tracking-[0.03em] uppercase text-fg-muted">
                {t("hero.eyebrow")}
              </p>
            </div>

            <div className={`${FIELD_ROW} border-b-0`}>
              <span className={FIELD_LABEL}>{t("ui.fieldRemarks")}</span>
              <p className="font-sans font-normal text-[clamp(14.5px,1.05vw,16px)] leading-[1.6] text-justify text-fg/85 dark:text-fg">
                {t("hero.bio")}
              </p>
            </div>

            {/* <div className={`${FIELD_ROW} border-b-0 pb-0`}>
              <span className={FIELD_LABEL}>{t("ui.fieldPriorField")}</span>
              <p className="font-mono font-normal text-[12.5px] uppercase tracking-[0.03em] text-fg-muted">
                {t("hero.footnote")}
              </p>
            </div>*/}
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row   md:justify-between border-t border-dashed border-hairline-strong ">
          {/*  <div className="flex items-center gap-3.5 flex-wrap px-[clamp(24px,4vw,40px)] py-[clamp(16px,3vw,24px)] ">
            <span className="inline-flex items-center gap-2 border-2 border-stamp text-stamp rounded-[3px] px-3 py-1.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase [transform:rotate(-2deg)] [filter:url(#ink-rough)]">
              <span
                className="w-1.5 h-1.5 rounded-full bg-stamp motion-safe:animate-[liveBlink_2.2s_ease-in-out_infinite]"
                aria-hidden="true"
              />
              {t("header.availability")}
            </span>
          </div>*/}

          <div className="w-full md:w-auto px-[clamp(24px,4vw,40px)] pb-[clamp(28px,4vw,40px)]">
            <div className="flex gap-1.5 md:gap-3 mt-7 flex-nowrap">
              <a
                href="#contact"
                className={`${BTN} flex-1 md:flex-none relative bg-stamp/9 text-stamp border-stamp [transform:rotate(-1.2deg)] [filter:url(#ink-rough-lg)] after:content-[''] after:absolute after:inset-1 after:rounded-sm after:border after:border-stamp after:pointer-events-none hover:[transform:rotate(-1.2deg)_translateY(-1px)] hover:bg-stamp/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2`}
              >
                {t("hero.ctaPrimary")}
                <span
                  className="inline-flex transition-transform duration-200 group-hover:translate-x-[3px]"
                  aria-hidden="true"
                >
                  <ArrowIcon className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
                </span>
              </a>
              <a
                href="#work"
                className={`${BTN} flex-1 md:flex-none bg-transparent text-fg border-fg hover:bg-fg/6 focus-visible:outline focus-visible:outline-gold focus-visible:outline-offset-2`}
              >
                {t("hero.ctaSecondary")}
                <span
                  className="inline-flex [transform:rotate(90deg)] transition-transform duration-200 group-hover:[transform:rotate(90deg)_translateX(3px)]"
                  aria-hidden="true"
                >
                  <ArrowIcon className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
