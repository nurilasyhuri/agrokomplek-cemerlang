import { useState } from 'preact/hooks';

export interface ProductVariant {
  name: string;
  price: number;
  priceDisplay: string;
  sku?: string;
  unit?: string;
}

interface Props {
  productTitle: string;
  productSlug: string;
  categoryName: string;
  brand?: string;
  basePrice?: number;
  basePriceDisplay?: string;
  variants?: ProductVariant[];
  stockStatus: string;
  whatsappNumber?: string;
}

export default function ProductVariantSelector({
  productTitle,
  productSlug,
  categoryName,
  brand,
  basePrice = 0,
  basePriceDisplay = 'Hubungi CS',
  variants = [],
  stockStatus = 'ready',
  whatsappNumber = '6285183002070',
}: Props) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const hasVariants = variants && variants.length > 0;
  const currentVariant = hasVariants ? variants[selectedIdx] : null;

  const currentPrice = currentVariant ? currentVariant.price : basePrice;
  const currentPriceDisplay = currentVariant ? currentVariant.priceDisplay : basePriceDisplay;
  const currentUnit = currentVariant?.unit || 'unit';

  const totalPrice = currentPrice > 0 ? currentPrice * quantity : 0;
  const totalPriceDisplay =
    totalPrice > 0 ? `Rp ${totalPrice.toLocaleString('id-ID')}` : currentPriceDisplay;

  // Pre-formatted direct-to-WhatsApp order link
  const buildWhatsAppUrl = () => {
    const brandLine = brand ? ` (${brand})` : '';
    const variantLine = currentVariant ? `\n📐 Varian: ${currentVariant.name}` : '';
    const priceDetail =
      currentPrice > 0
        ? `\n💰 Estimasi Total: ${totalPriceDisplay} (${currentPriceDisplay} x ${quantity} ${currentUnit})`
        : `\n💰 Harga: ${currentPriceDisplay}`;

    const text = `Halo Agro Prima Greenhouse, saya ingin memesan produk ini:

📦 Produk: ${productTitle}${brandLine} [${categoryName}]${variantLine}
🔢 Jumlah: ${quantity} ${currentUnit}${priceDetail}
🔗 Halaman: https://agroprimagreenhouse.com/produk/${productSlug}/

Data Pengiriman Saya:
- Nama: 
- Alamat Lengkap: 
- Kota/Kecamatan: 

Mohon info ketersediaan stok fisik di gudang Malang dan rekomendasi ekspedisi kargo termurah. Terima kasih!`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const waUrl = buildWhatsAppUrl();

  const handleQtyChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(999, prev + delta)));
  };

  return (
    <div class="space-y-6">
      {/* Variant Selector (Shopify Segmented Swatches) */}
      {hasVariants && (
        <div class="space-y-2.5">
          <div class="flex items-center justify-between text-xs">
            <span class="font-semibold text-zinc-900 tracking-normal">
              Pilihan Varian / Ukuran:
            </span>
            <span class="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px] border border-emerald-200/60">
              {currentVariant?.name}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {variants.map((variant, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  type="button"
                  key={variant.sku || variant.name}
                  onClick={() => setSelectedIdx(idx)}
                  class={`text-left p-3.5 rounded-xl border text-xs transition-all duration-200 select-none flex flex-col justify-between relative cursor-pointer ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50/40 ring-1 ring-emerald-600'
                      : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/60 text-zinc-600'
                  }`}
                >
                  <div class="flex items-start justify-between gap-2">
                    <span class={`font-semibold text-xs sm:text-sm leading-snug ${isSelected ? 'text-zinc-900' : 'text-zinc-800'}`}>
                      {variant.name}
                    </span>
                    <span class={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                      isSelected ? 'bg-emerald-600 text-white' : 'border border-zinc-300 bg-white'
                    }`}>
                      {isSelected ? (
                        <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                        </svg>
                      ) : null}
                    </span>
                  </div>
                  
                  <div class="mt-3 flex items-baseline justify-between pt-2 border-t border-zinc-100">
                    <span class={`font-bold text-xs sm:text-sm ${isSelected ? 'text-emerald-700' : 'text-zinc-900'}`}>
                      {variant.priceDisplay}
                    </span>
                    {variant.unit && (
                      <span class="text-[11px] text-zinc-400 font-normal">
                        / {variant.unit}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Pricing, Quantity & WhatsApp Order Module */}
      <div class="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-5">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-200">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-medium text-zinc-500">Harga Satuan</span>
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {stockStatus === 'ready' ? 'Stok Ready Malang' : stockStatus === 'po' ? 'Pre-Order' : 'Cek Stok'}
              </span>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                {currentPriceDisplay}
              </span>
              {currentUnit && (
                <span class="text-xs text-zinc-500 font-normal">/ {currentUnit}</span>
              )}
            </div>
          </div>

          {/* Stepper Quantity */}
          <div class="flex items-center gap-3">
            <span class="text-xs font-semibold text-zinc-600">Jumlah:</span>
            <div class="inline-flex items-center rounded-full border border-zinc-200 bg-white p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => handleQtyChange(-1)}
                disabled={quantity <= 1}
                aria-label="Kurangi jumlah"
                class="w-7 h-7 rounded-full flex items-center justify-center text-zinc-700 hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed font-semibold text-xs transition-all select-none cursor-pointer"
              >
                &minus;
              </button>
              <input
                type="number"
                min="1"
                max="999"
                value={quantity}
                onInput={(e) => {
                  const val = parseInt((e.target as HTMLInputElement).value, 10);
                  if (!isNaN(val) && val >= 1) setQuantity(val);
                }}
                class="w-10 text-center bg-transparent text-base sm:text-sm font-bold text-zinc-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={() => handleQtyChange(1)}
                aria-label="Tambah jumlah"
                class="w-7 h-7 rounded-full flex items-center justify-center text-zinc-700 hover:bg-zinc-100 font-semibold text-xs transition-all select-none cursor-pointer"
              >
                &#43;
              </button>
            </div>
          </div>
        </div>

        {/* Subtotal Summary (if > 1) */}
        {totalPrice > 0 && quantity > 1 && (
          <div class="flex items-center justify-between py-2.5 px-4 rounded-xl bg-white border border-zinc-200/80 text-xs">
            <span class="text-zinc-600 font-medium">Estimasi Subtotal ({quantity} {currentUnit}):</span>
            <span class="font-bold text-emerald-700 text-sm sm:text-base">{totalPriceDisplay}</span>
          </div>
        )}

        {/* Primary WhatsApp Action */}
        <div class="space-y-3 pt-1">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm tracking-normal shadow-xs hover:shadow transition-all select-none"
          >
            <svg class="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
            </svg>
            <span>Pesan Sekarang via WhatsApp</span>
          </a>

          {/* Trust Badges with SVG Icons */}
          <div class="grid grid-cols-3 gap-2 text-center text-[11px] text-zinc-500 pt-1">
            <div class="flex items-center justify-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Respon Cepat</span>
            </div>
            <div class="flex items-center justify-center gap-1.5 border-x border-zinc-200">
              <svg class="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Gudang Malang</span>
            </div>
            <div class="flex items-center justify-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 18V6a2 2 0 00-2-2H4a2 2 0 00-2 2v11a1 1 0 001 1h2m9 0H9m10 0h2a1 1 0 001-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0017.52 8H14M17 18a2 2 0 100-4 2 2 0 000 4zm-10 0a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span>Kargo Nasional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Action Dock */}
      <div class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-zinc-200/80 p-3 shadow-lg safe-area-pb">
        <div class="flex items-center justify-between gap-3 max-w-lg mx-auto">
          <div class="min-w-0 flex-1">
            <span class="text-[11px] text-zinc-500 block truncate">
              {currentVariant ? currentVariant.name : productTitle} ({quantity} {currentUnit})
            </span>
            <span class="text-sm font-bold text-zinc-900 block truncate">
              {totalPriceDisplay}
            </span>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-normal transition-all shadow-xs shrink-0 select-none"
          >
            <svg class="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
            </svg>
            <span>Beli via WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}
