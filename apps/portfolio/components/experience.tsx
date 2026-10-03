import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { getExperiences } from "@/lib/db/queries";
import { Reveal, RevealList } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export async function Experience() {
  const t = await getTranslations("sections");
  const locale = (await getLocale()) as Locale;
  const experiences = await getExperiences();

  return (
    <section id="experience" className="border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-[88px] flex flex-col gap-10 max-[640px]:px-4 max-[640px]:py-14 max-[640px]:gap-8">
        <Reveal as="div" className="max-[960px]:flex max-[960px]:justify-center max-[960px]:text-center">
          <SectionHeading
            eyebrow={t("experienceEyebrow")}
            title={t("experienceTitle")}
            className="max-[960px]:items-center"
          />
        </Reveal>

        <RevealList className="flex flex-col border-b border-line" staggerMs={90}>
          {experiences.map((e) => (
            <div
              key={e.id}
              className="flex flex-wrap gap-x-10 gap-y-2 py-7 border-t border-line max-[640px]:flex-col max-[640px]:gap-1.5 max-[640px]:py-[22px]"
            >
              <div className="flex-[0_0_180px] flex flex-col gap-1 font-mono text-sm text-muted max-[640px]:flex-auto">
                <span>{e.period[locale]}</span>
                <span className="text-[13px]">{e.location[locale]}</span>
              </div>
              <div className="flex-[1_1_420px] min-w-0 flex flex-col gap-1.5 max-[640px]:flex-auto">
                <h3 className="m-0 text-[22px] font-bold">
                  {e.role[locale]} · {e.company}
                </h3>
                <p className="m-0 text-muted">{e.summary[locale]}</p>
                {e.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 font-mono text-xs">
                    {e.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1.5 border border-line rounded-md text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </RevealList>
      </div>
    </section>
  );
}
