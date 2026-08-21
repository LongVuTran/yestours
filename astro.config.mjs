// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yestours.website',
  i18n: {
    locales: ['vi', 'en', 'ko'],
    defaultLocale: 'vi',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap({ i18n: { defaultLocale: 'vi', locales: { vi: 'vi-VN', en: 'en-US', ko: 'ko-KR' } } })],
});
