export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

// Focused, high-intent primary navigation (4 core items)
export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Jasa Greenhouse', href: '/jasa/pembuatan-greenhouse/' },
  { label: 'Kalkulator RAB', href: '/jasa/pembuatan-greenhouse/#kalkulator' },
  { label: 'Portofolio Proyek', href: '/proyek/' },
  { label: 'Material Greenhouse', href: '/produk/perlengkapan-greenhouse/' },
  { label: 'Workshop Malang', href: '/lokasi/' },
];

// Secondary links for mobile drawer and sitemap
export const SECONDARY_NAVIGATION: NavItem[] = [
  { label: 'Wilayah Layanan & Kargo', href: '/wilayah-layanan/' },
  { label: 'Panduan Konstruksi & RAB', href: '/artikel/' },
  { label: 'Tentang Kontraktor', href: '/tentang-kami/' },
  { label: 'Kontak Resmi', href: '/kontak/' },
];

export const FOOTER_PRODUCT_LINKS = [
  { label: 'Material Greenhouse', href: '/produk/perlengkapan-greenhouse/' },
  { label: 'Plastik UV 200µm 14%', href: '/produk/plastik-uv-greenhouse-14/' },
  { label: 'Paranet Tanaman 65%-75%', href: '/produk/paranet-tanaman/' },
  { label: 'Insect Net 50 Mesh', href: '/produk/insectnet-kasa-greenhouse/' },
  { label: 'Spring Clip & Profil Lock', href: '/produk/spring-clip-profil-lock/' },
  { label: 'Selang Drip Irigasi 16mm', href: '/produk/selang-drip-irigasi-16mm/' },
  { label: 'Mulsa MPHP', href: '/produk/mulsa-plastik-hitam-perak/' },
];

export const FOOTER_SERVICE_LINKS = [
  { label: 'Greenhouse Galvanis', href: '/jasa/pembuatan-greenhouse/#galvanis' },
  { label: 'Greenhouse Baja Ringan', href: '/jasa/pembuatan-greenhouse/#baja-ringan' },
  { label: 'Greenhouse Bambu Awet', href: '/jasa/pembuatan-greenhouse/#bambu' },
  { label: 'Tunnel Garam Prisma', href: '/jasa/pembuatan-greenhouse/#tunnel-garam' },
  { label: 'Estimasi RAB Proyek', href: '/jasa/pembuatan-greenhouse/#kalkulator' },
  { label: 'Jangkauan Luar Pulau', href: '/wilayah-layanan/' },
];
