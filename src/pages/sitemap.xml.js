export async function GET() {
  const pages = [
    'https://www.vpinfra.co.in/',
    'https://www.vpinfra.co.in/about-us/',
    'https://www.vpinfra.co.in/contact-us/',
    'https://www.vpinfra.co.in/services/building-construction-company-in-lucknow/',
    'https://www.vpinfra.co.in/services/solar-installation/',
    'https://www.vpinfra.co.in/blog/',
    'https://www.vpinfra.co.in/blog/pm-surya-ghar-yojna-lucknow/',
    'https://www.vpinfra.co.in/blog/building-construction-trends-lucknow/',
    'https://www.vpinfra.co.in/blog/solar-energy-business-up-investment/'
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
