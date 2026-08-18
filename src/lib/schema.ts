/**
 * JSON-LD builders for the product pages.
 *
 * These live in a module rather than in the two route files so the English and the
 * Persian route emit the same graph from one definition. Base merges whatever is
 * returned here into the site-wide @graph, next to the Organization and WebSite nodes
 * that Seo.astro already declares.
 *
 * Two rules this file exists to hold:
 *
 * 1. **There is no price.** None is published, so none is emitted. An Offer without a
 *    price is honest; an invented one is a false claim about a real business.
 * 2. **The HS code is not a sku.** It is a customs classification shared by every
 *    exporter of that commodity. The slug is the identifier that is ours.
 */
import { SITE, type Lang } from '../data/site';
import type { Product } from '../data/products';
import { t, type Key } from '../data/i18n';

const BASE = SITE.url.replace(/\/$/, '');

const CATEGORY: Record<Product['category'], Key> = {
  spices: 'cat.spices',
  grains: 'cat.grains',
  pulses: 'cat.pulses',
};

const pageUrl = (path: string, lang: Lang) =>
  lang === 'fa' ? `${BASE}/fa${path}` : `${BASE}${path}`;

export function productSchema(p: Product, lang: Lang): Record<string, unknown> {
  const fa = lang === 'fa';
  const url = pageUrl(`/products/${p.slug}`, lang);

  return {
    '@type': 'Product',
    '@id': `${url}#product`,
    name: fa ? p.fa : p.en,
    alternateName: fa ? p.en : p.fa,
    description: fa ? p.blurbFa : p.blurbEn,
    category: t(CATEGORY[p.category], lang),
    sku: p.slug,
    url,
    image: `${BASE}/assets/${p.img}.webp`,
    inLanguage: fa ? 'fa-IR' : 'en-AE',
    /* RAVOMA is the brand on the saffron packs. Every other line ships under the
       company itself — merging the two names has already caused one correction. */
    brand: p.slug === 'saffron'
      ? { '@type': 'Brand', name: SITE.brand }
      : { '@type': 'Organization', '@id': `${BASE}/#organization`, name: SITE.legalName },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'HS code', value: p.hs },
      { '@type': 'PropertyValue', name: 'Origin', value: fa ? p.originFa : p.origin },
      { '@type': 'PropertyValue', name: 'Grade', value: fa ? p.gradeFa : p.grade },
      { '@type': 'PropertyValue', name: 'Retail formats', value: p.formats.join(', ') },
      { '@type': 'PropertyValue', name: 'Port of loading', value: SITE.port },
    ],
    offers: {
      '@type': 'Offer',
      url,
      availability: p.live ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      seller: { '@id': `${BASE}/#organization` },
      areaServed: ['GCC', 'South Asia', 'East Africa', 'Europe', 'United Kingdom', 'North America'],
    },
  };
}

export function productBreadcrumb(p: Product, lang: Lang): Record<string, unknown> {
  const fa = lang === 'fa';
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl(`/products/${p.slug}`, lang)}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('nav.home', lang),
        item: pageUrl('/', lang),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('nav.products', lang),
        item: pageUrl('/products', lang),
      },
      { '@type': 'ListItem', position: 3, name: fa ? p.fa : p.en },
    ],
  };
}

/** The products index, as an ItemList of the nine lines in catalogue order. */
export function productListSchema(products: Product[], lang: Lang): Record<string, unknown> {
  const fa = lang === 'fa';
  return {
    '@type': 'ItemList',
    '@id': `${pageUrl('/products', lang)}#list`,
    name: t('meta.products.title', lang),
    numberOfItems: products.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: fa ? p.fa : p.en,
      url: pageUrl(`/products/${p.slug}`, lang),
    })),
  };
}
