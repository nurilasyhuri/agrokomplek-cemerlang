export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

// Focused, high-intent primary navigation (4 core items)
export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Katalog Produk', href: '/produk/' },
  { label: 'Jasa Greenhouse', href: '/jasa/pembuatan-greenhouse/' },
  { label: 'Portofolio Proyek', href: '/proyek/' },
  { label: 'Lokasi Toko', href: '/lokasi/' },
];

// Secondary links for mobile drawer and sitemap
export const SECONDARY_NAVIGATION: NavItem[] = [
  { label: 'Wilayah Layanan & Kargo', href: '/wilayah-layanan/' },
  { label: 'Artikel & Panduan Tani', href: '/artikel/' },
  { label: 'Tentang Kami', href: '/tentang-kami/' },
  { label: 'Kontak', href: '/kontak/' },
];

export const FOOTER_PRODUCT_LINKS = [
  { label: 'Saprodi Pertanian', href: '/produk/saprodi-pertanian/' },
  { label: 'Perlengkapan Pertanian', href: '/produk/perlengkapan-pertanian/' },
  { label: 'Perlengkapan Greenhouse', href: '/produk/perlengkapan-greenhouse/' },
  { label: 'Plastik UV 14% - 20%', href: '/produk/perlengkapan-greenhouse/' },
  { label: 'Paranet Tanaman 65% - 85%', href: '/produk/perlengkapan-greenhouse/' },
  { label: 'Selang Drip Irigasi', href: '/produk/perlengkapan-pertanian/' },
];

export const FOOTER_SERVICE_LINKS = [
  { label: 'Greenhouse Bambu', href: '/jasa/pembuatan-greenhouse/#bambu' },
  { label: 'Greenhouse Galvanis', href: '/jasa/pembuatan-greenhouse/#galvanis' },
  { label: 'Greenhouse Baja Ringan', href: '/jasa/pembuatan-greenhouse/#baja-ringan' },
  { label: 'Tunnel Garam', href: '/jasa/pembuatan-greenhouse/#tunnel-garam' },
  { label: 'Estimasi RAB Proyek', href: '/jasa/pembuatan-greenhouse/#kalkulator' },
  { label: 'Jangkauan Luar Pulau', href: '/wilayah-layanan/' },
];
