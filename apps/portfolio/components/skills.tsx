"use client";

import { useLang } from "@/components/lang-provider";
import { Reveal, RevealList } from "@/components/reveal";

export function Skills() {
  const { data } = useLang();

  return (
    <section className="col-w" id="skills">
      <Reveal as="div" className="sec-head">
        <h2 className="title">{data.sections.skillsTitle}</h2>
        <p className="intro">{data.sections.skillsIntro}</p>
      </Reveal>

      <RevealList className="annex-grid" staggerMs={80}>
        {data.skillGroups.map((group) => (
          <div key={group.label} className="annex-group">
            <div className="annex-label">{group.label}</div>
            <div className="annex-list">
              {group.items.map((item, i) => (
                <div key={item} className="annex-item">
                  <span className="annex-item-inner">
                    <span>{item}</span>
                    <span className="no" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </RevealList>
    </section>
  );
}
