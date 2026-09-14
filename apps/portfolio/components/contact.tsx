"use client";

import { useLang } from "@/components/lang-provider";
import { Reveal } from "@/components/reveal";
import { ExternalArrowIcon } from "@/components/icons/arrow-icon";

export function Contact() {
  const { data } = useLang();

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <Reveal as="div">
          <h2 className="contact-title">
            {renderContactTitle(data.sections.contactTitle)}
          </h2>
        </Reveal>

        <Reveal as="div" className="contact-grid" delayMs={120}>
          <div>
            <p className="contact-body">{data.sections.contactBody}</p>
            <a className="contact-email" href={`mailto:${data.contact.email}`}>
              <span>{data.contact.email}</span>
              <span className="arrow" aria-hidden="true">
                <ExternalArrowIcon />
              </span>
            </a>
          </div>

          <div className="signature-line">
            {data.contact.socials.map((s) => (
              <a
                key={s.label}
                className="social-row"
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="social-row-inner">
                  <span className="social-label">{s.label}</span>
                  <span className="row-h">
                    <span className="social-handle">{s.handle}</span>
                    <ExternalArrowIcon />
                  </span>
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
