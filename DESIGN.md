# Design System Specification & UI/UX Audit — Agro Prima Greenhouse

> Canonical design system, visual tokens, UI/UX architecture, and component guidelines for **Agro Prima Greenhouse** (`agroprimagreenhouse.com`).
> Built for Astro v5, Tailwind CSS, Preact Islands, and edge delivery.

---

## 1. Design Read & Operating Profile

- **Design Read:** High-trust commercial greenhouse contractor & agritech engineering web platform; Service Contractor + Material Supply mode; aesthetic family: **Industrial Steel Navy & Sky Glass Blue Design System** (crisp engineering contrast, pristine slate ground `#f8fafc`, deep steel navy `#0b1e36`, reflective sky glass blue `#0284c7` / `#38bdf8` accents representing UV plastic & glass transparency, solar amber `#f59e0b` for high-intent RAB CTAs, crisp 1px structural hairlines, and authentic greenhouse structural photography).
- **Core Business Positioning:**
  1. **Kontraktor Spesialis Greenhouse Nasional (Seluruh Indonesia):** Spesialis rancang bangun konstruksi greenhouse (Pipa Galvanis Hot-Dip, Baja Ringan, Bambu Presisi, Tunnel Garam, Smart Farming & Otomasi IoT) dengan kalkulasi iklim tropis, estimasi RAB transparan, dan tim aplikator ke lokasi proyek.
  2. **Penyedia Material Konstruksi Greenhouse:** Penjualan langsung material berkualitas (Plastik UV 200 mikron 14%, Paranet Shading Net 65%-85%, Insect Net 50 Mesh, Spring Clip Kanal C, Selang Drip Irigasi 16mm).
  *Catatan Penting:* Entitas ini terpisah dari retail saprodi umum (Agrokomplek Cemerlang). Seluruh fokus visual, copy, dan konversi ditujukan eksklusif untuk **Agro Prima Greenhouse**.

### Three Dials Configuration
| Dial | Level (1-10) | Rationale |
|---|:---:|---|
| `DESIGN_VARIANCE` | **4** | Asymmetric left-aligned headers, technical data tables, distinct 1-3-4 column grids, collapsible to single column on mobile (< 768px). |
| `MOTION_INTENSITY` | **2** | Micro-interactions only: hover state transitions (150ms-200ms ease), active button scale (`scale-[0.98]`), CSS-first mobile drawer slide. Zero bloat JS animation libraries for instant Edge performance. |
| `VISUAL_DENSITY` | **6** | Technical, information-dense specifications, clear table layouts, structured metadata badges, no frivolous whitespace padding. |

---

## 2. Color Palette & Design Tokens

### 2.1 Color Spectrum (Industrial Steel Navy & Sky Glass Blue)

```text
[Surface Canvas] #f8fafc ── Cool pristine canvas (clean engineering ground)
[Surface Card]   #ffffff ── High-contrast pure white content tile
[Surface Subtle] #f0f9ff ── Sky blue inset container & metadata panel
[Surface Border] #e2e8f0 ── Crisp 1px structural hairline (slate-200)
[Border Dark]    #cbd5e1 ── High-contrast dividing line for active states

[Ink Primary]    #09090b ── High-contrast dark carbon ink (WCAG AAA > 12:1)
[Ink Secondary]  #475569 ── Readable body text (WCAG AA > 7:1)
[Ink Muted]      #64748b ── Technical metadata & labels (WCAG AA > 4.5:1)
[Ink Inverse]    #ffffff ── Pure white on dark buttons/chips

[Primary / Steel Navy]  #0b1e36 ── Deep Structural Navy (Headers, structural frames, authority)
[Primary Hover]         #081628 ── Pressed / hover deep navy
[Deep Container]        #071322 ── Rich dark container for hero, cards, and editorial highlights
[Deepest Foundation]    #050e1a ── Deepest navy for announcement bar & footer

[Secondary / Sky Glass] #0284c7 ── Sky Glass Blue (Reflective sky on UV plastic/glass, active tabs, buttons)
[Glass Highlight]       #38bdf8 ── Bright sky cyan for icons, border accents, and active indicators
[Glass Tint 50]         #f0f9ff ── Ultra-light clean sky tint for tags & badges
[Glass Border 200]      #bae6fd ── Soft sky blue border highlight & text selection accent

[Accent Amber 500]      #f59e0b ── Solar Amber (RAB simulation button & high-intent CTAs)
[Accent Amber 600]      #d97706 ── Pressed amber state
[Accent Amber 50]       #fffbeb ── Light amber notification surface
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

### 3.5 Shopify-Grade Direct-to-WA Conversion Architecture (Zero Web Forms)
- **Zero Web Forms Invariant:** Under no circumstance should a checkout, address, or multi-step form be rendered on the website. The user journey ends directly at WhatsApp with a pre-filled structured message.
- **Variant Selector (`ProductVariantSelector.tsx`):**
  - Pill-based option buttons (e.g. Ukuran Roll, Tebal Micron, Kerapatan Net).
  - Selected state: `border-agri-700 bg-agri-50 text-agri-800 font-bold`.
  - Unselected state: `border-surface-border bg-surface-card hover:bg-surface-subtle text-ink-primary`.
- **Dynamic Price Engine:** Live reactive price display in IDR format (`Rp X.XXX.XXX`), updating unit price and total price immediately when a variant is chosen or quantity changes.
- **Accessible Quantity Stepper:** `[-] 1 [+]` buttons with minimum 44px touch targets and live input guard ($1 \le Qty \le 999$).
- **Single-Click Direct WhatsApp Action:**
  - High-visibility green CTA button with official WhatsApp brand icon.
  - Generates pre-encoded `https://wa.me/6285183002070?text=...` URI.
  - Encodes: Product Name, SKU, Selected Variant, Quantity, Calculated Total Price, Page URL, and Clean Delivery Template.
- **Mobile Sticky Action Dock:** Single-deck sticky bar on PDP (< 768px) displaying current variant price and direct "Beli via WA" button within thumb zone without obstructing viewport.

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
