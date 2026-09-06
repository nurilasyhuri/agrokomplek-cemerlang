# Development Kit Blueprint & Cloudflare Execution Plan — Agrokomplek Cemerlang

## 1. Specification Suite Inventory
This staging directory contains the complete specification suite ready for promotion to `~/Projects/agrokomplek-cemerlang/`:

1. **`PRD.md`** — Product requirements, user personas, functional criteria (EARS format), Cloudflare Edge rules, and routing index.
2. **`SYSTEM-ARCHITECTURE.md`** — Cloudflare Pages architecture, Content Collections Zod schemas, directory blueprint, and WhatsApp routing algorithms.
3. **`VISUAL-DESIGN-SPEC.md`** — "Madian" Agritech design system, semantic color tokens, typography scale, responsive breakpoints, and UI component blueprints.
4. **`SEO-STRATEGY.md`** — Dual-core SEO matrix (Local Malang + National High-Intent), JSON-LD schemas (LocalBusiness, Service), Google Business Profile optimization, and Cloudflare edge SEO rules.
5. **`COPYWRITING-PLAYBOOK.md`** — Brand voice, headline formulas, pre-filled WhatsApp lead message templates, and high-intent SEO article outlines.
6. **`TASKS.md`** — Atomic, numbered development and verification checklist mapping every single file to production Cloudflare deployment.

---

## 2. Technology Stack & Cloudflare Toolchain Decisions

| Layer | Selected Technology | Rationale & Tradeoffs |
|---|---|---|
| **Edge Hosting** | **Cloudflare Pages** | Global Anycast network, 0ms cold starts, native static asset caching, zero-config SSL/TLS 1.3. |
| **Framework** | **Astro v5+** | Zero-JS static HTML baseline by default; ultra-fast load times for mobile field conditions; content collections for Markdown/MDX. |
| **Styling** | **Tailwind CSS v4** / **v3.4** | Utility-first, semantic CSS variables for the Madian theme; no runtime CSS-in-JS overhead. |
| **Language** | **TypeScript** | Strict schema validation for products, projects, and structured data generation. |
| **Content Layer** | **Astro Content Collections** | Git-backed Markdown/MDX with Zod schema validation; zero external CMS latency or API dependency. |
| **Interactivity** | **React / Preact Islands** | Minimal hydration only for interactive elements: Product Filter, Greenhouse RAB Estimator, Mobile Drawer. |
| **Security & Headers** | `public/_headers` & `wrangler.jsonc` | Edge-enforced CSP, HSTS, X-Content-Type-Options, and immutable asset cache headers. |
| **Analytics & SEO** | Cloudflare Web Analytics + `@astrojs/sitemap` | Privacy-friendly, zero-script-drag analytics combined with automated XML sitemaps. |

---

## 3. Project Promotion & Launch Protocol

### Step 1: Initialize Canonical Repository
Sync all staged artifacts into `~/Projects/agrokomplek-cemerlang/`:
- Root files: `PRD.md`, `TASKS.md`, `README.md`, `AGENTS.md`.
- Documentation: `docs/spec/` containing architecture, design, SEO, and copywriting specs.

### Step 2: Astro Project Scaffolding
- Initialize Astro with TypeScript (`strict`).
- Configure Tailwind CSS with the Madian color palette and custom fonts.
- Set up Content Collections (`src/content/config.ts`).
- Set up Cloudflare deployment files (`wrangler.jsonc`, `public/_headers`, `public/_redirects`).

### Step 3: Core Layouts & Shared Components
- Develop `BaseLayout.astro`, `Header.astro`, `Footer.astro`, `MobileStickyBar.astro`, and `SeoHead.astro`.

### Step 4: Page Implementations (P0 Tier)
- Homepage (`/`), Product Catalog (`/produk/` + subcategories + dynamic slugs), Greenhouse Service (`/jasa/pembuatan-greenhouse/`), Service Areas (`/wilayah-layanan/`), Projects (`/proyek/`), Location (`/lokasi/`), Contact (`/kontak/`).

### Step 5: Content Seeding & Local Assets
- Seed 10-15 core agricultural products (Saprodi, Perlengkapan, Greenhouse supplies).
- Seed 4 core greenhouse project showcases (Bambu, Galvanis, Baja Ringan, Tunnel Garam).
- Seed 3 pillar commercial SEO articles.

### Step 6: Cloudflare Verification & Web Vitals Audit
- Validate JSON-LD with Google Rich Results Test format.
- Run `wrangler pages deploy` or local preview with Cloudflare emulation.
- Audit 100/100 Core Web Vitals on Mobile.
