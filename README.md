# RAVOMA — Foodstuff Trading L.L.C

Marketing site for RAVOMA, a Dubai-based foodstuff trading company that sources pulses, rice
and saffron at origin and exports them through Jebel Ali.

This is the homepage. It's one self-contained HTML file with no build step and no dependencies
to install — open it and it runs.

**Live:** https://msmelok.github.io/ravoma-website/

---

## Running it

```bash
git clone https://github.com/MSMelok/ravoma-website.git
cd ravoma-website
python3 -m http.server 8000
```

Then open http://localhost:8000.

Opening `index.html` directly off the filesystem also works, but serve it if you're testing
anything that cares about origins.

---

## Layout

```
index.html                  the whole site
DESIGN.md                   design system: colour tokens, type scale, spacing, component rules
assets/
  hero.webp                 hero background (saffron macro)
  band.webp                 mid-page sourcing band (pulses in jute sacks)
  about.webp                storage / provenance
  skyline.webp              Dubai skyline, B2B section
  export.webp               container ship, contact section
  chickpeas|lentils|
  splitpeas|saffron.webp    product cards
  mark.webp                 RAVOMA monogram used in header, hero, footer, cards
  favicon-*.png             16 / 32 / 48 / 512
  apple-touch-icon.png      180px
  CREDITS.md                photo provenance and licensing
brand/                      original client artwork (monogram, full lockup, brand board)
```

---

## Design

Colours and type come from the packaging: Midnight Navy `#0A1D37`, Satin Gold `#C9A24B`, and a
warm off-white rather than pure white. Gold is reserved for accents and calls to action — it's
never used for body copy.

Three typefaces:

- **Playfair Display** — headlines and brand statements
- **Montserrat** — body copy and UI labels, wide tracking on uppercase
- **Amiri** — Arabic product names. Montserrat carries no Arabic glyphs, so without a dedicated
  face these fall back to whatever the system provides and the letterforms break. Amiri also has
  roughly the same thick/thin stroke contrast as Playfair, so the two sit together properly.

Product names are given in Arabic (حمص, عدس أخضر, بازلاء صفراء مجروشة, زعفران). Note that the
client's packaging currently uses Persian for three of these — نخود, لپه and عدس سبز — which is
worth resolving one way or the other before launch, since the site and the packs disagree.

Full token list and component rules are in `DESIGN.md`.

---

## The globe

The Network section renders a dotted Earth with trade routes converging on Dubai. It's drawn
from scratch in SVG rather than pulled from a mapping library.

Landmasses come from Natural Earth 110m coastlines, rasterised to a 3° grid and stored as a
940-character base64 bitmask — the whole world's land in under a kilobyte. At runtime the mask
is decoded and projected orthographically, and every visible land cell becomes a dot.

Two details that matter:

Sampling longitude at a fixed step makes dots bunch toward the poles and form concentric arc
bands, which reads as orbit rings rather than a globe. Longitude density scales with `cos(lat)`
so spacing stays even across the sphere.

Dots are split into three depth bands by their angular distance from the projection centre, with
decreasing size and opacity toward the limb. That's what makes it read as curved rather than flat.

The twelve origin markers are at real coordinates. Hovering an entry in the sourcing list traces
its corridor on the globe.

---

## Things worth knowing before you touch it

**Tailwind runs off the Play CDN.** Fine for a prototype, but it has a sharp edge: it does not
emit arbitrary values that only appear in JavaScript-injected markup. `min-h-[520px]` or
`text-cream/56` written into a template literal will silently do nothing, and you get a component
that looks broken for no visible reason. Anything structural in the JS-built components lives in
the real stylesheet instead — see `.pbody`, `.imgw`, `.fillcol` in the `<style>` block.

**Column images fill, they don't dictate.** The `<img>` inside `.imgw` is absolutely positioned
on purpose. In normal flow, `height: 100%` can't resolve against a flex-sized parent during
intrinsic sizing, so the image falls back to its own aspect ratio and drives the grid row height —
which leaves dead space beside the shorter column.

**The contact form is front-end only.** It validates and shows a success state; nothing is sent.
Wire it to a form handler before this goes anywhere near a real enquiry.

**Photography is placeholder.** Every photo is Pexels-licensed stock standing in for RAVOMA's own
product shots. Licensing and photographer credits are in `assets/CREDITS.md`. Replace these with
real photography before launch — a buyer judges pulses on colour uniformity and grading, and
generic stock only gets you so far.

---

## Accessibility

Every text and background pair was checked against WCAG AA and clears 4.5:1, including text sitting
over photographs, where the worst-case background pixel was measured from the render rather than
assumed. UI boundaries such as input underlines clear 3:1.

Motion is meaningful rather than decorative and respects `prefers-reduced-motion` — scroll reveals
resolve immediately, the marquee stops and becomes scrollable, and the globe's cargo pulses are not
emitted at all.

Verified at 390, 414, 768, 1024, 1280 and 1440px. No horizontal scroll at any width.

---

## Before production

- Compile Tailwind rather than using the Play CDN; it ships the whole engine and warns in console
- Point the contact form at a real handler
- Swap placeholder photography for RAVOMA's own
- Confirm the Arabic/Persian question above
- Add the remaining pages (About, Products, Services, News, Contact)

---

## Usage

Client work. The RAVOMA name, monogram and brand assets in `brand/` belong to RAVOMA Foodstuff
Trading L.L.C and are not covered by any open-source licence. Stock photography is used under the
Pexels licence as recorded in `assets/CREDITS.md`.
