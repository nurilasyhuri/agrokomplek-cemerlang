# Agrokomplek Cemerlang — Web Platform (Cloudflare Pages)

> Official web platform for **Agrokomplek Cemerlang**: Pusat Penjualan Saprodi Pertanian & Kontraktor Jasa Pembuatan Greenhouse Seluruh Indonesia (Berbasis di Malang, Jawa Timur).

---

## 🌾 Tech Stack & Cloudflare Toolchain
- **Hosting / Edge Platform:** [Cloudflare Pages](https://pages.cloudflare.com/) (Global Anycast Network & Edge Caching)
- **Framework:** [Astro v5](https://astro.build/) (Static Site Generation / Hybrid Rendering)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom "Madian" Agritech design tokens
- **Type Safety:** TypeScript (Strict mode)
- **Content Engine:** Astro Content Collections with Zod runtime validation
- **Edge Configuration:** `public/_headers` (CSP/HSTS/Cache Control) & `public/_redirects` (Canonical redirects)
- **Deployment:** `wrangler.jsonc` + GitHub Actions
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **SEO & Structured Data:** `@astrojs/sitemap`, Schema.org JSON-LD (LocalBusiness, Service, Product, Article)
- **Interactivity:** Preact / React Islands for high-intent calculators and filters

---

## 📁 Repository Structure
```text
agrokomplek-cemerlang/
├── .github/
│   └── workflows/
│       └── deploy.yml                # Cloudflare Pages CI/CD deployment
├── docs/
│   ├── spec/
│   │   ├── PRD.md                    # Product requirements & EARS criteria
│   │   ├── SYSTEM-ARCHITECTURE.md    # Cloudflare & content schemas
│   │   ├── VISUAL-DESIGN-SPEC.md     # "Madian" design tokens & components
│   │   ├── SEO-STRATEGY.md           # Dual-core SEO & JSON-LD matrix
│   │   └── COPYWRITING-PLAYBOOK.md   # Copy templates & WhatsApp flows
├── public/
│   ├── _headers                      # Cloudflare edge security & cache headers
│   ├── _redirects                    # Cloudflare 301/302 edge redirect rules
│   ├── favicon.svg                   # Brand favicon
│   ├── robots.txt                    # Search crawler rules
│   └── images/                       # Local brand, products, & project photos
├── src/
│   ├── components/                   # Astro UI & Preact Islands
│   ├── content/                      # Git-backed Markdown/MDX content
│   ├── data/                         # Business NAP, navigation, constants
│   ├── layouts/                      # Base, Product, Project, Article layouts
│   ├── pages/                        # File-based routing (P0 commercial pages)
│   ├── styles/                       # Global CSS & Tailwind theme layers
│   └── utils/                        # WhatsApp link builders, SEO helpers
├── astro.config.mjs                  # Astro configuration
├── tailwind.config.mjs               # Tailwind configuration
├── tsconfig.json                     # TypeScript strict configuration
├── wrangler.jsonc                    # Cloudflare Pages configuration
├── PRD.md                            # Canonical Product Requirements
├── TASKS.md                          # Executable development checklist (File-by-File)
├── AGENTS.md                         # AI CLI & agent working rules
└── README.md                         # Project documentation
```

---

## 🚀 Quick Start & Development

```bash
# 1. Install dependencies
bun install   # or pnpm install / npm install

# 2. Start development server
bun run dev

# 3. Typecheck and check content collections
bun run check

# 4. Build production static bundle for Cloudflare
bun run build

# 5. Preview production build locally with Cloudflare environment
bun run preview # or npx wrangler pages dev dist
```

---

## 📍 Business Information & Canonical NAP
- **Nama Bisnis:** Agrokomplek Cemerlang
- **Alamat:** Jl. KH. Malik Dalam RT 01 RW 07, Buring, Kedungkandang, Kota Malang, Jawa Timur 65136
- **WhatsApp:** `+62 851-8300-2070`
- **Email:** `agrokomplekcemerlang@gmail.com`
- **Google Maps:** [Lokasi Toko Agrokomplek Cemerlang](https://share.google/RkGZAeLgftgFwjqRo)
- **Layanan:** Penjualan Saprodi Pertanian, Perlengkapan Greenhouse, dan Jasa Konstruksi Greenhouse (Bambu, Galvanis, Baja Ringan, Tunnel Garam) ke Seluruh Indonesia.
