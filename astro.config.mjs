import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://zenco2.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});