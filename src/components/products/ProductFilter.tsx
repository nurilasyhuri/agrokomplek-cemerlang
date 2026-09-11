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

export default function ProductFilter({ products }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const countAll = products.length;
  const countByCat = (catId: string) => products.filter((p) => p.category === catId).length;

  const categories = [
    { id: 'all', label: 'Semua Produk', count: countAll },
    { id: 'saprodi-pertanian', label: 'Saprodi Pertanian', count: countByCat('saprodi-pertanian') },
    { id: 'perlengkapan-greenhouse', label: 'Material Greenhouse', count: countByCat('perlengkapan-greenhouse') },
    { id: 'perlengkapan-pertanian', label: 'Irigasi & Alat', count: countByCat('perlengkapan-pertanian') },
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
    <div class="space-y-8">
      {/* Control Bar: Categories, Instant Search & Sorting */}
      <div class="bg-white border border-zinc-200/80 rounded-3xl p-3.5 sm:p-5 shadow-xs space-y-4">
        
        {/* Category Filter Pills (Horizontal scrollable on mobile) */}
        <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                class={`whitespace-nowrap px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs font-semibold transition-all select-none shrink-0 inline-flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-zinc-100/90 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  class={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-zinc-200/80 text-zinc-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Bar: Search & Sort */}
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-zinc-100">
          
          {/* Minimalist Apple Search Pill */}
          <div class="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Cari nama produk, merek, atau spesifikasi..."
              value={searchQuery}
              onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
              class="w-full pl-10 pr-9 py-2.5 rounded-full border border-zinc-200/90 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
            />
            <svg
              class="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
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
                class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-zinc-200 hover:bg-zinc-300 text-zinc-600 flex items-center justify-center text-[10px] transition-colors"
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
              class="w-full sm:w-auto appearance-none bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200/90 text-zinc-700 text-xs font-semibold rounded-full pl-4 pr-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer transition-colors"
            >
              <option value="featured">Urutkan: Rekomendasi</option>
              <option value="price-asc">Harga: Terendah ke Tertinggi</option>
              <option value="price-desc">Harga: Tertinggi ke Terendah</option>
              <option value="name-asc">Nama Produk: A &rarr; Z</option>
            </select>
            <svg
              class="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

        </div>

      </div>

      {/* Result Count Info & Reset Pill */}
      <div class="flex items-center justify-between text-xs text-zinc-500 px-2">
        <div class="flex items-center gap-2">
          <span>
            Menampilkan <strong class="text-zinc-900 font-bold">{sortedProducts.length}</strong> produk
            {selectedCategory !== 'all' && (
              <span> dalam kategori <strong class="text-zinc-900">{activeCategoryObj?.label}</strong></span>
            )}
            {searchQuery && (
              <span> untuk pencarian <strong class="text-zinc-900">&ldquo;{searchQuery}&rdquo;</strong></span>
            )}
          </span>
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

      {/* Product Cards Grid: 2 columns on mobile, 3 on lg, 4 on xl */}
      {sortedProducts.length > 0 ? (
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {sortedProducts.map((product) => {
            return (
              <div
                key={product.slug}
                class="group relative flex flex-col justify-between rounded-3xl bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div>
                  <a
                    href={`/produk/${product.slug}/`}
                    class="block aspect-square bg-zinc-50/80 overflow-hidden relative p-4 sm:p-5"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width="400"
                      height="400"
                      class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out shadow-2xs"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/products/plastik-uv-greenhouse.webp';
                      }}
                    />
                    
                    {/* Live Stock Pulse Badge */}
                    <div class="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-white/95 backdrop-blur-md text-zinc-800 shadow-xs border border-zinc-200/60">
                        {product.stockStatus === 'ready' ? (
                          <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                        ) : (
                          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        )}
                        <span>
                          {product.stockStatus === 'ready'
                            ? 'Ready Malang'
                            : product.stockStatus === 'po'
                            ? 'Pre-Order'
                            : 'Cek Stok'}
                        </span>
                      </span>
                    </div>
                  </a>

                  <div class="p-4 sm:p-5 space-y-1.5 sm:space-y-2">
                    {product.brand && (
                      <span class="text-[11px] font-semibold text-emerald-700 tracking-normal block">
                        {product.brand}
                      </span>
                    )}

                    <h3 class="font-semibold text-zinc-900 text-sm sm:text-base leading-snug line-clamp-2">
                      <a href={`/produk/${product.slug}/`} class="hover:text-emerald-700 transition-colors">
                        {product.title}
                      </a>
                    </h3>

                    <p class="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div class="p-4 sm:p-5 pt-0 border-t border-zinc-100 mt-2 space-y-3">
                  <div class="flex items-baseline justify-between pt-2">
                    <div class="flex flex-col">
                      <span class="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">Mulai Dari</span>
                      <span class="font-bold text-zinc-900 text-base sm:text-lg tracking-tight">
                        {product.priceDisplay || 'Hubungi CS'}
                      </span>
                    </div>
                    <span class="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/60">
                      Siap Kirim
                    </span>
                  </div>

                  <a
                    href={`/produk/${product.slug}/`}
                    class="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium tracking-normal transition-all duration-200 select-none shadow-xs hover:shadow group-hover:bg-emerald-700"
                  >
                    <span>Pilih Varian &amp; Beli</span>
                    <svg class="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div class="text-center py-16 bg-white rounded-3xl border border-zinc-200/80 p-8 shadow-xs max-w-lg mx-auto space-y-4">
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
            class="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-all shadow-xs inline-flex items-center gap-2"
          >
            <span>Reset Filter &amp; Pencarian</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </div>
  );
}
