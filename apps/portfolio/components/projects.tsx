"use client";

import { useLang } from "@/components/lang-provider";
import { PortfolioProject } from "@/lib/portfolio-data";
import { Reveal, RevealList } from "@/components/reveal";

export function Projects() {
  const { data } = useLang();

  return (
    <section className="col-w" id="work">
      <Reveal as="div" className="sec-head">
        <div>
          <span className="eyebrow">{data.sections.workKicker}</span>
          <h2 className="title" style={{ marginTop: 12 }}>
            {data.sections.workTitle}
          </h2>
        </div>
        <p className="intro">{data.sections.workIntro}</p>
      </Reveal>

      <RevealList className="work-list" staggerMs={70}>
        {data.projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </RevealList>
    </section>
  );
}

function ProjectRow({
  project: p,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const isLink = p.url && p.url !== "#";
  return (
    <a
      className="work-row"
      href={isLink ? p.url : undefined}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noreferrer noopener" : undefined}
      onClick={(e) => {
        if (!isLink) e.preventDefault();
      }}
    >
      <span className="work-num">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 className="work-title">
          {p.title}
          <span className="work-arrow" aria-hidden="true">
            ↗
          </span>
        </h3>
        <p className="work-blurb">{p.blurb}</p>
      </div>
      <div className="work-meta">
        <span>{p.kind}</span>
        <span className="role">{p.role}</span>
        <div className="work-stack">
          {p.stack.slice(0, 4).map((s) => (
            <span key={s} className="stack-pill">
              {s}
            </span>
          ))}
        </div>
      </div>
      <span className="work-year">{p.year}</span>
    </a>
  );
}
