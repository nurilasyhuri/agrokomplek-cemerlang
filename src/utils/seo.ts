import { BUSINESS_INFO } from '../data/businessInfo';

const CANONICAL_BASE = 'https://agroprimagreenhouse.com';

function ensureAbsoluteUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `${CANONICAL_BASE}${cleanPath}`;
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${CANONICAL_BASE}/#business`,
    name: BUSINESS_INFO.name,
    alternateName: [
      'Agro Prima Greenhouse Malang',
      'Kontraktor Spesialis Jasa Pembuatan Greenhouse',
      'Jasa Pembuatan Greenhouse Malang Agro Prima Greenhouse',
    ],
    url: `${CANONICAL_BASE}/`,
    logo: `${CANONICAL_BASE}/favicon.svg`,
    image: [
      `${CANONICAL_BASE}/images/hero/hero-greenhouse.webp`,
      `${CANONICAL_BASE}/images/og/default-og.jpg`,
    ],
    description: BUSINESS_INFO.description,
    telephone: BUSINESS_INFO.contact.phoneInternational,
    email: BUSINESS_INFO.contact.email,
    priceRange: '$$',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Bank Transfer, QRIS',
    sameAs: [
      BUSINESS_INFO.geo.mapsUrl,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.district,
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
      { '@type': 'City', name: 'Kota Malang' },
      { '@type': 'City', name: 'Kota Batu' },
      { '@type': 'AdministrativeArea', name: 'Kabupaten Malang' },
      { '@type': 'AdministrativeArea', name: 'Jawa Timur' },
      { '@type': 'Country', name: 'Indonesia' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Katalog Jasa Pembuatan Greenhouse & Material Agro Prima Greenhouse',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Jasa Pembuatan Greenhouse',
          itemListElement: BUSINESS_INFO.greenhouseTypes.map((gh) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: gh.name,
              description: `Spesifikasi ketahanan ${gh.durability}, kategori biaya ${gh.costTier}, peruntukan ${gh.suitableFor}.`,
            },
          })),
        },
        {
          '@type': 'OfferCatalog',
          name: 'Material Greenhouse & Atap Proteksi',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Plastik UV Greenhouse 200 Mikron 14%' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Paranet Shading Net 65%-75%' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Kasa Insect Net 50 Mesh' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Spring Clip & Profil C Lock' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Sistem Irigasi & Smart Farming IoT',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Smart Farming IoT & Kontroler Otomasi Greenhouse' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Selang Drip Irigasi 16mm' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Mulsa Plastik Hitam Perak MPHP' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Paket Instalasi Hidroponik NFT' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Sprayer Elektrik 16L' } },
          ],
        },
      ],
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${CANONICAL_BASE}/#website`,
    url: `${CANONICAL_BASE}/`,
    name: BUSINESS_INFO.name,
    alternateName: 'Agro Prima Greenhouse Malang',
    description: BUSINESS_INFO.description,
    publisher: {
      '@id': `${CANONICAL_BASE}/#business`,
    },
    inLanguage: 'id-ID',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${CANONICAL_BASE}/produk/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getGreenhouseServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${CANONICAL_BASE}/jasa/pembuatan-greenhouse/#service`,
    name: 'Jasa Pembuatan Greenhouse & Tunnel Garam Indonesia',
    serviceType: 'Jasa Konstruksi & Instalasi Greenhouse Pertanian Tropis',
    provider: { '@id': `${CANONICAL_BASE}/#business` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Jawa Timur' },
      { '@type': 'Country', name: 'Indonesia' },
    ],
    description: 'Layanan konsultasi, desain teknis, survei lahan, RAB transparan, fabrikasi rangka pipa galvanis, bambu, baja ringan, serta perakitan greenhouse siap pakai untuk budidaya melon, sayur hidroponik, dan tunnel garam di seluruh Indonesia.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pilihan Rangka Konstruksi Greenhouse',
      itemListElement: BUSINESS_INFO.greenhouseTypes.map((gh) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: gh.name,
          description: `Spesifikasi ketahanan ${gh.durability}, klasifikasi biaya ${gh.costTier}, peruntukan ${gh.suitableFor}.`,
        },
      })),
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '100000',
      highPrice: '1000000',
      offerCount: '4',
      priceValidUntil: '2027-12-31',
      url: `${CANONICAL_BASE}/jasa/pembuatan-greenhouse/`,
      seller: {
        '@id': `${CANONICAL_BASE}/#business`,
      },
    },
  };
}

export interface ProductSchemaInput {
  title: string;
  description: string;
  thumbnail: string;
  brand?: string;
  category: string;
  slug: string;
  price?: number;
  priceDisplay?: string;
  stockStatus?: string;
  sku?: string;
  variants?: Array<{
    name: string;
    price: number;
    priceDisplay?: string;
    sku?: string;
    unit?: string;
  }>;
  specs?: Record<string, any>;
}

export function getProductSchema(product: ProductSchemaInput) {
  const productUrl = `${CANONICAL_BASE}/produk/${product.slug}/`;
  const imageUrl = ensureAbsoluteUrl(product.thumbnail);

  // Common return & shipping policy snippet for merchant confidence
  const merchantPolicy = {
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'ID',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 7,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'IDR',
      },
      shippingDestination: [
        {
          '@type': 'DefinedRegion',
          addressCountry: 'ID',
        },
      ],
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 1,
          maxValue: 2,
          unitCode: 'd',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 1,
          maxValue: 5,
          unitCode: 'd',
        },
      },
    },
  };

  let offers: Record<string, any>;

  if (product.variants && product.variants.length > 1) {
    const prices = product.variants.map((v) => v.price).filter((p) => p > 0);
    const lowPrice = prices.length > 0 ? Math.min(...prices) : (product.price || 0);
    const highPrice = prices.length > 0 ? Math.max(...prices) : (product.price || 0);

    offers = {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: String(lowPrice),
      highPrice: String(highPrice),
      offerCount: String(product.variants.length),
      priceValidUntil: '2027-12-31',
      url: productUrl,
      offers: product.variants.map((v) => ({
        '@type': 'Offer',
        name: `${product.title} - ${v.name}`,
        priceCurrency: 'IDR',
        price: String(v.price),
        sku: v.sku || product.sku,
        priceValidUntil: '2027-12-31',
        availability: product.stockStatus === 'po' ? 'https://schema.org/PreOrder' : product.stockStatus === 'hubungi-kami' ? 'https://schema.org/LimitedAvailability' : 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        url: productUrl,
        seller: {
          '@id': `${CANONICAL_BASE}/#business`,
        },
        ...merchantPolicy,
      })),
    };
  } else {
    const effectivePrice = product.price && product.price > 0
      ? product.price
      : product.variants?.[0]?.price || 0;

    offers = {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: String(effectivePrice),
      sku: product.sku || product.variants?.[0]?.sku,
      priceValidUntil: '2027-12-31',
      availability: product.stockStatus === 'po' ? 'https://schema.org/PreOrder' : product.stockStatus === 'hubungi-kami' ? 'https://schema.org/LimitedAvailability' : 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: productUrl,
      seller: {
        '@id': `${CANONICAL_BASE}/#business`,
      },
      ...merchantPolicy,
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.title,
    description: product.description,
    image: imageUrl,
    sku: product.sku || product.variants?.[0]?.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand || BUSINESS_INFO.name,
    },
    category: product.category,
    offers,
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
  const articleUrl = `${CANONICAL_BASE}/artikel/${article.slug}/`;
  const imageUrl = ensureAbsoluteUrl(article.heroImage);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: article.author || 'Tim Ahli Agro Prima Greenhouse',
      url: `${CANONICAL_BASE}/tentang-kami/`,
    },
    publisher: {
      '@id': `${CANONICAL_BASE}/#business`,
    },
    datePublished: article.publishDate,
    dateModified: article.updatedDate || article.publishDate,
    inLanguage: 'id-ID',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
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
  const projectUrl = `${CANONICAL_BASE}/proyek/${project.slug}/`;
  const imageUrl = ensureAbsoluteUrl(project.coverImage);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${projectUrl}#project`,
    name: project.title,
    description: project.description,
    serviceType: project.greenhouseType,
    provider: {
      '@id': `${CANONICAL_BASE}/#business`,
    },
    areaServed: {
      '@type': 'Place',
      name: `${project.locationCity}, ${project.locationProvince}`,
    },
    image: imageUrl,
    url: projectUrl,
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
      item: ensureAbsoluteUrl(item.url),
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

export function getCollectionPageSchema(data: {
  name: string;
  description: string;
  url: string;
  items?: Array<{ name: string; url: string; description?: string }>;
}) {
  const pageUrl = ensureAbsoluteUrl(data.url);
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: data.name,
    description: data.description,
    url: pageUrl,
    isPartOf: {
      '@id': `${CANONICAL_BASE}/#website`,
    },
  };

  if (data.items && data.items.length > 0) {
    schema.mainEntity = {
      '@type': 'ItemList',
      itemListElement: data.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: ensureAbsoluteUrl(item.url),
        description: item.description,
      })),
    };
  }

  return schema;
}

export function getAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${CANONICAL_BASE}/tentang-kami/#about`,
    name: 'Tentang Agro Prima Greenhouse',
    description: BUSINESS_INFO.description,
    url: `${CANONICAL_BASE}/tentang-kami/`,
    mainEntity: {
      '@id': `${CANONICAL_BASE}/#business`,
    },
  };
}

export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${CANONICAL_BASE}/kontak/#contact`,
    name: 'Kontak Agro Prima Greenhouse',
    description: 'Hubungi tim Agro Prima Greenhouse via WhatsApp atau kunjungi toko fisik di Kedungkandang Malang.',
    url: `${CANONICAL_BASE}/kontak/`,
    mainEntity: {
      '@id': `${CANONICAL_BASE}/#business`,
    },
  };
}
