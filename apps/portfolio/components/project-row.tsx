"use client";

import { useState } from "react";
import type { Project } from "@/lib/db/schema";
import type { Locale } from "@/lib/locale";
import { ExternalArrowIcon, PlusMinusIcon } from "@/components/icons/arrow-icon";

const ROW_GRID_COLS =
  "grid-cols-[96px_1fr_minmax(140px,220px)_90px] max-tablet:grid-cols-[56px_1fr_68px]";

export function ProjectRow({
  project: p,
  index,
  locale,
  visitLabel,
}: {
  project: Project;
  index: number;
  locale: Locale;
  visitLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const isLink = Boolean(p.url) && p.url !== "#";
  const detailId = `work-detail-${p.id}`;

  const title = p.title[locale];
  const titleWords = title.split(" ");
  const titleLastWord = titleWords.pop() ?? title;
  const titleHead = titleWords.join(" ");

  return (
    <div
      className={`relative border-b border-dashed border-hairline-strong overflow-hidden${isLink ? "" : " cursor-default"}`}
    >
      <button
        type="button"
        className={`group/row appearance-none grid ${ROW_GRID_COLS} items-center gap-[clamp(12px,2vw,28px)] w-full py-[clamp(20px,3vh,28px)] px-2 m-0 bg-transparent border-0 [font:inherit] text-left text-fg cursor-pointer relative transition-colors duration-200 hover:bg-cover/5 focus-visible:bg-cover/5 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold`}
        aria-expanded={open}
        aria-controls={detailId}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`relative flex items-center justify-center w-[74px] h-[74px] rounded-full border-2 [transform:rotate(-8deg)] shrink-0 [filter:url(#ink-rough)] before:content-[''] before:absolute before:inset-1 before:rounded-full before:border before:border-dashed before:opacity-60 max-tablet:w-[52px] max-tablet:h-[52px] ${isLink ? "border-stamp text-stamp before:border-stamp" : "border-fg-soft text-fg-soft before:border-fg-soft"}`}
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] font-bold tracking-[0.04em]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>

        <div>
          <h3 className="font-serif text-[clamp(22px,3vw,34px)] font-semibold leading-[1.08] tracking-[-0.008em] text-fg max-tablet:text-[clamp(20px,6vw,28px)]">
            {titleHead ? `${titleHead} ` : ""}
            {/* keep the last word glued to the toggle so it never wraps alone */}
            <span className="whitespace-nowrap">
              {titleLastWord}
              <span
                className="inline-flex items-center justify-center font-mono text-[0.42em] align-[0.75em] ml-[0.5em] w-[1.7em] h-[1.7em] rounded-full border border-hairline-strong text-fg-soft transition-colors duration-200 group-hover/row:text-on-stamp group-hover/row:border-stamp group-hover/row:bg-stamp group-aria-expanded/row:text-on-stamp group-aria-expanded/row:border-stamp group-aria-expanded/row:bg-stamp [&_svg]:w-3 [&_svg]:h-3"
                aria-hidden="true"
              >
                <PlusMinusIcon open={open} />
              </span>
            </span>
          </h3>
          <p className="font-sans text-[13.5px] text-fg-muted mt-2 max-w-[52ch] leading-[1.55]">
            {p.blurb[locale]}
          </p>
        </div>

        <div className="flex flex-col gap-1.5 font-mono text-[11px] text-fg-muted max-tablet:col-span-3 max-tablet:row-start-2 max-tablet:col-start-1 max-tablet:flex-row max-tablet:flex-wrap max-tablet:items-center max-tablet:gap-x-2.5 max-tablet:gap-y-1.5 max-tablet:mt-2.5">
          <span>{p.kind[locale]}</span>
          <span className="text-fg font-bold max-tablet:after:content-['—'] max-tablet:after:ml-2 max-tablet:after:text-hairline-strong">
            {p.role[locale]}
          </span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {p.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] leading-none tracking-[0.04em] text-fg-muted px-2 py-1 border border-hairline-strong rounded-sm bg-bg-2"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <span className="font-mono text-xs font-bold text-gold text-right max-tablet:col-start-3 max-tablet:row-start-1">
          {p.year}
        </span>
      </button>

      <div
        id={detailId}
        className="group/detail grid grid-rows-[0fr] transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(.2,.8,.3,1)] data-[open=true]:grid-rows-[1fr]"
        data-open={open}
        aria-hidden={!open}
      >
        <div
          className={`overflow-hidden grid ${ROW_GRID_COLS} gap-[clamp(12px,2vw,28px)] px-2`}
        >
          <p className="col-[2/-1] font-sans text-sm leading-[1.6] text-fg-muted max-w-[60ch] pt-1 opacity-0 -translate-y-1 transition-[opacity,transform] duration-[250ms] ease-out group-data-[open=true]/detail:opacity-100 group-data-[open=true]/detail:translate-y-0">
            {p.detail[locale]}
          </p>
          {isLink && (
            <a
              className="group/visit col-[2/-1] inline-flex items-center gap-2 w-fit my-4 mb-7 font-mono text-xs font-semibold uppercase tracking-[0.05em] text-stamp no-underline px-4 py-2.5 border border-stamp rounded-sm opacity-0 -translate-y-1 transition-[opacity,transform,border-color,background-color,color] duration-[250ms] ease-out group-data-[open=true]/detail:opacity-100 group-data-[open=true]/detail:translate-y-0 hover:bg-stamp hover:text-on-stamp focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              tabIndex={open ? 0 : -1}
            >
              {visitLabel}
              <ExternalArrowIcon className="w-3.5 h-3.5 inline-block transition-transform duration-200 group-hover/visit:translate-x-[2px] group-hover/visit:-translate-y-[2px]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
