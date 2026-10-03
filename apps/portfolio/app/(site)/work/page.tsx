import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { getProjects } from "@/lib/db/queries";
import { Reveal, RevealList } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return { title: `${t("sections.allWorkTitle")} — ${t("metadata.title")}` };
}

export default async function WorkPage() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const projects = await getProjects();
  const labels = {
    visit: t("ui.visitSite"),
    screenshot: t.raw("ui.screenshot") as string,
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[88px] flex flex-col gap-12 max-[640px]:px-4 max-[640px]:py-14 max-[640px]:gap-8">
      <Reveal as="div" className="flex flex-col gap-5">
        <Link href="/#work" className="self-start font-mono text-sm text-muted no-underline hover:text-fg">
          {t("ui.backToHome")}
        </Link>
        <SectionHeading
          as="h1"
          eyebrow={t("sections.workEyebrow")}
          title={t("sections.allWorkTitle")}
        />
        <p className="m-0 max-w-[620px] text-muted">{t("sections.allWorkIntro")}</p>
      </Reveal>

      <RevealList
        className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6"
        staggerMs={70}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} locale={locale} labels={labels} />
        ))}
      </RevealList>
    </section>
  );
}
