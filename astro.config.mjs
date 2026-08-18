// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://panahandeh.devsource.dev',
  // Static by default; only the enquiry endpoint opts out with prerender = false,
  // so every content page is still plain HTML at the edge.
  adapter: vercel({ webAnalytics: { enabled: false } }),
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-AE', fa: 'fa-IR' },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
