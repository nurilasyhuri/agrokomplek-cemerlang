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
    <div class="border border-surface-border bg-surface-card rounded-lg overflow-hidden">
      {/* Calculator Header */}
      <div class="p-6 border-b border-surface-border bg-surface-subtle">
        <span class="text-xs font-bold uppercase tracking-wider text-agri-700 block">Kalkulator Teknis</span>
        <h3 class="text-xl sm:text-2xl font-extrabold text-ink-primary tracking-tight mt-1">
          Simulasi Kebutuhan & Estimasi Anggaran Greenhouse
        </h3>
        <p class="text-xs sm:text-sm text-ink-secondary mt-1.5 leading-relaxed">
          Pilih tipe konstruksi dan tentukan perkiraan ukuran lahan Anda untuk menghitung luas serta estimasi anggaran awal sebelum konsultasi teknis.
        </p>
      </div>

      {/* Main Form */}
      <form onSubmit={handleWhatsAppSubmit} class="p-6 sm:p-8 space-y-8">
        
        {/* Step 1: Model Selection */}
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-ink-primary mb-3">
            1. Pilih Tipe Konstruksi Rangka
          </label>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {MODELS.map((model) => (
              <button
                type="button"
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                class={`p-3 sm:p-4 rounded-md text-left border transition-colors select-none flex flex-col justify-between ${
                  selectedModelId === model.id
                    ? 'border-agri-700 bg-agri-50'
                    : 'border-surface-border bg-surface-canvas hover:bg-surface-subtle'
                }`}
              >
                <div>
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <span class={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs w-fit ${
                      selectedModelId === model.id ? 'bg-agri-700 text-white' : 'bg-surface-subtle text-ink-muted'
                    }`}>
                      {model.badge}
                    </span>
                    <span class="text-[9px] sm:text-[10px] text-ink-muted">{model.lifespan}</span>
                  </div>
                  <h4 class="font-bold text-sm sm:text-base text-ink-primary leading-snug">{model.name}</h4>
                  <p class="text-[10px] sm:text-[11px] text-ink-muted mt-1 leading-tight line-clamp-2">{model.frameSpec}</p>
                </div>
                <p class="text-[11px] font-bold uppercase tracking-wider text-agri-700 mt-2">
                  Spesifikasi Model &rarr;
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Dimension Sliders & Inputs */}
        <div class="border-t border-surface-border pt-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <label class="text-xs font-bold uppercase tracking-wider text-ink-primary">
              2. Tentukan Dimensi Lahan (Meter)
            </label>
            <div class="text-xs font-bold text-ink-primary bg-surface-subtle px-3 py-1 rounded-sm border border-surface-border self-start sm:self-auto">
              Total Luas: <span class="text-agri-700">{area} m²</span> ({length}m &times; {width}m)
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Panjang */}
            <div class="space-y-2 border border-surface-border bg-surface-canvas p-4 rounded-md">
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-ink-primary">Panjang Greenhouse:</span>
                <span class="font-extrabold text-sm text-agri-700">{length} Meter</span>
              </div>
              <input
                type="range"
                min={6}
                max={100}
                step={2}
                value={length}
                onInput={(e) => setLength(Number((e.target as HTMLInputElement).value))}
                class="w-full accent-agri-700 cursor-pointer h-8"
              />
              <div class="flex justify-between text-[10px] text-ink-muted">
                <span>Min: 6m</span>
                <span>Standar: 20m - 50m</span>
                <span>Max: 100m</span>
              </div>
            </div>

            {/* Lebar */}
            <div class="space-y-2 border border-surface-border bg-surface-canvas p-4 rounded-md">
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-ink-primary">Lebar Greenhouse:</span>
                <span class="font-extrabold text-sm text-agri-700">{width} Meter</span>
              </div>
              <input
                type="range"
                min={4}
                max={40}
                step={2}
                value={width}
                onInput={(e) => setWidth(Number((e.target as HTMLInputElement).value))}
                class="w-full accent-agri-700 cursor-pointer h-8"
              />
              <div class="flex justify-between text-[10px] text-ink-muted">
                <span>Min: 4m</span>
                <span>Standar: 8m - 12m</span>
                <span>Max: 40m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Project Location & Target Info */}
        <div class="border-t border-surface-border pt-6">
          <label class="block text-xs font-bold uppercase tracking-wider text-ink-primary mb-3">
            3. Rincian Lokasi & Rencana Tanam
          </label>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-semibold text-ink-muted mb-1">
                Lokasi Proyek (Kota / Kabupaten) *
              </label>
              <input
                type="text"
                required
                placeholder="Misal: Kota Batu / Malang / Kediri"
                value={location}
                onInput={(e) => setLocation((e.target as HTMLInputElement).value)}
                class="w-full px-3.5 py-2.5 rounded-md border border-surface-border bg-surface-canvas text-ink-primary text-base sm:text-sm focus:outline-none focus:border-agri-700 min-h-[44px]"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-ink-muted mb-1">
                Komoditas Tanaman
              </label>
              <input
                type="text"
                placeholder="Misal: Melon Hidroponik / Cabai"
                value={crops}
                onInput={(e) => setCrops((e.target as HTMLInputElement).value)}
                class="w-full px-3.5 py-2.5 rounded-md border border-surface-border bg-surface-canvas text-ink-primary text-base sm:text-sm focus:outline-none focus:border-agri-700 min-h-[44px]"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-ink-muted mb-1">
                Target Waktu Realisasi
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline((e.target as HTMLSelectElement).value)}
                class="w-full px-3.5 py-2.5 rounded-md border border-surface-border bg-surface-canvas text-ink-primary text-base sm:text-sm focus:outline-none focus:border-agri-700 min-h-[44px]"
              >
                <option value="Bulan Ini">Bulan Ini (Segera)</option>
                <option value="1 - 2 Bulan ke Depan">1 - 2 Bulan ke Depan</option>
                <option value="Tahap Perencanaan / Studi Kelayakan">Tahap Studi Kelayakan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 4: Real-time Budget Estimation Summary & Submit */}
        <div class="border-t border-surface-border pt-6">
          <div class="border border-surface-border bg-surface-subtle p-4 sm:p-6 rounded-lg space-y-4">
            
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface-border pb-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-agri-700 block">Rencana Anggaran Biaya (RAB) Proyek</span>
                <div class="text-lg sm:text-xl font-extrabold text-ink-primary mt-0.5">
                  Spesifikasi: {selectedModel.name} &bull; {area} m²
                </div>
                <p class="text-xs text-ink-muted mt-1 leading-relaxed">
                  Dapatkan rincian RAB resmi berdasarkan ukuran lahan <strong>{area} m²</strong> ({length}m &times; {width}m) dan survei teknis dari tim aplikator Agrokomplek Cemerlang.
                </p>
              </div>

              <button
                type="submit"
                class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-agri-700 hover:bg-agri-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 select-none cursor-pointer min-h-[44px] shadow-xs"
              >
                <svg class="w-4 h-4 text-emerald-300 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
                </svg>
                <span>Kirim Rincian ke Teknisi WA</span>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ink-muted">
              <div>
                <strong class="text-ink-primary">Spesifikasi Rangka:</strong> {selectedModel.frameSpec}
              </div>
              <div>
                <strong class="text-ink-primary">Masa Pakai Konstruksi:</strong> {selectedModel.lifespan}
              </div>
              <div>
                <strong class="text-ink-primary">Konsultasi Teknis:</strong> Langsung dengan praktisi fabrikasi
              </div>
            </div>

          </div>
        </div>

      </form>
    </div>
  );
}
