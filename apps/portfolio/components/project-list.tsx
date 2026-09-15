import type { Project } from "@/lib/db/schema";
import type { Locale } from "@/lib/locale";
import { RevealList } from "@/components/reveal";
import { ProjectRow } from "@/components/project-row";

export function ProjectList({
  projects,
  locale,
  visitLabel,
}: {
  projects: Project[];
  locale: Locale;
  visitLabel: string;
}) {
  return (
    <RevealList
      className="flex flex-col border-t border-dashed border-hairline-strong"
      staggerMs={70}
    >
      {projects.map((p, i) => (
        <ProjectRow key={p.id} project={p} index={i} locale={locale} visitLabel={visitLabel} />
      ))}
    </RevealList>
  );
}
