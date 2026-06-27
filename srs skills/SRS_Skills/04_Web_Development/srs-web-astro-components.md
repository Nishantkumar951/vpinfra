# SRS Astro Componentizer Skill

## 🎯 Specific Hysterific: Scope Definition

**Primary Objective**: To convert scraped HTML/CSS into clean, production-ready Astro components while maintaining 1:1 visual parity.

| **In-Scope (Your Domain)** | **Out-of-Scope (Banned Actions)** |
| :--- | :--- |
| Converting HTML/CSS to Astro components. | Writing original blog content or copy. |
| Stripping WordPress/Elementor bloat from code. | Managing high-level business strategy. |
| Preserving CSS classes, IDs, and styles for parity. | Designing brand-level graphics or logos. |
| Creating reusable UI components (Header, Footer). | Managing social media or email marketing. |
| Implementing Tailwind CSS v4 translations. | Performing SEO technical audits (root files). |

# Astro Componentizer — WordPress to Astro Migration Skill

> **Core Constraint:** Maintain all existing CSS classes, IDs, and inline styles
> perfectly to ensure a 1:1 visual match. Strip out WP-specific bloat like emoji
> scripts. The user should see ZERO visual difference between the WordPress original
> and the Astro output.

---

## What This Skill Does

Takes raw HTML + CSS (typically from the DOM Scraper skill) and produces:

1. **Clean `.astro` components** — Header, Footer, Hero, Sections, Sidebar, etc.
2. **A `Layout.astro`** — Base layout with `<head>`, fonts, global CSS
3. **Page files** — `index.astro`, `about.astro`, etc. that compose components
4. **Organized CSS** — Global styles + component-scoped styles
5. **Asset references** — Images, fonts, and scripts properly mapped

All with **zero visual regression** from the original WordPress site.

---

## Prerequisites

Install dependencies once:

```bash
cd /Users/punittongia/Downloads/Anti\ Gravity/SRS_Skills/astro_componentizer/scripts
npm install
```

---

## The Migration Pipeline

```
┌──────────────────────────────────────────────────────────────┐
│                WORDPRESS → ASTRO PIPELINE                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  STEP 1: SCRAPE (DOM Scraper Skill)                          │
│  ├─ Visit live WP URL with headless Chrome                   │
│  ├─ Extract rendered HTML + CSS + metadata                   │
│  └─ Output: index.html, styles.css, meta.json                │
│                                                              │
│  STEP 2: ANALYZE (This Skill — Automatic)                    │
│  ├─ Parse HTML into logical sections                         │
│  ├─ Identify WP bloat to strip                               │
│  ├─ Map CSS to components                                    │
│  └─ Output: component-map.json                               │
│                                                              │
│  STEP 3: COMPONENTIZE (This Skill — Core)                    │
│  ├─ Generate .astro component files                          │
│  ├─ Create Layout.astro with <head> content                  │
│  ├─ Assemble page files                                      │
│  ├─ Organize CSS (global + scoped)                           │
│  └─ Output: Full Astro project structure                     │
│                                                              │
│  STEP 4: VERIFY (Manual)                                     │
│  ├─ Run `npm run dev` in Astro project                       │
│  ├─ Compare visually to original WP site                     │
│  └─ Fix any regressions                                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## How to Use

### Automated Mode — From DOM Scraper Output

```bash
node /Users/punittongia/Downloads/Anti\ Gravity/SRS_Skills/astro_componentizer/scripts/componentize.js \
  --input "/path/to/dom_scraper/output/example.com" \
  --output "/path/to/astro-project" \
  --name "client-site"
```

This reads the DOM Scraper's `index.html`, `styles.css`, and `meta.json`, then
generates a complete Astro project.

### Full Options

```bash
node componentize.js \
  --input "./scraped-output"        # Directory with index.html + styles.css
  --output "./astro-project"        # Where to create the Astro project
  --name "my-site"                  # Project name
  --html "./custom.html"            # Or point directly to an HTML file
  --css "./custom.css"              # And a CSS file
  --no-init                         # Skip Astro project init (just generate components)
  --layout "BaseLayout"             # Name for the layout component (default: Layout)
  --split-css                       # Split CSS per-component vs. one global file
  --keep-scripts                    # Keep non-WP scripts (default: strip all)
  --page-name "about"               # Name for the generated page (default: index)
```

### Manual Mode — Claude Prompt Chain

When Punit provides raw HTML directly (paste or file), Claude should follow
the prompt chain defined below to componentize it step by step.

---

## The WordPress Bloat Strip List

The following WordPress-specific elements are ALWAYS removed during componentization.
This is non-negotiable — they add zero value in Astro and break clean builds.

### Scripts to Strip

| Pattern | What It Is | Why Remove |
|---------|-----------|------------|
| `wp-emoji-release.min.js` | WP emoji polyfill | Astro doesn't need it; modern browsers handle emoji |
| `wp-embed.min.js` | WP oEmbed handler | Not needed outside WordPress |
| `wp-includes/js/jquery/*` | jQuery (WP bundled) | Astro doesn't use jQuery |
| `admin-bar.min.js` | WP admin bar JS | Only for logged-in WP users |
| `comment-reply.min.js` | WP comment reply threading | Rebuild with Astro if needed |
| `wp-block-library` scripts | Gutenberg block JS | Block rendering is server-side in WP |
| `elementor/assets/js/*` | Elementor page builder JS | Astro replaces the builder |
| `js/jquery.min.js` | jQuery from themes | Replace with vanilla JS if needed |
| `woocommerce/assets/js/*` | WooCommerce scripts | Not applicable unless ecommerce rebuild |

### CSS to Strip

| Pattern | What It Is |
|---------|-----------|
| `admin-bar.min.css` | WP admin bar styles |
| `dashicons.min.css` | WP dashboard icons (admin) |
| `wp-block-library/style.min.css` | Gutenberg default block styles (keep only if using block content classes) |
| `classic-themes.min.css` | WP classic theme compat |
| Inline `<style>` with `.wp-block-*` selectors ONLY | Gutenberg inline overrides (evaluate case-by-case) |

### HTML Elements to Strip

| Element | What It Is |
|---------|-----------|
| `#wpadminbar` | Admin bar HTML |
| `<link rel="dns-prefetch" href="//s.w.org">` | WP.org DNS prefetch |
| `<link rel="https://api.w.org/"...>` | WP REST API link |
| `<link rel="EditURI"...>` | WP RSD/XML-RPC |
| `<link rel="wlwmanifest"...>` | Windows Live Writer |
| `<meta name="generator" content="WordPress...">` | WP version meta |
| `<!--[if lt IE 9]>` conditional comments | IE compatibility |
| `<noscript>` containing WP-specific fallbacks | Not needed in Astro |
| Empty `<span>`, `<div>` wrappers | WP/Elementor structural artifacts |

### Inline Styles to Evaluate (Not Auto-Strip)

These should be **reviewed, not blindly removed** — they may contain intentional design:

- `.elementor-*` inline `style` attributes (often contain responsive widths/heights)
- `data-settings` attributes on Elementor widgets (contain animation configs)
- WooCommerce product gallery inline styles

---

## Claude Prompt Chain — Manual Componentization

When Punit provides HTML directly (or says "componentize this"), Claude follows
this exact chain. Each step builds on the previous.

### CHAIN STEP 1: Structural Analysis

**Prompt to self:**
> "I'm looking at this HTML. Before touching anything, I need to identify the
> logical sections. What are the major structural blocks?"

**Actions:**
1. Identify the `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>` elements
2. If no semantic tags, identify by common class patterns:
   - `.site-header`, `.main-header`, `.header-wrapper` → Header
   - `.hero`, `.banner`, `.slider`, `.main-banner` → Hero
   - `.main-content`, `.content-area`, `.site-main` → Main Content
   - `.sidebar`, `.widget-area` → Sidebar
   - `.site-footer`, `.footer-wrapper` → Footer
   - `.cta`, `.contact-section`, `.form-section` → CTA sections
3. For Elementor sites: `.elementor-section` elements are the section boundaries
4. For Gutenberg: `.wp-block-group`, `.wp-block-cover` are section boundaries
5. Create a component map:

```json
{
  "components": [
    { "name": "Header", "selector": "header.site-header", "type": "layout" },
    { "name": "Hero", "selector": ".hero-section", "type": "section" },
    { "name": "Services", "selector": "#services", "type": "section" },
    { "name": "About", "selector": "#about", "type": "section" },
    { "name": "Testimonials", "selector": ".testimonials", "type": "section" },
    { "name": "CTA", "selector": ".cta-section", "type": "section" },
    { "name": "Footer", "selector": "footer.site-footer", "type": "layout" }
  ]
}
```

### CHAIN STEP 2: Bloat Stripping

**Prompt to self:**
> "Now I strip the WordPress DNA. Everything in the bloat list goes. But I
> preserve every CSS class, ID, and inline style that contributes to the visual."

**Actions:**
1. Remove all items from the Bloat Strip List above
2. Remove `data-elementor-*` attributes (keep `class` and `style`)
3. Remove `data-id`, `data-widget_type` Elementor attributes
4. Remove WP-generated `id="post-123"` IDs unless referenced in CSS
5. **PRESERVE:** All `class` attributes, all `id` attributes referenced in CSS,
   all `style` attributes, all `aria-*` attributes, all `role` attributes
6. Clean up empty wrappers that served no purpose
7. Collapse unnecessary nesting (3+ nested `<div>`s with no unique styling)

### CHAIN STEP 3: Component Generation

**Prompt to self:**
> "Each logical section becomes a `.astro` component. The component must be
> self-contained: its HTML is the section markup, and its CSS is scoped."

**For each component, generate:**

```astro
---
// Component: [Name].astro
// Migrated from: [original URL]
// Original selector: [CSS selector that identified this section]

interface Props {
  // Add any dynamic props if section has repeated patterns
}
---

<section class="[original-classes]" id="[original-id]">
  <!-- Exact HTML from the original, cleaned of WP bloat -->
  <!-- All classes, IDs, and inline styles preserved -->
</section>

<style>
  /* All CSS rules that target elements within this component */
  /* Scoped to this component — won't leak to other components */
</style>
```

**Rules for component generation:**
1. **HTML must be valid** — Fix any unclosed tags from WP output
2. **Convert `class` to `class`** — Astro uses standard HTML attributes (no `className`)
3. **Self-close void elements** — `<img />`, `<br />`, `<hr />`, `<input />`
4. **Preserve ALL classes** — Even if they look like WP bloat (`wp-block-columns`),
   they may have CSS targeting them. Only strip if confirmed no CSS references.
5. **Preserve ALL inline styles** — They are intentional design decisions
6. **Convert `<a>` links** — Relative links stay relative; absolute links stay absolute
7. **Image handling** — Keep `src`, `srcset`, `alt`, `loading` attributes intact
8. **Move component-specific CSS** into the `<style>` block (Astro auto-scopes it)

### CHAIN STEP 4: Layout Generation

**Generate `Layout.astro`:**

```astro
---
// Layout.astro — Base layout for all pages
// Migrated from: [original URL]

interface Props {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const {
  title,
  description = "[default meta description from original]",
  canonical,
  ogImage
} = Astro.props;
---

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  {canonical && <link rel="canonical" href={canonical} />}

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {ogImage && <meta property="og:image" content={ogImage} />}

  <!-- Fonts (from original site) -->
  <!-- [Preserve exact Google Fonts / custom font links from <head>] -->

  <!-- Global CSS -->
  <link rel="stylesheet" href="/styles/global.css" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
<body class="[original-body-classes]">
  <slot />
</body>
</html>

<style is:global>
  /* Reset and global styles that apply across all pages */
  /* This is the CSS that targets body, *, html, etc. */
</style>
```

### CHAIN STEP 5: Page Assembly

**Generate page file (e.g., `index.astro`):**

```astro
---
// src/pages/index.astro
// Migrated from: [original URL]

import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import Services from '../components/Services.astro';
import About from '../components/About.astro';
import Testimonials from '../components/Testimonials.astro';
import CTA from '../components/CTA.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="[Original page title]" description="[Original meta description]">
  <Header />
  <main>
    <Hero />
    <Services />
    <About />
    <Testimonials />
    <CTA />
  </main>
  <Footer />
</Layout>
```

### CHAIN STEP 6: CSS Organization

**Split CSS into:**

1. **`/public/styles/global.css`** — Reset, typography, body-level styles, utility classes
2. **Component `<style>` blocks** — Section-specific CSS, scoped per component
3. **`/public/styles/fonts.css`** (if needed) — @font-face declarations

**CSS Rules:**
- All CSS class names preserved EXACTLY as original (`.elementor-widget-heading` stays)
- All CSS custom properties (variables) preserved
- All media queries preserved at their original breakpoints
- Remove CSS rules that ONLY target stripped bloat elements
- Remove `-webkit-` prefixes for properties with universal support (optional)
- Keep all animation `@keyframes` definitions

---

## Astro Project Structure Generated

```
astro-project/
├── public/
│   ├── styles/
│   │   └── global.css              ← Global/reset CSS
│   ├── images/                      ← Copy images here from WP
│   └── fonts/                       ← Local font files if any
├── src/
│   ├── layouts/
│   │   └── Layout.astro             ← Base HTML layout
│   ├── components/
│   │   ├── Header.astro             ← Site header + nav
│   │   ├── Hero.astro               ← Hero/banner section
│   │   ├── Footer.astro             ← Site footer
│   │   └── [Section].astro          ← One per logical section
│   └── pages/
│       ├── index.astro              ← Homepage
│       └── [page].astro             ← Additional pages
├── astro.config.mjs
└── package.json
```

---

## Common WordPress → Astro Conversion Patterns

### Navigation Menus
```html
<!-- WordPress -->
<nav class="main-navigation">
  <ul id="primary-menu" class="menu">
    <li class="menu-item menu-item-has-children">
      <a href="/services/">Services</a>
      <ul class="sub-menu">
        <li class="menu-item"><a href="/seo/">SEO</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

```astro
<!-- Astro: Keep EXACT classes, just clean structure -->
<nav class="main-navigation">
  <ul id="primary-menu" class="menu">
    <li class="menu-item menu-item-has-children">
      <a href="/services/">Services</a>
      <ul class="sub-menu">
        <li class="menu-item"><a href="/seo/">SEO</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

### Contact Forms (CF7 → Static Form)
```html
<!-- WordPress CF7 -->
<div class="wpcf7">
  <form class="wpcf7-form" action="/wp-json/..." method="post">
    <input type="text" name="your-name" class="wpcf7-form-control" />
    <input type="submit" value="Send" class="wpcf7-submit" />
  </form>
</div>
```

```astro
<!-- Astro: Keep classes, update action -->
<div class="wpcf7">
  <form class="wpcf7-form" action="/api/contact" method="post">
    <input type="text" name="your-name" class="wpcf7-form-control" />
    <input type="submit" value="Send" class="wpcf7-submit" />
  </form>
</div>
```

### Elementor Sections
```html
<!-- WordPress Elementor -->
<section class="elementor-section elementor-top-section" data-id="abc123"
  data-element_type="section" data-settings='{"stretch_section":"section-full-width"}'>
  <div class="elementor-container elementor-column-gap-default">
    <div class="elementor-column elementor-col-50">
      <div class="elementor-widget-wrap">
        <div class="elementor-element" data-widget_type="heading.default">
          <div class="elementor-widget-container">
            <h2 class="elementor-heading-title">Our Services</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

```astro
<!-- Astro: Strip data attrs, keep ALL classes -->
<section class="elementor-section elementor-top-section">
  <div class="elementor-container elementor-column-gap-default">
    <div class="elementor-column elementor-col-50">
      <div class="elementor-widget-wrap">
        <div class="elementor-element">
          <div class="elementor-widget-container">
            <h2 class="elementor-heading-title">Our Services</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Image Handling
```html
<!-- WordPress -->
<img src="https://site.com/wp-content/uploads/2024/01/photo.jpg"
  srcset="https://site.com/wp-content/uploads/2024/01/photo-300x200.jpg 300w,
          https://site.com/wp-content/uploads/2024/01/photo-768x512.jpg 768w"
  sizes="(max-width: 768px) 100vw, 768px"
  alt="Team photo" class="wp-image-1234" loading="lazy" />
```

```astro
<!-- Astro: Update paths to local, keep classes -->
<img src="/images/photo.jpg"
  srcset="/images/photo-300x200.jpg 300w,
          /images/photo-768x512.jpg 768w"
  sizes="(max-width: 768px) 100vw, 768px"
  alt="Team photo" class="wp-image-1234" loading="lazy" />
```

---

## Verification Checklist

After componentization, verify these before declaring the migration done:

| Check | How | Pass Criteria |
|-------|-----|--------------|
| **Visual match** | Open WP site and Astro site side by side | Pixel-identical at desktop and mobile |
| **All fonts load** | DevTools → Network → Fonts | Same fonts, same weights |
| **All images render** | Visual scan + DevTools console | No 404s, no broken images |
| **Responsive behavior** | Resize browser / mobile preview | Same breakpoints, same layout shifts |
| **Links work** | Click every nav link | All internal links resolve |
| **Forms submit** | Test form submission | Action endpoint connected |
| **Animations play** | Check hover effects, scroll animations | Same animations trigger |
| **SEO tags intact** | View source / SEO audit tool | Title, meta, OG, schema all present |
| **No WP bloat** | View source | Zero references to wp-content, wp-includes |
| **Performance** | Lighthouse audit | Score should be HIGHER than WP original |

---

## When Claude Should Activate This Skill

- Punit says **"convert to Astro"**, **"migrate this"**, **"Astro this"**
- Punit provides **raw HTML** and wants it turned into Astro components
- Working on a **client site migration** from WordPress to Astro
- Punit says **"componentize this"** or **"break this into components"**
- Follow-up to a DOM Scraper extraction — **"now make it Astro"**

### Workflow When Activated

1. **Check for DOM Scraper output** — Is there already scraped HTML/CSS available?
2. **If not, scrape first** — Run DOM Scraper on the target URL
3. **Run structural analysis** — Identify components (Chain Step 1)
4. **Strip bloat** — Remove WP DNA (Chain Step 2)
5. **Generate components** — Create `.astro` files (Chain Step 3-5)
6. **Organize CSS** — Split global vs. scoped (Chain Step 6)
7. **Present the project structure** — Show Punit the component tree
8. **Init Astro project** — Optionally scaffold a full Astro project
9. **Verify** — Run dev server, compare to original

---

*"Strip the problem to its irreducible components."*
*WordPress wraps content in layers of PHP, JavaScript, and plugin bloat.*
*Astro strips it down to what matters: the HTML, the CSS, the content.*
*That's the migration. From noise to signal.*
