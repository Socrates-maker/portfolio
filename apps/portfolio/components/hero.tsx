"use client";

import Image from "next/image";
import { useLang } from "@/components/lang-provider";
import { ArrowIcon } from "@/components/icons/arrow-icon";

export function Hero() {
  const { data } = useLang();

  return (
    <section className="hero col-w" id="top">
      <div className="data-page hero-enter">
        {/*<div className="data-page-cover">
          <span>Curriculum Vitae &middot; Data Page</span>
          <span className="doc-no">No. SE&ndash;2026</span>
        </div>*/}

        <div className="data-page-grid">
          <div>
            <div className="photo-id-box">
              <Image
                src="/images/soc1.jpeg"
                alt={`${data.hero.nameFirst} ${data.hero.nameLast}`}
                fill
                priority
                sizes="(max-width: 880px) 100vw, 280px"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div className="photo-id-caption">{data.hero.photoCaption}</div>
          </div>

          <div className="data-fields">
            <div className="data-field name">
              <span className="f-label">{data.ui.fieldName}</span>
              <h1 className="f-value">
                {data.hero.nameFirst} <em>{data.hero.nameLast}</em>
              </h1>
            </div>

            <div className="data-field role">
              <span className="f-label">{data.ui.fieldProfession}</span>
              <p className="f-value">
                {data.hero.role}
                <span className="accent-chip">{data.hero.roleAccent}</span>
              </p>
            </div>

            <div className="data-field location">
              <span className="f-label">{data.ui.fieldLocation}</span>
              <p className="f-value">{data.hero.eyebrow}</p>
            </div>

            <div className="data-field remarks">
              <span className="f-label">{data.ui.fieldRemarks}</span>
              <p className="f-value">{data.hero.bio}</p>
            </div>

            <div className="data-field background">
              <span className="f-label">{data.ui.fieldPriorField}</span>
              <p className="f-value">{data.hero.footnote}</p>
            </div>
          </div>
        </div>

        <div className="stamp-strip">
          <span className="avail-stamp">
            <span className="live-dot" aria-hidden="true" />
            {data.header.availability}
          </span>
        </div>

        <div className="hero-ctas-row">
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              {data.hero.ctaPrimary}
              <span className="btn-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a href="#work" className="btn btn-ghost">
              {data.hero.ctaSecondary}
              <span
                className="btn-arrow btn-secondary-arrow"
                aria-hidden="true"
              >
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
