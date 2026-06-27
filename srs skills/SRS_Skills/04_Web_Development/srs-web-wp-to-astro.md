---
name: srs-web-wp-to-astro
version: 1.0.0
description: |
  WordPress to Astro Full-Site Migration Skill. The definitive, end-to-end
  migration playbook for converting any WordPress/Elementor website into a
  production-ready, SEO-optimized Astro v5 static site with ZERO visual regression.
  
  This is the master orchestration skill that coordinates all sub-skills
  (DOM Scraper, Astro Componentizer, WP-to-Markdown, SEO, Web Dev) into a
  single repeatable pipeline. Born from the successful 100% pixel-perfect
  migration of Yoga Adhyayan (yogaadhyayan.com) — where every section,
  word, font, image, background, overlay, and placement was replicated
  exactly from WordPress/Elementor into clean, semantic Astro/Tailwind code.

  Activate when Punit says: "migrate this site to Astro", "move this from
  WordPress", "WP to Astro migration", "convert this WordPress site",
  "full site migration", "rebuild this in Astro", or when starting any
  new client website migration from WordPress/Elementor to Astro.
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - RunCommand
  - BrowserSubagent
---

# WordPress to Astro Full-Site Migration Skill

> **The SRS Migration Doctrine**: A migration is not a redesign. Every section, every word, every font, every image, every background overlay, every placement must transfer from WordPress to Astro with 100% visual parity.

## 🎯 Specific Hysterific: Scope Definition

**Primary Objective**: To orchestrate the end-to-end migration pipeline from WordPress to Astro with zero visual regression.

| **In-Scope (Your Domain)** | **Out-of-Scope (Banned Actions)** |
| :--- | :--- |
| Coordinating the full migration pipeline. | Writing original blog content or copy. |
| Ensuring 1:1 visual parity (Astro/Tailwind). | Managing high-level business strategy. |
| Migrating WP content to Markdown/MDX. | Designing new brand-level graphics. |
| Setting up Astro project structure & SEO. | Managing social media distribution. |
| Removing WP bloat and optimizing performance. | Performing manual keyword research. |

---

## Table of Contents

1. [Migration Philosophy](#migration-philosophy)
2. [Pre-Migration Checklist](#pre-migration-checklist)
3. [The 7-Phase Migration Pipeline](#the-7-phase-migration-pipeline)
4. [Phase 1: Setup & Asset Collection](#phase-1-setup--asset-collection)
5. [Phase 2: Componentization Strategy](#phase-2-componentization-strategy)
6. [Phase 3: Page Assembly](#phase-3-page-assembly)
7. [Phase 4: Exact Visual Parity Audit](#phase-4-exact-visual-parity-audit)
8. [Phase 5: Deep Parity Rework](#phase-5-deep-parity-rework)
9. [Phase 6: SEO & Production Optimization](#phase-6-seo--production-optimization)
10. [Phase 7: Deployment & Handoff](#phase-7-deployment--handoff)
11. [Sub-Skill Coordination Map](#sub-skill-coordination-map)
12. [Reference: Yoga Adhyayan Case Study](#reference-yoga-adhyayan-case-study)
13. [Verification Checklists](#verification-checklists)
14. [Troubleshooting](#troubleshooting)

---

## Migration Philosophy

### What We Migrate (100% Exact)
- ✅ Every visible section and content block
- ✅ All text content — word for word, heading by heading
- ✅ All images — exact source files, exact placement, exact sizing
- ✅ Fonts — exact typefaces, weights, and sizes from Google Fonts or custom
- ✅ Logo — exact placement, sizing, and linking
- ✅ Colors — exact hex values, gradients, overlays, and opacity
- ✅ Spacing — margins, paddings, gaps matching the original layout
- ✅ Background images, overlays, and decorative elements
- ✅ Hover states, transitions, and micro-animations
- ✅ Responsive behavior — desktop, tablet, and mobile breakpoints
- ✅ Navigation structure and internal linking
- ✅ Forms — field structure, labels, placeholders, validation
- ✅ SEO metadata — titles, descriptions, Open Graph, schema

### What We Strip (WordPress/Elementor Bloat)
- ❌ `wp-emoji-release.min.js` and emoji polyfills
- ❌ `wp-embed.min.js` and oEmbed handlers
- ❌ jQuery and WordPress-bundled scripts
- ❌ `admin-bar.min.js` and admin-bar CSS
- ❌ Elementor JS runtime (`frontend.min.js`, `webpack.runtime.min.js`)
- ❌ Gutenberg block library scripts and CSS
- ❌ WooCommerce scripts (unless ecommerce rebuild)
- ❌ `data-elementor-*`, `data-id`, `data-widget_type` attributes
- ❌ Elementor's deeply nested wrapper `<div>`s (5-7 levels deep)
- ❌ WordPress `<meta name="generator">` tags
- ❌ XML-RPC, WLW Manifest, and REST API link tags
- ❌ DNS prefetch to `s.w.org`
- ❌ Plugin-generated inline CSS that serves no visual purpose

### What We Replace (Technology Swap)
| WordPress/Elementor | Astro Equivalent |
|---------------------|-----------------|
| PHP templating | `.astro` components |
| Elementor drag-and-drop sections | Semantic HTML + Tailwind CSS |
| jQuery-based interactivity | Vanilla JavaScript |
| `functions.php` + plugin stack | `astro.config.mjs` + integrations |
| MySQL database | Static file generation |
| `wp-content/uploads/` | `/public/assets/` (local) |
| Yoast/RankMath SEO plugin | `<head>` meta tags + `@astrojs/sitemap` |
| Contact Form 7 / WPForms | Native HTML `<form>` |
| WordPress theme CSS (3MB+) | Tailwind CSS (< 50KB purged) |

---

## Pre-Migration Checklist

Before writing a single line of code, complete this checklist:

```
PRE-MIGRATION AUDIT
  ☐ Live site URL confirmed and accessible
  ☐ All pages inventoried (list every URL to migrate)
  ☐ WordPress admin access available? (for XML export, if blog exists)
  ☐ Domain registrar and DNS access confirmed (for deployment)
  ☐ Current hosting provider identified
  ☐ Target deployment platform decided (Vercel / Netlify / cPanel / other)
  ☐ Google Search Console access available (for redirect verification)
  ☐ Google Analytics tracking code/ID documented
  ☐ Brand assets located: logo files, brand colors, fonts
  ☐ Any third-party integrations documented (payment gateways, CRM, chat)
  ☐ Client approval: "The design stays exactly the same"

PAGE INVENTORY TEMPLATE
  | # | Page Name         | WordPress URL                  | Astro Route          | Priority |
  |---|-------------------|-------------------------------|---------------------|----------|
  | 1 | Homepage          | /                             | /                   | Critical |
  | 2 | About             | /about/                       | /about              | High     |
  | 3 | Services          | /services/                    | /services           | High     |
  | 4 | Contact           | /contact/                     | /contact            | High     |
  | 5 | Blog (if exists)  | /blog/                        | /blog               | Medium   |
  | 6 | Privacy Policy    | /privacy-policy/              | /privacy-policy     | Low      |
  | 7 | Terms             | /terms-and-conditions/        | /terms-and-conditions| Low      |
```

---

## The 7-Phase Migration Pipeline

```
┌─────────────────────────────────────────────────────────────────────────┐
│               WORDPRESS → ASTRO MIGRATION PIPELINE                     │
│                    (SRS Production Standard)                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  PHASE 1 ─ SETUP & ASSET COLLECTION                          ~1 hour  │
│  ├─ Initialize Astro v5 project                                        │
│  ├─ Configure Tailwind CSS v4 via Vite                                 │
│  ├─ Scrape all WordPress pages using DOM Scraper skill                 │
│  └─ Download and inventory all media assets                            │
│                                                                         │
│  PHASE 2 ─ COMPONENTIZATION STRATEGY                         ~2 hours │
│  ├─ Analyze scraped HTML — identify logical sections                   │
│  ├─ Create Layout.astro with <head> foundations                        │
│  ├─ Build reusable components (Header, Footer, Hero, etc.)             │
│  ├─ Extract and organize CSS (Tailwind utilities)                      │
│  └─ Strip ALL Elementor/WordPress bloat from components                │
│                                                                         │
│  PHASE 3 ─ PAGE ASSEMBLY                                     ~2 hours │
│  ├─ Assemble homepage (index.astro) from components                    │
│  ├─ Build all sub-pages using shared layouts                           │
│  ├─ Create PolicyLayout for legal/policy pages                         │
│  └─ Run local dev server — first visual check                          │
│                                                                         │
│  PHASE 4 ─ EXACT VISUAL PARITY AUDIT                        ~1 hour  │
│  ├─ Open live WP site and Astro site side-by-side                      │
│  ├─ Compare EVERY section: content, images, spacing, colors            │
│  ├─ Document all gaps in a parity checklist                            │
│  └─ Client reviews and flags any remaining differences                 │
│                                                                         │
│  PHASE 5 ─ DEEP PARITY REWORK                               ~3 hours │
│  ├─ Rebuild any sections that don't match 100%                         │
│  ├─ Fix overlapping image compositions                                 │
│  ├─ Match exact background overlays and gradients                      │
│  ├─ Audit hover states, animations, and transitions                    │
│  └─ Re-verify every page at desktop + mobile                           │
│                                                                         │
│  PHASE 6 ─ SEO & PRODUCTION OPTIMIZATION                    ~2 hours │
│  ├─ Install @astrojs/sitemap with site URL                             │
│  ├─ Configure meta titles, descriptions, canonical URLs                │
│  ├─ Add Open Graph + Twitter Card meta tags                            │
│  ├─ Audit heading hierarchy (single H1 per page)                       │
│  ├─ Localize all images to /public/assets/                             │
│  ├─ Add lazy loading + async decoding to images                        │
│  ├─ Create robots.txt                                                  │
│  ├─ Download and set favicon                                           │
│  └─ Create OG image                                                    │
│                                                                         │
│  PHASE 7 ─ DEPLOYMENT & HANDOFF                              ~1 hour  │
│  ├─ Run npm run build — verify zero errors                             │
│  ├─ Initialize Git repository                                          │
│  ├─ Push to GitHub                                                     │
│  ├─ Connect to deployment platform (Vercel/Netlify/cPanel)             │
│  └─ Final live URL verification                                        │
│                                                                         │
│  TOTAL ESTIMATED TIME: 10-12 HOURS                                     │
│  (Simple 5-page site: ~8 hours | Complex 15+ page site: ~16 hours)    │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Setup & Asset Collection

### Step 1.1 — Initialize the Astro Project

Create a new Astro v5 project in the client's workspace directory:

```bash
# Navigate to the project directory
# Example: /Users/punittongia/Downloads/Anti Gravity/[Client Name]

# Initialize Astro
npm create astro@latest ./ -- --template minimal --no-install --no-git

# Install dependencies
npm install

# Install Tailwind CSS v4 via Vite
npm install @tailwindcss/vite

# Install sitemap integration (for Phase 6)
npx astro add sitemap -y
```

### Step 1.2 — Configure Astro + Tailwind

**`astro.config.mjs`:**
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://[client-domain].com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
```

**`src/styles/global.css`:**
```css
@import "tailwindcss";

@theme {
  --font-sans: 'DM Sans', system-ui, sans-serif;
  --font-serif: 'DM Serif Display', Georgia, serif;
  /* Customize font families per client */
}
```

### Step 1.3 — Scrape the Live WordPress Site

**Invoke the `dom-scraper` skill** to extract the rendered HTML, CSS, and metadata
from every page on the live site:

```bash
# Scrape the homepage
node SRS_Skills/dom_scraper/scripts/scrape.js \
  --url "https://[client-domain].com" \
  --output "./temp_scrape" \
  --clean --no-scripts --screenshots

# Scrape each sub-page
node SRS_Skills/dom_scraper/scripts/scrape.js \
  --url "https://[client-domain].com/about/" \
  --output "./temp_scrape"

# Repeat for every page in the inventory
```

Alternatively, use the **browser subagent** to visit each page and extract content
directly from the rendered DOM — this is especially useful for pages with heavy
JavaScript rendering or lazy-loaded content.

### Step 1.4 — Inventory All Media Assets

Scan the scraped HTML for all image URLs from `wp-content/uploads/`:

```bash
# Find all unique image URLs
grep -roh 'https://[client-domain].com/wp-content/uploads/[^"]*\.\(jpg\|jpeg\|png\|svg\|webp\)' temp_scrape/ | sort -u > image_inventory.txt
```

Document the following for each image:
- Source URL
- Which component/section uses it
- Role: hero, background, card, icon, logo, decorative

---

## Phase 2: Componentization Strategy

### Step 2.1 — Structural Analysis

Open the scraped `index.html` and identify the logical sections. For a typical
WordPress/Elementor site, these are bounded by:
- `<section class="elementor-section">` elements
- Or `<div class="elementor-top-section">` wrappers
- Each top-level section = one Astro component

**Create a Component Map:**

```
HOMEPAGE COMPONENT MAP (example)
  ┌─ Header.astro          ← Navigation bar + logo
  ├─ Hero.astro             ← Hero banner with CTA
  ├─ Benefits.astro         ← Value proposition cards
  ├─ Classes.astro          ← Service/class schedule
  ├─ Challenge.astro        ← Special offer section
  ├─ HolisticApproach.astro ← Feature grid
  ├─ Sessions.astro         ← Session details
  ├─ Guides.astro           ← Team/instructor profiles
  ├─ Features.astro         ← Why Choose Us
  ├─ Stats.astro            ← Statistics counter strip
  ├─ Pricing.astro          ← Pricing cards
  └─ Footer.astro           ← Footer with links and contact
```

### Step 2.2 — Create the Base Layout

**`src/layouts/Layout.astro`** — The master HTML shell:

```astro
---
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const {
  title,
  description = "[Client default meta description]",
  image = "/og-image.jpg"
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site || 'https://[client-domain].com');
---

<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <title>{title} | [Client Name]</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="generator" content={Astro.generator} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={`${title} | [Client Name]`} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={new URL(image, canonicalURL)} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={canonicalURL} />
    <meta property="twitter:title" content={`${title} | [Client Name]`} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={new URL(image, canonicalURL)} />

    <!-- Fonts (extract exact fonts from WordPress site's <head>) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=[Client+Fonts]&display=swap" rel="stylesheet">
  </head>
  <body class="font-sans text-slate-800 antialiased">
    <slot />
  </body>
</html>
```

### Step 2.3 — Build Each Component

For EVERY component, follow this exact process:

1. **Extract the section HTML** from the scraped `index.html`
2. **Strip Elementor bloat** — remove `data-*` attributes, collapse unnecessary nesting
3. **Convert to Tailwind** — replace Elementor inline styles with Tailwind classes
4. **Preserve exact content** — every word, heading, image, link must match
5. **Match exact visual layout** — use the live site as the reference, not the code
6. **Add scoped styles** — for any CSS that Tailwind can't handle natively

**Component Conversion Checklist (per component):**
```
☐ HTML extracted from scraped source
☐ Elementor wrapper divs collapsed (5+ levels → 2-3 levels)
☐ data-elementor-*, data-id, data-widget_type attributes removed
☐ CSS classes converted to Tailwind utilities
☐ All text content matches the live site word-for-word
☐ All image sources point to correct files
☐ All internal links use correct Astro routes
☐ Hover states and transitions replicated
☐ Responsive behavior verified at 375px, 768px, 1024px, 1440px
☐ Component renders identically to the live site section
```

### Step 2.4 — Create Specialty Layouts

For sites with policy/legal pages, create a shared layout:

**`src/layouts/PolicyLayout.astro`:**
```astro
---
import Layout from './Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description?: string;
  lastUpdated?: string;
}

const {
  title,
  description = "Official policy documentation.",
  lastUpdated
} = Astro.props;
---

<Layout title={title} description={description}>
  <Header />
  <main class="pt-32 pb-24 bg-slate-50 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 md:p-16 rounded-3xl shadow-sm">
      <div class="mb-12 border-b pb-8 text-center">
        <h1 class="text-4xl font-bold text-slate-900 mb-4 font-serif">{title}</h1>
        {lastUpdated && <p class="text-slate-500">Last updated: {lastUpdated}</p>}
      </div>
      <article class="prose-content">
        <slot />
      </article>
    </div>
  </main>
  <Footer />
</Layout>
```

---

## Phase 3: Page Assembly

### Step 3.1 — Assemble the Homepage

Wire all components together in `src/pages/index.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import Benefits from '../components/Benefits.astro';
import Classes from '../components/Classes.astro';
import Challenge from '../components/Challenge.astro';
import HolisticApproach from '../components/HolisticApproach.astro';
import Sessions from '../components/Sessions.astro';
import Guides from '../components/Guides.astro';
import Features from '../components/Features.astro';
import Stats from '../components/Stats.astro';
import Pricing from '../components/Pricing.astro';
import Footer from '../components/Footer.astro';
---

<Layout
  title="[Page Title with Primary Keyword]"
  description="[150-160 char meta description with keyword and CTA]"
>
  <Header />
  <main>
    <Hero />
    <Benefits />
    <Classes />
    <Challenge />
    <HolisticApproach />
    <Sessions />
    <Guides />
    <Features />
    <Stats />
    <Pricing />
  </main>
  <Footer />
</Layout>
```

**Critical**: The component ORDER must match the section order on the live site
exactly. Scroll through the live site top-to-bottom and place components in that
precise sequence.

### Step 3.2 — Build Sub-Pages

For each sub-page in the inventory:

1. Visit the live WordPress URL
2. Use browser subagent or DOM scraper to extract all content
3. Build the page using shared layouts + page-specific components
4. Set proper SEO metadata per page

**Naming Convention:**
- WordPress URL `/5-am-club/` → Astro file `src/pages/5-am-club.astro`
- WordPress URL `/privacy-policy/` → Astro file `src/pages/privacy-policy.astro`
- WordPress URL `/terms-and-conditions/` → Astro file `src/pages/terms-and-conditions.astro`

### Step 3.3 — Run First Visual Check

```bash
npm run dev
# Opens at http://localhost:4321
```

Open the live WordPress site and the local Astro site side-by-side. This is
the first rough comparison — detailed parity comes in Phase 4.

---

## Phase 4: Exact Visual Parity Audit

This is the MOST CRITICAL phase. A migration is only successful if a visitor
cannot tell the difference between the old site and the new one.

### Step 4.1 — Section-by-Section Comparison

For EVERY page, compare these elements between the live site and the Astro version:

```
VISUAL PARITY AUDIT CHECKLIST (per page)

HEADER & NAVIGATION
  ☐ Logo: exact image, exact size, exact placement
  ☐ Navigation links: same items, same order, same URLs
  ☐ Mobile hamburger menu: present and functional
  ☐ Sticky/fixed behavior: matches original
  ☐ Background color/transparency: matches original

HERO SECTION
  ☐ Headline text: word-for-word match
  ☐ Subheading text: word-for-word match
  ☐ CTA button: text, color, hover state match
  ☐ Hero image(s): same source, same placement, same overlay
  ☐ Floating badges/cards: present with correct data
  ☐ Background: image, gradient, or color matches
  ☐ Animations: fade-in, float, parallax effects present

EACH CONTENT SECTION (repeat for every section)
  ☐ Section heading: exact text, exact font size/weight
  ☐ Subheading/tagline: exact text
  ☐ Body text: word-for-word content match
  ☐ Images: correct sources, correct sizes, correct borders/radius
  ☐ Grid/card layouts: same number of columns, same spacing
  ☐ Background: color, gradient, image, or overlay matches
  ☐ Icons: same icons (SVG, Font Awesome, or image)
  ☐ Hover effects: same color change, scale, shadow
  ☐ Spacing: margins and padding visually match

FOOTER
  ☐ Logo present
  ☐ Navigation links: same items
  ☐ Contact information: exact phone, email, address
  ☐ Social media icons: same platforms, correct URLs
  ☐ Copyright text: exact wording
  ☐ Background color/pattern: matches

RESPONSIVE (test at these widths)
  ☐ 375px (iPhone SE) — mobile
  ☐ 768px (iPad) — tablet
  ☐ 1024px (laptop) — small desktop
  ☐ 1440px (standard) — desktop
```

### Step 4.2 — Document Gaps

Create a parity gap list with exact descriptions:

```
PARITY GAP DOCUMENT

| # | Page    | Section     | Gap Description                              | Priority |
|---|---------|-------------|----------------------------------------------|----------|
| 1 | Home    | Hero        | Missing second image in staggered collage    | Critical |
| 2 | Home    | Stats       | Counter numbers not matching (25000 vs 2500) | Critical |
| 3 | 5AM Club| Hero        | Two separate H1s need merging into one       | High     |
| 4 | Home    | Features    | Icon colors slightly off (#0D9488 vs #14B8A6)| Medium   |
```

---

## Phase 5: Deep Parity Rework

For every gap identified in Phase 4, go back to the live site and rebuild
the component to match perfectly.

### Techniques for Achieving Exact Parity

**1. Overlapping Image Compositions (Elementor Specialty)**

Elementor frequently uses negative margins and absolute positioning to create
overlapping image collages. Replicate with:

```html
<div class="relative h-[600px]">
  <!-- First image — left and forward -->
  <div class="absolute top-0 left-0 w-3/5 z-20">
    <img class="rounded-[2.5rem] shadow-2xl border-[0.5rem] border-white"
         src="/assets/image-1.jpg" alt="..." />
  </div>
  <!-- Second image — right and offset down -->
  <div class="absolute top-24 right-0 w-1/2 z-10">
    <img class="rounded-[2.5rem] shadow-xl border-[0.5rem] border-white"
         src="/assets/image-2.jpg" alt="..." />
  </div>
</div>
```

**2. Floating Badges (Elementor Icon Boxes)**

```html
<div class="absolute bottom-16 -left-12 bg-white px-5 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-30">
  <div class="bg-teal-100 p-2.5 rounded-full text-teal-600">
    <!-- SVG icon -->
  </div>
  <div>
    <p class="text-2xl font-bold text-slate-900">25000+</p>
    <p class="text-sm text-slate-500">Students Trained</p>
  </div>
</div>
```

**3. Background Overlays (Elementor Background + Overlay)**

```html
<section class="relative bg-gradient-to-tr from-teal-900 to-slate-900 text-white">
  <div class="absolute inset-0 bg-[url('/assets/bg.jpg')] bg-cover opacity-10"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4">
    <!-- Content above the overlay -->
  </div>
</section>
```

**4. Stats Counters (Elementor Counter Widget)**

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
  <div>
    <p class="text-4xl font-bold text-teal-400">25000+</p>
    <p class="text-white/80 text-sm uppercase tracking-wider">Students</p>
  </div>
  <!-- Repeat for each stat -->
</div>
```

**5. Fixing H1 Hierarchy (SEO Compliance)**

Elementor often generates multiple `<h1>` tags for visual styling. In Astro,
merge them into a single `<h1>` with internal `<span>` styling:

```html
<!-- WRONG: Two H1s (Elementor default) -->
<h1>Join the Yoga Adhyayan</h1>
<h1 class="text-teal-400">5 AM Club!</h1>

<!-- CORRECT: Single H1 with styled spans -->
<h1 class="text-6xl font-bold leading-tight">
  Join the Yoga Adhyayan<br/>
  <span class="text-teal-400">5 AM Club!</span>
</h1>
```

---

## Phase 6: SEO & Production Optimization

### Step 6.1 — Sitemap & Robots

**`public/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://[client-domain].com/sitemap-index.xml
```

The `@astrojs/sitemap` integration (installed in Phase 1) automatically generates
the sitemap at build time using the `site` value from `astro.config.mjs`.

### Step 6.2 — Meta Tags & SEO Audit

Verify these for EVERY page:

```
SEO AUDIT CHECKLIST (per page)
  ☐ <title> tag: 50-60 chars, includes primary keyword
  ☐ <meta name="description">: 150-160 chars, keyword + CTA
  ☐ <link rel="canonical">: absolute URL, no trailing slash issues
  ☐ og:title, og:description, og:image: all populated
  ☐ twitter:card: set to summary_large_image
  ☐ Single <h1> per page — always
  ☐ Heading hierarchy: H1 → H2 → H3 (never skip levels)
  ☐ All images have descriptive alt text
  ☐ All links use descriptive anchor text
  ☐ Favicon loads correctly
```

### Step 6.3 — Asset Localization & Image Optimization

**Run the asset localization script** to download all WordPress-hosted images
to `/public/assets/` and update all references:

```javascript
// scripts/optimize_assets.mjs
// This script:
// 1. Scans all .astro and .css files for wp-content/uploads URLs
// 2. Downloads each image to /public/assets/
// 3. Replaces all WordPress URLs with local /assets/ paths
// 4. Adds loading="lazy" and decoding="async" to non-hero images
```

```bash
node scripts/optimize_assets.mjs
```

**After running the script, verify:**
```
☐ Zero references to yogaadhyayan.com/wp-content remain in codebase
☐ All images load from /assets/ locally
☐ Hero images do NOT have loading="lazy" (above the fold)
☐ All below-fold images have loading="lazy" decoding="async"
☐ Favicon downloaded to /public/favicon.png
☐ OG image created at /public/og-image.jpg (1200x628px)
```

---

## Phase 7: Deployment & Handoff

### Step 7.1 — Production Build

```bash
npm run build
```

Verify:
```
☐ Build completes with zero errors
☐ dist/ directory contains all pages
☐ dist/sitemap-index.xml exists and lists all URLs
☐ dist/robots.txt exists and points to sitemap
```

### Step 7.2 — Git & GitHub

```bash
git init
git add .
git commit -m "feat: complete [Client Name] WordPress to Astro migration"
git branch -M main
git remote add origin https://github.com/[org]/[repo].git
git push -u origin main
```

### Step 7.3 — Deploy

**Vercel:**
```bash
# Connect GitHub repo to Vercel
# Framework: Astro (auto-detected)
# Build command: npm run build
# Output directory: dist
# Add custom domain in Vercel dashboard
```

**Netlify:**
```bash
# Connect GitHub repo to Netlify
# Build command: npm run build
# Publish directory: dist
# Add custom domain in Netlify dashboard
```

**cPanel / Static Hosting:**
```bash
npm run build
# Upload contents of dist/ to public_html via FTP/File Manager
```

### Step 7.4 — Post-Deployment Verification

```
POST-LAUNCH CHECKLIST
  ☐ All pages load without errors (200 status codes)
  ☐ SSL certificate active (HTTPS)
  ☐ Custom domain resolves correctly
  ☐ Sitemap accessible at /sitemap-index.xml
  ☐ robots.txt accessible at /robots.txt
  ☐ Google Search Console: submit new sitemap
  ☐ Google Analytics: verify tracking code fires
  ☐ Lighthouse audit: 90+ on mobile
  ☐ All forms submit correctly
  ☐ All internal links work (no broken links)
  ☐ Social sharing: OG tags display correctly when URL shared
  ☐ Mobile: test on real device at 375px width
```

---

## Sub-Skill Coordination Map

This migration skill orchestrates the following SRS sub-skills:

```
WP-TO-ASTRO MIGRATION (this skill — master orchestrator)
│
├── DOM SCRAPER SKILL (Phase 1)
│   └─ Extracts rendered HTML, CSS, metadata from live WordPress pages
│
├── ASTRO COMPONENTIZER SKILL (Phase 2)
│   └─ Converts raw HTML sections into clean .astro components
│
├── WP-TO-MARKDOWN SKILL (Phase 2-3, if blog exists)
│   └─ Converts WordPress XML export blog posts into Markdown files
│
├── WEB DEV SKILL (Phase 2-5)
│   └─ Tailwind CSS, responsive design, performance optimization
│
├── SEO SKILL (Phase 6)
│   └─ Meta tags, heading hierarchy, Schema, sitemap, robots.txt
│
├── GRAPHIC DESIGN SKILL (Phase 5)
│   └─ OG images, favicon optimization, asset creation
│
└── COPYWRITING SKILL (Phase 4-5)
    └─ Content verification — ensuring word-for-word accuracy
```

### When to Invoke Each Sub-Skill

| Migration Phase | Sub-Skill to Invoke | Trigger |
|----------------|--------------------|---------| 
| Phase 1 | `dom-scraper` | "Scrape the homepage and all sub-pages" |
| Phase 2 | `astro-componentizer` | "Convert scraped HTML into .astro components" |
| Phase 2 | `wp-to-markdown` | "Export and convert blog posts" (if blog exists) |
| Phase 2-5 | `web-developer-srs` | "Build responsive Tailwind layouts" |
| Phase 4-5 | `copywriting-seo-srs` | "Verify content matches word-for-word" |
| Phase 5 | `graphic-designer-srs` | "Create OG image or optimize favicon" |
| Phase 6 | `seo-skill-srs` | "Implement full technical SEO stack" |

---

## Reference: Yoga Adhyayan Case Study

The Yoga Adhyayan migration (yogaadhyayan.com) is the gold-standard reference
for this skill. Here is the exact execution record:

### Site Profile
| Attribute | Value |
|-----------|-------|
| Client | Yoga Adhyayan |
| Original Platform | WordPress + Elementor |
| Pages Migrated | 6 (Home, 5AM Club, Privacy, Terms, Shipping, Cancellation) |
| Components Created | 12 (Header, Hero, Benefits, Classes, Challenge, HolisticApproach, Sessions, Guides, Features, Stats, Pricing, Footer) |
| Layouts Created | 2 (Layout.astro, PolicyLayout.astro) |
| Images Localized | 20+ from wp-content/uploads |
| Target Stack | Astro v5 + Tailwind CSS v4 |

### Execution Timeline

| Phase | Task | Status |
|-------|------|--------|
| Phase 1 | Astro init + Tailwind config + DOM scraping | ✅ Complete |
| Phase 2 | 12 components built from scraped HTML | ✅ Complete |
| Phase 3 | 6 pages assembled (index + 5 sub-pages) | ✅ Complete |
| Phase 4 | Visual audit identified 5 critical gaps | ✅ Complete |
| Phase 5.1 | Rebuilt Challenge, HolisticApproach, Guides, Features, Stats | ✅ Complete |
| Phase 5.2 | Rebuilt Hero (dual-image collage) + 5AM Club (full native UI) | ✅ Complete |
| Phase 6 | Sitemap, robots.txt, OG tags, canonical URLs, image localization | ✅ Complete |
| Phase 7 | Git init + push to GitHub | ✅ Complete |

### Key Lessons Learned

1. **The first pass is never enough.** Phase 3 output looked "close" but missed
   staggered image compositions, floating badges, exact gradients, and icon SVGs.
   Always run Phase 4 audit rigorously.

2. **Elementor nesting is extreme.** A single heading wrapped in 5-7 `<div>`
   layers. Collapsing this to 2-3 levels is essential for clean Astro code.

3. **Dual H1 tags are an Elementor anti-pattern.** Elementor lets users drag
   two heading widgets and both default to `<h1>`. Always merge into a single
   `<h1>` with `<span>` styling.

4. **Image hotlinking must be eliminated.** In early phases, referencing
   `wp-content/uploads/` URLs is acceptable for speed, but Phase 6 MUST
   localize everything. The WordPress server may be decommissioned after migration.

5. **Policy pages are easy wins.** Legal/policy pages use the same layout and
   can be mass-produced with a `PolicyLayout.astro` template.

---

## Verification Checklists

### Final Migration Verification (Must ALL Pass)

```
MIGRATION COMPLETE VERIFICATION
  
  VISUAL PARITY
    ☐ Every section on every page matches the live WordPress site
    ☐ Fonts match exactly (family, weight, size)
    ☐ Colors match exactly (backgrounds, text, accents)
    ☐ Images: same sources, same placement, same effects
    ☐ Responsive: identical behavior at 375px, 768px, 1440px
    ☐ Hover states and animations: present and matching
  
  CONTENT INTEGRITY
    ☐ Every word of text content has been transferred
    ☐ Every heading, paragraph, list item matches
    ☐ Contact information: phone, email, address verified
    ☐ All internal links point to correct Astro routes
    ☐ All external links preserved and functional
  
  TECHNICAL SEO
    ☐ Meta title on every page (50-60 chars)
    ☐ Meta description on every page (150-160 chars)
    ☐ Canonical URL on every page
    ☐ Open Graph tags on every page
    ☐ Single H1 per page
    ☐ Heading hierarchy correct (H1 → H2 → H3)
    ☐ Image alt text present and descriptive
    ☐ Sitemap generates correctly
    ☐ robots.txt present and correct
    ☐ Favicon loads
  
  PERFORMANCE
    ☐ All images lazy-loaded (except hero)
    ☐ Zero references to wp-content/uploads in codebase
    ☐ npm run build completes without errors
    ☐ Lighthouse mobile score: 90+
  
  DEPLOYMENT
    ☐ Code pushed to Git repository
    ☐ Live URL accessible
    ☐ SSL active
    ☐ Google Search Console sitemap submitted
```

---

## Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Sections look "simplified" vs original | Elementor's complex grid/flex lost during extraction | Re-scrape specific section; rebuild with exact Tailwind positioning |
| Images don't load after localization | Filename mismatch (WordPress adds dimension suffixes) | Check `/public/assets/` filenames match code references |
| Tailwind classes not applying | Tailwind v4 purges unused classes by default | Ensure classes are in `.astro` files (not dynamically generated) |
| Fonts look different | Wrong Google Fonts weight/style imported | Compare `<link>` tag with original site's font imports exactly |
| Mobile layout broken | Responsive breakpoints differ from Elementor's | Add explicit Tailwind responsive prefixes (`md:`, `lg:`) |
| OG image not showing on social | URL not absolute or image too small | Ensure `og:image` uses full absolute URL, minimum 1200x628px |
| Sitemap not generating | `site` not configured in `astro.config.mjs` | Add `site: 'https://domain.com'` to config |
| Build fails with component errors | Invalid HTML in `.astro` file (unclosed tags, etc.) | Run `npm run dev` first; fix all console warnings |
| Floating badges positioned wrong | Absolute positioning percentages differ at various widths | Use `left-0`, `right-0` with explicit pixel offsets |
| Background overlay too dark/light | Opacity value doesn't match Elementor's layer setting | Inspect Elementor's overlay opacity in DevTools; match with `opacity-[value]` |

---

## When to Activate This Skill

Trigger this skill when Punit says ANY of the following:

- **"Migrate this site to Astro"**
- **"Move this from WordPress"**
- **"WP to Astro"** or **"WordPress to Astro"**
- **"Convert this WordPress site"**
- **"Full site migration"**
- **"Rebuild this in Astro"**
- **"Same design, new platform"**
- **"Make this site faster"** (when the source is WordPress)
- **"Client site migration"**
- **"Decommission WordPress"**

### Workflow When Activated

1. **Read this SKILL.md** — Refresh the full 7-phase pipeline
2. **Gather inputs** — Client URL, page inventory, deployment target
3. **Execute Phase 1-7 sequentially** — Never skip phases
4. **Invoke sub-skills as needed** — See coordination map above
5. **Run verification checklists** — Every checkbox must pass
6. **Document in task.md** — Track progress through each phase
7. **Deliver walkthrough.md** — Summarize what was built and how to deploy

---

*"Strip the problem to its irreducible components."*
*WordPress wraps content in layers of PHP, JavaScript, and plugin bloat.*
*Astro strips it down to what matters: the HTML, the CSS, the content.*
*That's the migration. From noise to signal. 100% parity. Zero compromise.*
