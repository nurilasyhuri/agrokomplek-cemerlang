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
    image: 'https://agrokomplekcemerlang.com/images/hero/hero-greenhouse.webp',
    description: BUSINESS_INFO.positioning,
    telephone: BUSINESS_INFO.contact.phoneInternational,
    email: BUSINESS_INFO.contact.email,
    priceRange: '$$',
    sameAs: [BUSINESS_INFO.geo.mapsUrl],
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
        opens: '07:30',
        closes: '17:00',
      },
    ],
    hasMap: BUSINESS_INFO.geo.mapsUrl,
    areaServed: [
      { '@type': 'City', name: 'Malang' },
      { '@type': 'AdministrativeArea', name: 'Jawa Timur' },
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
    serviceType: 'Konstruksi & Instalasi Greenhouse Pertanian Tropis',
    provider: { '@id': 'https://agrokomplekcemerlang.com/#business' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    description: 'Layanan konsultasi, desain, survei lahan, fabrikasi, dan perakitan struktur greenhouse bambu, pipa galvanis hot-dip, baja ringan, serta tunnel garam di seluruh Indonesia.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IDR',
      price: '0',
      priceValidUntil: '2027-12-31',
      url: 'https://agrokomplekcemerlang.com/jasa/pembuatan-greenhouse/',
      seller: {
        '@id': 'https://agrokomplekcemerlang.com/#business',
      },
    },
  };
}

export function getProductSchema(product: {
  title: string;
  description: string;
  thumbnail: string;
  brand?: string;
  category: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.thumbnail.startsWith('http')
      ? product.thumbnail
      : `https://agrokomplekcemerlang.com${product.thumbnail}`,
    brand: {
      '@type': 'Brand',
      name: product.brand || BUSINESS_INFO.name,
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: '0',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `https://agrokomplekcemerlang.com/produk/${product.slug}/`,
      seller: {
        '@id': 'https://agrokomplekcemerlang.com/#business',
      },
    },
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  heroImage: string;
  publishDate: string;
  updatedDate?: string;
  author?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.heroImage.startsWith('http')
      ? article.heroImage
      : `https://agrokomplekcemerlang.com${article.heroImage}`,
    author: {
      '@type': 'Organization',
      name: article.author || BUSINESS_INFO.name,
      url: 'https://agrokomplekcemerlang.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://agrokomplekcemerlang.com/favicon.svg',
      },
    },
    datePublished: article.publishDate,
    dateModified: article.updatedDate || article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://agrokomplekcemerlang.com/artikel/${article.slug}/`,
    },
  };
}

export function getProjectSchema(project: {
  title: string;
  description: string;
  coverImage: string;
  locationCity: string;
  locationProvince: string;
  greenhouseType: string;
  dimensions: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: project.title,
    description: project.description,
    serviceType: project.greenhouseType,
    provider: {
      '@id': 'https://agrokomplekcemerlang.com/#business',
    },
    areaServed: {
      '@type': 'Place',
      name: `${project.locationCity}, ${project.locationProvince}`,
    },
    image: project.coverImage.startsWith('http')
      ? project.coverImage
      : `https://agrokomplekcemerlang.com${project.coverImage}`,
    url: `https://agrokomplekcemerlang.com/proyek/${project.slug}/`,
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

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
