# Panahandeh Foodstuff Trading L.L.C

Marketing site for Panahandeh Foodstuff Trading L.L.C, a Dubai trading house that sources pulses,
beans and spices at origin and exports them through Jebel Ali under its own RAVOMA label.

**Panahandeh is the company. RAVOMA is the brand on the packs.** The two are kept apart
deliberately: the wordmark, page titles, legal line and metadata all read PANAHANDEH, and the
RAVOMA mark appears where it belongs — on the products.

Three complete homepage designs live in this repo. They share one asset library and one set of
facts, and take three different positions on how a foodstuff trader should present itself.

The root of the site is a **selector page** that shows all three side by side and opens each one
in its own tab, so the client can move between them without losing their place.

| | Design | What it is | Path |
|---|---|---|---|
| — | **Selector** | Presentation page. Three preview cards, each opening a design in a new tab. Excluded from search engines. | `index.html` |
| 01 | **The trading house** | Dark, cinematic, luxury-editorial. Obsidian and gold, a dotted-earth globe with trade corridors, big serif headlines. | `v1/index.html` |
| 02 | **The trading desk** | Light and editorial. Warm ivory, an ink ticker, and a dense spec table carrying thumbnails, availability and the client's real packaging. Reads like a commodity house, not a brochure. | `v2/index.html` |
| 03 | **The plateau** | Persian design language — girih tessellation, pointed-arch niches, lapis and turquoise on lime plaster. Bilingual English ⇄ فارسی with a real right-to-left flip. | `v3/index.html` |

Every one is a single self-contained HTML file. No build step, no dependencies to install.

**Live:** https://panahandeh.devsource.dev — designs at `/v1/`, `/v2/` and `/v3/`.
Also mirrored on GitHub Pages at https://msmelok.github.io/panahandeh-website/.

---

## Running it

```bash
git clone https://github.com/MSMelok/panahandeh-website.git
cd panahandeh-website
python3 -m http.server 8000
```

Then open http://localhost:8000 for the selector, or go straight to `/v1/`, `/v2/` or `/v3/`.

Opening the files straight off the filesystem also works, but serve them if you are testing
anything that cares about origins.

There is a small version switcher pinned to the bottom-left corner of all three designs — a
diamond back to the selector, then 01 / 02 / 03. It is marked with a comment in each file and
should come out before the chosen design goes live as the real site.

**Hosting.** Vercel serves the repo as static files with no build step, and resolves the
subdirectories on its own; `vercel.json` only adds cache headers for `assets/` and `brand/` plus
two security headers. Nothing in it is load-bearing for routing.

---

## Layout

```
index.html                  selector page
v1/index.html               design 01
v2/index.html               design 02
v3/index.html               design 03
vercel.json                 cache and security headers (routing needs no config)
DESIGN.md                   original design system: colour tokens, type scale, spacing
assets/
  hero.webp                 saffron macro, design 01 hero
  band.webp                 pulses in jute sacks, mid-page band (all three)
  about.webp                dry storage / provenance
  skyline.webp              Dubai skyline
  export.webp               container vessel
  chickpeas|lentils|splitpeas|kidneybeans.webp    pulses and beans
  saffron|turmeric|blackpepper|coriander.webp     spices
  rice.webp                 basmati, added with the availability pass
  saffron-pack.webp         RAVOMA 10 g pocket tin, the Saffron catalogue thumbnail
  pack-*.webp               RAVOMA packaging renders cropped from the client's design sheets
  preview-v1|v2|v3.webp     selector screenshots, regenerated when a design changes
  favicon-*.png             16 / 32 / 48 / 512
  apple-touch-icon.png      180px
  CREDITS.md                photo provenance and licensing
brand/                      original client artwork (monogram, full lockup, brand board)
```

---

## What the three share

Designs 01 and 03 carry the same eight lines: four pulses and beans — chickpeas, green lentils,
yellow split peas, red kidney beans — and four spices — saffron, turmeric, black pepper, coriander
seed.

**Design 02 is ahead of the other two.** It carries nine lines and marks availability: saffron and
rice are shipping, and the remaining seven are flagged "coming soon" with their thumbnails
desaturated. It is also the only design using the client's real RAVOMA packaging renders. If the
client picks 01 or 03, the same availability treatment needs porting across.

What differs is everything else: palette, typeface, grid, how the catalogue is presented, and what
each design assumes the buyer came for.

---

## The selector

Design 01's palette, so it reads as the client's own presentation rather than a developer index:
navy and gold, Playfair and Montserrat, the P seal. Each option is a real screenshot of that
design plus its palette swatches, so the three directions are distinguishable before anything is
opened.

Every card is a plain `<a target="_blank" rel="noopener">` — no JavaScript is needed for the links
to work, and the selector stays open in its own tab while the client moves between designs. The
page carries `<meta name="robots" content="noindex">` so a comparison page never outranks the real
site.

The screenshots in `assets/preview-v*.webp` are generated from the live pages with the version
switcher hidden. Regenerate them if a design changes.

---

## 01 — The trading house

Obsidian black `#171513`, antique gold `#B08A4A` and warm ivory `#E8DCC8` from the brand identity.
Cinzel for headlines, Montserrat for body, Amiri for the Arabic product names. Gold is reserved for
accents and calls to action, never body copy.

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

Warm ivory `#E8DCC8`, obsidian `#171513`, deep burgundy `#5A171B`. Cinzel for display, Montserrat
for body, IBM Plex Mono for anything that behaves like data — origins, grades, HS codes,
coordinates. The mono is what makes it read as a desk rather than a brochure.

Same palette as design 01, different mix. The identity is 60% obsidian, so both designs going dark
would have made them read as two versions of one idea rather than two directions; this one takes
warm ivory as its ground instead. Antique gold is **ornament only** here — it measures 2.36:1 on
ivory and cannot carry text, so the accent is burgundy.

The catalogue is a table, not a card grid: nine rows carrying a thumbnail, origin, grade and
format, filterable by category or by what is actually shipping.

Each row carries a thumbnail and an availability tag. Saffron uses the client's own pack render;
the seven unreleased lines are desaturated and tagged "coming soon", and a "Shipping now" filter
narrows the table to what can actually be ordered. Below the table, a strip shows four of the five
real RAVOMA saffron formats.

An earlier version raised a product photograph that tracked the cursor across the table. It was
removed: it covered the rows you were trying to read, and once every row had its own thumbnail it
was showing you a picture you could already see.

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

## Brand identity

The client's identity board defines five colours, two typefaces and two marks:

| | Hex | Role |
|---|---|---|
| Obsidian Black | `#171513` | ground, 60% |
| Antique Gold | `#B08A4A` | accent, 20% |
| Deep Burgundy | `#5A171B` | 15% |
| Saffron Red | `#8F1D24` | fills |
| Warm Ivory | `#E8DCC8` | 5% |

**The board prints Antique Gold as `#B0BA4A`, which is olive-green and contradicts its own swatch.**
Sampling the swatch returns `#9E6228`. It is treated here as a typo for `#B08A4A` — worth
confirming with the client before anything goes to print.

Typefaces are **Cinzel** (primary) and **Montserrat** (secondary). Cinzel has no lowercase and no
italic, so headline accents that were italic are now set in gold at a lighter weight rather than
being obliqued, which wrecks an inscriptional face.

Two marks, both rebuilt as inline SVG rather than bitmaps so they stay crisp at any size:

- **The RAVOMA wordmark** — Cinzel with the O replaced by a gold saffron-stigma leaf. The letters
  are two `<text>` runs at measured x-positions with the leaf drawn between them, so the ornament
  lands correctly without depending on runtime font metrics.
- **The TP monogram** — the company mark that appears on the real packs. It replaces the "P" seal
  drawn before the identity arrived, in all four pages and in the favicons.

Design 03 keeps its own Persian palette deliberately; only its brand marks were updated.

`assets/mark.webp`, the old ornamental R, is gone; nothing references it.

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
value, and design 01's globe cargo pulses are not emitted at all.

On the selector, the warm radial behind the masthead lifts the background enough that gold at
partial opacity stops clearing 4.5:1, so gold runs at full strength there; contrast was measured
from the render with the text hidden, not assumed from the token values.

Verified for horizontal overflow at 320, 360, 375, 390, 414, 430, 768, 820, 834, 1024, 1280 and
1440px — including design 03 in right-to-left and the selector. No page scroll at any width.

**Touch.** Every page was re-measured under coarse-pointer emulation, and every interactive
control clears 44px in height at every width: burgers, the language toggle, filter chips, nav and
footer links, and the version switcher. The rules live in `@media (pointer:coarse)` blocks so a
mouse-driven layout is untouched. Two of them are worth knowing about — design 01's contact links
carry an animated underline pinned 4px under the text, so the box is padded and the underline
offset by the same amount rather than stretched with `line-height`; and design 03's language
toggle has a tighter variant below 400px, because three 44px targets plus the wordmark do not fit
across a 360px phone otherwise.

---

## Before production

- Compile Tailwind for design 01 rather than using the Play CDN; it ships the whole engine and
  warns in console
- Point the contact forms at a real handler
- Swap placeholder photography for the client's own
- Confirm the Arabic/Persian question above, and whether cumin belongs in the range
- Confirm the Antique Gold hex with the client — the identity board's `#B0BA4A` is olive-green
- Port design 02's availability treatment to whichever design the client picks
- Have a native speaker sign off the Persian copy in design 03
- Remove the version switcher from all three designs, and decide whether the selector page
  stays at the root or the chosen design takes it over
- Regenerate `assets/preview-v*.webp` if a design changes after this point
- Add the remaining pages (About, Products, Services, News, Contact)

---

## Usage

Client work. The Panahandeh and RAVOMA names, the monogram and the brand assets in `brand/` belong
to Panahandeh Foodstuff Trading L.L.C and are not covered by any open-source licence. Stock
photography is used under the Pexels licence as recorded in `assets/CREDITS.md`.
