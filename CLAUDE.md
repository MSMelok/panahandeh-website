# Panahandeh Foodstuff Trading L.L.C — website

Astro site, prerendered: 15 routes in each of English (`/`), Persian (`/fa/`) and Arabic
(`/ar/`), 45 pages. The only server route is `/api/enquiry`. Deployed to Vercel at
https://panahandeh.devsource.dev.

The three competing demos at `/v1/`, `/v2/`, `/v3/` were removed once the client chose
design 03; `vercel.json` redirects those paths to the root. Do not resurrect them.

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All colours, typefaces,
spacing and brand marks are defined there. Do not deviate without explicit approval.
In QA, flag any code that does not match `DESIGN.md`.

Three things in that file are load-bearing and easy to get wrong:

- **The ground is `#FFFFF0` and the site is light.** It inverted from obsidian on
  19 Aug 2026. Brand colours kept their names; only the semantic tokens flipped.
- **Antique gold `#B08A4A` cannot carry text** — 3.16:1 on the ground. Gold is
  ornament and borders. Accent text is burgundy `#5A171B`; anything that must read as
  gold uses `#7A4A1E`. The RAVOMA wordmark is gold artwork, so it keeps a dark field.
- **Persian and Arabic do not share a typeface.** Same script, different letterforms — ک/ك
  and ی/ي — and Persian needs گ چ پ ژ, which many Arabic faces render badly. Persian uses
  Vazirmatn/Gulzar, Arabic uses Tajawal/Amiri. Never collapse them into one stack.
- **Panahandeh is the company, RAVOMA is the product brand.** Never merge them. Both marks
  are the client's own artwork and are deliberately raster, not vector: flattening the P
  monogram loses the Persian پ set in relief inside its bowl.
- **Arabic numerals reverse without help.** Persian digits are bidi class EN and survive an
  LTR isolate; Arabic-Indic digits are class AN and do not. Use `digits()` in data/i18n.ts.

## Verify contrast against the render, not the tokens

Two contrast failures shipped because the values were built in JavaScript — per-card
grounds and the globe gradient — which a token-level audit never sees. After any palette
change, render the full page and look at it. The reliable method is to render twice, once
with the text hidden, and measure the glyph pixels against the ground beneath them; a
bounding-box measurement catches ornament sitting beside the text and reports false
failures.

## Three-language changes are never two-language changes

`fa ? x : y` silently serves English to Arabic readers. It has been fixed eight times in
this repo. Use `t()` or a three-way `pick3` helper, never a two-way ternary.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
