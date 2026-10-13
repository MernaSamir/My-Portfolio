// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project site: https://oriebalzyuot96.github.io/merna/
export default defineConfig({
  site: 'https://oriebalzyuot96.github.io',
  base: '/merna',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: { format: 'directory' },
  i18n: { defaultLocale: 'en', locales: ['en', 'ar'], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } } })],
});
