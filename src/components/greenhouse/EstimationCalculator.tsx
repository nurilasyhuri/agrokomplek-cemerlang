import { useState } from 'preact/hooks';
import { generateGreenhouseQuoteUrl } from '../../utils/whatsapp';

interface ModelOption {
  id: string;
  name: string;
  badge: string;
  lifespan: string;
  frameSpec: string;
}

const MODELS: ModelOption[] = [
  {
    id: 'galvanis',
    name: 'Pipa Galvanis Hot-Dip',
    badge: 'Standar Industri',
    lifespan: '10 - 15+ Tahun',
    frameSpec: 'Pipa Galvanis 1.5" & 1.25" klem tanpa las',
  },
  {
    id: 'bambu',
    name: 'Bambu Ori Awet',
    badge: 'Ekonomis',
    lifespan: '3 - 5 Tahun',
    frameSpec: 'Bambu ori pilihan diawetkan anti rayap',
  },
  {
    id: 'baja-ringan',
    name: 'Baja Ringan Zincalume',
    badge: 'Modular Ringkas',
    lifespan: '7 - 10 Tahun',
    frameSpec: 'Canal C 0.75mm + Reng Zincalume anti karat',
  },
  {
    id: 'tunnel-garam',
    name: 'Tunnel Garam Prisma',
    badge: 'Spesialis Pesisir',
    lifespan: '5 - 10 Tahun',
    frameSpec: 'Rangka lengkung anti karat air laut + HDPE',
  },
];

export default function EstimationCalculator() {
  const [selectedModelId, setSelectedModelId] = useState<string>('galvanis');
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(10);
  const [location, setLocation] = useState<string>('');
  const [crops, setCrops] = useState<string>('Melon Hidroponik');
  const [timeline, setTimeline] = useState<string>('Bulan Depan');

  const selectedModel = MODELS.find((m) => m.id === selectedModelId) || MODELS[0];
  const area = length * width;

  const handleWhatsAppSubmit = (e: Event) => {
    e.preventDefault();
    if (!location.trim()) {
      alert('Silakan masukkan lokasi kota / kabupaten proyek Anda.');
      return;
    }

    const url = generateGreenhouseQuoteUrl({
      type: selectedModel.name,
      location: location.trim(),
      length,
      width,
      crops: crops.trim() || 'Hortikultura Umum',
      targetTimeline: timeline,
    });

    window.open(url, '_blank');
  };

  return (
    <div class="bg-white rounded-2xl border border-zinc-200/80 shadow-xs overflow-hidden">
      {/* Calculator Header (Shopify Clean Minimalist) */}
      <div class="p-5 sm:p-7 lg:p-8 border-b border-zinc-100 bg-zinc-50/50">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          Kalkulator &amp; Estimasi RAB Online
        </span>
        <h3 class="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight mt-2.5">
          Simulasi Kebutuhan Dimensi &amp; Anggaran Greenhouse
        </h3>
        <p class="text-xs sm:text-sm text-zinc-600 mt-1.5 max-w-2xl leading-relaxed">
          Tentukan tipe struktur dan ukuran lahan Anda. Sistem menghitung luas lahan serta menyiapkan format rincian teknis untuk konsultasi langsung dengan tim teknisi kami.
        </p>
      </div>

      {/* Main Form */}
      <form onSubmit={handleWhatsAppSubmit} class="p-5 sm:p-7 lg:p-8 space-y-7">
        
        {/* Step 1: Model Selection */}
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-xs sm:text-sm font-bold text-zinc-900">
              1. Pilih Tipe Konstruksi Rangka
            </label>
            <span class="text-[11px] text-zinc-400 font-medium">Klik untuk memilih</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {MODELS.map((model) => {
              const isSelected = selectedModelId === model.id;
              return (
                <button
                  type="button"
                  key={model.id}
                  onClick={() => setSelectedModelId(model.id)}
                  class={`p-4 rounded-xl text-left border transition-all select-none flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50/40 ring-1 ring-emerald-600 shadow-2xs'
                      : 'border-zinc-200/80 bg-white hover:border-zinc-300 hover:bg-zinc-50/50'
                  }`}
                >
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between gap-2">
                      <span class={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-zinc-100 text-zinc-600'
                      }`}>
                        {model.badge}
                      </span>
                      <div class={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected ? 'border-emerald-600 bg-emerald-600' : 'border-zinc-300 bg-white'
                      }`}>
                        {isSelected && (
                          <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 class="font-bold text-xs sm:text-sm text-zinc-900 leading-snug">{model.name}</h4>
                      <p class="text-[11px] text-zinc-500 mt-1 leading-relaxed line-clamp-2">{model.frameSpec}</p>
                    </div>
                  </div>

                  <div class="pt-2.5 mt-2.5 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                    <span class="text-zinc-400">Ketahanan</span>
                    <span class="font-semibold text-zinc-800">{model.lifespan}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Dimension Sliders */}
        <div class="pt-5 border-t border-zinc-100 space-y-3.5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <label class="text-xs sm:text-sm font-bold text-zinc-900">
                2. Tentukan Dimensi Lahan (Meter)
              </label>
              <p class="text-[11px] text-zinc-500 mt-0.5">Geser slider untuk menyesuaikan panjang dan lebar rencana greenhouse</p>
            </div>
            <div class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 bg-zinc-100 px-3.5 py-1.5 rounded-full border border-zinc-200/80 self-start sm:self-auto">
              <span>Total Luas:</span>
              <span class="text-emerald-700 font-extrabold text-sm">{area} m²</span>
              <span class="text-zinc-400">({length}m &times; {width}m)</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Panjang */}
            <div class="bg-zinc-50/70 border border-zinc-200/80 p-4 rounded-xl space-y-2.5">
              <div class="flex justify-between items-center text-xs">
                <span class="font-semibold text-zinc-700">Panjang Greenhouse:</span>
                <span class="font-bold text-sm text-emerald-700">{length} Meter</span>
              </div>
              <input
                type="range"
                min={6}
                max={100}
                step={2}
                value={length}
                onInput={(e) => setLength(Number((e.target as HTMLInputElement).value))}
                class="w-full accent-emerald-600 cursor-pointer h-2 bg-zinc-200 rounded-full"
              />
              <div class="flex justify-between text-[10px] text-zinc-400">
                <span>Min: 6m</span>
                <span class="text-zinc-600 font-medium">Standar: 20 - 50m</span>
                <span>Max: 100m</span>
              </div>
            </div>

            {/* Lebar */}
            <div class="bg-zinc-50/70 border border-zinc-200/80 p-4 rounded-xl space-y-2.5">
              <div class="flex justify-between items-center text-xs">
                <span class="font-semibold text-zinc-700">Lebar Greenhouse:</span>
                <span class="font-bold text-sm text-emerald-700">{width} Meter</span>
              </div>
              <input
                type="range"
                min={4}
                max={40}
                step={2}
                value={width}
                onInput={(e) => setWidth(Number((e.target as HTMLInputElement).value))}
                class="w-full accent-emerald-600 cursor-pointer h-2 bg-zinc-200 rounded-full"
              />
              <div class="flex justify-between text-[10px] text-zinc-400">
                <span>Min: 4m</span>
                <span class="text-zinc-600 font-medium">Standar: 8 - 12m</span>
                <span>Max: 40m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Project Location & Target Info */}
        <div class="pt-5 border-t border-zinc-100 space-y-3.5">
          <div>
            <label class="text-xs sm:text-sm font-bold text-zinc-900">
              3. Rincian Lokasi &amp; Komoditas Tanam
            </label>
            <p class="text-[11px] text-zinc-500 mt-0.5">Informasi pendukung agar tim teknisi dapat memperhitungkan beban angin &amp; logistik pengiriman</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">
                Lokasi Proyek (Kota / Kab) <span class="text-emerald-700">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Malang / Batu / Kediri"
                value={location}
                onInput={(e) => setLocation((e.target as HTMLInputElement).value)}
                class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">
                Komoditas Tanaman
              </label>
              <input
                type="text"
                placeholder="Contoh: Melon Hidroponik / Sayuran"
                value={crops}
                onInput={(e) => setCrops((e.target as HTMLInputElement).value)}
                class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1">
                Target Waktu Pengerjaan
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline((e.target as HTMLSelectElement).value)}
                class="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
              >
                <option value="Bulan Ini">Bulan Ini (Segera)</option>
                <option value="1 - 2 Bulan ke Depan">1 - 2 Bulan ke Depan</option>
                <option value="Tahap Perencanaan / Studi Kelayakan">Tahap Perencanaan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 4: Budget Estimation Summary Card */}
        <div class="pt-5 border-t border-zinc-100">
          <div class="rounded-2xl bg-zinc-900 text-white p-5 sm:p-7 shadow-lg space-y-5 border border-zinc-800">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div class="space-y-1.5">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-700/50">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Rencana Anggaran Biaya (RAB) Siap Dihitung
                </span>
                <div class="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {selectedModel.name} &bull; {area} m²
                </div>
                <p class="text-xs text-zinc-300 max-w-xl leading-relaxed">
                  Rincian estimasi RAB resmi berdasarkan ukuran lahan <strong>{area} m²</strong> ({length}m &times; {width}m) siap diteruskan ke WhatsApp tim teknisi kami.
                </p>
              </div>

              <button
                type="submit"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs shrink-0 select-none cursor-pointer"
              >
                <svg class="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
                </svg>
                <span>Kirim Rincian ke Teknisi WA</span>
              </button>
            </div>

            <div class="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
              <div class="space-y-0.5">
                <span class="text-zinc-500 text-[11px] block">Spesifikasi Rangka</span>
                <span class="font-medium text-zinc-200 text-xs">{selectedModel.frameSpec}</span>
              </div>
              <div class="space-y-0.5">
                <span class="text-zinc-500 text-[11px] block">Masa Pakai Konstruksi</span>
                <span class="font-medium text-zinc-200 text-xs">{selectedModel.lifespan}</span>
              </div>
              <div class="space-y-0.5">
                <span class="text-zinc-500 text-[11px] block">Dukungan Aplikator</span>
                <span class="font-medium text-emerald-400 text-xs">Konsultasi langsung tim fabrikasi</span>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}
