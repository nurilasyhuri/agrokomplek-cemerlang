# System Architecture & Technical Specifications — Agrokomplek Cemerlang

## 1. High-Level Cloudflare Edge Architecture

```mermaid
graph TB
    subgraph Client Layer
        Browser[Mobile / Desktop Browser]
    end

    subgraph Cloudflare Edge Layer (Cloudflare Pages)
        CF_DNS[Cloudflare DNS & SSL/TLS 1.3]
        CF_WAF[Cloudflare WAF & Security Rules]
        CF_Edge[Cloudflare Global Anycast CDN Edge]
        CF_Headers[public/_headers & public/_redirects]
        CF_Analytics[Cloudflare Web Analytics & Turnstile]
    end

    subgraph Astro Static / Hybrid Engine
        Pages[Astro Pages / Static HTML Generator]
        Islands[React / Preact Islands with minimal bundle]
        ContentLayer[Astro Content Collections (Zod Schemas)]
    end

    subgraph Content Source (Git-Backed Markdown & Data)
        Products[(Content: Products)]
        Projects[(Content: Projects)]
        Articles[(Content: Articles)]
        Config[(Config: Business Info & NAP)]
    end

    subgraph Conversion & External Integrations
        WA[WhatsApp Business API / Direct Deep-Link]
        GMaps[Google Maps Embed & Directions API]
        GA4[Google Analytics 4 / Cloudflare Web Analytics]
        GSC[Google Search Console / Indexing API]
    end

    Browser --> CF_DNS
    CF_DNS --> CF_WAF
    CF_WAF --> CF_Edge
    CF_Edge --> CF_Headers
    CF_Edge --> Pages
    Pages --> Islands
    Pages --> ContentLayer
    ContentLayer --> Products
    ContentLayer --> Projects
    ContentLayer --> Articles
    ContentLayer --> Config

    Islands --> WA
    Pages --> GMaps
    Pages --> CF_Analytics
    Pages --> GA4
    CF_Edge --> GSC
```

---

## 2. Directory Structure Blueprint (Cloudflare-Ready)

```text
agrokomplek-cemerlang/
├── .github/
│   └── workflows/
│       └── deploy.yml (Cloudflare Pages CI/CD deployment workflow)
├── public/
│   ├── _headers (Cloudflare security headers, cache control, immutable assets)
│   ├── _redirects (Cloudflare 301/302 edge redirect rules)
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   └── images/
│       ├── brand/ (logo, icon, favicon)
│       ├── hero/ (hero-malang-store.webp, hero-greenhouse.webp)
│       ├── products/ (saprodi, greenhouse, perlengkapan)
│       ├── projects/ (bambu, galvanis, baja-ringan, tunnel-garam)
│       └── og/ (default-og.jpg, twitter-card.jpg)
├── src/
│   ├── assets/ (Optimized imported images for astro:assets)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── MobileStickyBar.astro
│   │   │   ├── Breadcrumb.astro
│   │   │   ├── SeoHead.astro
│   │   │   └── WhatsAppButton.astro
│   │   ├── home/
│   │   │   ├── HeroSection.astro
│   │   │   ├── TrustBar.astro
│   │   │   ├── AboutSnippet.astro
│   │   │   ├── CategoryGrid.astro
│   │   │   ├── GreenhouseServiceHighlight.astro
│   │   │   ├── NationwideCoverage.astro
│   │   │   ├── FeaturedProducts.astro
│   │   │   ├── ProjectGallerySnippet.astro
│   │   │   ├── LocationSnippet.astro
│   │   │   └── FaqAccordion.astro
│   │   ├── products/
│   │   │   ├── ProductCard.astro
│   │   │   ├── ProductGrid.astro
│   │   │   ├── ProductFilter.tsx (Island for instant filtering)
│   │   │   └── StockBadge.astro
│   │   ├── greenhouse/
│   │   │   ├── GreenhouseTypeCard.astro
│   │   │   ├── EstimationCalculator.tsx (Interactive Island)
│   │   │   ├── StepWorkflow.astro
│   │   │   └── MaterialComparisonTable.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Badge.astro
│   │       ├── Card.astro
│   │       └── SectionHeading.astro
│   ├── content/
│   │   ├── config.ts (Zod schemas for collections)
│   │   ├── produk/ (Markdown/MDX entries)
│   │   ├── proyek/ (Markdown/MDX entries)
│   │   └── artikel/ (Markdown/MDX entries)
│   ├── data/
│   │   ├── businessInfo.ts (NAP, phone, coordinates, social)
│   │   ├── navigation.ts (Header/Footer link hierarchies)
│   │   └── faqData.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ProductLayout.astro
│   │   ├── ProjectLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── produk/
│   │   │   ├── index.astro
│   │   │   ├── [kategori]/index.astro
│   │   │   └── [slug].astro
│   │   ├── jasa/
│   │   │   └── pembuatan-greenhouse.astro
│   │   ├── wilayah-layanan.astro
│   │   ├── proyek/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── artikel/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── tentang-kami.astro
│   │   ├── lokasi.astro
│   │   ├── kontak.astro
│   │   ├── faq.astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css (Tailwind theme variables & typography)
│   └── utils/
│       ├── seo.ts (Structured data builders: LocalBusiness, Service, Product)
│       ├── whatsapp.ts (Deep-link & pre-filled text generators)
│       └── formatting.ts (Currency IDR, dimensions, dates)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── wrangler.jsonc (Cloudflare deployment configuration)
└── package.json
```

---

## 3. Cloudflare Edge Headers & Redirects Configuration

### `public/_headers` (Security & Cache Invariants)
```text
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(self)
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src 'self' https://www.google.com https://challenges.cloudflare.com; connect-src 'self' https://cloudflareinsights.com;

# Immutable caching for built static assets
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=2592000, stale-while-revalidate=86400
```

### `public/_redirects` (Canonical SEO & Edge Redirects)
```text
# Domain canonical enforcement
http://agroprimagreenhouse.com/* https://agroprimagreenhouse.com/:splat 301
https://www.agroprimagreenhouse.com/* https://agroprimagreenhouse.com/:splat 301

# Legacy/Shorthand routing redirects
/greenhouse https://agroprimagreenhouse.com/jasa/pembuatan-greenhouse/ 301
/wa https://wa.me/6285183002070 302
/maps https://share.google/RkGZAeLgftgFwjqRo 302
```

---

## 4. Data Schema Specifications (Astro Content Collections with Zod)

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const produkCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['saprodi-pertanian', 'perlengkapan-pertanian', 'perlengkapan-greenhouse']),
    price: z.number().optional(),
    priceUnit: z.string().default('item'),
    priceDisplayType: z.enum(['fixed', 'quote', 'range']).default('quote'),
    stockStatus: z.enum(['ready', 'po', 'hubungi-kami']).default('ready'),
    featured: z.boolean().default(false),
    thumbnail: image(),
    gallery: z.array(image()).optional(),
    specs: z.record(z.string()).optional(),
    brand: z.string().optional(),
    orderPriority: z.number().default(99),
  }),
});

const proyekCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    clientType: z.enum(['komersial', 'petani-individu', 'institusi', 'penelitian']),
    greenhouseType: z.enum(['Greenhouse Bambu', 'Greenhouse Galvanis', 'Greenhouse Baja Ringan', 'Tunnel Garam']),
    locationCity: z.string(),
    locationProvince: z.string(),
    dimensions: z.string(), // e.g. "12m x 30m (360 m2)"
    completionDate: z.date(),
    mainMaterials: z.array(z.string()),
    coverImage: image(),
    gallery: z.array(image()),
    featured: z.boolean().default(false),
  }),
});

const artikelCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Tim Ahli Agrokomplek Cemerlang'),
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: image(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'produk': produkCollection,
  'proyek': proyekCollection,
  'artikel': artikelCollection,
};
```

---

## 5. WhatsApp Lead Conversion Routing Engine

```typescript
// src/utils/whatsapp.ts
export const WHATSAPP_BASE = "https://wa.me/6285183002070";

export function generateGeneralInquiryUrl(sourcePage: string = "homepage"): string {
  const text = `Halo Agrokomplek Cemerlang, saya ingin berkonsultasi tentang kebutuhan pertanian / greenhouse (Ref: ${sourcePage}).`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export function generateProductInquiryUrl(productName: string, category: string, variant?: string): string {
  let text = `Halo Agrokomplek Cemerlang, saya tertarik dengan produk:\n- Nama: ${productName}\n- Kategori: ${category}`;
  if (variant) text += `\n- Varian: ${variant}`;
  text += `\n\nApakah stok tersedia dan bagaimana detail harga & pengirimannya? Terima kasih.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export interface GreenhouseQuoteParams {
  type: string;
  location: string;
  length: number;
  width: number;
  crops?: string;
  targetTimeline?: string;
}

export function generateGreenhouseQuoteUrl(params: GreenhouseQuoteParams): string {
  const area = params.length * params.width;
  const text = `Halo Agrokomplek Cemerlang, saya ingin mengajukan estimasi pembuatan greenhouse:\n` +
    `• Jenis: ${params.type}\n` +
    `• Lokasi Proyek: ${params.location}\n` +
    `• Ukuran Lahan: ${params.length}m x ${params.width}m (${area} m²)\n` +
    `• Target Komoditas: ${params.crops || '-'}\n` +
    `• Waktu Pengerjaan: ${params.targetTimeline || 'Fleksibel'}\n\n` +
    `Mohon info estimasi biaya dan tahapan konsultasi selanjutnya.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}
```
