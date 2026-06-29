import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://vpinfra.co.in/',
  trailingSlash: 'always',
  redirects: {
    '/services/building-construction': '/services/building-construction-company-in-lucknow/',
  },
  // Using default 'directory' format so that clean URLs like /about-us 
  // correctly map to /about-us/index.html on all hosting providers.
});
