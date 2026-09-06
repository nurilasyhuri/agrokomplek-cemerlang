import { BUSINESS_INFO } from '../data/businessInfo';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': 'https://agrokomplekcemerlang.com/#business',
    name: BUSINESS_INFO.name,
    alternateName: 'Toko Pertanian & Jasa Greenhouse Agrokomplek Cemerlang',
    url: 'https://agrokomplekcemerlang.com/',
    logo: 'https://agrokomplekcemerlang.com/favicon.svg',
    image: 'https://agrokomplekcemerlang.com/images/hero/hero-malang-store.webp',
    description: BUSINESS_INFO.positioning,
    telephone: BUSINESS_INFO.contact.phoneInternational,
    email: BUSINESS_INFO.contact.email,
    priceRange: 'Rp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.province,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasMap: BUSINESS_INFO.geo.mapsUrl,
    areaServed: [
      { '@type': 'City', name: 'Malang' },
      { '@type': 'Country', name: 'Indonesia' },
    ],
  };
}

export function getGreenhouseServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agrokomplekcemerlang.com/jasa/pembuatan-greenhouse/#service',
    name: 'Jasa Pembuatan Greenhouse & Tunnel Garam',
    serviceType: 'Konstruksi & Instalasi Greenhouse Pertanian',
    provider: { '@id': 'https://agrokomplekcemerlang.com/#business' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    description: 'Layanan konsultasi, desain, survei, fabrikasi, dan perakitan greenhouse bambu, galvanis, baja ringan, serta tunnel garam di seluruh Indonesia.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IDR',
      price: '0',
      url: 'https://agrokomplekcemerlang.com/jasa/pembuatan-greenhouse/',
    },
  };
}

export function getProductSchema(product: {
  title: string;
  description: string;
  thumbnail: string;
  brand?: string;
  category: string;
  price?: number;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: `https://agrokomplekcemerlang.com${product.thumbnail}`,
    brand: {
      '@type': 'Brand',
      name: product.brand || BUSINESS_INFO.name,
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: product.price ? product.price.toString() : '0',
      availability: 'https://schema.org/InStock',
      url: `https://agrokomplekcemerlang.com/produk/${product.slug}/`,
      seller: {
        '@type': 'Organization',
        name: BUSINESS_INFO.name,
      },
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://agrokomplekcemerlang.com${item.url}`,
    })),
  };
}
