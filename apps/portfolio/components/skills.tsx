import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { getSkillGroups } from "@/lib/db/queries";
import { Reveal, RevealList } from "@/components/reveal";

export async function Skills() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const skillGroups = await getSkillGroups();

  return (
    <section className="w-[var(--col)] mx-auto" id="skills">
      <Reveal
        as="div"
        className="grid grid-cols-[200px_1fr] gap-[clamp(16px,3vw,48px)] items-baseline pb-[clamp(28px,4vh,48px)] border-b-2 border-cover max-phone:grid-cols-1"
      >
        <h2 className="font-serif font-semibold tracking-[-0.006em] text-[clamp(24px,3.2vw,36px)] leading-[1.1] max-w-[28ch] text-fg">
          {t("sections.skillsTitle")}
        </h2>
        <p className="col-start-3 self-center max-phone:col-start-1 max-w-[56ch] text-fg-muted text-sm font-sans">
          {t("sections.skillsIntro")}
        </p>
      </Reveal>

      <RevealList
        className="grid grid-cols-3 gap-px border-t border-l border-dashed border-hairline-strong max-phone:grid-cols-1"
        staggerMs={80}
      >
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="p-[clamp(24px,3vw,32px)] border-r border-b border-dashed border-hairline-strong bg-[color-mix(in_oklab,var(--color-bg)_97%,var(--color-cover)_3%)]"
          >
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-gold mb-4 font-bold">
              {group.label[locale]}
            </div>
            <div className="flex flex-col">
              {group.items.map((item, i) => (
                <div
                  key={item}
                  className="group font-serif font-medium text-[clamp(17px,1.6vw,20px)] py-[9px] border-b border-hairline flex justify-between items-baseline cursor-default overflow-hidden last:border-b-0"
                >
                  <span className="flex justify-between w-full items-baseline [transition:color_.2s,transform_.22s_ease] group-hover:text-stamp group-hover:translate-x-1.5">
                    <span>{item}</span>
                    <span
                      className="font-mono text-[10px] text-fg-soft"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </RevealList>
    </section>
  );
}
