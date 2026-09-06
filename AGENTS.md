# AGENTS.md — Agrokomplek Cemerlang

> Autonomous agent & AI coding instructions for `agrokomplek-cemerlang`.

## 1. Project Context & Operating Profile
- **Target Platform:** **Cloudflare Pages** (Global Edge CDN, HTTP/3, Edge Security Headers via `_headers`, Canonical Redirects via `_redirects`).
- **Framework & Stack:** Astro v5+, Tailwind CSS, TypeScript, Content Collections (Zod runtime validation).
- **Core Principle:** **Zero-Bloat, Mobile-First, Cloudflare Edge-Optimized, Performance-Obsessed (100 Core Web Vitals)**.
- **Language Policy:**
  - Code, commit messages, variable names, and technical documentation: **English**.
  - User-facing UI text, product descriptions, service copy, and blog content: **Natural Indonesian (Bahasa Indonesia)**.
  - Interaction with Paduka Ongki: **Bahasa Indonesia santai**.

---

## 2. Business Ground Truth (NEVER INVENT OR HALLUCINATE)
- **Brand Name:** Agrokomplek Cemerlang
- **Location:** Jl. KH. Malik Dalam RT 01 RW 07, Buring, Kedungkandang, Malang, Jawa Timur
- **WhatsApp:** `+62 851-8300-2070` (`0851-8300-2070`)
- **Email:** `agrokomplekcemerlang@gmail.com`
- **Google Maps Pin:** `https://share.google/RkGZAeLgftgFwjqRo`
- **Core Offerings:**
  1. Penjualan Saprodi Pertanian (Pupuk, pestisida, benih, media tanam).
  2. Perlengkapan Pertanian (Sprayer, mulsa, selang drip, alat siram).
  3. Perlengkapan Greenhouse (Plastik UV 14%-20%, Paranet 50%-85%, spring clip, profile lock).
  4. Jasa Pembuatan Greenhouse Seluruh Indonesia (Greenhouse Bambu, Greenhouse Galvanis, Greenhouse Baja Ringan, Tunnel Garam).

---

## 3. Engineering & Code Invariants
1. **Zero-JS Static Baseline:** Static content must remain pure `.astro` files with 0kB client JavaScript bundle. Use `client:load` or `client:idle` **only** for interactive islands (e.g. `EstimationCalculator.tsx`, `ProductFilter.tsx`).
2. **Cloudflare Headers & Redirects:** Never hardcode security headers in code if they belong in `public/_headers`. Always maintain canonical redirects in `public/_redirects`.
3. **SEO & Structured Data:** Every page must render valid JSON-LD schema (`Store` on homepage/location, `Service` on greenhouse landing, `Product` on product pages). Never omit canonical tags.
4. **No Unverifiable Claims:** Never fabricate customer counts, fake star ratings, or fake stock counters. Use verifiable facts (physical store in Malang, nationwide delivery, authentic photos).
5. **WhatsApp Link Format:** All conversion buttons must use helper functions from `src/utils/whatsapp.ts` with structured, pre-filled text.
6. **Image Optimization:** All images must use `astro:assets` (`<Image />` component) with explicit dimensions, WebP format, and descriptive Indonesian ALT text.
7. **Task Execution:** Follow `TASKS.md` systematically. Execute file-by-file according to the defined checklist.
