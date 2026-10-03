"use client";

import { startTransition, useActionState, useEffect, useRef, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";
import { sendContactMessage, type ContactState } from "@/app/(site)/contact-actions";

const LABEL = "font-mono text-[13px] text-muted";
const FIELD =
  "px-3.5 bg-bg text-fg border border-line rounded-[10px] [font:inherit] text-base placeholder:text-muted/70 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-1";

export function Contact() {
  const t = useTranslations();

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    sendContactMessage,
    { status: "idle" }
  );

  // Dispatch manually instead of <form action>: React resets a form after an
  // action runs, which would wipe the visitor's message when sending fails.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => formAction(data));
  };

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <section id="contact" className="border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-[88px] flex flex-wrap gap-14 max-[640px]:px-4 max-[640px]:py-14 max-[640px]:gap-8">
        <Reveal
          as="div"
          className="flex-[1_1_400px] min-w-0 flex flex-col gap-5 max-[960px]:basis-full max-[960px]:items-center max-[960px]:text-center"
        >
          <span className="font-mono text-sm text-muted">{t("sections.contactEyebrow")}</span>
          <h2 className="m-0 font-bold text-[clamp(38px,5.5vw,72px)] leading-none tracking-[-0.035em]">
            {t("sections.contactTitle")}
          </h2>
          <p className="m-0 text-muted max-w-[440px] max-[960px]:max-w-[520px]">{t("sections.contactBody")}</p>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="self-start py-2 text-[22px] font-medium no-underline border-b-2 border-accent [overflow-wrap:anywhere] hover:opacity-75 max-[960px]:self-center max-[640px]:text-[19px]"
          >
            {SITE.contact.email}
          </a>
          <div className="flex flex-wrap gap-2.5 mt-2 max-[960px]:justify-center">
            {SITE.contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 min-h-11 px-4 border border-line rounded-[10px] no-underline text-[15px] transition-colors hover:bg-fg/5"
              >
                {s.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="div"
          delayMs={120}
          className="flex-[1_1_420px] min-w-0 max-[960px]:basis-full max-[960px]:w-full max-[960px]:max-w-[640px] max-[960px]:mx-auto"
        >
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="relative flex flex-col gap-[18px] p-8 bg-surface border border-line rounded-2xl max-[640px]:p-5"
          >
            {/* Honeypot — invisible to people and screen readers. */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              {/* Deliberately not "company"/"website": browser autofill fills those. */}
              <label htmlFor="contact-botcheck">Leave empty</label>
              <input id="contact-botcheck" name="botcheck" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className={LABEL}>
                {t("contactForm.name")}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder={t("contactForm.namePlaceholder")}
                className={`${FIELD} min-h-12`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className={LABEL}>
                {t("contactForm.email")}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder={t("contactForm.emailPlaceholder")}
                className={`${FIELD} min-h-12`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className={LABEL}>
                {t("contactForm.message")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder={t("contactForm.messagePlaceholder")}
                className={`${FIELD} py-3 resize-y`}
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="min-h-[52px] bg-accent text-on-accent border-0 rounded-[10px] [font:inherit] font-medium cursor-pointer transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-wait focus-visible:outline-2 focus-visible:outline-fg focus-visible:outline-offset-2"
            >
              {pending ? t("contactForm.sending") : t("contactForm.send")}
            </button>

            <p role="status" aria-live="polite" className="m-0 min-h-6 text-[15px]">
              {state.status === "success" && (
                <span className="text-fg">
                  <span className="inline-block w-2 h-2 mr-2 rounded-full bg-accent align-middle" aria-hidden="true" />
                  {t("contactForm.success")}
                </span>
              )}
              {state.status === "error" && (
                <span className="text-[#b42318] dark:text-[#ff8a7a]">
                  {state.error === "invalid" ? t("contactForm.invalid") : t("contactForm.failed")}
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
