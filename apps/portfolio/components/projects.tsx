import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { getProjects } from "@/lib/db/queries";
import { Reveal, RevealList } from "@/components/reveal";
import { ProjectRow } from "@/components/project-row";

export async function Projects() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const projects = await getProjects();

  return (
    <section className="w-[var(--col)] mx-auto" id="work">
      <Reveal
        as="div"
        className="grid grid-cols-[200px_1fr] gap-[clamp(16px,3vw,48px)] items-baseline pb-[clamp(28px,4vh,48px)] border-b-2 border-cover max-phone:grid-cols-1"
      >
        <h2 className="font-serif font-semibold tracking-[-0.006em] text-[clamp(24px,3.2vw,36px)] leading-[1.1] max-w-[28ch] text-fg">
          {t("sections.workTitle")}
        </h2>
        <p className="col-start-2 max-phone:col-start-1 max-w-[56ch] text-fg-muted text-sm font-sans">
          {t("sections.workIntro")}
        </p>
      </Reveal>

      <RevealList
        className="flex flex-col border-t border-dashed border-hairline-strong"
        staggerMs={70}
      >
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} locale={locale} visitLabel={t("ui.visitSite")} />
        ))}
      </RevealList>
    </section>
  );
}
