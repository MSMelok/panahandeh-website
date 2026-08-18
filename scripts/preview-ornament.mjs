/**
 * Dev-only proof sheet for the generated ornament geometry.
 *
 *   node scripts/preview-ornament.mjs > /tmp/orn.html
 *
 * Renders the shamsa (full + half), the field as a 3x3 grid so the tile joins
 * can be inspected for seams, the 8-fold tile, the rail repeated, and the
 * flourish. Not shipped — nothing imports this.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, '..', 'src', 'components', 'ornament', 'geometry.ts'), 'utf8');

const grab = (name) => {
  const i = src.indexOf(`export const ${name}`);
  const eq = src.indexOf('=', src.indexOf('}', i) > -1 ? i : i);
  // value starts at the first '{' or '"' after the last '=' before the ';\n'
  const start = src.indexOf('= ', i) + 2;
  let depth = 0, j = start, inStr = false;
  for (; j < src.length; j++) {
    const ch = src[j];
    if (inStr) { if (ch === '"' && src[j - 1] !== '\\') inStr = false; continue; }
    if (ch === '"') inStr = true;
    else if (ch === '{' || ch === '[') depth++;
    else if (ch === '}' || ch === ']') { depth--; if (depth === 0) { j++; break; } }
    else if (depth === 0 && ch === ';') break;
  }
  return JSON.parse(src.slice(start, j));
};

const SHAMSA = grab('SHAMSA');
const FIELD = grab('FIELD');
const TILE = grab('TILE');
const RAIL = grab('RAIL');
const FLOURISH = grab('FLOURISH');

const shamsa = (rings, half) => {
  const R = SHAMSA.r;
  const vb = half ? `0 ${-R} ${R} ${2 * R}` : `${-R} ${-R} ${2 * R} ${2 * R}`;
  let defs = '', body = '';
  SHAMSA.bands.forEach((b, i) => {
    if (b.level > rings) return;
    const cap = b.cap ? ' stroke-linecap="round"' : '';
    if (b.kind === 'path') {
      body += `<path d="${b.d}" stroke-width="${b.w}"${cap}/>`;
    } else {
      defs += `<path id="pb${i}" d="${b.d}"/>`;
      let g = `<g stroke-width="${b.w}"${cap}>`;
      for (let k = 0; k < b.n; k++) g += `<use href="#pb${i}" transform="rotate(${(360 * k / b.n).toFixed(2)})"/>`;
      body += g + '</g>';
    }
  });
  return `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-linejoin="round"><defs>${defs}</defs>${body}</svg>`;
};

const fieldDefs = () =>
  `<defs>${FIELD.motifs.map((d, i) => `<path id="fm${i}" d="${d}"/>`).join('')}
   <pattern id="fieldpat" width="${FIELD.w}" height="${FIELD.h}" patternUnits="userSpaceOnUse">
     <g fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round">
       ${FIELD.uses.map((u) => `<use href="#fm${u.k}" transform="${u.t}"/>`).join('')}
     </g>
   </pattern></defs>`;

const tile = () => `<svg viewBox="0 0 ${TILE.size} ${TILE.size}" fill="none" stroke="currentColor" stroke-linejoin="round">
  <path d="${TILE.frame}" stroke-width="1.6"/>
  <defs><path id="tw" d="${TILE.wedge}"/><path id="tc" d="${TILE.corner}"/></defs>
  <g stroke-width="1.5">${Array.from({ length: 8 }, (_, i) => `<use href="#tw" transform="rotate(${i * 45} ${TILE.size / 2} ${TILE.size / 2})"/>`).join('')}</g>
  <g stroke-width="1.3">${Array.from({ length: 4 }, (_, i) => `<use href="#tc" transform="rotate(${i * 90} ${TILE.size / 2} ${TILE.size / 2})"/>`).join('')}</g>
  <path d="${TILE.centre}" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

const rail = () => `<svg viewBox="0 0 ${RAIL.w * 3} ${RAIL.h}" preserveAspectRatio="none" fill="none" stroke="currentColor" stroke-linejoin="round">
 <defs><pattern id="railpat" width="${RAIL.w}" height="${RAIL.h}" patternUnits="userSpaceOnUse">
  <g fill="none" stroke="currentColor" stroke-linejoin="round">
   <path d="${RAIL.stem}" stroke-width="1.3"/>
   <path d="${RAIL.orn}" stroke-width="1.2"/>
   <path d="${RAIL.key}" stroke-width="1"/>
   <path d="${RAIL.beads}" stroke-width="3" stroke-linecap="round"/>
  </g></pattern></defs>
 <rect width="100%" height="100%" fill="url(#railpat)" stroke="none"/></svg>`;

const flourish = () => `<svg viewBox="0 0 ${FLOURISH.w} ${FLOURISH.h}" fill="none" stroke="currentColor" stroke-linejoin="round">
  <path d="${FLOURISH.main}" stroke-width="1.6" stroke-linecap="round"/>
  <path d="${FLOURISH.fine}" stroke-width="1.2" stroke-linecap="round"/>
</svg>`;

process.stdout.write(`<meta charset="utf-8"><title>ornament proof</title>
<style>
 body{background:#0C0B0A;color:#B08A4A;font:12px/1.5 system-ui;margin:0;padding:24px}
 h2{color:#E8DCC8;font-weight:400;letter-spacing:.2em;text-transform:uppercase;font-size:11px;margin:32px 0 10px}
 .row{display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap}
 svg{display:block}
 .grid3{width:1020px;height:1020px}
</style>
<h2>shamsa — full, rings 6</h2>
<div class="row"><div style="width:560px">${shamsa(6, false)}</div>
<div style="width:280px">${shamsa(4, false)}</div>
<div style="width:280px">${shamsa(2, false)}</div></div>
<h2>shamsa — half (edge anchored)</h2>
<div class="row"><div style="width:300px">${shamsa(6, true)}</div></div>
<h2>field — 3x3 tiles (look at the joins)</h2>
<svg class="grid3" viewBox="0 0 ${FIELD.w * 3} ${FIELD.h * 3}">${fieldDefs()}
 <rect width="100%" height="100%" fill="url(#fieldpat)"/>
 <g stroke="#8F1D24" stroke-width="2" opacity=".55">
  <path d="M${FIELD.w},0V${FIELD.h * 3}M${FIELD.w * 2},0V${FIELD.h * 3}M0,${FIELD.h}H${FIELD.w * 3}M0,${FIELD.h * 2}H${FIELD.w * 3}"/>
 </g></svg>
<h2>tile — 8-fold star floral</h2>
<div class="row"><div style="width:300px">${tile()}</div><div style="width:150px">${tile()}</div></div>
<h2>rail — 3 repeats</h2>
<div style="width:900px">${rail()}</div>
<h2>flourish</h2>
<div style="width:300px">${flourish()}</div>
`);
