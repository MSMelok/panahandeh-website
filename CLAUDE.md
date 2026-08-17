# Panahandeh Foodstuff Trading L.L.C — website

Three competing homepage designs at `/v1/`, `/v2/`, `/v3/`, with a selector at the root.
Static HTML, no build step. Deployed to Vercel at https://panahandeh.devsource.dev.

## Design System

Always read `DESIGN.md` before making any visual or UI decision. All colours, typefaces,
spacing and brand marks are defined there. Do not deviate without explicit approval.
In QA, flag any code that does not match `DESIGN.md`.

Three things in that file are load-bearing and easy to get wrong:

- **Antique gold `#B08A4A` cannot carry text on a light ground** — 2.36:1 on warm ivory.
  On light surfaces gold is ornament only; the accent role goes to deep burgundy.
- **Cinzel has no italic.** Never apply `font-style: italic` to display type.
- **Panahandeh is the company, RAVOMA is the product brand.** Never merge them. The TP
  monogram is Panahandeh's mark; the leaf wordmark is RAVOMA's.

## Verify contrast against the render, not the tokens

Two contrast failures shipped because the values were built in JavaScript — per-card
grounds and the globe gradient — which a token-level audit never sees. After any palette
change, render the full page and look at it.

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
