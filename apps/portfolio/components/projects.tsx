import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { getFeaturedProjects } from "@/lib/db/queries";
import { Reveal } from "@/components/reveal";
import { ProjectList } from "@/components/project-list";

export async function Projects() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const projects = await getFeaturedProjects();

  return (
    <section className="w-[var(--col)] mx-auto" id="work">
      <Reveal
        as="div"
        className="grid grid-cols-[200px_1fr] gap-[clamp(16px,3vw,48px)] max-phone:text-center items-baseline pb-[clamp(28px,4vh,48px)] border-b-2 border-cover max-phone:grid-cols-1"
      >
        <h2 className="font-serif  font-semibold tracking-[-0.006em] text-[clamp(24px,3.2vw,36px)] leading-[1.1] max-w-[28ch] text-fg">
          {t("sections.workTitle")}
        </h2>
        <p className="col-start-3 self-center max-phone:col-start-1 text-fg-muted text-sm font-sans">
          {t("sections.workIntro")}
        </p>
      </Reveal>

      <ProjectList
        projects={projects}
        locale={locale}
        visitLabel={t("ui.visitSite")}
      />

      <div className="flex justify-end max-phone:justify-center pt-[clamp(20px,3vh,28px)]">
        <Link
          href="/work"
          className="group/all inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.05em] text-stamp no-underline px-4 py-2.5 border border-stamp rounded-sm transition-colors duration-200 hover:bg-stamp hover:text-on-stamp focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          {t("ui.viewAllProjects")}
          {/*
          <ExternalArrowIcon className="w-3.5 h-3.5 inline-block transition-transform duration-200 group-hover/all:translate-x-[2px] group-hover/all:-translate-y-[2px]" />
*/}
        </Link>
      </div>
    </section>
  );
}
