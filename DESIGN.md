# Design System Specification & UI/UX Audit — Agrokomplek Cemerlang

> Canonical design system, visual tokens, UI/UX architecture, and component guidelines for **Agrokomplek Cemerlang**.
> Built for Astro v5, Tailwind CSS, Preact Islands, and Cloudflare Pages edge delivery.

---

## 1. Design Read & Operating Profile

- **Design Read:** High-trust commercial agritech web platform for Indonesian farmers, agricultural cooperatives, and commercial agribusiness investors; Storefront + Service Contractor mode; aesthetic family: **Madian Agritech Design System** (grounded, technical, clean unbleached paper structure, deep forest canopy green, earthy terracotta ochre accents, crisp 1px structural hairlines, and authentic agricultural imagery).
- **Dual Business Positioning:**
  1. **Toko Fisik & Gudang Lokal (Malang):** Penjualan retail/grosir saprodi pertanian (pupuk, media tanam, mulsa, sprayer, benih) dengan alamat fisik valid di Kedungkandang, rute Maps jelas, dan stok siap ambil/kirim.
  2. **Kontraktor Greenhouse Nasional (Seluruh Indonesia):** Spesialis rancang bangun konstruksi greenhouse (Pipa Galvanis Hot-Dip, Bambu Presisi, Baja Ringan, Tunnel Garam) dengan perhitungan iklim tropis, estimasi RAB transparan, dan tim aplikator ke lokasi proyek.

### Three Dials Configuration
| Dial | Level (1-10) | Rationale |
|---|:---:|---|
| `DESIGN_VARIANCE` | **4** | Asymmetric left-aligned headers, technical data tables, distinct 1-3-4 column grids, collapsible to single column on mobile (< 768px). |
| `MOTION_INTENSITY` | **2** | Micro-interactions only: hover state transitions (150ms-200ms ease), active button scale (`scale-[0.98]`), CSS-first mobile drawer slide. Zero bloat JS animation libraries for instant Edge performance. |
| `VISUAL_DENSITY` | **6** | Technical, information-dense specifications, clear table layouts, structured metadata badges, no frivolous whitespace padding. |

---

## 2. Color Palette & Design Tokens

### 2.1 Color Spectrum (Madian Agritech)

```text
[Surface Canvas] #f7f6f2 ── Warm unbleached natural agricultural ground
[Surface Card]   #ffffff ── High-contrast clean white content tile
[Surface Subtle] #efece4 ── Technical inset container & metadata panel
[Surface Border] #dcd9d0 ── Crisp 1px structural hairline
[Border Dark]    #b5b2a6 ── High-contrast dividing line for active states

[Ink Primary]    #111713 ── Deep carbon-forest ink (WCAG AAA > 12:1)
[Ink Secondary]  #364239 ── Readable body text (WCAG AA > 6.5:1)
[Ink Muted]      #637066 ── Technical metadata & labels (WCAG AA > 4.5:1)
[Ink Inverse]    #ffffff ── Pure white on dark buttons/chips

[Agri 700]       #165334 ── Official brand deep forest canopy green (Primary)
[Agri 800]       #0f3c25 ── Pressed / hover deep green
[Agri 50]        #eef5f0 ── Soft agricultural green tint for active tags
[Agri 100]       #d7e8db ── Border highlight & selection accent

[Ochre 700]      #a34e0f ── Earth terracotta amber (Secondary accent for quotes/RAB)
[Ochre 800]      #873d08 ── Pressed ochre state
[Ochre 50]       #fbf4ed ── Light amber notification surface
```

### 2.2 Typography Scale
- **Primary Font Family:** `Plus Jakarta Sans`, system-ui, -apple-system, sans-serif
- **Code / Numeric Font:** `JetBrains Mono`, SFMono-Regular, Menlo, monospace
- **Scale:**
  - Display / H1: `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]`
  - H2: `text-2xl sm:text-3xl font-extrabold tracking-tight text-ink-primary`
  - H3: `text-lg sm:text-xl font-bold text-ink-primary`
  - Subhead: `text-base sm:text-lg text-ink-secondary leading-relaxed`
  - Body: `text-sm sm:text-base text-ink-secondary leading-relaxed max-w-[65ch]`
  - Meta / Badges: `text-[10px] sm:text-xs font-bold uppercase tracking-wider`

### 2.3 Radius & Elevation Discipline
- **Shape Lock:** Crisp, engineering-grade corner radius:
  - Badges / Inset elements: `rounded-xs` (3px) or `rounded-sm` (4px)
  - Buttons / Inputs / Cards: `rounded-md` (6px) or `rounded-lg` (8px)
  - Hero frames / Dialogs: `rounded-lg` (8px) or `rounded-xl` (12px)
  - **Banned:** Round bubbles (`rounded-2xl`, `rounded-3xl`, `rounded-full` for cards).
- **Hairlines over Shadows:**
  - 1px crisp borders (`border border-surface-border`) are the primary hierarchy mechanism.
  - Shadows reserved exclusively for floating elements: Mobile sticky bar, mobile drawer, dropdowns (`shadow-sm`, `shadow-md`).

---

## 3. Component Architecture & UI Standards

### 3.1 Header & Navigation
- **Utility Bar:** Top bar displaying Toko Fisik Malang address, operational hours, and direct WhatsApp hotline.
- **Main Nav:**
  - Left: Brand wordmark with subtitle ("Greenhouse & Saprodi Pertanian").
  - Center: 4 core navigation links (`/produk/`, `/jasa/pembuatan-greenhouse/`, `/proyek/`, `/lokasi/`).
  - Right: High-visibility WhatsApp button with Lucide WhatsApp icon.
  - Mobile: Clean hamburger button ($\ge 44\text{px}$) toggling accessible slide-over drawer with backdrop blur.

### 3.2 Mobile Dock & Sticky Action Architecture
- **Global Mobile Dock (`MobileStickyBar.astro`):**
  - Rendered on mobile viewports (< 768px).
  - 4 high-frequency destinations: **Katalog**, **Greenhouse**, **Lokasi Toko**, **Chat WA**.
  - Frosted background (`bg-surface-card/95 backdrop-blur-sm border-t border-surface-border`).
- **PDP Mobile Conversion Rule:**
  - On product detail pages (`/produk/[slug]/`), DO NOT render a secondary stacked bar above the bottom dock.
  - Instead, the layout supplies a focused single-deck action dock with product pricing and direct "Tanya Stok / Pesan WA" CTA to eliminate screen crowding.

### 3.3 Product Catalog & Filter Island
- **Product Card (`ProductCard.astro`):**
  - Uniform `aspect-square` thumbnail with fallback handler.
  - Prominent stock badge (`Ready Stok`, `Pre-Order`, `Cek Stok`).
  - Title with 2-line clamp and category pill.
  - Clear price display and direct "Tanya WA" trigger with auto-encoded URL.
- **Catalog Filter (`ProductFilter.tsx`):**
  - Instant category pills (`Semua Material`, `Saprodi Pertanian`, `Perlengkapan Lahan`, `Perlengkapan Greenhouse`).
  - Search bar with live filtering by name and description.
  - Instant clear filter button and formatted product counter.

### 3.4 Interactive Greenhouse Estimator (`EstimationCalculator.tsx`)
- **Step 1:** Model selection cards with technical lifespan, frame specifications, and price/m².
- **Step 2:** Dual interactive sliders for Length (6m - 100m) and Width (4m - 40m) with live area calculation ($m^2$).
- **Step 3:** Project parameters (City/Regency, Target Crop, Timeline).
- **Step 4:** Live budget range summary (Min - Max IDR) + direct WhatsApp dispatch pre-filling all parameters.

---

## 4. Accessibility & Touch Reality

1. **iOS Auto-Zoom Elimination:** All `<input>`, `<select>`, and `<textarea>` elements enforce `font-size: 16px` on mobile viewports.
2. **Touch Target Floor:** All clickable elements (buttons, links, pills, tabs) have a minimum dimension of $44\text{px} \times 44\text{px}$.
3. **Contrast Compliance:** All text on canvas, surface subtle, and badges strictly exceed WCAG AA 4.5:1 ratio.
4. **Keyboard Focus Rings:** Visible focus ring `focus-visible:ring-2 focus-visible:ring-agri-700 focus-visible:outline-none` on all interactive elements.

---

## 5. Anti-Slop & Editorial Rules

- **Zero Em-Dash Separators:** Em-dash (`—`) and en-dash separators (`–`) are strictly banned in all visible page headlines, subheads, buttons, and captions. Colons (`:`), periods (`.`), commas (`,`), or hyphens (`-`) are used instead.
- **Real Imagery & Evidence:** No div-based mockups or AI-hallucinated testimonials. Real photographs of products, warehouses, and greenhouse installations.
- **Authentic Agricultural Tone:** Technical, respectful, grounded Indonesian language without hyperbolic marketing jargon.
