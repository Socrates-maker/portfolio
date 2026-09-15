"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { ExternalArrowIcon } from "@/components/icons/arrow-icon";
import { SITE } from "@/lib/site";

export function Contact() {
  const t = useTranslations();

  return (
    <section className="bg-cover text-on-cover" id="contact">
      <div className="w-[var(--col)] mx-auto py-[clamp(64px,9vh,120px)]">
        <Reveal as="div">
          <h2 className="font-serif font-semibold text-[clamp(32px,5vw,68px)] leading-[1.04] tracking-[-0.012em] max-w-[18ch] text-on-cover max-phone:text-center">
            {renderContactTitle(t("sections.contactTitle"))}
          </h2>
        </Reveal>

        <Reveal
          as="div"
          className="grid grid-cols-[1.3fr_1fr] gap-[clamp(28px,5vw,80px)] mt-[clamp(32px,5vh,56px)] items-end max-phone:grid-cols-1 max-phone:gap-8 [&>*]:min-w-0 "
          delayMs={120}
        >
          <div className="max-phone:text-center">
            <p className="font-sans text-[15.5px] leading-[1.6] text-on-cover/75 max-w-[48ch] ">
              {t("sections.contactBody")}
            </p>
            <a
              className="group  inline-flex items-center gap-3.5 max-w-full font-mono font-bold text-[clamp(15px,1.6vw,19px)] [overflow-wrap:anywhere] mt-6 px-[22px] py-3.5 border-2 border-gold-on-cover rounded-[3px] no-underline text-gold-on-cover transition-colors duration-200 hover:bg-gold-on-cover hover:text-cover focus-visible:outline focus-visible:outline-2 focus-visible:outline-on-cover focus-visible:outline-offset-2"
              href={`mailto:${SITE.contact.email}`}
            >
              <span>{SITE.contact.email}</span>
              <span
                className="inline-flex transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                aria-hidden="true"
              >
                <ExternalArrowIcon className="w-4 h-4" />
              </span>
            </a>
          </div>

          <div className="flex flex-col border-t border-dashed border-on-cover/30">
            {SITE.contact.socials.map((s) => (
              <a
                key={s.label}
                className="group/social block border-b border-dashed border-on-cover/30 no-underline text-on-cover overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-on-cover focus-visible:-outline-offset-2"
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="flex items-center justify-between gap-3 py-4 transition-[transform,color] duration-200 group-hover/social:translate-x-2 group-hover/social:text-gold-on-cover group-focus-visible/social:translate-x-2 group-focus-visible/social:text-gold-on-cover">
                  <span className="font-serif font-semibold text-[19px] min-w-0">
                    {s.label}
                  </span>
                  <span className="flex items-center gap-2 flex-wrap min-w-0">
                    <span className="font-mono text-[11px] text-on-cover/60 [overflow-wrap:anywhere]">
                      {s.handle}
                    </span>
                    <ExternalArrowIcon className="w-3.5 h-3.5 shrink-0" />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function renderContactTitle(text: string) {
  const trimmed = text.trim();
  const hasQ = trimmed.endsWith("?");
  const stripped = hasQ ? trimmed.slice(0, -1) : trimmed;
  const words = stripped.trim().split(" ");
  if (words.length < 3) {
    return (
      <>
        <em className="italic text-gold-on-cover">{stripped}</em>
        {hasQ ? "?" : ""}
      </>
    );
  }
  const tail = words.slice(-2).join(" ");
  const head = words.slice(0, -2).join(" ");
  return (
    <>
      {head} <em className="italic text-gold-on-cover">{tail}</em>
      {hasQ ? "?" : ""}
    </>
  );
}
