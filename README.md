# Panahandeh Foodstuff Trading L.L.C

Marketing site for Panahandeh Foodstuff Trading L.L.C, a Dubai trading house that sources pulses,
beans and spices at origin and exports them through Jebel Ali under its own RAVOMA label.

**Panahandeh is the company. RAVOMA is the brand on the packs.** The two are kept apart
deliberately: the wordmark, page titles, legal line and metadata all read PANAHANDEH, and the
RAVOMA mark appears where it belongs — on the products.

Three complete homepage designs live in this repo. They share one asset library and one set of
facts, and take three different positions on how a foodstuff trader should present itself.

| | Design | What it is | Path |
|---|---|---|---|
| 01 | **The trading house** | Dark, cinematic, luxury-editorial. Navy and gold, a dotted-earth globe with trade corridors, big serif headlines. | `index.html` |
| 02 | **The trading desk** | Light and editorial. Warm paper, an ink ticker, and a dense spec table with a cursor-following product preview. Reads like a commodity house, not a brochure. | `v2/index.html` |
| 03 | **The plateau** | Persian design language — girih tessellation, pointed-arch niches, lapis and turquoise on lime plaster. Bilingual English ⇄ فارسی with a real right-to-left flip. | `v3/index.html` |

Every one is a single self-contained HTML file. No build step, no dependencies to install.

**Live:** https://msmelok.github.io/ravoma-website/ (01) — 02 and 03 publish to `/v2/` and `/v3/`.

---

## Running it

```bash
git clone https://github.com/MSMelok/ravoma-website.git
cd ravoma-website
python3 -m http.server 8000
```

Then open http://localhost:8000, http://localhost:8000/v2/ or http://localhost:8000/v3/.

Opening the files straight off the filesystem also works, but serve them if you are testing
anything that cares about origins.

There is a small version switcher pinned to the bottom-left corner of 02 and 03 so the three can
be compared side by side. It is marked with a comment in the source and should come out before
the site goes to the client.

---

## Layout

```
index.html                  design 01
v2/index.html               design 02
v3/index.html               design 03
DESIGN.md                   original design system: colour tokens, type scale, spacing
assets/
  hero.webp                 saffron macro, design 01 hero
  band.webp                 pulses in jute sacks, mid-page band (all three)
  about.webp                dry storage / provenance
  skyline.webp              Dubai skyline
  export.webp               container vessel
  chickpeas|lentils|splitpeas|kidneybeans.webp    pulses and beans
  saffron|turmeric|blackpepper|coriander.webp     spices
  mark.webp                 RAVOMA brand monogram
  favicon-*.png             16 / 32 / 48 / 512
  apple-touch-icon.png      180px
  CREDITS.md                photo provenance and licensing
brand/                      original client artwork (monogram, full lockup, brand board)
```

---

## What the three share

The product range is the same across all three: four pulses and beans — chickpeas, green lentils,
yellow split peas, red kidney beans — and four spices — saffron, turmeric, black pepper, coriander
seed. Same origins, same grades, same formats, same photography.

What differs is everything else: palette, typeface, grid, how the catalogue is presented, and what
each design assumes the buyer came for.

---

## 01 — The trading house

Navy `#0A1D37`, satin gold `#C9A24B` and a warm off-white taken from the packaging. Playfair
Display for headlines, Montserrat for body, Amiri for the Arabic product names. Gold is reserved
for accents and calls to action, never body copy.

The Network section renders a dotted Earth with trade routes converging on Dubai, drawn from
scratch in SVG rather than pulled from a mapping library. Landmasses come from Natural Earth 110m
coastlines, rasterised to a 3° grid and stored as a 940-character base64 bitmask — the whole
world's land in under a kilobyte. At runtime the mask is decoded, projected orthographically, and
every visible land cell becomes a dot.

Two details in there matter. Sampling longitude at a fixed step makes dots bunch toward the poles
into concentric arc bands, which reads as orbit rings rather than a globe; longitude density
scales with `cos(lat)` so spacing stays even across the sphere. And dots are split into three
depth bands by angular distance from the projection centre, with decreasing size and opacity
toward the limb — that is what makes it read as curved rather than flat.

The twelve origin markers are at real coordinates. Hovering an entry in the sourcing list traces
its corridor on the globe.

---

## 02 — The trading desk

Warm paper `#FBF9F4`, ink `#15150F`, clay `#A2461F`. Fraunces for display, Inter Tight for body,
IBM Plex Mono for anything that behaves like data — origins, grades, HS codes, coordinates. The
mono is what makes it read as a desk rather than a brochure.

The catalogue is a table, not a card grid: eight rows carrying origin, grade, format and HS code,
filterable by pulses or spices. On a pointer device, hovering a row raises a product photograph
that follows the cursor — so the imagery is there when a buyer wants it and out of the way when
they are scanning specifications.

The process rail scrolls horizontally below 1100px with a progress hairline tied to its scroll
position.

Written in plain CSS with no framework, so none of the Tailwind caveats below apply to it.

---

## 03 — The plateau

Lime plaster `#F7F0E1`, lapis `#12305E`, turquoise, saffron. Cormorant Garamond and Jost for
Latin; Vazirmatn for Persian body text and Gulzar (Nastaliq) for the Persian display line.

Two pieces of ornament carry the design:

**Girih.** An eight-point khatam star tessellation, drawn as an SVG `<pattern>` with stars at the
tile corners and centre plus the connecting lattice, tinted per section. Behind the hero copy it
is masked with a radial gradient so the tessellation frames the reading column instead of sitting
under it.

**The arch.** A four-centred pointed arch defined once as a `clipPath` in `objectBoundingBox`
units, so a single definition clips every image on the page regardless of aspect ratio. The
outline is a second SVG on top using `vector-effect: non-scaling-stroke`, which keeps the stroke
an even weight even though the path is being stretched non-uniformly.

The language toggle is real. It swaps every string, sets `lang` and `dir` on the root, flips the
layout to right-to-left, switches both typeface stacks, converts numerals to Persian digits, and
re-renders the products, origins and form in the other language. The choice persists in
`localStorage`. The layout mirrors through CSS logical properties rather than a second stylesheet.

---

## Things worth knowing before you touch it

**Design 01 runs Tailwind off the Play CDN.** Fine for a prototype, but it has two sharp edges.
It does not emit arbitrary values that only appear in JavaScript-injected markup — `min-h-[520px]`
or `text-cream/56` written into a template literal will silently do nothing — so anything
structural in the JS-built components lives in the real stylesheet instead; see `.pbody`, `.imgw`
and `.fillcol` in the `<style>` block. And the CDN injects its stylesheet *after* the inline one,
so a plain override loses to a Tailwind utility of equal specificity. Where an override is
genuinely needed the class is doubled (`.wm.wm`) rather than reaching for `!important`.

Designs 02 and 03 are hand-written CSS and have neither problem.

**Column images fill, they don't dictate.** The `<img>` inside a fixed-ratio frame is absolutely
positioned on purpose. In normal flow, `height: 100%` cannot resolve against a flex-sized parent
during intrinsic sizing, so the image falls back to its own aspect ratio and drives the grid row
height — which leaves dead space beside the shorter column.

**The contact forms are front-end only.** They validate and show a success state; nothing is sent.
Wire them to a form handler before any of this goes near a real enquiry.

**Photography is placeholder.** Every photo is Pexels-licensed stock. Licensing and photographer
credits are in `assets/CREDITS.md`. Replace these with real photography before launch — a buyer
judges pulses on colour uniformity and grading, and generic stock only gets you so far.

**The fourth spice is coriander, not cumin.** Every cumin photograph available under the Pexels
licence was either caraway seed or a styled spoon shot. Rather than label caraway as cumin on a
site that sells commodities by specification, the line is coriander seed. If the client trades
cumin, it needs a real photograph.

**Arabic and Persian on the packs.** Design 01 gives the product names in Modern Standard Arabic;
design 03 gives them in Persian. The client's current packaging uses Persian for three lines
(نخود, لپه, عدس سبز), so the packs and design 01 disagree. Worth resolving before launch.

---

## Accessibility

Every text and background pair in all three designs was checked against WCAG AA and clears 4.5:1.
Where text sits over a photograph, the worst-case background pixel was measured from the actual
render with the text hidden rather than assumed — 8.4:1 for design 02's band, 7.3:1 for design
03's. UI boundaries such as input underlines clear 3:1.

In design 03 the bright saffron `#A9660D` is reserved for display type and ornament, where the
3:1 large-text threshold applies; a darker `--saffron-dk` is used wherever saffron appears at body
size. The one hairline that does not reach 3:1 is the decorative rule between story list items,
which is a separator rather than a component boundary.

Motion is meaningful rather than decorative and respects `prefers-reduced-motion` — scroll reveals
resolve immediately, marquees and tickers stop and become scrollable, counters jump to their final
value, the cursor-following preview is disabled, and design 01's globe cargo pulses are not emitted
at all.

Verified for horizontal overflow at 320, 360, 390, 414, 768, 1024, 1280 and 1440px — including
design 03 in right-to-left. No page scroll at any width.

---

## Before production

- Compile Tailwind for design 01 rather than using the Play CDN; it ships the whole engine and
  warns in console
- Point the contact forms at a real handler
- Swap placeholder photography for the client's own
- Confirm the Arabic/Persian question above, and whether cumin belongs in the range
- Have a native speaker sign off the Persian copy in design 03
- Remove the version switcher from designs 02 and 03
- Add the remaining pages (About, Products, Services, News, Contact)

---

## Usage

Client work. The Panahandeh and RAVOMA names, the monogram and the brand assets in `brand/` belong
to Panahandeh Foodstuff Trading L.L.C and are not covered by any open-source licence. Stock
photography is used under the Pexels licence as recorded in `assets/CREDITS.md`.
