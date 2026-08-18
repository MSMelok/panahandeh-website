# Panahandeh Foodstuff Trading L.L.C

Marketing site for Panahandeh Foodstuff Trading L.L.C, a Dubai trading house that sources saffron,
rice, pulses, beans and spices at origin and exports them through Jebel Ali under its own RAVOMA
label.

**Panahandeh is the company. RAVOMA is the brand on the packs.** The two are kept apart
deliberately: the wordmark, page titles, legal line and metadata all read PANAHANDEH, and the
RAVOMA mark appears where it belongs — on the products.

**Live:** https://panahandeh.devsource.dev

The site is built with [Astro](https://astro.build) and ships as prerendered HTML: 15 routes in
each of three languages, 45 pages in total. The one exception is the enquiry endpoint, which runs
on the server.

| Language | Prefix | Direction | Body / display faces |
|---|---|---|---|
| English | `/` | ltr | Jost / Cormorant Garamond |
| Persian | `/fa/` | rtl | Vazirmatn / Gulzar |
| Arabic | `/ar/` | rtl | Tajawal / Amiri |

Each language is a real URL with its own canonical and a full set of `hreflang` alternates. This
is deliberate and load-bearing: an earlier version swapped the strings with JavaScript, which no
crawler and no answer engine could see.

---

## Running it

```bash
git clone https://github.com/MSMelok/panahandeh-website.git
cd panahandeh-website
npm install
npm run dev
```

`npm run build` writes the static site to `dist/client` and the server function to
`.vercel/output`. To preview a production build over plain HTTP:

```bash
npm run build
cd dist/client && python3 -m http.server 4400
```

The enquiry endpoint does not exist in that static preview — it needs `npm run dev` or a Vercel
deployment.

### Environment

Copy `.env.example`. The enquiry endpoint needs `RESEND_API_KEY` and `ENQUIRY_TO`. **Without them
it returns a 500 that says it is not configured** — it will not report a success it did not
achieve, because a silent thank-you loses real enquiries and nobody finds out for weeks.

---

## Layout

```
src/
  data/site.ts              company facts: name, contact, port, incoterms, transit, certifications
  data/products.ts          nine lines, their grades and formats; the Iranian growing regions
  data/i18n.ts              209 keys x 3 languages, plus digit and direction helpers
  pages/                    15 routes x 3 languages, plus the enquiry endpoint
  components/pages/         one component per page, shared by all three languages
  components/ornament/      the tazhib ornament: geometry plus the components that place it
  lib/                      JSON-LD graph builders
  styles/tokens.css         palette, type scale, spacing, touch rules
scripts/gen-ornament.py     regenerates components/ornament/geometry.ts
public/assets/              photography, packaging renders, brand marks, favicons
brand/                      client artwork — gitignored, never committed
vercel.json                 cache and security headers, plus redirects from the retired demos
DESIGN.md                   the design system. Read it before any visual change.
```

Three earlier homepage designs lived at `/v1/`, `/v2/` and `/v3/` while the client chose a
direction. They were removed once design 03 was picked; `vercel.json` redirects those paths to the
root permanently.

---

## The parts worth knowing about

**The ornament is drawn, not licensed.** The client's packaging carries *tazhib* — Persian
illumination, curvilinear and foliate. An earlier version used *girih*, the geometric interlaced
star tradition, which is a different family altogether. `scripts/gen-ornament.py` emits the
geometry as TypeScript and six components place it: a shamsa medallion, a field, a tile
tessellation, a border rail, a flourish and a four-centred pointed arch. `Ground.astro` carries the
tuned opacity and mask for each, so the weight of the ornament is one edit rather than seven.

**Numerals need direction, not just translation.** Persian digits (U+06F0) are bidi class `EN` and
survive inside a left-to-right isolate. Arabic-Indic digits (U+0660) are class `AN` and do not — a
range written `3–7` renders as `7–3` without explicit isolate characters. `digits()` in
`data/i18n.ts` wraps Arabic output in U+2066/U+2069 for that reason, and `Seo.astro` strips those
control characters at the JSON-LD boundary so a crawler indexes the value rather than invisible
junk.

**The brand marks are the client's own files.** The P monogram — a Latin P with a Persian **پ** in
relief inside the bowl — and the RAVOMA wordmark are supplied artwork, deliberately shipped as
rasters. Flattening the monogram to vector loses the پ entirely, because it is relief and not a
cutout. Favicons are built from the monogram on a burgundy tile, so the mark survives a dark
browser chrome.

**The header is pinned `dir="ltr"` in every language.** The page below it mirrors; the chrome does
not, so the mark, the nav and the language switch hold one position across all three sites.

---

## Design system

`DESIGN.md` is the source of truth for colour, type, spacing and the brand marks. Three things in
it are load-bearing:

- **Antique gold `#B08A4A` cannot carry text on a light ground** — 3.16:1 on ivory. On light
  surfaces gold is ornament; the accent role goes to deep burgundy.
- **Persian and Arabic do not share a typeface.** They share a script but not letterforms — ک/ك
  and ی/ي differ, and Persian needs گ چ پ ژ, which many Arabic faces render badly.
- **Contrast is measured against the render, not the tokens.** Two failures shipped because the
  values were assembled in JavaScript, which a token-level audit cannot see.

---

## Findability

The site is written to be quoted, not just ranked. Facts are stated plainly in HTML on the server;
`llms.txt` says in prose what is actually available and states outright that no entity called
"RAVOMA Foodstuff Trading" exists; `robots.txt` admits GPTBot, ClaudeBot, PerplexityBot and
Google-Extended; and the JSON-LD graph is anchored on a single organisation node so every other
entity on the site resolves back to it.

---

## Accessibility

Every text and background pair clears WCAG AA. Where text sits over ornament or photography, the
worst-case background pixel is measured from the actual render with the text hidden, rather than
assumed from the token values.

Verified at 320, 360, 390, 768, 1024 and 1440px, plus 740×360 landscape, across all 45 pages in all
three languages: no horizontal overflow, and every gold label clears 4.5:1. Interactive controls
clear 44px under coarse-pointer emulation. Motion respects `prefers-reduced-motion`.

---

## Known and outstanding

- **Photography is placeholder.** Every photo is Pexels-licensed stock, credited in
  `public/assets/CREDITS.md`. A buyer judges pulses on colour uniformity and grading; replace these
  with the client's own before launch.
- **The fourth spice is coriander, not cumin.** Every cumin photograph available under the Pexels
  licence was either caraway or a styled spoon shot, and labelling caraway as cumin on a site that
  sells by specification was not acceptable. If the client trades cumin, it needs a real photograph.
- **The Arabic copy needs a native speaker** — particularly the proper nouns: بناهنده, سرغل, ليرد,
  إيجل.
- **The origins section names three regions.** Every line is sourced in Iran; only regions the
  client has confirmed appear, because inferring a plausible Iranian region for black pepper would
  have been a guess. It grows back when they send the rest.
- **The enquiry endpoint needs a mail key** before it can deliver anything.
- The identity board prints Antique Gold as `#B0BA4A`, which is olive-green and contradicts its own
  swatch. Treated here as a typo for `#B08A4A` — worth confirming before anything goes to print.

---

## Usage

Client work. The Panahandeh and RAVOMA names, the brand marks and the artwork in `brand/` belong to
Panahandeh Foodstuff Trading L.L.C and are not covered by any open-source licence. Stock
photography is used under the Pexels licence as recorded in `public/assets/CREDITS.md`.
