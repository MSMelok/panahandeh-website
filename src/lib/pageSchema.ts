/**
 * JSON-LD nodes for the Quality and Contact routes.
 *
 * Kept apart from lib/schema.ts, which builds the Product / ItemList / Breadcrumb
 * graph for the catalogue. Same reason both exist as modules rather than as route
 * frontmatter: Base takes the graph as a `schema` prop, so the node has to be built
 * in the route file, and the route files are thin bilingual wrappers that must not
 * each carry a copy of the logic. One builder, called with a lang, keeps the English
 * and Persian routes identical by construction.
 *
 * Every answer string is read from the same i18n key the page renders, so the
 * FAQPage node and the visible copy cannot drift apart: change one and the other
 * changes with it. Nothing here states a fact that site.ts does not already hold.
 */
import { SITE, TRANSIT, type Lang } from '../data/site';
import { t, type Key } from '../data/i18n';

const BASE = SITE.url.replace(/\/$/, '');

/** Same canonical rule Seo.astro uses: `/quality` in English, `/fa/quality` in Persian. */
const pageUrl = (path: string, lang: Lang) => (lang === 'fa' ? `${BASE}/fa${path}` : `${BASE}${path}`);

const inLanguage = (lang: Lang) => (lang === 'fa' ? 'fa-IR' : 'en-AE');

/** Question / answer key pairs. Quality.astro renders these; the FAQPage node
 *  quotes the same two strings, so the markup and the structured data match. */
export const FAQ_KEYS: ReadonlyArray<readonly [Key, Key]> = [
  ['q.faq.q1', 'q.faq.a1'],
  ['q.faq.q2', 'q.faq.a2'],
  ['q.faq.q3', 'q.faq.a3'],
  ['q.faq.q4', 'q.faq.a4'],
  ['q.faq.q5', 'q.faq.a5'],
  ['q.faq.q6', 'q.faq.a6'],
];

export function qualitySchema(lang: Lang): Record<string, unknown>[] {
  const url = pageUrl('/quality', lang);
  return [
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      url,
      name: t('meta.quality.title', lang),
      description: t('meta.quality.desc', lang),
      inLanguage: inLanguage(lang),
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${BASE}/#organization` },
      publisher: { '@id': `${BASE}/#organization` },
      mainEntity: FAQ_KEYS.map(([q, a]) => ({
        '@type': 'Question',
        name: t(q, lang),
        acceptedAnswer: { '@type': 'Answer', text: t(a, lang) },
      })),
    },
  ];
}

export function contactSchema(lang: Lang): Record<string, unknown>[] {
  const url = pageUrl('/contact', lang);
  return [
    {
      '@type': 'ContactPage',
      '@id': `${url}#contactpage`,
      url,
      name: t('meta.contact.title', lang),
      description: t('meta.contact.desc', lang),
      inLanguage: inLanguage(lang),
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${BASE}/#organization` },
      mainEntity: {
        '@type': 'ContactPoint',
        '@id': `${BASE}/#sales`,
        contactType: 'sales',
        telephone: SITE.phone,
        email: SITE.email,
        // The regions we quote a sailing time for, read straight off the transit table.
        areaServed: TRANSIT.map((row) => row.region),
        availableLanguage: ['en', 'fa'],
      },
    },
  ];
}
