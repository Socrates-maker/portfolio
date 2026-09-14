"use client";

import { useLang } from "@/components/lang-provider";
import { Reveal, RevealList } from "@/components/reveal";

export function Experience() {
  const { data } = useLang();
  const total = data.experiences.length;

  return (
    <section className="col-w" id="experience">
      <Reveal as="div" className="sec-head">
        <h2 className="title">{data.sections.experienceTitle}</h2>
      </Reveal>

      <RevealList className="endorse-list" staggerMs={90}>
        {data.experiences.map((e, i) => (
          <div key={e.company} className="endorse-row">
            <div className="endorse-period">{e.period}</div>
            <div>
              <h3 className="endorse-company">{e.company}</h3>
              <div className="endorse-role">{e.role}</div>
              <p className="endorse-summary">{e.summary}</p>
              <div className="endorse-tags">
                {e.tags.map((tag) => (
                  <span key={tag} className="stack-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="endorse-side">
              <span>{e.location}</span>
              <span>
                {data.ui.entryLabel} {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </RevealList>
    </section>
  );
}
