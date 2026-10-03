import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { getFeaturedProjects } from "@/lib/db/queries";
import { Reveal, RevealList } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FeaturedProjectCard, ProjectCard } from "@/components/project-card";

export async function Projects() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const [featured, ...rest] = await getFeaturedProjects();
  const labels = {
    visit: t("ui.visitSite"),
    screenshot: t.raw("ui.screenshot") as string,
    featured: t("sections.featured"),
  };

  return (
    <section id="work" className="border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-[88px] flex flex-col gap-12 max-[640px]:px-4 max-[640px]:py-14 max-[640px]:gap-8">
        <Reveal
          as="div"
          className="flex flex-wrap justify-between items-end gap-4 max-[960px]:flex-col max-[960px]:items-center max-[960px]:text-center"
        >
          <SectionHeading
            eyebrow={t("sections.workEyebrow")}
            title={t("sections.workTitle")}
            className="max-[960px]:items-center"
          />
          <Link href="/work" className="font-mono text-sm py-3 hover:opacity-75">
            {t("ui.viewAllProjects")}
          </Link>
        </Reveal>

        {featured && (
          <Reveal as="div">
            <FeaturedProjectCard project={featured} locale={locale} labels={labels} />
          </Reveal>
        )}

        {rest.length > 0 && (
          <RevealList
            className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6"
            staggerMs={80}
          >
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} locale={locale} labels={labels} />
            ))}
          </RevealList>
        )}
      </div>
    </section>
  );
}
