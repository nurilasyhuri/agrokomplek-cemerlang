import { defineCollection, z } from 'astro:content';

const produkCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['saprodi-pertanian', 'perlengkapan-pertanian', 'perlengkapan-greenhouse']),
    price: z.number().optional(),
    priceDisplay: z.string().optional(),
    stockStatus: z.enum(['ready', 'po', 'hubungi-kami']).default('ready'),
    featured: z.boolean().default(false),
    thumbnail: z.string(),
    specs: z.record(z.string()).optional(),
    brand: z.string().optional(),
    orderPriority: z.number().default(99),
    variants: z.array(z.object({
      name: z.string(),
      price: z.number(),
      priceDisplay: z.string(),
      sku: z.string().optional(),
      unit: z.string().optional(),
    })).optional(),
  }),
});

const proyekCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    clientType: z.enum(['komersial', 'petani-individu', 'institusi', 'penelitian']),
    greenhouseType: z.enum(['Greenhouse Bambu', 'Greenhouse Galvanis', 'Greenhouse Baja Ringan', 'Tunnel Garam']),
    locationCity: z.string(),
    locationProvince: z.string(),
    dimensions: z.string(),
    completionDate: z.string(),
    mainMaterials: z.array(z.string()),
    coverImage: z.string(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const artikelCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().default('Tim Ahli Agrokomplek Cemerlang'),
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  produk: produkCollection,
  proyek: proyekCollection,
  artikel: artikelCollection,
};
