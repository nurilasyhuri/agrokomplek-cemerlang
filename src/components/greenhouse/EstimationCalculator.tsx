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
    name: 'Bambu Presisi',
    badge: 'Ekonomis',
    lifespan: '3 - 5 Tahun',
    frameSpec: 'Bambu petung/apus pilihan diawetkan',
  },
  {
    id: 'baja-ringan',
    name: 'Baja Ringan Zincalume',
    badge: 'Semi Permanen',
    lifespan: '5 - 8 Tahun',
    frameSpec: 'Canal C 0.75mm + Reng Zincalume',
  },
  {
    id: 'tunnel-garam',
    name: 'Tunnel Garam Pesisir',
    badge: 'Spesialis Garam',
    lifespan: '2 - 4 Tahun',
    frameSpec: 'Pipa lengkung anti karat pesisir',
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
    <div class="bg-white rounded-3xl border border-zinc-200/80 shadow-sm overflow-hidden">
      {/* Calculator Header */}
      <div class="p-6 sm:p-8 lg:p-10 border-b border-zinc-100 bg-zinc-50/50">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          Kalkulator & Estimasi Biaya
        </span>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-3">
          Simulasi Kebutuhan & Estimasi Anggaran Greenhouse
        </h3>
        <p class="text-sm text-zinc-600 mt-2 max-w-2xl leading-relaxed">
          Tentukan tipe struktur dan ukuran lahan Anda. Sistem akan menghitung dimensi serta menyiapkan ringkasan teknis untuk konsultasi langsung dengan tim aplikator kami.
        </p>
      </div>

      {/* Main Form */}
      <form onSubmit={handleWhatsAppSubmit} class="p-6 sm:p-8 lg:p-10 space-y-8">
        
        {/* Step 1: Model Selection */}
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-bold text-zinc-900">
              1. Pilih Tipe Konstruksi Rangka
            </label>
            <span class="text-xs text-zinc-500 font-medium">Klik untuk memilih</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {MODELS.map((model) => {
              const isSelected = selectedModelId === model.id;
              return (
                <button
                  type="button"
                  key={model.id}
                  onClick={() => setSelectedModelId(model.id)}
                  class={`p-4 sm:p-5 rounded-2xl text-left border transition-all select-none flex flex-col justify-between ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50/40 shadow-sm ring-2 ring-emerald-600/20'
                      : 'border-zinc-200/80 bg-white hover:border-zinc-300 hover:bg-zinc-50/50'
                  }`}
                >
                  <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2">
                      <span class={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-zinc-100 text-zinc-600'
                      }`}>
                        {model.badge}
                      </span>
                      <div class={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected ? 'border-emerald-600 bg-emerald-600' : 'border-zinc-300 bg-white'
                      }`}>
                        {isSelected && (
                          <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 class="font-bold text-sm sm:text-base text-zinc-900 leading-snug">{model.name}</h4>
                      <p class="text-xs text-zinc-500 mt-1 leading-relaxed line-clamp-2">{model.frameSpec}</p>
                    </div>
                  </div>

                  <div class="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                    <span class="text-zinc-500">Masa pakai</span>
                    <span class="font-semibold text-zinc-900">{model.lifespan}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Dimension Sliders */}
        <div class="pt-6 border-t border-zinc-100 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <label class="text-sm font-bold text-zinc-900">
                2. Tentukan Dimensi Lahan (Meter)
              </label>
              <p class="text-xs text-zinc-500 mt-0.5">Geser slider untuk menyesuaikan panjang dan lebar lahan Anda</p>
            </div>
            <div class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 bg-zinc-100 px-4 py-1.5 rounded-full border border-zinc-200/80 self-start sm:self-auto">
              <span>Total Luas:</span>
              <span class="text-emerald-700 font-extrabold text-sm">{area} m²</span>
              <span class="text-zinc-400">({length}m &times; {width}m)</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Panjang */}
            <div class="bg-zinc-50/70 border border-zinc-200/80 p-5 rounded-2xl space-y-3">
              <div class="flex justify-between items-center text-xs">
                <span class="font-semibold text-zinc-700">Panjang Greenhouse:</span>
                <span class="font-extrabold text-base text-emerald-700">{length} Meter</span>
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
              <div class="flex justify-between text-[11px] text-zinc-500">
                <span>Min: 6m</span>
                <span class="text-zinc-600 font-medium">Standar: 20 - 50m</span>
                <span>Max: 100m</span>
              </div>
            </div>

            {/* Lebar */}
            <div class="bg-zinc-50/70 border border-zinc-200/80 p-5 rounded-2xl space-y-3">
              <div class="flex justify-between items-center text-xs">
                <span class="font-semibold text-zinc-700">Lebar Greenhouse:</span>
                <span class="font-extrabold text-base text-emerald-700">{width} Meter</span>
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
              <div class="flex justify-between text-[11px] text-zinc-500">
                <span>Min: 4m</span>
                <span class="text-zinc-600 font-medium">Standar: 8 - 12m</span>
                <span>Max: 40m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Project Location & Target Info */}
        <div class="pt-6 border-t border-zinc-100 space-y-4">
          <div>
            <label class="text-sm font-bold text-zinc-900">
              3. Rincian Lokasi & Rencana Tanam
            </label>
            <p class="text-xs text-zinc-500 mt-0.5">Informasi pendukung agar tim teknisi dapat menghitung beban angin & kebutuhan logistik</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1.5">
                Lokasi Proyek (Kota / Kab) <span class="text-emerald-700">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Malang / Batu / Kediri"
                value={location}
                onInput={(e) => setLocation((e.target as HTMLInputElement).value)}
                class="w-full px-4 py-3 rounded-2xl border border-zinc-200/80 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1.5">
                Komoditas Tanaman
              </label>
              <input
                type="text"
                placeholder="Contoh: Melon Hidroponik / Sayuran"
                value={crops}
                onInput={(e) => setCrops((e.target as HTMLInputElement).value)}
                class="w-full px-4 py-3 rounded-2xl border border-zinc-200/80 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-700 mb-1.5">
                Target Waktu Pengerjaan
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline((e.target as HTMLSelectElement).value)}
                class="w-full px-4 py-3 rounded-2xl border border-zinc-200/80 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
              >
                <option value="Bulan Ini">Bulan Ini (Segera)</option>
                <option value="1 - 2 Bulan ke Depan">1 - 2 Bulan ke Depan</option>
                <option value="Tahap Perencanaan / Studi Kelayakan">Tahap Perencanaan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 4: Budget Estimation Summary Card */}
        <div class="pt-6 border-t border-zinc-100">
          <div class="rounded-3xl bg-zinc-900 text-white p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div class="space-y-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-700/50">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Rencana Anggaran Biaya (RAB) Siap Dihitung
                </span>
                <div class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedModel.name} &bull; {area} m²
                </div>
                <p class="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                  Dapatkan rincian RAB resmi berdasarkan ukuran lahan <strong>{area} m²</strong> ({length}m &times; {width}m) dan panduan teknis dari tim aplikator Agrokomplek Cemerlang langsung ke WhatsApp Anda.
                </p>
              </div>

              <button
                type="submit"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-emerald-900/50 shrink-0 select-none cursor-pointer"
              >
                <svg class="w-5 h-5 text-emerald-200 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
                </svg>
                <span>Kirim Rincian ke Teknisi WA</span>
              </button>
            </div>

            <div class="pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
              <div class="space-y-1">
                <span class="text-zinc-500 block">Spesifikasi Rangka</span>
                <span class="font-medium text-zinc-200">{selectedModel.frameSpec}</span>
              </div>
              <div class="space-y-1">
                <span class="text-zinc-500 block">Masa Pakai Konstruksi</span>
                <span class="font-medium text-zinc-200">{selectedModel.lifespan}</span>
              </div>
              <div class="space-y-1">
                <span class="text-zinc-500 block">Dukungan Aplikator</span>
                <span class="font-medium text-emerald-400">Konsultasi langsung praktisi fabrikasi</span>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}
