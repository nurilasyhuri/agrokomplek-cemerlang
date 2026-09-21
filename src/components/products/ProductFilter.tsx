import { useState } from 'preact/hooks';

interface Product {
  title: string;
  description: string;
  category: string;
  priceDisplay?: string;
  stockStatus: string;
  thumbnail: string;
  slug: string;
  brand?: string;
}

interface Props {
  products: Product[];
}

function parsePrice(priceStr?: string): number {
  if (!priceStr) return 0;
  const digits = priceStr.replace(/[^0-9]/g, '');
  return digits ? parseInt(digits, 10) : 0;
}

const CATEGORY_LABELS: Record<string, string> = {
  'saprodi-pertanian': 'Saprodi',
  'perlengkapan-greenhouse': 'Greenhouse',
  'perlengkapan-pertanian': 'Irigasi & Alat',
};

export default function ProductFilter({ products }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const countAll = products.length;
  const countByCat = (catId: string) => products.filter((p) => p.category === catId).length;

  const categories = [
    { id: 'all', label: 'Semua Produk', count: countAll },
    { id: 'perlengkapan-greenhouse', label: 'Material Greenhouse', count: countByCat('perlengkapan-greenhouse') },
    { id: 'perlengkapan-pertanian', label: 'Sistem Irigasi & Alat', count: countByCat('perlengkapan-pertanian') },
    { id: 'saprodi-pertanian', label: 'Saprodi & Pupuk', count: countByCat('saprodi-pertanian') },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return parsePrice(a.priceDisplay) - parsePrice(b.priceDisplay);
    }
    if (sortBy === 'price-desc') {
      return parsePrice(b.priceDisplay) - parsePrice(a.priceDisplay);
    }
    if (sortBy === 'name-asc') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  return (
    <div class="space-y-6">
      {/* Modern Shopify Filter Control Toolbar */}
      <div class="bg-white border border-zinc-200/80 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        
        {/* Category Filter Pills */}
        <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                class={`whitespace-nowrap px-3.5 py-2 rounded-full text-xs font-semibold transition-all select-none shrink-0 inline-flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  class={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-zinc-200 text-zinc-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Sort Sub-bar */}
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-zinc-100">
          
          {/* Search Input */}
          <div class="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Cari nama produk, merek, atau spesifikasi..."
              value={searchQuery}
              onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
              class="w-full pl-9 pr-8 py-2 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
            />
            <svg
              class="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Hapus pencarian"
                class="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-zinc-200 hover:bg-zinc-300 text-zinc-600 flex items-center justify-center text-[10px] transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div class="relative shrink-0 w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy((e.target as HTMLSelectElement).value)}
              class="w-full sm:w-auto appearance-none bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-semibold rounded-full pl-4 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer transition-colors"
            >
              <option value="featured">Urutkan: Rekomendasi</option>
              <option value="price-asc">Harga: Terendah ke Tertinggi</option>
              <option value="price-desc">Harga: Tertinggi ke Terendah</option>
              <option value="name-asc">Nama Produk: A &rarr; Z</option>
            </select>
            <svg
              class="w-3.5 h-3.5 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

        </div>

      </div>

      {/* Result Status & Reset Control */}
      <div class="flex items-center justify-between text-xs text-zinc-500 px-1">
        <div>
          Menampilkan <strong class="text-zinc-900 font-bold">{sortedProducts.length}</strong> produk
          {selectedCategory !== 'all' && (
            <span> di kategori <strong class="text-zinc-900">{activeCategoryObj?.label}</strong></span>
          )}
          {searchQuery && (
            <span> untuk kata kunci <strong class="text-zinc-900">&ldquo;{searchQuery}&rdquo;</strong></span>
          )}
        </div>
        {(selectedCategory !== 'all' || searchQuery !== '') && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            class="inline-flex items-center gap-1 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
          >
            <span>Reset Filter</span>
            <span class="text-xs">&times;</span>
          </button>
        )}
      </div>

      {/* Product Cards Grid (Shopify 4-Column Layout) */}
      {sortedProducts.length > 0 ? (
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {sortedProducts.map((product) => {
            const displayCategory = CATEGORY_LABELS[product.category] || product.category;
            return (
              <div
                key={product.slug}
                class="group relative flex flex-col justify-between rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div>
                  <a
                    href={`/produk/${product.slug}/`}
                    class="block aspect-square bg-zinc-50 overflow-hidden relative"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width="400"
                      height="400"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/products/plastik-uv-greenhouse.webp';
                      }}
                    />
                    {/* Stock Pill */}
                    <div class="absolute top-2.5 left-2.5 z-10">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/95 backdrop-blur-xs text-zinc-800 border border-zinc-200/80 shadow-2xs">
                        <span class={`w-1.5 h-1.5 rounded-full ${
                          product.stockStatus === 'ready' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}></span>
                        <span>
                          {product.stockStatus === 'ready'
                            ? 'Ready'
                            : product.stockStatus === 'po'
                            ? 'Pre-Order'
                            : 'Cek Stok'}
                        </span>
                      </span>
                    </div>
                  </a>

                  <div class="p-3.5 sm:p-4 space-y-1.5">
                    <div class="flex items-center justify-between gap-2 text-[11px]">
                      <span class="font-bold uppercase tracking-wider text-emerald-800 text-[10px]">
                        {displayCategory}
                      </span>
                      {product.brand && (
                        <span class="text-zinc-400 font-medium truncate">
                          {product.brand}
                        </span>
                      )}
                    </div>

                    <h3 class="font-semibold text-zinc-900 text-sm leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors min-h-[2.5rem]">
                      <a href={`/produk/${product.slug}/`}>
                        {product.title}
                      </a>
                    </h3>

                    <p class="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div class="p-3.5 sm:p-4 pt-2 border-t border-zinc-100 mt-1 space-y-2.5">
                  <div class="flex items-baseline justify-between">
                    <div class="flex flex-col">
                      <span class="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">Mulai Dari</span>
                      <span class="font-bold text-zinc-900 text-sm sm:text-base tracking-tight">
                        {product.priceDisplay || 'Hubungi CS'}
                      </span>
                    </div>
                    <span class="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/60">
                      Kargo RI
                    </span>
                  </div>

                  <a
                    href={`/produk/${product.slug}/`}
                    class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-emerald-700 text-white text-xs font-semibold tracking-normal transition-colors duration-200 select-none"
                  >
                    <span>Lihat Detail &amp; Varian</span>
                    <svg class="w-3 h-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div class="text-center py-16 bg-white rounded-2xl border border-zinc-200/80 p-8 shadow-xs max-w-lg mx-auto space-y-4">
          <div class="w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <div>
            <h4 class="text-base font-bold text-zinc-900">Produk Tidak Ditemukan</h4>
            <p class="text-zinc-500 text-xs mt-1">Tidak ada produk yang cocok dengan pencarian atau filter yang Anda pilih.</p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            class="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Reset Filter &amp; Pencarian</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </div>
  );
}
