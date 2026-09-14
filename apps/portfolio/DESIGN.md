---
name: Socrates Ekpaliguidime — Portfolio
description: An official-record portfolio, styled as a passport data page and its stamped dossier pages.
colors:
  paper-cream: "#f2ecd9"
  paper-cream-deep: "#e8dfc2"
  cover-navy: "#1a2942"
  cover-navy-light: "#24345a"
  ink: "#14171c"
  ink-muted: "#4d5258"
  ink-khaki: "#5b5740"
  hairline: "#cfc4a0"
  hairline-strong: "#ab9c68"
  stamp-red: "#a52328"
  foil-gold: "#684c17"
  foil-gold-on-cover: "#d4ac57"
  on-cover: "#f2ecd9"
  on-stamp: "#f8f1df"
typography:
  display:
    fontFamily: "var(--font-zilla-slab), 'Zilla Slab', Georgia, serif"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "var(--font-zilla-slab), 'Zilla Slab', Georgia, serif"
    fontSize: "clamp(24px, 3.2vw, 36px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.006em"
  title:
    fontFamily: "var(--font-zilla-slab), 'Zilla Slab', Georgia, serif"
    fontSize: "clamp(20px, 2.4vw, 34px)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "var(--font-public-sans), 'Public Sans', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "var(--font-courier-prime), 'Courier Prime', ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  hairline-radius: "2px"
  control-radius: "3px"
  seal-radius: "50%"
spacing:
  section-y: "clamp(72px, 10vh, 140px)"
  row-y: "clamp(20px, 2.4vh, 32px)"
  col-w: "min(1180px, 92vw)"
  col-narrow: "min(960px, 90vw)"
components:
  button-primary:
    backgroundColor: "{colors.stamp-red}"
    textColor: "{colors.stamp-red}"
    rounded: "{rounded.control-radius}"
    padding: "14px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control-radius}"
    padding: "14px 22px"
  stamp-mark:
    backgroundColor: "transparent"
    textColor: "{colors.stamp-red}"
    rounded: "{rounded.seal-radius}"
    size: "74px"
    height: "74px"
    width: "74px"
---

# Design System: Socrates Ekpaliguidime — Portfolio

## Overview

**Creative North Star: "The Passport Data Page"**

The site reads as a person's official record, not a pitch: a data page holding a photo-ID box and ruled fields, followed by dossier pages of stamped work entries, endorsements, and a competency annex, closing on a navy signature page. Every claim is presented as an entry in a register — dated, numbered, or stamped — rather than argued for in editorial copy. The world refuses the site's prior warm-editorial "trust my voice" look in favor of "trust the record."

Material character is paper-and-ink: a cream security-paper background carries a faint guilloché watermark grid; a passport-cover navy anchors the header, footer, and contact/signature page; stamp red marks the one interactive accent (availability stamp, primary CTA, project stamp marks, hover ink). Ink-roughened SVG filters (`feTurbulence` + `feDisplacementMap`, via `components/ink-filters.tsx`) are applied only to the handful of elements that represent a physically pressed stamp — the availability stamp, the primary CTA, and each project's circular stamp mark — so the roughening reads as an artifact of ink on paper, not decoration scattered across the page.

**Key Characteristics:**
- Ruled data fields and dashed hairline dividers stand in for cards; there are no boxed/shadowed content cards anywhere in the build.
- A single warm stamp red carries all "action" and "live" meaning (CTA, availability dot, project stamp, hover state on rows) — it does not appear as generic decoration.
- OCR-style monospace (Courier Prime) marks anything that reads as data/metadata (field labels, dates, stack pills, document IDs, nav links); Zilla Slab serif carries every heading and named value; Public Sans carries prose.
- Entry/page numbering (project stamp numbers, annex item numbers, experience "entry 01/03") is load-bearing register pagination intrinsic to the dossier world, not a decorative section-number template.
- Motion is a single authored moment — a scroll-triggered stagger fade/scale-in (`.reveal`/`.reveal.in`, `Reveal`/`RevealList` components) — applied uniformly and fully disabled under `prefers-reduced-motion`.

## Colors

Warm paper and cover-navy carry the field; stamp red is the only accent, reserved for action and live-status.

### Primary
- **Stamp Red** (`#a52328`, `--stamp`): the single accent. Availability stamp, primary CTA fill/border, project stamp-mark rings, hover-state ink on stamp rows, text selection. Darkened from the direction contract's `#b7282e` to clear AA contrast on cream — the build's tuned value is the source of truth, not the contract's.

### Secondary
- **Passport-Cover Navy** (`#1a2942`, `--cover`): header/masthead, footer, and the contact/signature page background; the "cover" surface that frames the "pages."
- **Foil Gold** (`#684c17` on cream via `--gold`, `#d4ac57` on navy via `--gold-on-cover`): document numbers, nav-hover accents, focus rings, endorsement period labels, gold-foil framing on the navy contact page. Two values by design — one tuned for legibility on cream, one for navy — not a duplicate token.

### Neutral
- **Security-Paper Cream** (`#f2ecd9`, `--bg`): base page background, carrying the repeating-linear-gradient watermark grid.
- **Deeper Paper** (`#e8dfc2`, `--bg-2`): panel/annex background, stack-pill fill.
- **Ink** (`#14171c`, `--fg`): primary text and heading color.
- **Ink Muted** (`#4d5258`, `--fg-muted`): secondary body copy (blurbs, summaries, meta).
- **Warm Khaki** (`#5b5740`, `--fg-soft`): field labels and small captions — tuned to clear AA on both paper tones, never a flat gray.
- **Hairline** (`#cfc4a0` / `#ab9c68` strong, `--hairline` / `--hairline-strong`): every rule, dashed row divider, and field underline.

### Named Rules
**The One Accent Rule.** Stamp red is the only color that means "act" or "live" anywhere in the system — CTA, availability dot, project marks, row hover. No other color is reused for that meaning, and stamp red never appears as pure decoration.
**The Tinted-Secondary Rule.** Secondary text is never flat gray; it is tinted warm khaki or ink-mixed, keeping every muted label legible against both paper tones in light and dark.

## Typography

**Display/Serif Font:** Zilla Slab (`--font-zilla-slab`, fallback Georgia, serif)
**Body/Sans Font:** Public Sans (`--font-public-sans`, fallback system-ui)
**Label/Mono Font:** Courier Prime (`--font-courier-prime`, fallback ui-monospace)

**Character:** A slab serif for every heading and named value gives the record its officialese weight; Public Sans carries all prose in a plain, legible voice; Courier Prime marks anything metadata-like (dates, IDs, field labels, nav, stack tags) in an OCR/typewriter register — never used as a generic "technical" costume, only for data and measurement fields.

### Hierarchy
- **Display** (600, `clamp(30px, 4.4vw, 52px)`, line-height 1.02): the name field value on the data page — the one true display moment.
- **Headline** (600, `clamp(24px, 3.2vw, 36px)`, line-height 1.1): section titles (`.sec-head .title`) for Work, Experience, Skills.
- **Title** (600, `clamp(20px, 2.4vw–3vw, 34px)`): work-entry titles, endorsement company names.
- **Body** (400, 13.5–16px, line-height 1.55–1.6, max 52–60ch): blurbs, summaries, contact body, project detail text.
- **Label** (400/700, 9–12px, letter-spacing 0.04–0.16em, uppercase, mono): every ruled-field label, document number, stack pill, entry-count, endorsement period.

### Named Rules
**The Ruled-Field Rule.** Every named fact on the data page pairs a small-caps mono label with a serif or sans value on a hairline-underlined row — the field/value pattern is the system's substitute for a label-above-heading convention.

## Layout

Single-page scroll: Hero (data page) → Work (stamp pages) → Experience (endorsement register) → Skills (competency annex) → Contact (signature page), inside a persistent sticky masthead header and a footer. Content sits in a centered column (`--col: min(1180px, 92vw)`, `--col-narrow: min(960px, 90vw)`); vertical rhythm between sections is `--section-y: clamp(72px, 10vh, 140px)` (halved on mobile to `clamp(40px, 5vh, 64px)`), and internal row rhythm is `--row-y: clamp(20px, 2.4vh, 32px)`.

The data page (hero) is a bordered panel with a two-column grid (photo-ID box + ruled fields) that collapses to one column under 880px, with the photo pinned to a small fixed-width ID-photo size on mobile rather than stretching full-width. Work entries, endorsement rows, and the skills annex are all list-of-rows layouts separated by dashed hairlines rather than boxed cards; the work-entry row and endorsement row both reflow via `grid-template-areas` under 880px (mark/body/year on one line, meta wrapping beneath) instead of stacking to a single column. The skills annex is a bordered 3-column grid of groups (1-column under 720px). The contact page is a two-column grid (body/CTA + signature list) collapsing to one column under 720px.

## Elevation & Depth

Flat by design: there are no box-shadows anywhere in the build. Depth and separation come from paper/ink material cues instead — a 1–2px hairline border on the data-page panel, dashed hairline row dividers throughout, a double-line gold border on the masthead/footer, and a subtle `color-mix` panel tint (4–6% navy into cream) on data-page and annex-group surfaces. The one applied depth effect is the ink-roughening SVG filter (edge displacement, no blur/shadow) on stamp elements, which reads as a pressed-ink artifact, not a lighting effect.

### Named Rules
**The No-Shadow Rule.** The system never uses `box-shadow`. Separation is drawn with hairlines, dashed rules, and paper-tint color-mixes; a card needing to "lift" gets a border or tint, never a shadow.

## Shapes

Corners are sharp almost everywhere (0 radius on rows, panels, pills) with two deliberate exceptions: small controls get a light 2–3px radius (`--control-radius`, buttons, stack pills, accent chips), and true circular marks (the header brand seal, every project's stamp mark) are fully round. Borders are hairline-weight (1px dashed/solid) for structural dividers and 2px solid for emphasis elements (photo-ID box, availability stamp, primary CTA outline). Rotation is used sparingly and only on stamp-like elements — the availability stamp and primary CTA sit at a slight counter-rotation (`-1.2°`/`-2°`), and project stamp marks at `-8°` — imitating an unevenly pressed physical stamp.

## Components

### Buttons
- **Shape:** 3px radius, 2px border, mono uppercase label at 13px/0.05em tracking.
- **Primary (`.btn-primary`):** stamp-red text/border on a faint stamp-red tint fill, a slight counter-rotation, an inset double-ring (`::after`), and the ink-rough SVG filter — styled as a stamped "request" mark, not a marketing button.
- **Ghost (`.btn-ghost`):** ink-colored outline, transparent fill, no rotation or filter — the secondary/"see more" action.
- **Hover/Focus:** primary lifts 1px and deepens its tint; both variants get a 2px gold focus-visible outline; the arrow icon inside any button (`ArrowIcon`) translates 3px on hover.

### Stamp Row (signature component)
The recurring pattern for Work entries: a circular ink-roughened stamp mark holding a 2-digit entry number, a serif title with an inline `+`/`−` expand toggle, a mono meta column (kind/role/stack pills), and a right-aligned gold year. Clicking expands a `grid-template-rows: 0fr → 1fr` panel holding the case-study detail and (when a live URL exists) a "visit site" link with an authored SVG external-arrow icon. Static (no-URL) entries render the same row with a desaturated stamp mark and no toggle affordance implied.

### Endorsement Row
A three-column row (period / company+role+summary+tags / location+entry-count) separated by dashed hairlines, reflowing to a stacked single column under 880px with the period reordered to lead.

### Annex Item (Skills)
A borderless list row inside a bordered 3-column grid group; hovering shifts the row 6px right and turns the text stamp red — the same "ink contact" hover language as the stamp rows.

### Navigation / Masthead
Sticky navy header with a double-line gold bottom border, a circular brand-seal initial, mono-uppercase nav links, and a toolbar of bordered icon/text toggle buttons (language, theme, mobile menu). Under 720px the inline nav is replaced by a menu-toggle button that opens a full-width navy drawer of stacked links.

### Photo-ID Box
A 2px-bordered, 4:5 aspect-ratio image box with a slight desaturation/contrast filter (`grayscale(0.15) contrast(1.04)`) and a centered mono caption beneath — the hero's signature device, fixed at a small ID-photo width on mobile rather than stretching.

## Do's and Don'ts

### Do:
- **Do** treat stamp red as the only accent that signals action or live status (CTA, availability dot, project marks, hover ink); reserve it there and nowhere else.
- **Do** apply the ink-roughening SVG filter (`ink-filters.tsx`) only to elements that represent a physically pressed stamp (availability stamp, primary CTA, project stamp marks) — not as a general texture.
- **Do** pair every named fact with a mono uppercase label over/beside a serif or sans value, following the ruled-field pattern, instead of a boxed card.
- **Do** separate list rows with dashed hairlines and reflow multi-column rows via `grid-template-areas` on mobile rather than stacking to a single naive column.
- **Do** use entry/page numbering (stamp numbers, annex item numbers, "entry NN / NN") where it functions as dossier pagination — this world's numbering carries record-keeping meaning, not decoration.

### Don't:
- **Don't** add a `box-shadow` anywhere; the system has no elevation model beyond hairlines, borders, and paper-tint color-mixes.
- **Don't** wrap content in an icon+heading+text card grid; the incumbent structure is ruled rows and dossier pages, not cards.
- **Don't** add a kicker or eyebrow label above a section heading; the `.sec-head` pattern is heading + optional intro paragraph only.
- **Don't** reach for a hard offset block shadow (`4px 4px 0`); this is a paper-and-ink world, not a neobrutalist one.
- **Don't** introduce a second accent color; stamp red stays the system's only "act/live" signal.
