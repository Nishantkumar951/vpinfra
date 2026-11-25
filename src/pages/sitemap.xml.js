export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const pages = [
    // Core pages
    { url: 'https://vpinfra.co.in/', priority: '1.0', changefreq: 'weekly' },
    { url: 'https://vpinfra.co.in/about-us/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/contact-us/', priority: '0.8', changefreq: 'monthly' },

    // Service pages
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-lucknow/', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/residential-construction-services-in-lucknow/', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/turnkey-building-contractors-in-lucknow/', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/custom-home-builders-in-ashiyana-lucknow/', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/commercial-construction-company-in-lucknow/', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/duplex-construction-company-in-lucknow/', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/solar-installation/', priority: '0.8', changefreq: 'monthly' },

    // Location pages (Building Construction Company in <area>, Lucknow)
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-gomti-nagar-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-gomti-nagar-extension-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-hazratganj-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-aliganj-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-indira-nagar-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-mahanagar-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-jankipuram-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-ashiyana-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-alambagh-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-rajajipuram-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-chinhat-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-faizabad-road-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-sultanpur-road-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-shaheed-path-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-kanpur-road-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-vrindavan-yojana-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-sushant-golf-city-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-krishna-nagar-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-amausi-lucknow/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://vpinfra.co.in/services/building-construction-company-in-sitapur-road-lucknow/', priority: '0.8', changefreq: 'monthly' },

    // Blog index
    { url: 'https://vpinfra.co.in/blog/', priority: '0.7', changefreq: 'weekly' },

    // Blog posts
    { url: 'https://vpinfra.co.in/blog/pm-surya-ghar-yojna-lucknow/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/building-construction-trends-lucknow/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/solar-energy-business-up-investment/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/best-house-builders-in-lucknow/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/building-contractors-in-lucknow/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/home-construction-company-in-lucknow/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/builders-and-developers-in-lucknow/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/real-estate-builders-in-lucknow/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/best-builders-in-lucknow/', priority: '0.6', changefreq: 'yearly' },
    { url: 'https://vpinfra.co.in/blog/best-construction-company-in-lucknow/', priority: '0.6', changefreq: 'yearly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ url, priority, changefreq }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
