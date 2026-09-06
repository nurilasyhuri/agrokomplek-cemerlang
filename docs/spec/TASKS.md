# Implementation Tasks — Agrokomplek Cemerlang Web Platform

> Traceable task list mapping directly to `PRD.md`, `SYSTEM-ARCHITECTURE.md`, `SEO-STRATEGY.md`, and Cloudflare Pages deployment requirements. Every task specifies exact file targets and a runnable "Done when" verification condition.

---

## Phase 1: Foundation, Toolchain & Cloudflare Configuration
- [x] **TASK-01: Initialize Astro Project with TypeScript Strict Mode**
  - **Files:** `package.json`, `astro.config.mjs`, `tsconfig.json`
  - **Done when:** `bun run build` generates a clean `dist/` directory without warnings or type errors.
- [x] **TASK-02: Configure Tailwind CSS with "Madian" Agritech Theme Tokens**
  - **Files:** `tailwind.config.mjs`, `src/styles/global.css`, `src/styles/theme.css`
  - **Done when:** CSS variables for primary emerald (`#195a36`), sunlight amber (`#d97706`), canvas off-white (`#fbfbf9`), and surface stone are defined, and Tailwind classes render properly.
- [x] **TASK-03: Setup Cloudflare Pages Edge Configuration & Headers**
  - **Files:** `wrangler.jsonc`, `public/_headers`, `public/_redirects`
  - **Done when:** `public/_headers` contains strict CSP, HSTS, and immutable asset cache headers, and `public/_redirects` contains canonical 301 domain rules.
- [x] **TASK-04: Setup Astro Content Collections with Zod Runtime Validation**
  - **Files:** `src/content/config.ts`
  - **Done when:** Schemas for `produk`, `proyek`, and `artikel` are defined with strict Zod types, and `bun astro check` passes.
- [x] **TASK-05: Configure Canonical Business Constants & NAP Data**
  - **Files:** `src/data/businessInfo.ts`, `src/data/navigation.ts`
  - **Done when:** Official address, coordinates, email, phone `+62 851-8300-2070`, Google Maps URL, and menu hierarchies are encapsulated in typed constants.

---

## Phase 2: Core Components & Layout Engine
- [x] **TASK-06: Build SEO Head & Structured Data Utilities**
  - **Files:** `src/components/common/SeoHead.astro`, `src/utils/seo.ts`
  - **Done when:** OpenGraph, Twitter Cards, canonical tags, and JSON-LD builders (`Store`, `Service`, `Product`, `Article`, `BreadcrumbList`) output valid JSON schemas.
- [x] **TASK-07: Build Master BaseLayout & Wrapper Layouts**
  - **Files:** `src/layouts/BaseLayout.astro`
  - **Done when:** Layouts correctly inject `SeoHead`, `Header`, `Footer`, `MobileStickyBar`, and breadcrumb navigation.
- [x] **TASK-08: Build Header & Responsive Navigation Drawer**
  - **Files:** `src/components/common/Header.astro`
  - **Done when:** Top announcement bar, navigation links, and desktop WhatsApp CTA render cleanly, and mobile menu toggles smoothly on screens `< 768px`.
- [x] **TASK-09: Build Mobile Sticky Conversion Bar**
  - **Files:** `src/components/common/MobileStickyBar.astro`
  - **Done when:** Fixed bottom bar renders on mobile with 3 direct touch targets: Katalog (`/produk/`), WA Cepat (`wa.me`), and Lokasi (`/lokasi/`) with frosted backdrop blur.
- [x] **TASK-10: Build Footer with Canonical NAP & Quick Navigation**
  - **Files:** `src/components/common/Footer.astro`
  - **Done when:** Renders full business address, Google Maps link, category links, greenhouse services, operating hours, and copyright notices.
- [x] **TASK-11: Build WhatsApp Deep-Link Utility Engine**
  - **Files:** `src/utils/whatsapp.ts`
  - **Done when:** Functions `generateGeneralInquiryUrl`, `generateProductInquiryUrl`, and `generateGreenhouseQuoteUrl` produce correctly encoded `https://wa.me/6285183002070` links.

---

## Phase 3: Page Implementations (P0 Commercial Tier)
- [x] **TASK-12: Build Homepage (`/`)**
  - **Files:**
    - `src/pages/index.astro`
    - `src/components/home/HeroSection.astro`
    - `src/components/home/TrustBar.astro`
    - `src/components/home/CategoryGrid.astro`
    - `src/components/home/GreenhouseServiceHighlight.astro`
    - `src/components/home/NationwideCoverage.astro`
    - `src/components/home/LocationSnippet.astro`
    - `src/components/home/FaqAccordion.astro`
  - **Done when:** Homepage renders all 11 sections cleanly, mobile viewport is fully responsive, and `LocalBusiness/Store` structured data is injected.
- [x] **TASK-13: Build Product Catalog Hub & Category Filtering**
  - **Files:**
    - `src/pages/produk/index.astro`
    - `src/pages/produk/[kategori]/index.astro`
    - `src/components/products/ProductCard.astro`
    - `src/components/products/ProductFilter.tsx` (Preact Island)
  - **Done when:** `/produk/` lists all products with instant search/filter, and `/produk/saprodi-pertanian/`, `/produk/perlengkapan-pertanian/`, `/produk/perlengkapan-greenhouse/` display category-specific items.
- [x] **TASK-14: Build Product Detail Pages**
  - **Files:** `src/pages/produk/[slug].astro`
  - **Done when:** Product page displays gallery, specifications table, stock badge, breadcrumbs, `Product` JSON-LD schema, and direct "Tanya Stok di WhatsApp" CTA.
- [x] **TASK-15: Build Greenhouse Service Landing Page with Interactive RAB Estimator**
  - **Files:**
    - `src/pages/jasa/pembuatan-greenhouse.astro`
    - `src/components/greenhouse/EstimationCalculator.tsx` (Preact Island)
  - **Done when:** Page showcases Bambu, Galvanis, Baja Ringan, and Tunnel Garam; calculator computes dimensions and launches formatted WhatsApp quote request.
- [x] **TASK-16: Build Service Coverage & Nationwide Logistics Page**
  - **Files:** `src/pages/wilayah-layanan.astro`
  - **Done when:** Detailed documentation on expedition partners, cargo handling, survey scheduling, and on-site assembly workflows is published.
- [x] **TASK-17: Build Project Showcase & Case Study Pages**
  - **Files:** `src/pages/proyek/index.astro`, `src/pages/proyek/[slug].astro`
  - **Done when:** Portfolio grid and individual case study pages render before/after photos, specs, location badges, and customer testimonials.
- [x] **TASK-18: Build Local SEO Store Location Page**
  - **Files:** `src/pages/lokasi.astro`
  - **Done when:** Features interactive Google Maps iframe, landmark directions from Malang Kota/Terminal Gadang, store facade photos, and `Store` schema.
- [x] **TASK-19: Build Contact, FAQ & 404 Pages**
  - **Files:** `src/pages/kontak.astro`, `src/pages/faq.astro`, `src/pages/404.astro`
  - **Done when:** Contact form routes to WhatsApp, FAQ accordion has `FAQPage` schema, and 404 page provides helpful recovery navigation.
- [x] **TASK-20: Build Commercial SEO Article Hub & Post Pages**
  - **Files:** `src/pages/artikel/index.astro`, `src/pages/artikel/[slug].astro`
  - **Done when:** Blog hub and MDX article layout display reading time, author credibility badges, table of contents, and contextual product CTAs.

---

## Phase 4: Content Seeding & Authentic Assets
- [x] **TASK-21: Seed Agricultural Supplies & Equipment Content (8+ Items)**
  - **Files:** `src/content/produk/*.md` (Plastik UV 14%, Paranet Tanaman, Sprayer 16L, Mulsa MPHP, Spring Clip, Selang Drip 16mm, Pupuk NPK 16-16-16, Tray Semai 128)
  - **Done when:** All markdown files have complete frontmatter, validated against Zod schema, and render in catalog.
- [x] **TASK-22: Seed Greenhouse Project Case Studies (3 Key Archetypes)**
  - **Files:** `src/content/proyek/*.md` (`greenhouse-galvanis-batu-malang.md`, `greenhouse-bambu-kedungkandang-malang.md`, `tunnel-garam-pesisir-madura.md`)
  - **Done when:** Case studies feature real dimensions, materials, and photo galleries.
- [x] **TASK-23: Seed Initial Commercial SEO Pillar Articles (3 Posts)**
  - **Files:** `src/content/artikel/*.md` (`biaya-pembuatan-greenhouse.md`, `plastik-uv-dan-paranet-perbedaan-fungsi.md`, `panduan-konstruksi-tunnel-garam.md`)
  - **Done when:** High-intent SEO guides are published with structured headings, internal links, and WhatsApp consultation CTAs.

---

## Phase 5: Cloudflare Verification, Performance & QA
- [x] **TASK-24: Setup Sitemap & Robots.txt for Cloudflare Edge**
  - **Files:** `astro.config.mjs`, `public/robots.txt`
  - **Done when:** Build generates `dist/sitemap-index.xml` with priority mappings and `dist/robots.txt` allowing crawler indexation.
- [x] **TASK-25: Cloudflare Headers & Canonical Redirect Configuration**
  - **Files:** `public/_headers`, `public/_redirects`, `wrangler.jsonc`
  - **Done when:** Edge CSP headers, HSTS, immutable assets cache, and 301 domain redirects are configured and validated.
- [x] **TASK-26: Production Build & Cloudflare Pages Deployment Audit**
  - **Files:** Whole project build artifact in `dist/`
  - **Done when:** `bun run build` succeeds with zero errors (28 static pages generated), all routes respond with HTTP 200, JSON-LD schemas pass validation, and clean cutover is proven.
