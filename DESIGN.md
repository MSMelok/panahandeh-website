---
name: RAVOMA — Persian Heritage & Luxury
source: client identity board, 17 Aug 2026 (brand/newBrandID.png, gitignored)
colors:
  obsidian: '#171513'
  obsidian-deep: '#0C0B0A'
  obsidian-900: '#12100F'
  obsidian-700: '#221E1A'
  obsidian-600: '#2E2823'
  antique-gold: '#B08A4A'
  gold-light: '#D6B37A'
  gold-pale: '#E8CFA4'
  gold-text-on-ivory: '#7A4A1E'
  deep-burgundy: '#5A171B'
  saffron-red: '#8F1D24'
  warm-ivory: '#E8DCC8'
  ivory-2: '#DCCDB4'
  ivory-3: '#C9B694'
  body-on-ivory: '#3E362E'
  muted-on-ivory: '#5A4F43'
usage-ratio:
  obsidian: 60%
  antique-gold: 20%
  deep-burgundy: 15%
  warm-ivory: 5%
typography:
  display:
    fontFamily: Cinzel
    weights: [400, 600, 700, 800, 900]
    note: no lowercase, no italic
  body:
    fontFamily: Montserrat
    weights: [300, 400, 500, 600, 700]
  data:
    fontFamily: IBM Plex Mono
    note: design 02 only — specification tables, HS codes, coordinates
  arabic:
    fontFamily: Amiri
  persian:
    fontFamily: Vazirmatn
    display: Gulzar
scale:
  hero: clamp(2.65rem, 7.4vw, 6.4rem)
  h2: clamp(2rem, 3.6vw, 3.3rem)
  h3: clamp(1.35rem, 2vw, 1.7rem)
  lede: clamp(17px, 1.35vw, 19px)
  body: 16px
  label: 10-11.5px uppercase, 0.2-0.36em tracking
radius:
  default: 0
  circle: 50%
spacing:
  unit: 4px
  container-max: 1280px
  gutter-mobile: 20px
  gutter-tablet: 32px
  gutter-desktop: 56-64px
  section-rhythm: clamp(72px, 9vw, 124px)
---

## Product Context

- **What this is:** Marketing site for Panahandeh Foodstuff Trading L.L.C, a Dubai trading house
  exporting pulses, beans and spices through Jebel Ali under its own RAVOMA label.
- **Who it's for:** B2B buyers — importers, distributors, retail buyers sourcing by specification.
- **Space:** Agricultural commodity trade, premium end. Peers present as either commodity brokers
  (dense, functional) or luxury food brands (photographic, sparse). This sits between the two.
- **Project type:** Marketing site, three competing directions at `/v1/`, `/v2/`, `/v3/`.
- **Naming:** Panahandeh is the company; RAVOMA is the brand on the packs. Never merge them.

**The memorable thing** — stated by the client on their identity board, not invented here:

> A modern expression of Persian heritage and luxury.
> Authentic · Premium · Persian · Refined · Luxury

Every decision below serves that line. When a choice is genuinely open, pick the option that
reads as heritage rather than as software.

## Aesthetic Direction

- **Direction:** Luxury / Refined, with Persian ornament as the differentiator.
- **Decoration level:** Intentional. Ornament earns its place — the stigma leaf in the wordmark,
  girih tessellation in design 03, gold hairlines. Never decorative blobs or gradient fills.
- **Mood:** Old-world trading house that ships on time. Weight and stillness, not motion and gloss.
- **Anti-pattern for this brand:** anything that reads as a SaaS template. No purple, no gradient
  CTAs, no icon-in-a-circle feature grids, no bubble radius.

## Color

Five colours from the client's board, with a stated usage ratio of 60 / 20 / 15 / 5.

| Role | Hex | Notes |
|---|---|---|
| Obsidian Black | `#171513` | Ground, 60%. Deepest variant `#0C0B0A` for page background. |
| Antique Gold | `#B08A4A` | Accent, 20%. **Text-safe on obsidian only.** |
| Deep Burgundy | `#5A171B` | 15%. Accent text on light grounds, 9.9:1 on ivory. |
| Saffron Red | `#8F1D24` | Fills and secondary accent. 6.5:1 on ivory. |
| Warm Ivory | `#E8DCC8` | 5% in the dark mix; the ground itself in design 02. |

**Two constraints, both measured, both learned the hard way:**

1. **Antique gold cannot carry text on a light ground.** `#B08A4A` on `#E8DCC8` is **2.36:1** —
   it fails AA for text and fails 3:1 for UI boundaries. On light surfaces gold is ornament only:
   rules, the stigma leaf, hairlines. The accent role goes to deep burgundy.
2. **Antique gold at partial opacity fails on obsidian.** Solid gold on obsidian is 5.71:1, but at
   75–80% opacity it drops to 4.09–4.29:1. Use solid gold, or step up to `#D6B37A`.

For gold-coloured *text* on an ivory ground, use `#7A4A1E` (5.49:1), not the brand gold.

**The board has a typo.** It prints Antique Gold as `#B0BA4A`, which is olive-green and contradicts
its own amber swatch; sampling the swatch returns `#9E6228`. This system uses `#B08A4A`. Confirm
with the client before anything goes to print.

## Typography

- **Display: Cinzel.** An inscriptional Roman face. Carries the heritage claim better than a
  Didone would, and it is what the RAVOMA wordmark is set in.
- **Body: Montserrat.** The client's stated secondary. Wide tracking on uppercase labels.
- **Data: IBM Plex Mono**, design 02 only, for anything that behaves like a specification — origins,
  grades, HS codes, coordinates. This is what makes that design read as a trading desk.
- **Arabic: Amiri.** Montserrat has no Arabic glyphs; without a dedicated face the letterforms break.
- **Persian: Vazirmatn** for body, **Gulzar** (Nastaliq) for display, design 03 only.

**Cinzel has no lowercase and no italic.** Lowercase renders as small caps, which is the intended
look. Never apply `font-style: italic` — the synthesised oblique wrecks an inscriptional face. Where
an italic accent is wanted, set the phrase in gold at a lighter weight instead.

## Layout & Spacing

- **Grid:** 4px base unit, 1280px max content width.
- **Gutters:** 20px mobile, 32px tablet, 56–64px desktop, exposed as `--gutter`.
- **Section rhythm:** `clamp(72px, 9vw, 124px)` vertical. Generous — the brand is spacious.
- **Radius: 0.** The shipped system is rectilinear. Circles are reserved for the TP monogram, the
  status dot and the arch niches in design 03. Do not introduce a radius scale.
- **Photography fills, it never dictates.** Images inside a fixed-ratio frame are absolutely
  positioned. In normal flow `height: 100%` cannot resolve against a flex-sized parent during
  intrinsic sizing, so the image falls back to its own aspect ratio and drives the row height.

## Motion

- **Approach:** Intentional, never expressive. Scroll reveals, a hairline that draws, a slow image
  scale on hover. Nothing that moves while the reader is trying to read.
- **Easing:** `cubic-bezier(.22,1,.36,1)` for entrances; `cubic-bezier(.3,.9,.25,1)` for snaps.
- **Duration:** 300–450ms for most transitions, up to 1.1s for image scale.
- **Removed by decision:** a product photograph that tracked the cursor across the catalogue. It
  covered the rows being read. Do not reintroduce cursor-following imagery.
- All motion respects `prefers-reduced-motion`.

## Brand Marks

Both are inline SVG (`#i-seal`, `#i-ravoma`), not bitmaps, so they stay crisp at any size.

- **TP monogram** — the company mark, taken from the real packaging. Used in the header, footer,
  hero and every favicon size. This is Panahandeh's mark, not RAVOMA's.
- **RAVOMA wordmark** — Cinzel with the O replaced by a gold saffron-stigma leaf. The letters are
  two `<text>` runs at x-positions measured from a real Cinzel render, with the leaf drawn between
  them, so the ornament lands correctly without depending on font metrics at runtime.
- The wordmark's leaf vein takes the ground colour via `--leafvein`. Set it per surface.
- There is no "R" monogram any more. The old ornamental R belonged to a superseded identity.

## The Three Directions

One identity, three mixes. This is deliberate — the client is choosing a direction, and three dark
pages would have read as three versions of one idea.

| | Ground | Accent | Display | Character |
|---|---|---|---|---|
| **01 Trading House** | Obsidian `#0C0B0A` | Antique gold | Cinzel | Dark, cinematic. SVG globe, full-bleed product cards. |
| **02 Trading Desk** | Warm ivory `#E8DCC8` | Deep burgundy | Cinzel + Plex Mono | Light, editorial. Specification table, availability states, real packaging. |
| **03 The Plateau** | Lime plaster `#F7F0E1` | Lapis `#12305E`, turquoise | Cormorant + Vazirmatn | Persian. Girih tessellation, pointed-arch niches, EN/فارسی with RTL. |

**Design 03 keeps its own palette on purpose.** It is the Persian direction; re-skinning it to
obsidian and gold would delete the thing that makes it a separate option. It carries the brand
marks only.

**Only design 02 has availability states.** Saffron and rice ship today; the other seven lines are
tagged "coming soon" with desaturated thumbnails. If the client picks 01 or 03, that treatment
needs porting.

## Components

- **Buttons:** rectangular, no radius. Primary is solid, with a fill that wipes in on hover rather
  than a colour swap. Uppercase Montserrat, 0.16–0.24em tracking.
- **Cards:** framed with a 1px hairline. Image scales slightly on hover. On dark grounds the card
  ground must carry ivory text at 70% opacity — the two that failed were darkened to `#7B191F`
  and `#533F20`.
- **Inputs:** underline or hairline box, never filled. Labels always visible, uppercase, never
  placeholder-only.
- **Tags:** rectangular, hairline border. Status tags carry a dot; "coming soon" uses a dashed border.
- **Navigation:** sticky, transparent to solid on scroll. Design 01 centres the lockup; 02 and 03
  put it left. All three collapse to a burger below their nav breakpoint.

## Accessibility

Every text and background pair clears WCAG AA 4.5:1. Text over photography is verified by measuring
the worst-case background pixel from the actual render with the text hidden, not by assumption.

On touch devices every interactive control clears 44px in height, via `@media (pointer:coarse)`
blocks so the mouse layout is untouched.

**Contrast is checked against the render, not the tokens.** Two failures shipped because the values
were built in JavaScript — per-card grounds and the globe gradient — which a token-level audit never
sees. After any palette change, render the full page and look at it.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 13 Aug 2026 | Initial system: Midnight Navy, Satin Gold, Playfair Display | Inferred from a packaging photograph before any identity existed |
| 15 Aug 2026 | Panahandeh is the company, RAVOMA the product brand | Client correction; the two had been merged |
| 16 Aug 2026 | Availability states in design 02 | Only saffron and rice ship; presenting nine lines identically overstated the range |
| 17 Aug 2026 | Adopted the client's identity board across all four pages | Real identity arrived: five colours, Cinzel + Montserrat, TP monogram and RAVOMA wordmark |
| 17 Aug 2026 | Design 02 takes warm ivory as its ground, not obsidian | The board is 60% obsidian and design 01 is already dark; two dark designs would read as one idea |
| 17 Aug 2026 | Gold is ornament-only on light grounds | Measured 2.36:1 on ivory — fails as text and as a UI boundary |
| 17 Aug 2026 | Antique Gold read as `#B08A4A`, not the board's `#B0BA4A` | The printed value is olive-green and contradicts its own swatch |
| 17 Aug 2026 | Design 03 keeps its Persian palette | Re-skinning it would delete the thing that makes it a distinct option |
