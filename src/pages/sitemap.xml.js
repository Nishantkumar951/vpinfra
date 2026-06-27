export async function GET() {
  const pages = [
    'https://vpinfra.co.in/',
    'https://vpinfra.co.in/about-us/',
    'https://vpinfra.co.in/contact-us/',
    'https://vpinfra.co.in/services/building-construction-company-in-lucknow/',
    'https://vpinfra.co.in/services/solar-installation/',
    'https://vpinfra.co.in/blog/'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
