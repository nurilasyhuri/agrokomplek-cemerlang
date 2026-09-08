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

export default function ProductFilter({ products }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'saprodi-pertanian', label: 'Saprodi Pertanian' },
    { id: 'perlengkapan-greenhouse', label: 'Material Greenhouse' },
    { id: 'perlengkapan-pertanian', label: 'Irigasi & Perlengkapan' },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div class="space-y-6">
      {/* Control Bar: Categories & Instant Search */}
      <div class="bg-surface-card border border-surface-border rounded-lg p-3 sm:p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
        
        {/* Category Filter Buttons (Horizontal scrollable on mobile) */}
        <div class="flex items-center gap-1.5 sm:gap-2 w-full md:w-auto overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              class={`whitespace-nowrap px-3 py-2 sm:px-3.5 sm:py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors select-none shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-agri-700 text-white shadow-xs'
                  : 'bg-surface-subtle border border-surface-border text-ink-secondary hover:bg-surface-canvas hover:text-ink-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input (16px base font on mobile to prevent iOS Safari auto-zoom) */}
        <div class="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Cari produk / spesifikasi..."
            value={searchQuery}
            onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
            class="w-full pl-9 pr-4 py-2.5 sm:py-2 rounded-md border border-surface-border bg-surface-canvas text-ink-primary placeholder:text-ink-muted text-base sm:text-sm focus:outline-none focus:border-agri-700 transition-colors"
          />
          <svg
            class="w-4 h-4 text-ink-muted absolute left-3 top-3 sm:top-2.5"
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
        </div>

      </div>

      {/* Result Count Info */}
      <div class="flex items-center justify-between text-xs text-ink-muted px-1">
        <span>Menampilkan <strong class="text-ink-primary">{filteredProducts.length}</strong> produk</span>
        {(selectedCategory !== 'all' || searchQuery !== '') && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            class="text-agri-700 font-bold hover:underline"
          >
            Reset Filter
          </button>
        )}
      </div>

      {/* Product Cards Grid: 2 columns on mobile, 3 on lg, 4 on xl */}
      {filteredProducts.length > 0 ? (
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => {
            const waUrl = `https://wa.me/6285183002070?text=${encodeURIComponent(
              `Halo Agrokomplek Cemerlang, saya ingin cek stok & harga produk: ${product.title} (Ref: ${product.slug})`
            )}`;
            return (
              <div
                key={product.slug}
                class="border border-surface-border bg-surface-card rounded-lg overflow-hidden flex flex-col justify-between hover:border-agri-700 transition-all duration-150 group shadow-xs"
              >
                <div>
                  <a
                    href={`/produk/${product.slug}/`}
                    class="block aspect-square bg-surface-subtle overflow-hidden border-b border-surface-border relative"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width="400"
                      height="400"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/products/plastik-uv-greenhouse.webp';
                      }}
                    />
                    <div class="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
                      <span class="inline-block px-1.5 sm:px-2 py-0.5 rounded-sm text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-surface-card/95 backdrop-blur-xs text-ink-primary border border-surface-border shadow-xs">
                        {product.stockStatus === 'ready'
                          ? 'Ready Stok'
                          : product.stockStatus === 'po'
                          ? 'Pre-Order'
                          : 'Cek Stok'}
                      </span>
                    </div>
                  </a>

                  <div class="p-2.5 sm:p-4 space-y-1 sm:space-y-1.5">
                    {product.brand && (
                      <span class="text-[10px] sm:text-xs font-semibold text-agri-700 block truncate">
                        {product.brand}
                      </span>
                    )}

                    <h3 class="font-bold text-ink-primary text-sm sm:text-base leading-snug line-clamp-2">
                      <a href={`/produk/${product.slug}/`} class="hover:text-agri-700 transition-colors">
                        {product.title}
                      </a>
                    </h3>

                    <p class="hidden sm:block text-xs text-ink-muted line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div class="p-2.5 pt-0 sm:p-4 sm:pt-0 border-t border-surface-border mt-2 sm:mt-3 pt-2 sm:pt-3 space-y-2">
                  <div class="flex items-center justify-between text-[11px] text-ink-muted">
                    <span class="font-medium">Stok Gudang Malang</span>
                    <span class="font-semibold text-agri-700">Siap Kirim</span>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full inline-flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2 rounded-md bg-agri-700 hover:bg-agri-800 active:bg-agri-900 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors select-none min-h-[38px] sm:min-h-[40px] shadow-xs"
                  >
                    <svg class="w-3.5 h-3.5 text-emerald-300 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
                    </svg>
                    <span>Tanya Stok &amp; Spesifikasi</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div class="text-center py-16 bg-surface-card rounded-lg border border-surface-border p-8">
          <p class="text-ink-secondary text-sm mb-2">Tidak ada produk yang cocok dengan pencarian Anda.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            class="text-xs font-bold uppercase tracking-wider text-agri-700 hover:underline"
          >
            Reset Filter & Pencarian
          </button>
        </div>
      )}
    </div>
  );
}
