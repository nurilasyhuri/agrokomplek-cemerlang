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
    { id: 'all', label: 'Semua Material' },
    { id: 'saprodi-pertanian', label: 'Saprodi Pertanian' },
    { id: 'perlengkapan-pertanian', label: 'Perlengkapan Lahan' },
    { id: 'perlengkapan-greenhouse', label: 'Perlengkapan Greenhouse' },
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
      <div class="bg-surface-card border border-surface-border rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Filter Buttons */}
        <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              class={`px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors select-none ${
                selectedCategory === cat.id
                  ? 'bg-agri-700 text-white'
                  : 'bg-surface-subtle border border-surface-border text-ink-secondary hover:bg-surface-canvas hover:text-ink-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div class="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Cari nama barang / spesifikasi..."
            value={searchQuery}
            onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
            class="w-full pl-9 pr-4 py-2 rounded-md border border-surface-border bg-surface-canvas text-ink-primary placeholder:text-ink-muted text-sm focus:outline-none focus:border-agri-700 transition-colors"
          />
          <svg
            class="w-4 h-4 text-ink-muted absolute left-3 top-2.5"
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

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const waUrl = `https://wa.me/6285183002070?text=${encodeURIComponent(
              `Halo Agrokomplek Cemerlang, saya ingin cek stok & harga produk: ${product.title} (Ref: ${product.slug})`
            )}`;
            return (
              <div
                key={product.slug}
                class="border border-surface-border bg-surface-card rounded-lg overflow-hidden flex flex-col justify-between hover:border-agri-700 transition-colors"
              >
                <div>
                  <a
                    href={`/produk/${product.slug}/`}
                    class="block aspect-square bg-surface-subtle overflow-hidden border-b border-surface-border relative"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      class="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div class="absolute top-2.5 left-2.5">
                      <span class="inline-block px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-surface-card text-ink-primary border border-surface-border">
                        {product.stockStatus === 'ready'
                          ? 'Ready Stok'
                          : product.stockStatus === 'po'
                          ? 'Pre-Order'
                          : 'Cek Stok'}
                      </span>
                    </div>
                  </a>

                  <div class="p-4 space-y-2">
                    <h3 class="font-bold text-ink-primary text-sm leading-snug line-clamp-2">
                      <a href={`/produk/${product.slug}/`} class="hover:text-agri-700 transition-colors">
                        {product.title}
                      </a>
                    </h3>

                    <p class="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div class="p-4 pt-0 border-t border-surface-border mt-3 flex items-center justify-between gap-2 pt-3">
                  <div>
                    <span class="text-[10px] font-semibold text-ink-muted block uppercase">Status Harga</span>
                    <span class="text-xs font-bold text-ink-primary">
                      {product.priceDisplay || 'Hubungi Toko'}
                    </span>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-agri-700 hover:bg-agri-800 text-white text-xs font-bold transition-colors select-none"
                  >
                    <span>Tanya WA</span>
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
