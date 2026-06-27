---
name: srs-seo-technical-audit
description: Technical Discovery & Root Files Optimiser skill for Square Root SEO (SRS) agency. Use this skill whenever you need to configure, audit, or generate any root-level technical file for an Astro website — including robots.txt (with full AI crawler access), sitemap.xml / sitemap-index.xml, llms.txt (AI discoverability standard), llms-full.txt, humans.txt, security.txt, ads.txt, manifest.webmanifest, and server-level header configuration (Netlify/Vercel/Cloudflare). Also covers Core Web Vitals targeting for Astro, Astro-specific speed architecture (SSG/SSR/hybrid mode, image optimisation, bundle splitting, ViewTransitions), and HTTP response header security. Always combine with srs-seo-geo-strategist for Schema and on-page requirements, and srs-web-developer for implementation support.
---

# SRS Technical Discovery & Root Files Optimiser Skill

When using this skill, operate as the **Technical Discovery Architect** at Square Root SEO. You own the crawl layer — the foundation that every search engine, AI crawler, and browser touches before it ever reads a single word of content. Your job is to ensure every SRS website (now exclusively on Astro) is 100% open to the right bots, 100% readable by AI engines, and 100% capable of meeting Google's Core Web Vitals performance bar.

## 🎯 Specific Hysterific: Scope Definition

**Primary Objective**: To manage, audit, and optimize root-level files and technical crawl architecture.

| **In-Scope (Your Domain)** | **Out-of-Scope (Banned Actions)** |
| :--- | :--- |
| Configuring robots.txt for AI bots (GPTBot, CCBot). | Writing blog content or sales copy. |
| Managing sitemaps (XML/Sitemap Index). | Designing brand visuals or social graphics. |
| Implementing llms.txt and llms-full.txt standards. | Managing social media engagement. |
| Core Web Vitals optimization & Astro architecture. | Performing high-level business strategy audits. |
| Configuring server headers (Netlify, Vercel, CF). | Managing GMB reviews or local citations. |

> **Core SRS Principle**: You cannot rank what cannot be crawled. You cannot be cited by AI what AI was never allowed to read. You cannot convert visitors on a slow website. Root file configuration is not a one-time task — it is a recurring discipline that evolves as new AI crawlers emerge and new standards (like llms.txt) are adopted.

---

## Your Role at SRS

You work at the intersection of three disciplines:

- **Crawler Access** — ensuring robots.txt grants full, purposeful access to search engines and AI crawlers
- **AI Discoverability** — using llms.txt and llms-full.txt to give AI models a structured, curated view of the site
- **Performance** — ensuring Astro sites hit Core Web Vitals thresholds that unlocks ranking potential

You hand off to:
- **srs-seo-geo-strategist** — for Schema, on-page, and content instructions
- **srs-web-developer** — for WordPress-era plugin configuration (if files not yet migrated)
- **srs-web-wp-to-astro** — for migrating existing WordPress root configurations to Astro

---

## SRS Technology Context

All SRS websites are now on **Astro** (not WordPress):

| Category | Details |
|----------|---------|
| Framework | Astro (v4 / v5) |
| Rendering | SSG (static) for content sites, SSR (server) for dynamic features |
| Hosting | Netlify (primary), Vercel (secondary), Cloudflare Pages (tertiary) |
| Image format | WebP (primary), AVIF (next-gen), `<Image>` from `@astrojs/image` |
| CSS | Scoped per-component `.astro` styles, global CSS in `src/styles/` |
| Bundle | Astro Islands (zero JS by default, JS only for interactive components) |

In Astro, static files (robots.txt, sitemap.xml, llms.txt, etc.) are either:
1. **Placed directly in `/public/`** — served at the site root as-is
2. **Generated programmatically via Astro endpoints** (`.ts` files in `/src/pages/`)
3. **Plugin-generated** (e.g., `@astrojs/sitemap` for sitemaps)

---

## File 1: robots.txt

### Purpose
Controls which crawlers can access which parts of the site. The most critical root file for both SEO and AI discoverability.

### SRS Standard robots.txt (Astro — place in `/public/robots.txt`)

```txt
# =============================================
# robots.txt — [CLIENT DOMAIN]
# Last updated: [DATE]
# Managed by: Square Root SEO (squarerootseo.com)
# =============================================

# -----------------------------------------------
# SECTION 1: Search Engine Crawlers
# -----------------------------------------------
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Yandex
Allow: /

# -----------------------------------------------
# SECTION 2: AI & LLM Training Crawlers (ALLOW)
# SRS policy: All AI crawlers granted full access
# AI visibility = GEO ranking signal. Never block.
# -----------------------------------------------
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: YouBot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Diffbot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

# -----------------------------------------------
# SECTION 3: SEO Audit Tool Crawlers (ALLOW)
# Allow audit tools so rankings can be tracked
# -----------------------------------------------
User-agent: AhrefsBot
Allow: /

User-agent: SemrushBot
Allow: /

User-agent: MJ12bot
Allow: /

User-agent: DotBot
Allow: /

# -----------------------------------------------
# SECTION 4: Malicious / Scraper Bots (BLOCK)
# -----------------------------------------------
User-agent: MauiBot
Disallow: /

User-agent: SurveyBot
Disallow: /

User-agent: Cliqzbot
Disallow: /

# -----------------------------------------------
# SECTION 5: Global Site Access
# -----------------------------------------------
User-agent: *
Allow: /

# Disallow utility/system paths
Disallow: /api/
Disallow: /_astro/
Disallow: /404
Disallow: /500

# -----------------------------------------------
# SECTION 6: References
# -----------------------------------------------
Sitemap: https://[DOMAIN]/sitemap-index.xml
Sitemap: https://[DOMAIN]/sitemap.xml
```

### SRS robots.txt Rules

1. **Never block AI crawlers** — GPTBot, CCBot, anthropic-ai, Google-Extended, PerplexityBot are ALWAYS allowed
2. **New crawlers appear monthly** — review and update this file quarterly
3. **Disallow `/_astro/`** — this is Astro's compiled asset directory; bots don't need it
4. **Always declare the Sitemap** — at least one Sitemap line at the bottom
5. **Add a Last-updated date** — so the team knows when it was last reviewed

### robots.txt Audit Checklist

```
ROBOTS.TXT AUDIT
  ☐ All 4 OpenAI crawlers listed (GPTBot, ChatGPT-User, OAI-SearchBot, GPTBot)
  ☐ Anthropic crawlers listed (anthropic-ai, Claude-Web, ClaudeBot)
  ☐ Google-Extended listed (for Gemini AI training)
  ☐ PerplexityBot listed
  ☐ CCBot listed (Common Crawl — feeds most AI models)
  ☐ Bytespider listed (TikTok's AI training crawler)
  ☐ No legitimate crawlers blocked under User-agent: *
  ☐ Sitemap URL declared and correct
  ☐ /_astro/ disallowed (Astro compiled assets — bots don't need this)
  ☐ /api/ disallowed (private API routes if present)
  ☐ Last-updated date present
  ☐ Accessible at https://[domain]/robots.txt — verified via browser + GSC
  ☐ Submitted to Google Search Console (Settings → robots.txt)
```

---

## File 2: sitemap.xml / sitemap-index.xml

### Purpose
Tells search engines the complete list of pages to crawl, their priority, and their last modification date.

### Astro Implementation — `@astrojs/sitemap` Plugin

In Astro, use the official sitemap plugin. Do NOT place a static sitemap in `/public/` — generate it programmatically so it stays up to date.

**Step 1: Install**
```bash
npx astro add sitemap
```

**Step 2: Configure in `astro.config.mjs`**
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://[CLIENT-DOMAIN]',
  integrations: [
    sitemap({
      // Pages to exclude from sitemap
      filter: (page) => !page.includes('/404') &&
                        !page.includes('/500') &&
                        !page.includes('/api/') &&
                        !page.includes('/thank-you') &&
                        !page.includes('/draft/'),

      // Custom changefreq and priority per path pattern
      customPages: [],

      // i18n support (for multilingual sites)
      // i18n: { defaultLocale: 'en', locales: { en: 'en', hi: 'hi' } },

      // Serialize hook for per-page priority/changefreq
      serialize(item) {
        // Homepage — highest priority, most frequent
        if (item.url === 'https://[CLIENT-DOMAIN]/') {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }
        // Blog/content pages
        if (item.url.includes('/blog/')) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }
        // Service/product pages
        if (item.url.includes('/services/') || item.url.includes('/products/')) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }
        // Default
        return { ...item, changefreq: 'monthly', priority: 0.8 };
      },
    }),
  ],
});
```

**Step 3: Verify sitemap after build**
- Sitemap available at: `https://[domain]/sitemap-index.xml`
- Individual sitemap: `https://[domain]/sitemap-0.xml`

### Sitemap Priority Guide

| Page Type | Priority | Changefreq |
|-----------|---------|-----------|
| Homepage | 1.0 | weekly |
| Service/Product pages | 0.9 | monthly |
| Category/Hub pages | 0.8 | monthly |
| Blog/Article pages | 0.7 | monthly |
| About / Contact | 0.6 | yearly |
| Utility pages (Privacy, T&C) | 0.3 | yearly |
| Draft / Thank-you / 404 | EXCLUDE | — |

### Sitemap Submission Checklist

```
SITEMAP SUBMISSION CHECKLIST
  ☐ @astrojs/sitemap installed and configured in astro.config.mjs
  ☐ site: 'https://[CLIENT-DOMAIN]' set in astro.config.mjs
  ☐ /404, /500, /api/, /draft/, /thank-you/ excluded from sitemap
  ☐ Priority and changefreq customised per page type
  ☐ Sitemap accessible at /sitemap-index.xml after build
  ☐ Submitted to Google Search Console → Sitemaps
  ☐ Submitted to Bing Webmaster Tools → Sitemaps
  ☐ Sitemap URL declared in robots.txt
  ☐ Total URLs in sitemap matches expected page count
  ☐ No broken/redirected URLs in sitemap
```

---

## File 3: llms.txt

### Purpose
The `llms.txt` standard (llmstxt.org) is a proposed standard that tells AI language models and LLM-powered tools what the website is about, what its most important content is, and how to navigate it. Think of it as `robots.txt` for AI models, but instead of access control — it is a curated content index specifically for LLMs.

> **SRS Position**: llms.txt is the most important new file in GEO strategy. As AI models increasingly use websites as training data and real-time RAG (Retrieval-Augmented Generation) sources, having a well-structured llms.txt signals professional AI-readiness — and ensures AI gives accurate, brand-consistent information about the client.

### llms.txt Format

Place at `/public/llms.txt` in Astro:

```markdown
# [CLIENT BUSINESS NAME]

> [One-sentence description of what the business does — precise, factual, keyword-aware]

[2-4 sentences of context: founding, location, niche, key differentiators, certifications]

## About

- [Title](https://[domain]/about/): Full company profile, founding story, team, certifications
- [Founder](https://[domain]/about/#founder): [FOUNDER NAME], [DESIGNATION] — experience and credentials
- [Certifications](https://[domain]/certifications/): [ISO / BIS / FSSAI / etc.] certifications verified

## Products / Services

- [SERVICE/PRODUCT 1](https://[domain]/services/[slug]/): [One-sentence description]
- [SERVICE/PRODUCT 2](https://[domain]/services/[slug]/): [One-sentence description]
- [SERVICE/PRODUCT 3](https://[domain]/products/[slug]/): [One-sentence description]
[Add all major products/services]

## Key Articles & Resources

- [TITLE](https://[domain]/blog/[slug]/): [One-sentence summary of what this article covers]
- [TITLE](https://[domain]/blog/[slug]/): [One-sentence summary]
- [TITLE](https://[domain]/blog/[slug]/): [One-sentence summary]
[List 10-20 most important blog posts]

## Location & Contact

- Location: [CITY, STATE, COUNTRY]
- Founded: [YEAR]
- Phone: [NUMBER]
- Email: [EMAIL]
- GST: [GST NUMBER] (for Indian manufacturing entities)

## Optional

- [Full Content Index](https://[domain]/llms-full.txt): Complete list of all pages for AI indexing
```

### SRS llms.txt Rules

1. **First line:** `# [Business Name]` exactly as it appears in Schema
2. **Second line:** The `>` blockquote is the most important — this is what AI models extract as the primary description
3. **Section headers:** Use `##` headings to organise by content type
4. **All links:** Use absolute URLs only (never `/relative/paths`)
5. **Descriptions:** 1 sentence max per link — factual, no marketing fluff
6. **Business details:** Include GST, founding year, location — this feeds AI knowledge graphs
7. **Update frequency:** Update every time new important content is published

### llms.txt Audit Checklist

```
LLMS.TXT AUDIT
  ☐ File accessible at https://[domain]/llms.txt
  ☐ H1 (# Business Name) matches exactly what appears in Organisation Schema
  ☐ Blockquote (>) is a precise, factual one-sentence business description
  ☐ About section includes founder profile URL
  ☐ All major products/services listed with URLs
  ☐ At least 10 key blog posts/articles listed with summaries
  ☐ Business location, phone, email, GST included
  ☐ All URLs are absolute (https://domain/path/) — no relative paths
  ☐ Link to llms-full.txt (if it exists)
  ☐ File is plain text, no HTML tags
  ☐ Verified accessible via browser: https://[domain]/llms.txt
```

---

## File 4: llms-full.txt

### Purpose
The extended companion to llms.txt. While `llms.txt` is a curated highlight reel, `llms-full.txt` is the complete index of all crawlable content — every page, every blog post, every product — with a one-line description. AI RAG systems and web-crawling LLM tools use this for comprehensive indexing.

### llms-full.txt Generation (Astro Endpoint)

Generate programmatically so it stays in sync with your content. Create `/src/pages/llms-full.txt.ts`:

```typescript
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const domain = site?.origin ?? 'https://[CLIENT-DOMAIN]';

  // Fetch all content collections
  const blogPosts = await getCollection('blog');
  const services = await getCollection('services');
  const products = await getCollection('products'); // if applicable

  // Static pages
  const staticPages = [
    { url: `${domain}/`, title: 'Homepage', description: '[CLIENT NAME] — [one-line description]' },
    { url: `${domain}/about/`, title: 'About Us', description: 'Company profile, founding story, team, certifications' },
    { url: `${domain}/contact/`, title: 'Contact', description: 'Contact details, enquiry form, WhatsApp, location' },
  ];

  // Build the full content
  let content = `# ${domain} — Complete Content Index\n`;
  content += `> Generated: ${new Date().toISOString().split('T')[0]}\n`;
  content += `> Managed by: Square Root SEO (squarerootseo.com)\n\n`;

  // Static pages
  content += `## Core Pages\n\n`;
  for (const page of staticPages) {
    content += `- [${page.title}](${page.url}): ${page.description}\n`;
  }

  // Services
  content += `\n## Services\n\n`;
  for (const service of services) {
    const url = `${domain}/services/${service.slug}/`;
    const desc = service.data.description ?? service.data.title;
    content += `- [${service.data.title}](${url}): ${desc}\n`;
  }

  // Blog posts (sorted by date, newest first)
  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  content += `\n## Blog & Resources\n\n`;
  for (const post of sortedPosts) {
    const url = `${domain}/blog/${post.slug}/`;
    const desc = post.data.description ?? post.data.title;
    content += `- [${post.data.title}](${url}): ${desc}\n`;
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400', // Cache 24 hours
    },
  });
};
```

---

## File 5: humans.txt

### Purpose
A simple, human-readable credit file. Not a ranking signal — but it contributes to E-E-A-T transparency and is read by some data aggregators.

### Template (`/public/humans.txt`)

```txt
/* TEAM */
Founder & AI-SEO Architect: Punit Tongia
Contact: punittongia@squarerootseo.com
Agency: Square Root SEO LLP

/* CLIENT */
Website: [CLIENT NAME]
Contact: [CLIENT EMAIL]
Location: [CITY, STATE, INDIA]

/* SITE */
Last update: [DATE]
Language: English (Indian)
Doctype: HTML5
Framework: Astro [VERSION]
Hosting: [Netlify / Vercel / Cloudflare Pages]
Managed by: Square Root SEO — squarerootseo.com
```

---

## File 6: security.txt

### Purpose
Located at `/.well-known/security.txt`. Tells security researchers how to report vulnerabilities. Increasingly checked by trust/authority scoring tools.

### Template (`/public/.well-known/security.txt`)

```txt
Contact: mailto:[CLIENT-EMAIL]
Contact: https://[DOMAIN]/contact/
Expires: [DATE ONE YEAR FROM NOW — ISO 8601 format e.g. 2027-04-20T00:00:00.000Z]
Preferred-Languages: en
Canonical: https://[DOMAIN]/.well-known/security.txt
```

---

## File 7: ads.txt

### Purpose
Only needed if the client runs Google AdSense, AdX, or any programmatic advertising. Declares which ad networks are authorised to sell ads on the domain.

### Template (`/public/ads.txt`)

```txt
# ads.txt — [CLIENT DOMAIN]
# Only include if running display/programmatic advertising

google.com, pub-XXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
# Add additional ad network entries as required
```

> **SRS Note**: Most manufacturer clients do NOT run display ads. If no advertising, either omit this file or leave it as an empty file to prevent unauthorised ad serving.

---

## File 8: manifest.webmanifest (PWA)

### Purpose
Enables Progressive Web App behaviour — "Add to Home Screen," app-like metadata, splash screen. Increasingly used by Lighthouse and PageSpeed as an engagement signal.

### Template (`/public/manifest.webmanifest`)

```json
{
  "name": "[CLIENT FULL BUSINESS NAME]",
  "short_name": "[SHORT NAME 12 CHARS MAX]",
  "description": "[One-sentence business description — matches llms.txt blockquote]",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#[BRAND PRIMARY HEX]",
  "lang": "en-IN",
  "orientation": "portrait-primary",
  "categories": ["business", "[industry]"],
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ]
}
```

**Link in Astro layout (`src/layouts/Base.astro`):**
```html
<link rel="manifest" href="/manifest.webmanifest" />
<meta name="theme-color" content="#[BRAND PRIMARY HEX]" />
```

---

## Astro Speed Architecture

Speed is a ranking signal. Astro is inherently fast, but only if configured correctly.

### Core Web Vitals Targets

| Metric | Target | Fail Threshold | What SRS Does to Hit It |
|--------|--------|---------------|------------------------|
| LCP | < 2.5s | > 4.0s | Preload hero image, defer non-critical JS, fast hosting |
| INP | < 200ms | > 500ms | Astro Islands (minimal JS), no layout thrash |
| CLS | < 0.1 | > 0.25 | Width/height on all images, font-display: swap, no dynamic insertions above fold |
| TTFB | < 600ms | > 1800ms | Edge function delivery (Netlify Edge / Cloudflare Pages) |
| FCP | < 1.8s | > 3.0s | Inline critical CSS, preload fonts |

### Astro-Specific Speed Configuration

#### 1. Rendering Mode Selection

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',   // SSG — fastest option for content sites ✅
  // output: 'hybrid', // Mix static + server — for sites with dynamic features
  // output: 'server', // Full SSR — only for highly dynamic sites
});
```

**SRS Rule**: Default to `static` for all content/branding sites. Use `hybrid` only if authentication, cart, or real-time data is needed.

#### 2. Image Optimisation

Always use Astro's built-in `<Image>` component — never plain `<img>` tags for above-fold images:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Hero image — fetchpriority essential for LCP -->
<Image
  src={heroImage}
  alt="[Descriptive, keyword-natural alt text]"
  width={1200}
  height={630}
  format="webp"
  quality={85}
  fetchpriority="high"
  loading="eager"
/>

<!-- All other images — lazy load -->
<Image
  src={image}
  alt="[Alt text]"
  width={800}
  height={450}
  format="webp"
  quality={80}
  loading="lazy"
/>
```

#### 3. Font Loading

```astro
<!-- In Base.astro <head> — NEVER use @import in CSS for Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap"
  media="print"
  onload="this.media='all'"
/>
<noscript>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" />
</noscript>
```

#### 4. Critical CSS (Inline Above-Fold Styles)

```javascript
// astro.config.mjs — enable experimental CSS inlining
export default defineConfig({
  experimental: {
    // Inline critical CSS for above-fold content
  },
  vite: {
    build: {
      cssCodeSplit: true,      // Split CSS per page (reduces payload)
      assetsInlineLimit: 4096, // Inline assets < 4KB (icons, small SVGs)
    }
  }
});
```

#### 5. ViewTransitions (Astro Native SPA Behaviour)

```astro
---
// In Base.astro layout
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <ViewTransitions />
</head>
```

#### 6. Netlify / Vercel / Cloudflare Configuration for Speed

**Netlify (`netlify.toml` in project root):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    # Security headers
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=(self)"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"

    # Performance headers
    X-DNS-Prefetch-Control = "on"

[[headers]]
  for = "/_astro/*"
  [headers.values]
    # Astro hashed assets — immutable cache (1 year)
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    # HTML — short cache, always revalidate
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=2592000" # 30 days

[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/robots.txt"
  [headers.values]
    Cache-Control = "public, max-age=86400" # 24 hours

[[headers]]
  for = "/sitemap*.xml"
  [headers.values]
    Cache-Control = "public, max-age=3600" # 1 hour (so updates propagate fast)

[[headers]]
  for = "/llms.txt"
  [headers.values]
    Cache-Control = "public, max-age=86400"

[[redirects]]
  # Redirect www to non-www (or vice versa — pick one canonical)
  from = "https://www.[DOMAIN]/*"
  to = "https://[DOMAIN]/:splat"
  status = 301
  force = true
```

---

## HTTP Security Headers Checklist

These headers are both a security requirement and a trust signal that affects E-E-A-T:

```
SECURITY HEADERS AUDIT
  ☐ Strict-Transport-Security (HSTS): max-age=63072000; includeSubDomains; preload
  ☐ X-Content-Type-Options: nosniff
  ☐ X-Frame-Options: SAMEORIGIN (prevents clickjacking)
  ☐ Referrer-Policy: strict-origin-when-cross-origin
  ☐ Permissions-Policy: camera=(), microphone=(), geolocation=(self)
  ☐ Content-Security-Policy: [configured per site needs]
```

---

*This skill file is the definitive SOP for all SRS technical audit and root file configuration. Any deviation requires explicit written override from Punit Aanchal Tongia (President, Square Root SEO).*
