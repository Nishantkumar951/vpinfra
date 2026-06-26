import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vpinfra.co.in/',
  integrations: [sitemap()],
  // Using default 'directory' format so that clean URLs like /about-us 
  // correctly map to /about-us/index.html on all hosting providers.
});
