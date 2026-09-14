# Home page — redesign

Scope: full visual redesign of the single-page portfolio (Hero, Work, Experience, Skills, Contact, header/footer). Visitor mode: Experience (portfolio), leaning Persuade at the Contact moment.

Audience/job: a full-time hiring manager or recruiter deciding, in a few minutes, whether to reach out. Action: read the record, verify a project or two, make contact. Proof/content: the four real shipped projects, three real employers, real skills and contact channels already in `lib/portfolio-data.ts` — content stays verbatim (visual-only redesign, confirmed with the user).

Constraints: name/identity, the existing headshot (`public/images/soc1.jpeg`), and the EN/FR + light/dark toggles must all survive. Palette, type, layout, motion, and structure are fully open. A polished result would feel wrong if it reads cold/bureaucratic instead of confidently credible, or if it silently drops the physics-background line, the bilingual toggle, or any real project/employer fact.

## Direction contract

THESIS: Every fact reads as a verified, stamped entry — not an assertion the visitor must take on faith. Refuses the warm-editorial "trust my voice" portfolio (the site's own incumbent look) in favor of "trust the record."

OWN-WORLD: Passport-cover navy (#1a2942), security-paper cream (#f2ecd9), stamp red (#b7282e), foil gold (#a9822f). Ruled data fields, a photo-ID box, circular/rectangular ink-stamp marks per project, a faint guilloché watermark texture, OCR-style monospace for dates and IDs, a cover-strip masthead.

STORY: A recruiter opens what reads like a person's official record — stamped and dated, not pitched. They scan the data page, flip through stamped work and experience pages, and arrive at the signature/contact page already convinced by the paper trail rather than by copywriting.

FIRST VIEWPORT: Cover masthead strip across the top. Left column: a ruled photo-ID box holding the headshot. Right column: ruled fields for name, role, location, bio. An availability stamp strip beneath. Primary action styled as an official "request/apply" stamp-action, not a marketing button.

FORM: Assigned direction, position 6 of 7 in the ordered grounded list, seed key aac00b52 (`concept-seed --scope direction --mode experience`).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
