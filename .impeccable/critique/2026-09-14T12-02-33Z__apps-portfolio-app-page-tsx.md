---
target: the portfolio page
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:/Users/ekpaliguidimesocrates/WebstormProjects/portfolio/apps/portfolio/app/page.tsx"
target_fingerprint: "sha256:82e30a1114f990686818f7da6a1d4196d25aaf6d0651f3792f82e8c80a216f2a"
target_path: /Users/ekpaliguidimesocrates/WebstormProjects/portfolio/apps/portfolio/app/page.tsx
timestamp: 2026-09-14T12-02-33Z
slug: apps-portfolio-app-page-tsx
---
Method: dual-agent (A: independent design-review sub-agent · B: independent detector/browser-evidence sub-agent)

## Design Health Score

Heuristics #7 (Flexibility/Efficiency) and #10 (Help/Documentation) are n/a — Persuade/Experience-mode portfolio, no power-user paths or help system. Applicable max: /32.

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Zero focus/focus-visible rules anywhere in globals.css |
| 2 | Match System / Real World | 4/4 | Content maps cleanly to real hiring-decision expectations |
| 3 | User Control and Freedom | 4/4 | Toggles anytime, no modal traps, externals open in new tabs |
| 4 | Consistency and Standards | 3/4 | Link affordance (arrows) is hover-only, vanishes on touch |
| 5 | Error Prevention | 4/4 | Minimal input surface; mailto/socials unambiguous |
| 6 | Recognition Rather Than Recall | 3/4 | 8 instances of section/nav numerals below 11px legibility floor |
| 8 | Aesthetic and Minimalist Design | 2/4 | Banned kicker-above-heading pattern x4 (once per section), numbered-section-labels x4, cream-palette flag, em-dash overuse |
| 9 | Error Recovery | 4/4 | Nothing to recover from; externals can't break the tab |
| Total | | 26/32 | Good |

## Design Specificity Verdict

LLM assessment: Personalized skin over a generic editorial template. Real project URLs, real employers, one distinctive personal detail ("Applied physics -> software engineering"). But the structural/interaction language (numbered mono eyebrows, italic-serif accent, hairline rows, cream/near-black palette, hover-reveal arrows) is the ubiquitous "Awwwards editorial personal site" pattern, interchangeable across professions. No code artifact, architecture note, demo embed, screenshots, or metrics — nothing in the interaction model is dev-specific.

Deterministic scan: Operationalizes the verdict. kicker-above-heading (an explicit ban in this skill's own floor) fired once per section, all four. Plus numbered-section-labels x4, cream-palette, em-dash-overuse (10 in body text), call-caps-body. All verified real, not false positives. Static CLI scan was clean on the same files; only the browser-runtime scan caught these — the two passes catch different things.

Visual overlays: Injection succeeded and the detector ran live (real DOM mutation confirmed), but the tab was closed after evidence gathering — no overlay is currently visible in the browser.

## Overall Impression

Craft is real, content underneath is real. But the page sells the aesthetic of "thoughtful developer" harder than it proves the substance of one, using several moves this skill would flag as lazy defaults. Biggest opportunity: give the Work section something to evaluate beyond a sentence and an outbound link.

## What's Working

- Contact section: confident question, concrete reassurance ("reply within 24h"), one-tap mailto pill.
- Accessibility-conscious token engineering: inline comments show deliberate AA-contrast recalibration in both themes; prefers-reduced-motion honored in four places.
- Real, consistent type/rhythm system (clamp-based scale, hairline dividers) reused identically across sections.

## Priority Issues

[P0] No proof-of-work depth at the point of decision
- Why it matters: primary conversion action is "decide to reach out"; judging quality requires leaving the site for an unrelated live product with no narrative continuity.
- Fix: lightweight case-study layer per project (screenshots + role/impact line), external link as secondary action.
- Suggested command: /impeccable onboard or /impeccable layout

[P1] No visible keyboard focus state anywhere
- Why it matters: zero focus/focus-visible rules across the codebase; fails WCAG 2.4.7.
- Fix: explicit :focus-visible treatment on every interactive class.
- Suggested command: /impeccable harden

[P1] Systemic generic-template habits, detector-confirmed
- Why it matters: kicker-above-heading (a hard ban) x4, numbered-section-labels x4, cream-palette, em-dash-heavy copy — the countable version of "feels like a template."
- Fix: drop the mono kicker above each h2, let the heading carry the weight; reconsider whether 01/02/03/04 numbering earns its place.
- Suggested command: /impeccable distill or /impeccable typeset

[P1] Link affordance is hover-only on a touch-majority surface
- Why it matters: work-row/social-row/skill-item arrows default to opacity:0, revealed only on :hover — unreliable on touchscreens, the likely first-touch device for a shared portfolio link.
- Fix: low always-on opacity under (hover: none), intensify on hover/focus for pointer devices.
- Suggested command: /impeccable adapt

[P2] No resume/CV download path
- Why it matters: only conversion path is mailto + two socials; pushes all evaluation onto the thin Work section.
- Fix: "Download CV" tertiary link in header toolbar or footer.
- Suggested command: /impeccable clarify

## Persona Red Flags

Jordan (confused first-timer): clicks a project expecting a case study, lands cold on an unrelated site with no warning beyond a hover-only arrow he never saw. No CV anywhere. Bare skill words with no proficiency signal.

Riley (deliberate stress tester): keyboard tabbing gives no focus indicator anywhere (verified). Full-page capture catches scroll-reveal mid-state, rendering sections blank (reproduced directly).

Casey (distracted mobile user): hero meta line wraps with an orphaned "." at 390px. Hover-only arrows give no clickability cue while thumb-scrolling. .work-meta (stack pills, role) is fully hidden below 880px — exactly the proof-of-skill signal disappears on the device most shared links open on.

## Minor Observations

- 8 instances of section/nav numerals below 11px legibility floor.
- heading-rhythm flagged on 3 of 4 section headings (spacing reads as bound to block above).
- site-footer.tsx has a dead commented-out builtWith line.
- Hero portrait (studio headshot) tonally clashes with the warmer editorial copy voice; becomes a very bright block in dark mode.
- Scroll-reveal fragility under non-human-paced rendering (P3): add @media print { opacity: 1 } fallback.

## Questions to Consider

1. What if project rows opened an inline case-study panel before sending the visitor to the live external site?
2. What if this exact structure were reskinned for a photographer or architect with no interaction changes — is "developer portfolio" carried entirely by copy?
3. What if Skills tags linked back to the project that used them, turning a keyword list into evidence?
