"use client";

import { useLang } from "@/components/lang-provider";
import { Reveal, RevealList } from "@/components/reveal";

export function Experience() {
  const { data } = useLang();
  const total = data.experiences.length;

  return (
    <section className="col-w" id="experience">
      <Reveal as="div" className="sec-head">
        <div>
          <span className="eyebrow">{data.sections.experienceKicker}</span>
          <h2 className="title" style={{ marginTop: 12 }}>
            {data.sections.experienceTitle}
          </h2>
        </div>
      </Reveal>

      <RevealList className="exp-list" staggerMs={90}>
        {data.experiences.map((e, i) => (
          <div key={e.company} className="exp-row">
            <div className="exp-period">{e.period}</div>
            <div>
              <h3 className="exp-company">{e.company}</h3>
              <div className="exp-role">{e.role}</div>
              <p className="exp-summary">{e.summary}</p>
              <div className="exp-tags">
                {e.tags.map((tag) => (
                  <span key={tag} className="stack-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="exp-side">
              <span>{e.location}</span>
              <span style={{ color: "var(--fg-muted)" }}>
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </RevealList>
    </section>
  );
}
