"use client";

import { useLang } from "@/components/lang-provider";
import { Reveal, RevealList } from "@/components/reveal";

export function Skills() {
  const { data } = useLang();

  return (
    <section className="col-w" id="skills">
      <Reveal as="div" className="sec-head">
        <div>
          <span className="eyebrow">{data.sections.skillsKicker}</span>
          <h2 className="title" style={{ marginTop: 12 }}>
            {data.sections.skillsTitle}
          </h2>
        </div>
        <p className="intro">{data.sections.skillsIntro}</p>
      </Reveal>

      <RevealList className="skills-grid" staggerMs={80}>
        {data.skillGroups.map((group) => (
          <div key={group.label}>
            <div className="skill-group-label">{group.label}</div>
            <div className="skill-list">
              {group.items.map((item) => (
                <div key={item} className="skill-item">
                  <span>{item}</span>
                  <span className="arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </RevealList>
    </section>
  );
}
