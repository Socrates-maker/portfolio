import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { getProjects } from "@/lib/db/queries";
import { Reveal } from "@/components/reveal";
import { ProjectList } from "@/components/project-list";
import { ArrowIcon } from "@/components/icons/arrow-icon";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return { title: `${t("sections.allWorkTitle")} — ${t("metadata.title")}` };
}

export default async function WorkPage() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;
  const projects = await getProjects();

  return (
    <section className="w-[var(--col)] mx-auto py-[var(--section-y)]">
      <Reveal
        as="div"
        className="grid grid-cols-[200px_1fr] gap-[clamp(16px,3vw,48px)] items-baseline pb-[clamp(28px,4vh,48px)] border-b-2 border-cover max-phone:grid-cols-1"
      >
        <h1 className="font-serif font-semibold tracking-[-0.006em] text-[clamp(24px,3.2vw,36px)] leading-[1.1] max-w-[28ch] text-fg">
          {t("sections.allWorkTitle")}
        </h1>
        <div className="col-start-3 max-phone:col-start-1 flex flex-col gap-4">
          <Link
            href="/#work"
            className="self-end inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.05em] text-fg-muted no-underline hover:text-fg"
          >
            <ArrowIcon className="w-3.5 h-3.5 rotate-180" />
            {t("ui.backToHome")}
          </Link>
          <p className="text-fg-muted text-sm font-sans">
            {t("sections.allWorkIntro")}
          </p>
        </div>
      </Reveal>

      <ProjectList
        projects={projects}
        locale={locale}
        visitLabel={t("ui.visitSite")}
      />
    </section>
  );
}
