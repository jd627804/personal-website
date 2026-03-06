import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jonathan-portfolio.pages.dev',
  integrations: [
    mdx(),
    tailwind()
  ]
});