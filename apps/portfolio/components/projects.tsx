"use client";

import { useState } from "react";
import { useLang } from "@/components/lang-provider";
import { PortfolioProject } from "@/lib/portfolio-data";
import { Reveal, RevealList } from "@/components/reveal";
import { ExternalArrowIcon, PlusMinusIcon } from "@/components/icons/arrow-icon";

export function Projects() {
  const { data } = useLang();

  return (
    <section className="col-w" id="work">
      <Reveal as="div" className="sec-head">
        <h2 className="title">{data.sections.workTitle}</h2>
        <p className="intro">{data.sections.workIntro}</p>
      </Reveal>

      <RevealList className="stamp-list" staggerMs={70}>
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
  const { data } = useLang();
  const [open, setOpen] = useState(false);
  const isLink = Boolean(p.url) && p.url !== "#";
  const detailId = `work-detail-${p.id}`;

  const titleWords = p.title.split(" ");
  const titleLastWord = titleWords.pop() ?? p.title;
  const titleHead = titleWords.join(" ");

  return (
    <div className={`stamp-row${isLink ? "" : " stamp-row-static"}`}>
      <button
        type="button"
        className="stamp-row-inner"
        aria-expanded={open}
        aria-controls={detailId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="stamp-mark" aria-hidden="true">
          <span className="no">{String(index + 1).padStart(2, "0")}</span>
        </span>
        <div className="work-title-block">
          <h3 className="work-title">
            {titleHead ? `${titleHead} ` : ""}
            {/* keep the last word glued to the toggle so it never wraps alone */}
            <span className="work-title-tail">
              {titleLastWord}
              <span className="work-toggle" aria-hidden="true">
                <PlusMinusIcon open={open} />
              </span>
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
      </button>

      <div id={detailId} className="work-detail" data-open={open} aria-hidden={!open}>
        <div className="work-detail-inner">
          <p className="work-detail-text">{p.detail}</p>
          {isLink && (
            <a
              className="work-visit"
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              tabIndex={open ? 0 : -1}
            >
              {data.ui.visitSite}
              <ExternalArrowIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
