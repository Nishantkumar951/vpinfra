import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vpinfra.co.in/',
  // Using default 'directory' format so that clean URLs like /about-us 
  // correctly map to /about-us/index.html on all hosting providers.
});
