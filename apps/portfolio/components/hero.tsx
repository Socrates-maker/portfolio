"use client";

import Image from "next/image";
import { useLang } from "@/components/lang-provider";

export function Hero() {
  const { data } = useLang();

  return (
    <section className="hero col-w" id="top">
      <div className="hero-grid">
        {/* Hero content is above the fold — animate via CSS keyframe, no scroll reveal needed */}
        <div className="hero-left hero-enter">
          <div className="hero-eyebrow">
            <span className="live-dot" aria-hidden="true" />
            <span className="eyebrow">{data.header.availability}</span>
            <span style={{ color: "var(--fg-soft)" }}>·</span>
            <span className="eyebrow">{data.hero.eyebrow}</span>
          </div>

          <h1 className="hero-name">
            <span className="first">{data.hero.nameFirst}</span>
            <span className="last">{data.hero.nameLast}</span>
          </h1>

          <p className="hero-role">
            {data.hero.role}
            <em>{data.hero.roleAccent}</em>
          </p>

          <p className="hero-bio">{data.hero.bio}</p>

          <div className="hero-meta">
            <span>{data.hero.footnote}</span>
          </div>

          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              {data.hero.ctaPrimary}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a href="#work" className="btn btn-ghost">
              {data.hero.ctaSecondary}
              <span className="btn-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </div>

        <div
          className="hero-right hero-enter"
          style={{ animationDelay: "80ms" }}
        >
          <div className="portrait">
            <Image
              src="/images/soc1.jpeg"
              alt={`${data.hero.nameFirst} ${data.hero.nameLast}`}
              fill
              priority
              sizes="(max-width: 880px) 100vw, 480px"
              style={{ objectFit: "cover" }}
            />
            <div className="portrait-frame" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
