"use client";

import { useLang } from "@/components/lang-provider";
import { Reveal, RevealList } from "@/components/reveal";

export function Experience() {
  const { data } = useLang();
  const total = data.experiences.length;

  return (
    <section className="w-[var(--col)] mx-auto" id="experience">
      <Reveal
        as="div"
        className="grid grid-cols-[200px_1fr] gap-[clamp(16px,3vw,48px)] items-baseline pb-[clamp(28px,4vh,48px)] border-b-2 border-cover max-phone:grid-cols-1"
      >
        <h2 className="font-serif font-semibold tracking-[-0.006em] text-[clamp(24px,3.2vw,36px)] leading-[1.1] max-w-[28ch] text-fg">
          {data.sections.experienceTitle}
        </h2>
      </Reveal>

      <RevealList
        className="flex flex-col border-t border-dashed border-hairline-strong"
        staggerMs={90}
      >
        {data.experiences.map((e, i) => (
          <div
            key={e.company}
            className="grid grid-cols-[150px_1fr_160px] gap-[clamp(16px,3vw,40px)] py-[clamp(24px,3.6vh,36px)] px-2 border-b border-dashed border-hairline-strong items-baseline max-tablet:grid-cols-1 max-tablet:gap-2"
          >
            <div className="font-mono text-[11px] tracking-[0.04em] text-gold font-bold max-tablet:order-first">
              {e.period}
            </div>
            <div>
              <h3 className="font-serif font-semibold text-[clamp(20px,2.4vw,26px)] tracking-[-0.005em] leading-[1.15] text-fg">
                {e.company}
              </h3>
              <div className="font-sans font-medium text-fg-muted mt-1 text-sm">
                {e.role}
              </div>
              <p className="font-sans text-[13.5px] text-fg-muted mt-3 max-w-[56ch] leading-[1.6]">
                {e.summary}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {e.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] leading-none tracking-[0.04em] text-fg-muted px-2 py-1 border border-hairline-strong rounded-sm bg-bg-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-[10px] text-fg-soft tracking-[0.06em] uppercase text-right max-tablet:flex-row max-tablet:flex-wrap max-tablet:gap-x-3 max-tablet:gap-y-1 max-tablet:text-left max-tablet:mt-1">
              <span>{e.location}</span>
              <span>
                {data.ui.entryLabel} {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </RevealList>
    </section>
  );
}
