import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { getSkillGroups } from "@/lib/db/queries";
import { Reveal, RevealList } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export async function Skills() {
  const t = await getTranslations("sections");
  const locale = (await getLocale()) as Locale;
  const skillGroups = await getSkillGroups();

  return (
    <section id="skills" className="border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-[88px] flex flex-wrap gap-12 max-[640px]:px-4 max-[640px]:py-14 max-[640px]:gap-8">
        <Reveal
          as="div"
          className="flex-[1_1_300px] min-w-0 flex flex-col gap-3 max-[960px]:basis-full max-[960px]:items-center max-[960px]:text-center"
        >
          <SectionHeading
            eyebrow={t("skillsEyebrow")}
            title={t("skillsTitle")}
            className="max-[960px]:items-center"
          />
          <p className="m-0 text-muted max-[960px]:max-w-[520px]">{t("skillsIntro")}</p>
        </Reveal>

        <RevealList
          className="flex-[999_1_560px] min-w-0 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t border-l border-line max-[960px]:basis-full max-[960px]:grid-cols-2 max-[480px]:grid-cols-1"
          staggerMs={80}
        >
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="p-7 border-r border-b border-line flex flex-col gap-3.5 max-[960px]:items-center max-[960px]:text-center max-[640px]:p-5 max-[480px]:px-4 max-[480px]:py-[22px] max-[480px]:gap-2.5"
            >
              <span className="font-mono text-[13px] text-muted">{group.label[locale]}</span>
              <ul className="m-0 p-0 list-none text-[19px] leading-[1.7] max-[480px]:text-[17px] max-[480px]:leading-[1.6]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </RevealList>
      </div>
    </section>
  );
}
