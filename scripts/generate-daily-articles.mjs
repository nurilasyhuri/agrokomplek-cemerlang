import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const artikelDir = path.join(projectRoot, 'src', 'content', 'artikel');

const TOPIC_POOL = [
  {
    slug: 'aplikasi-asam-humat-perbaiki-tanah-liat-keras',
    title: 'Aplikasi Asam Humat (Humic Acid) Dosis Tepat untuk Menggemburkan Tanah Liat Keras',
    description: 'Panduan teknis aplikasi asam humat kalium humat untuk meremahkan tanah lempung liat keras, meningkatkan KTK tanah, dan melarutkan residu fosfat pupuk kimia.',
    category: 'Pertanian',
    tags: ['asam humat', 'humic acid', 'kesuburan tanah', 'tanah liat keras', 'ktk tanah'],
    heroImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    content: `# Aplikasi Asam Humat (Humic Acid) Dosis Tepat untuk Menggemburkan Tanah Liat Keras

Lahan pertanian yang telah dipupuk kimia anorganik sintetis (seperti urea dan ZA) selama bertahun-tahun tanpa asupan bahan organik rutin hampir pasti mengalami fenomena pemadatan tanah (*soil compaction*). Di lapangan, tanah liat lempung menjadi sekeras batu bata saat musim kemarau dan menjadi bubur lengket tanpa aerasi saat musim hujan. Kondisi ini membuat akar tanaman tercekik kekurangan oksigen, air irigasi tertahan di permukaan (*run-off*), dan pupuk NPK mahal yang ditabur terikat kovalen oleh ion aluminium dan besi bebas sehingga tidak dapat diserap tanaman.

Penggunaan **asam humat (potassium humate berkadar humic acid > 60%)** adalah akselerator biologis tercepat untuk memecah agregat tanah liat yang padat, meningkatkan Kapasitas Tukar Kation (KTK / CEC), dan memulihkan porositas biologis tanah tanpa perlu mendatangkan puluhan ton kotoran hewan mentah.

---

## 1. Mekanisme Kimia Asam Humat Merekayasa Struktur Tanah Liat

Tanah liat memiliki partikel koloid bermuatan negatif kuat yang saling mengikat sangat rapat dengan kation polivalen, menciptakan pori mikro yang tidak tembus udara.

Asam humat bekerja melalui 3 mekanisme simultan:

1. **Flokulasi Partikel Liat**: Rantai polimer asam humat mengikat partikel liat mikro menjadi struktur remah (*granular aggregate*) berpori meso dan makro, memungkinkan penetrasi akar hingga kedalaman 40–60 cm.
2. **Khelasi Unsur Logam Beracun**: Mengkhelasi (*chelating*) ion $Al^{3+}$ dan $Fe^{3+}$ yang mengikat fosfat pada pH masam, sehingga unsur Fosfor (P) yang tadinya terkunci bertahun-tahun di dalam tanah lepas menjadi ion ortofosfat yang siap diserap akar.
3. **Peningkatan KTK (Kapasitas Tukar Kation)**: Gugus karboksil dan fenol pada molekul asam humat memberikan cadangan muatan tukar hingga 300–500 meq/100g, mencegah ion Kalium, Kalsium, dan Magnesium tercuci (*leaching*) ke air tanah saat hujan deras.

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Jangan Campur Humat Konsentrasi Tinggi Langsung dengan Pupuk Kalsium Pekat**: Asam humat memiliki sifat kelarutan basa (pH larutan pekat 8.5–10.0). Jika Anda mencampur serbuk potassium humate langsung dengan Kalsium Nitrat pekat dalam satu tangki semprot kecil, akan terjadi koagulasi berupa gumpalan jelly hitam yang menyumbat nozzle sprayer. Selalu larutkan asam humat terlebih dahulu dalam tandon air besar terpisah.
> 2. **Waktu Aplikasi Paling Efektif adalah Olah Lahan & Kocor Pangkal Batang**: Hindari menyemprot asam humat pada siang hari terik di atas kanopi daun karena fungsi utamanya adalah penata tanah (*soil conditioner*). Aplikasi terbaik adalah saat pembalikan tanah dasar (dosis 5–10 kg/hektar) atau dikocorkan bersama pupuk hayati mikroba pada zona perakaran 7 hari setelah tanam.

---

## 2. Tabel Dosis & Jadwal Aplikasi Berdasarkan Jenis Komoditas

| Jenis Tanaman | Waktu Aplikasi | Dosis Rekomendasi | Metode Aplikasi Lapangan |
|---|---|---|---|
| **Padi Sawah Intensif** | 3 hari sebelum tanam (saat perataan lumpur) | 3 – 5 kg/ha | Tabur bersama kompos atau kocor air macak-macak |
| **Cabai, Tomat, Melon** | Pengecoran lubang tanam h-3 & umur 15 HST | 2 – 3 gram/liter air (200 ml/lubang) | Kocor langsung ke pangkal akar |
| **Kelapa Sawit TBM & TM** | Awal musim hujan (setahun 2 kali) | 50 – 100 gram/pokok | Tabur melingkar di piringan sawit |
| **Bawang Merah & Sayur Daun** | Pengolahan bedengan sebelum mulsa | 5 kg/ha | Siram merata di atas permukaan bedengan |

---

## Tabel Jangkauan Pengiriman Saprodi Hayati Se-Indonesia

Agrokomplek Cemerlang mendistribusikan produk pembenah tanah asam humat larut air, pupuk hayati Trichoderma, dan nutrisi organik komersial ke seluruh sentra agribisnis:

| Wilayah / Koridor | Kawasan Sentra Pertanian | Karakteristik Tantangan Lahan | Moda Pengiriman Logistik | Estimasi Lead Time | Status Distribusi |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Pantura, Malang, Brebes, Kediri, Sukabumi | Tanah lelah pupuk kimia, tanah lempung padat | Truk Ekspedisi Darat Door-to-Door | 1 – 3 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Sumatera** | Lampung, Palembang, Medan, Riau, Jambi | Lahan gambut masam, tanah podsolik merah kuning | Ekspedisi Lintas Sumatera & Kontainer | 3 – 6 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Kalimantan** | Sambas, Banjar, Kotawaringin, Kutai Kartanegara | Tanah gambut sulfat masam & pasir kuarsa | Kargo Kapal Laut via Tanjung Perak | 5 – 9 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Sulawesi** | Sidrap, Bone, Luwu, Gowa, Gorontalo | Sentra jagung & padi lumbung timur | Kargo Kapal Pelabuhan Makassar | 6 – 10 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Bali & Nusra** | Tabanan, Lombok Timur, Sumbawa, Bima | Tanah kering berbatu & sentra bawang | Truk Ekspedisi Ferry Selat Bali-Lombok | 3 – 5 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Maluku & Papua** | Merauke, Seram, Keerom, Nabire | Cetak sawah baru & tanah mineral masam | Peti Kemas Tol Laut Jalur Perintis | 9 – 15 Hari Kerja | Ready Stock & Konsultasi |

---

## Tanya Jawab Teknis (FAQ)

### Apa beda serbuk potassium humate dengan pupuk kompos kotoran hewan biasa?
Kandungan asam humat aktif pada 1 kg serbuk potassium humate konsentrasi 65% setara dengan kapasitas tukar kation dari sekitar 300 hingga 500 kg pupuk kandang matang, tanpa membawa spora gulma, bakteri pembusuk, atau gas amonia yang berbahaya bagi akar tanaman muda.

### Bisakah asam humat digunakan untuk menaikkan pH tanah masam?
Bisa membantu menstabilkan pH (*buffering capacity*), namun untuk tanah yang sangat masam (pH di bawah 4.5), asam humat paling efektif jika dikombinasikan dengan kaptan dolomit. Dolomit menetralisir keasaman bebas, sementara asam humat mengikat residu hara agar tidak kembali terkunci.

---

## Konsultasi Pemulihan Lahan & Nutrisi Tanaman Bersama Ahli Agronomi

Kembalikan kesuburan tanah Anda dan pangkas ketergantungan pupuk kimia sintetis bersama Agrokomplek Cemerlang:

- **Katalog Produk Pembenah Tanah**: [Lihat Produk Saprodi Pertanian](/produk/saprodi-pertanian/)
- **Artikel Terkait**: [Solusi Tanah Rusak Akibat Kimia Berlebih](/artikel/solusi-rehabilitasi-tanah-rusak-akibat-pupuk-kimia-berlebih/)
- **Konsultasi WhatsApp**: [Hubungi Tim Agronomi (0857-4188-3391)](https://wa.me/6285741883391?text=Halo%20Agrokomplek%20Cemerlang,%20saya%20ingin%20konsultasi%20aplikasi%20asam%20humat)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa beda serbuk potassium humate dengan pupuk kompos biasa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 kg potassium humate 65% setara kapasitas tukar kation 300-500 kg kompos matang tanpa membawa biji gulma atau amonia."
      }
    },
    {
      "@type": "Question",
      "name": "Bisakah asam humat digunakan menaikkan pH tanah masam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Asam humat meningkatkan buffering capacity dan mengikat ion beracun. Untuk pH sangat rendah, kombinasikan dengan kaptan dolomit."
      }
    }
  ]
}
\`\`\`
`
  },
  {
    slug: 'manajemen-bioflok-kolam-nila-bakteri-bacillus',
    title: 'Manajemen Bioflok Kolam Terpal Ikan Nila dengan Kultur Bakteri Bacillus',
    description: 'SOP pembentukan bioflok kolam terpal bulat ikan nila: rasio C/N, dosis molase sumber karbon, suplai oksigen aerator, dan pengendalian amonia air kolam.',
    category: 'Perikanan',
    tags: ['bioflok nila', 'kolam terpal bulat', 'probiotik bacillus', 'budidaya nila modern'],
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    content: `# Manajemen Bioflok Kolam Terpal Ikan Nila dengan Kultur Bakteri Bacillus

Budidaya ikan nila (*Oreochromis niloticus*) sistem bioflok di kolam terpal bulat menjadi primadona bisnis perikanan air tawar perkotaan karena mampu menghasilkan padat tebar tinggi (hingga 100–120 ekor per m³) dengan angka konversi pakan (FCR) serendah 1.0–1.1. Prinsip dasar bioflok adalah mengubah limbah metabolisme beracun (amonia dan feses ikan) menjadi gumpalan biomassa mikroba padat protein (*floc*) yang dapat dimakan kembali oleh ikan nila.

Namun kegagalan paling sering dialami pembudidaya pemula adalah **kematian massal akibat kolam meledak amonia (*nitrite spike*) atau mati lemas di malam hari**. Hal ini terjadi karena bakteri heterotrof tidak aktif akibat salah hitung rasio Karbon-Nitrogen (C/N ratio) atau suplai aerasi yang drop.

---

## 1. Tahapan Pembentukan Bioflok Awal (Pre-Seeding)

Sebelum benih nila ditebar, air kolam wajib dikondisikan selama 7–10 hari untuk membentuk koloni bakteri heterotrof (*Bacillus subtilis*, *Bacillus licheniformis*, dan *Bacillus coagulans*):

1. **Pengisian & Sterilisasi Air**: Isi kolam terpal bulat (diameter D3 atau D4) dengan air bersih setinggi 80–100 cm. Sterilisasi dengan kaporit 15 ppm atau garam krosok 1–2 kg/m³. Nyalakan aerasi penuh selama 48 jam untuk menguapkan klorin.
2. **Inokulasi Kultur Bakteri Probiotik**: Masukkan probiotik bakteri *Bacillus* berkonsentrasi tinggi minimal $10^9$ CFU/ml dengan dosis 5–10 ml per m³ air.
3. **Pemberian Sumber Karbon Organik (Molase / Gula Merah)**: Tambahkan molase tebu atau gula merah cair dengan dosis 50–100 gram per m³ untuk memacu pertumbuhan bakteri heterotrof agar mampu mendegradasi amonia bebas.
4. **Pemberian Pakan Pancingan**: Taburkan sedikit pakan pelet halus (20–30 gram/m³) sebagai sumber nitrogen awal bagi koloni mikroba.

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Aerasi Wajib Hidup 24 Jam Nonstop Tanpa Mati Listrik**: Bakteri heterotrof pembentuk flok dan ikan nila padat tebar tinggi adalah konsumen oksigen rakus (*aerobic organisms*). Jika aerator uniring atau blower mati lebih dari 30 menit di malam hari, Dissolved Oxygen (DO) akan drop ke bawah 2 ppm. Seluruh bakteri flok akan mati membusuk dan melepaskan racun gas $H_2S$, membunuh seluruh isi kolam dalam 1 jam. Wajib sediakan genset otomatis (*automatic transfer switch*).
> 2. **Ukur Volume Flok Mingguan Menggunakan Kerucut Imhoff**: Volume flok yang ideal untuk budidaya nila berkisar antara **15 hingga 30 ml/liter**. Jika volume flok melampaui 40 ml/liter, air akan terlalu kental, oksigen habis terpakai mikroba, dan insang ikan akan tersumbat lumpur lendir. Segera buang endapan flok bawah via pipa bottom drain (buang 10–20% air) dan hentikan penambahan molase.

---

## 2. Perhitungan Rasio C/N Saat Budidaya Berjalan

Pakan pelet apung komersial mengandung protein 28–32% yang kaya nitrogen. Ikan nila hanya mengasimilasi sekitar 25–30% nitrogen pakan ke dalam dagingnya, sisanya 70% dibuang ke air sebagai amonia ($NH_3/NH_4^+$).

Untuk mengkonversi nitrogen limbah ini menjadi protein sel tunggal mikroba, bakteri heterotrof membutuhkan rasio Karbon terhadap Nitrogen minimal **12:1 hingga 15:1**.

\`\`\`
Kebutuhan Molase Harian = Total Bobot Pakan Harian x Kandungan Protein (30%) x Faktor Konversi Molase (0.6)
\`\`\`

Contoh: Memberi pakan 2 kg pelet sehari = butuh tambahan molase cair sekitar **350–400 gram per hari** yang dilarutkan air dan disiramkan merata di depan semburan aerator.

---

## Tabel Jangkauan Logistik Probiotik & Peralatan Kolam Se-Indonesia

| Wilayah / Koridor | Kota / Kawasan Pembudidaya | Karakteristik Sumber Air | Moda Pengiriman Logistik | Estimasi Lead Time | Status Distribusi |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Tulungagung, Subang, Sleman, Boyolali, Bogor | Air sumur bor & irigasi teknis | Armada Ekspedisi Darat Cepat | 1 – 3 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Sumatera** | Lubuklinggau, Musi Rawas, Medan, Payakumbuh | Air sungai pegunungan & tanah masam | Truk Antar Provinsi Lintas Sumatera | 3 – 6 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Kalimantan** | Banjarbaru, Balikpapan, Palangkaraya | Air rawa & gambut (pH perlu buffering) | Ekspedisi Kargo Pelabuhan Laut | 5 – 9 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Sulawesi** | Minahasa, Gowa, Luwu Timur, Gorontalo | Sumber mata air pegunungan dingin | Kapal Cepat Kargo Makassar | 6 – 10 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Bali & Nusra** | Tabanan, Lombok Barat, Bima | Air tanah kapur & iklim panas pesisir | Truk Penyeberangan Cepat Ferry | 3 – 5 Hari Kerja | Ready Stock & Konsultasi |
| **Koridor Maluku & Papua** | Jayapura, Merauke, Ambon | Sentra budidaya air tawar mandiri | Jalur Kargo Kapal Tol Laut | 9 – 15 Hari Kerja | Ready Stock & Konsultasi |

---

## Tanya Jawab Teknis (FAQ)

### Mengapa air kolam bioflok berubah warna dari cokelat ke hijau pekat?
Warna hijau pekat menandakan dominasi fitoplankton/alga hijau yang mengambil alih kolam karena penetrasi sinar matahari kuat dan bakteri heterotrof kalah bersaing. Tambahkan molase untuk mendongkrak bakteri *Bacillus*, kurangi intensitas matahari dengan paranet 65%, dan pertahankan aerasi kuat agar air kembali ke warna cokelat bioflok matang.

### Berapa lama masa panen ikan nila sistem bioflok dari ukuran bibit 5–7 cm?
Dari bibit ukuran 5–7 cm (sekitar 8–10 gram per ekor), ikan nila dapat dipanen mencapai bobot konsumsi 250–350 gram (isi 3–4 ekor per kg) dalam waktu 90 hingga 105 hari dengan mortalitas di bawah 8%.

---

## Dapatkan Probiotik Bacillus Berkualitas untuk Kolam Anda

Optimalkan FCR kolam nila Anda dan cegah lonjakan amonia bersama paket probiotik komersial Agrokomplek Cemerlang:

- **Produk Pendukung Peternakan & Perikanan**: [Lihat Suplemen & Probiotik](/produk/saprodi-pertanian/)
- **Artikel Terkait**: [Manajemen Kualitas Air Tambak Vaname](/artikel/manajemen-kualitas-air-dasar-tambak-udang-vaname-probiotik/)
- **Konsultasi WhatsApp**: [Hubungi Ahli Budidaya Air (0857-4188-3391)](https://wa.me/6285741883391?text=Halo%20Agrokomplek%20Cemerlang,%20saya%20ingin%20konsultasi%20bioflok%20nila)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Mengapa air bioflok berubah dari cokelat ke hijau pekat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Alga hijau berkembang akibat sinar matahari berlebih. Tambahkan molase untuk memacu Bacillus dan pasang peneduh paranet."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama panen ikan nila bioflok dari bibit 5-7 cm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sekitar 90-105 hari mencapai bobot 250-350 gram per ekor dengan FCR 1.0-1.1."
      }
    }
  ]
}
\`\`\`
`
  }
];

export function generateDailyArticles(count = 1) {
  console.log(`[ARTICLE-GENERATOR] Checking existing articles in ${artikelDir}...`);
  if (!fs.existsSync(artikelDir)) {
    fs.mkdirSync(artikelDir, { recursive: true });
  }

  const existingFiles = fs.readdirSync(artikelDir).filter((f) => f.endsWith('.md'));
  const existingSlugs = new Set(existingFiles.map((f) => f.replace(/\.md$/, '')));

  console.log(`[ARTICLE-GENERATOR] Found ${existingSlugs.size} existing articles.`);

  const availableTopics = TOPIC_POOL.filter((t) => !existingSlugs.has(t.slug));

  if (availableTopics.length === 0) {
    console.log('[ARTICLE-GENERATOR] No new topics available in pool. All topics already published!');
    return [];
  }

  const toPublish = availableTopics.slice(0, count);
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const formattedDate = `${day} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;

  const generatedFiles = [];

  for (const item of toPublish) {
    const filePath = path.join(artikelDir, `${item.slug}.md`);
    const frontmatter = `---
title: '${item.title}'
description: '${item.description}'
publishDate: '${formattedDate}'
author: 'Tim Ahli Agrokomplek Cemerlang'
category: '${item.category}'
tags: ${JSON.stringify(item.tags)}
heroImage: '${item.heroImage}'
---

`;
    const fullContent = frontmatter + item.content.trim() + '\n';
    fs.writeFileSync(filePath, fullContent, 'utf8');
    console.log(`[ARTICLE-GENERATOR] Published new article: ${filePath}`);
    generatedFiles.push(filePath);
  }

  console.log(`[ARTICLE-GENERATOR] Successfully created ${generatedFiles.length} new article(s)!`);
  return generatedFiles;
}

// CLI execution support
const args = process.argv.slice(2);
let count = 1;
const countIdx = args.indexOf('--count');
if (countIdx !== -1 && args[countIdx + 1]) {
  count = parseInt(args[countIdx + 1], 10);
}

generateDailyArticles(count);
