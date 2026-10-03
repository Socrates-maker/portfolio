import Image from "next/image";
import type { Project } from "@/lib/db/schema";
import type { Locale } from "@/lib/locale";

type Labels = { visit: string; screenshot: string; featured?: string };

function Shot({ project: p, title, alt, sizes }: { project: Project; title: string; alt: string; sizes: string }) {
  const src = p.images[0];
  if (!src) {
    return (
      <div className="hatch absolute inset-0 flex items-center justify-center p-6 text-center font-mono text-[13px] text-muted">
        [{title}]
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />;
}

function Stack({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 font-mono text-xs">
      {items.map((s) => (
        <span key={s} className="px-2.5 py-1.5 border border-line rounded-md">
          {s}
        </span>
      ))}
    </div>
  );
}

function hasLink(p: Project) {
  return Boolean(p.url) && p.url !== "#";
}

export function FeaturedProjectCard({
  project: p,
  locale,
  labels,
}: {
  project: Project;
  locale: Locale;
  labels: Labels;
}) {
  const title = p.title[locale];
  return (
    <article className="flex flex-wrap border border-line rounded-2xl overflow-hidden bg-surface max-[960px]:flex-col">
      <div className="relative flex-[1_1_520px] min-w-0 min-h-[360px] max-[960px]:basis-auto max-[960px]:min-h-[300px] max-[640px]:min-h-[220px]">
        <Shot
          project={p}
          title={title}
          alt={labels.screenshot.replace("{title}", title)}
          sizes="(max-width: 960px) 100vw, 640px"
        />
      </div>
      <div className="flex-[1_1_380px] min-w-0 p-10 flex flex-col gap-5 max-[960px]:basis-auto max-[640px]:p-6">
        <div className="flex justify-between gap-3 font-mono text-[13px] text-muted">
          <span>{labels.featured}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="m-0 text-[34px] leading-[1.1] tracking-[-0.02em] font-bold max-[640px]:text-[26px]">
          {title}
        </h3>
        <p className="m-0 text-muted">{p.detail[locale] || p.blurb[locale]}</p>
        <Stack items={p.stack} />
        {hasLink(p) && (
          <div className="mt-auto pt-2 font-medium">
            <a href={p.url} target="_blank" rel="noreferrer noopener" className="inline-block py-2.5 hover:opacity-75">
              {labels.visit}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export function ProjectCard({
  project: p,
  locale,
  labels,
}: {
  project: Project;
  locale: Locale;
  labels: Labels;
}) {
  const title = p.title[locale];
  return (
    <article className="flex flex-col border border-line rounded-2xl overflow-hidden bg-surface">
      <div className="relative h-[200px]">
        <Shot
          project={p}
          title={title}
          alt={labels.screenshot.replace("{title}", title)}
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>
      <div className="p-7 flex flex-col gap-3.5 grow">
        <div className="flex justify-between gap-3 font-mono text-[13px] text-muted">
          <span>{p.kind[locale]}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="m-0 text-[22px] tracking-[-0.01em] font-bold">{title}</h3>
        <p className="m-0 text-[15px] text-muted">{p.blurb[locale]}</p>
        <Stack items={p.stack.slice(0, 4)} />
        {hasLink(p) && (
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-auto pt-2.5 font-medium hover:opacity-75"
          >
            {labels.visit}
          </a>
        )}
      </div>
    </article>
  );
}
