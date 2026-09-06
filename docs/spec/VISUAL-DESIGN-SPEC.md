# Visual & Design System Specification — "Madian Agritech" Theme

## 1. Design Concept & Philosophy
**Tema Visual: Madian (Modern Agritech & Organic Precision)**
- **Karakter:** Kokoh, Bersih, Presisi, Berakar pada Bumi (*Grounded*), dan Berorientasi Solusi Teknis.
- **Tone & Mood:** Tidak berlebihan (*anti-slop*), profesional, mencerminkan ketahanan struktur pertanian modern (galvanis/baja/bambu berkualitas) dan kesuburan agrikultur (emerald/forest green).
- **Surface Layering:** Menggunakan *off-white* dan *warm stone/sand* sebagai basis, bukan warna putih silau (hex `#FFFFFF` murni) agar nyaman dibaca di lapangan/bawah sinar matahari.

---

## 2. Color Palette & Semantic Tokens

```css
/* src/styles/theme.css */
:root {
  /* Brand Primary — Deep Agritech Emerald */
  --color-primary-50: #eef8f3;
  --color-primary-100: #d6efe0;
  --color-primary-200: #aedec3;
  --color-primary-500: #2d8a57;
  --color-primary-700: #195a36;
  --color-primary-900: #0f3621;
  --color-primary-950: #072013;

  /* Brand Secondary & Earth Accent — Sand, Amber, Galvanized Steel */
  --color-accent-gold: #d97706;       /* Warm sunlight amber for secondary CTAs */
  --color-accent-gold-hover: #b45309;
  --color-steel-500: #64748b;        /* Structural elements, borders, specs */
  --color-steel-200: #e2e8f0;
  
  /* Background & Surface Layers */
  --color-bg-canvas: #fbfbf9;        /* Warm organic off-white */
  --color-bg-surface: #ffffff;       /* Pure card surface */
  --color-bg-subtle: #f3f4f0;        /* Subtle section highlight */
  --color-bg-dark: #0a1f14;          /* Footer and high-contrast callouts */

  /* Typography & Text */
  --color-text-primary: #142019;     /* Deep organic black */
  --color-text-secondary: #4a5950;   /* Muted agritech slate */
  --color-text-muted: #738279;
  --color-text-inverse: #f8faf9;

  /* Status Colors */
  --color-status-ready: #16a34a;     /* Stock ready */
  --color-status-po: #ea580c;        /* Pre-order / On Demand */
  --color-status-info: #0284c7;

  /* Border & Elevation */
  --border-subtle: 1px solid #e7ebe7;
  --border-strong: 1px solid #cbd5cb;
  --shadow-soft: 0 4px 20px -2px rgba(15, 54, 33, 0.05);
  --shadow-card: 0 8px 30px -4px rgba(15, 54, 33, 0.08);
}
```

---

## 3. Typography Hierarchy

- **Display & Headings:** `Plus Jakarta Sans` or `Outfit` (Modern, geometric, confident, friendly yet authoritative).
- **Body & Specs:** `Inter` or `Plus Jakarta Sans` (Superior legibility for dimensions, numbers, specs, and long-form articles).
- **Monospace & Coordinates:** `JetBrains Mono` / `Fira Code` (For SKU, coordinates, and dimension chips).

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| **Display / Hero H1** | 3.25rem (52px) | 2.25rem (36px) | 800 (Bold) | 1.15 | -0.025em | Main Hero Title |
| **Section H2** | 2.25rem (36px) | 1.75rem (28px) | 700 (Bold) | 1.25 | -0.02em | Section Anchors |
| **Subsection H3** | 1.5rem (24px) | 1.25rem (20px) | 600 (Semibold)| 1.35 | -0.01em | Cards, Categories |
| **Card / H4** | 1.125rem (18px)| 1.05rem (17px) | 600 (Semibold)| 1.4 | 0 | Product Names |
| **Body Large** | 1.125rem (18px)| 1.0rem (16px) | 400 (Regular) | 1.65 | 0 | Hero subtitles, intros |
| **Body Base** | 1.0rem (16px) | 0.9375rem (15px)| 400 (Regular) | 1.6 | 0 | Standard text & content |
| **Caption / Meta** | 0.8125rem (13px)| 0.75rem (12px)| 500 (Medium) | 1.4 | +0.01em | Badges, tags, specs |

---

## 4. UI Components & Interaction Patterns

### A. Top Navigation Bar (Header)
- **Top Announcement Bar:** `Berbasis di Malang • Melayani Pemesanan & Proyek Seluruh Indonesia | WA: 0851-8300-2070`
- **Desktop Navbar:** Logo on left, Nav links with clean hover pills, prominent **WhatsApp Hubungi Kami** CTA button (Green gradient / solid emerald with hover lift).
- **Mobile Navbar:** Compact header with Hamburger menu + prominent direct phone/WhatsApp icon.

### B. Mobile Sticky Bottom Action Bar
- Fixed at the bottom of viewports `< 768px`.
- 3 Dedicated Touch Targets:
  1. 📦 **Katalog Produk** (`/produk/`)
  2. 💬 **WhatsApp Cepat** (`wa.me link with current page context`)
  3. 📍 **Lokasi Toko** (`/lokasi/` or direct Google Maps intent)
- Frosted glass backdrop blur (`backdrop-blur-md bg-white/90 border-t border-slate-200`).

### C. Greenhouse Interactive Estimation Card
- 4-tab selector: **Greenhouse Bambu**, **Greenhouse Galvanis**, **Greenhouse Baja Ringan**, **Tunnel Garam**.
- Interactive sliders / inputs for Length × Width with real-time area calculation ($m^2$).
- Feature checklist (Plastik UV, Paranet, Pintu Karantina, Sistem Irigasi Drip/Sprinkler).
- One-click button: **"Dapatkan Estimasi RAB via WhatsApp"** formatting the inquiry seamlessly.

### D. Product & Project Card Patterns
- **Product Card:** Clean square ratio photo, Stock Status badge (`Ready Stok` / `Pre-Order`), bold title, category tag, clear specification snippet, and bottom WhatsApp inquiry trigger.
- **Project Card:** 16:9 aspect ratio photo, location chip (e.g. `📍 Buring, Kota Malang`), dimensions chip (`📐 10m x 25m`), greenhouse type badge, and "Lihat Detail Proyek" link.

---

## 5. Responsive Breakpoint Strategy
- `sm`: `640px` (Compact tablets & large phones in landscape)
- `md`: `768px` (Tablets & mobile-to-desktop header transition)
- `lg`: `1024px` (Laptops & standard desktops — multi-column grids)
- `xl`: `1280px` (Wide desktop monitors — max content container `1240px` centered)
- `2xl`: `1440px`
