# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers and technical recruiters at companies evaluating Socrates Ekpaliguidime for full-time full-stack developer roles. (Confirmed 2026-09-14 — this is a deliberate shift from the current site's contract/consulting-oriented framing toward full-time employer evaluation.)

## Product Purpose

A personal portfolio that helps a hiring manager or recruiter decide, within a few minutes, whether to reach out about a full-time role — by presenting real shipped work, employment history, and technical range clearly enough to evaluate competence without needing to leave the site for context.

## Positioning

Real, verifiable shipped products (four live URLs a visitor can click through to) and real employment history (Digit Consults, Le Baromètre, Agrosfer) building for clients across West Africa, backed by an applied-physics-to-software-engineering background — not a template portfolio populated with generic project cards and no way to verify anything.

## Operating Context

- Primarily evaluated cold by a recruiter or hiring manager scanning quickly, often on a phone (shared link, LinkedIn, email).
- Bilingual audience: French and English (Benin/West Africa plus international).
- A visitor may click through to a live project URL to verify the work firsthand before deciding to reach out.
- Contact happens via email or LinkedIn/X — there is no in-site contact form.

## Capabilities and Constraints

- Built on Next.js 16 / React 19 / Tailwind v4, a single-page scrolling site (Hero, Work, Experience, Skills, Contact) plus a persistent header/footer.
- EN/FR language toggle (client-side, cookie-persisted, SSR-aware) and light/dark theme toggle both must keep working.
- Content is static — no CMS or backend; all copy lives in `lib/portfolio-data.ts`.
- **Open tension, not resolved by this redesign:** the user confirmed the audience is now full-time employers, but the existing copy ("Open to full-stack contracts, technical consulting") is contract-flavored. The user asked to keep content verbatim for this visual-only redesign, so this mismatch is preserved as-is rather than silently rewritten — worth a dedicated content pass later.

## Brand Commitments

- Name/identity — "Socrates Ekpaliguidime" must remain the visible identity throughout.
- The existing headshot photo (`public/images/soc1.jpeg`) must be used somewhere in the design.
- Bilingual EN/FR support must be preserved (toggle plus full content in both languages).
- Everything else — palette, typography, layout, motion, structure, component design — is explicitly open to full reinvention. The current "editorial serif portfolio" look is evidence and anti-reference only, not a constraint.

## Evidence on Hand

- Four real shipped projects with live URLs, each with kind/year/stack/role and a one-line case-study detail already written: ADDB Secure Ticket (secure-eticket.com), Favori (favoris.app), Event Chat (eventchat.chat), Assouka Magazine (assoukamagazine.com).
- Three real employers with dates, role, location, and a summary: Digit Consults (2022–present, Cotonou), Le Baromètre (2023, contract), Agrosfer (2022–2023, contract).
- Real skills grouped Frontend / Backend / DevOps & tools.
- Real contact channels: email, LinkedIn, X/Twitter.
- No résumé/CV file exists yet — do not fabricate or imply one exists.
- No project screenshots exist yet (`PortfolioProject.screenshot` is an unset optional field) — do not fabricate images; design around real photography/UI captures being absent for now.

## Product Principles

1. Evidence over assertion — every claim ties to a real, checkable project, employer, or contact channel; never invent metrics, testimonials, or logos.
2. Fast to evaluate — a recruiter must be able to judge competence within the first screen or two, not after extensive digging.
3. Bilingual parity — French and English are equally first-class, not a bolt-on toggle.
4. Distinct, not templated — the redesign must read as built specifically around a software developer's evidence (real code/product artifacts), not a reskinned generic "editorial personal site" template interchangeable with any other creative profession.
5. Mobile-first legibility — the audience frequently opens this from a shared link on a phone; the design must hold up there first, not as an afterthought of a desktop layout.

## Accessibility & Inclusion

- Keyboard focus visibility and touch-friendly affordances have been known gaps in the current build (flagged in a prior audit); the redesign should not regress them and should ideally close them.
- WCAG AA color contrast in both light and dark themes is an existing commitment already tuned into the current token set and should carry forward.
