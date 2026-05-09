"use client";

import { useLang } from "@/components/lang-provider";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const { data } = useLang();

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <Reveal as="div">
          <span className="eyebrow">{data.sections.contactKicker}</span>
          <h2 className="contact-title" style={{ marginTop: 18 }}>
            {renderContactTitle(data.sections.contactTitle)}
          </h2>
        </Reveal>

        <Reveal as="div" className="contact-grid" delayMs={120}>
          <div>
            <p className="contact-body">{data.sections.contactBody}</p>
            <a className="contact-email" href={`mailto:${data.contact.email}`}>
              <span>{data.contact.email}</span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="socials">
            {data.contact.socials.map((s) => (
              <a
                key={s.label}
                className="social-row"
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="social-label">{s.label}</span>
                <span className="row-h">
                  <span className="social-handle">{s.handle}</span>
                  <span style={{ color: "var(--fg-soft)" }}>↗</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function renderContactTitle(text: string) {
  const trimmed = text.trim();
  const hasQ = trimmed.endsWith("?");
  const stripped = hasQ ? trimmed.slice(0, -1) : trimmed;
  const words = stripped.trim().split(" ");
  if (words.length < 3) {
    return (
      <>
        <em>{stripped}</em>
        {hasQ ? "?" : ""}
      </>
    );
  }
  const tail = words.slice(-2).join(" ");
  const head = words.slice(0, -2).join(" ");
  return (
    <>
      {head} <em>{tail}</em>
      {hasQ ? "?" : ""}
    </>
  );
}
