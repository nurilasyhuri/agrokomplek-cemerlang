import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const artikelDir = path.join(projectRoot, 'src', 'content', 'artikel');

function getIndonesianDate(date = new Date()) {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  const day = wibDate.getDate();
  const month = months[wibDate.getMonth()];
  const year = wibDate.getFullYear();
  return `${day} ${month} ${year}`;
}

const NATIONWIDE_TABLE = `## Tabel Jangkauan Distribusi Saprodi & Perlengkapan Green House Se-Indonesia

Agrokomplek Cemerlang mendistribusikan perlengkapan pertanian presisi, plastik UV greenhouse, paranet, selang drip, asam humat, dan nutrisi hayati ke seluruh koridor:

| Wilayah Sentra | Kawasan Sentra Pertanian & Agribisnis | Komoditas Unggulan Wilayah | Moda Pengiriman Logistik | Estimasi Lead Time | Status Distribusi |
|---|---|---|---|---|:---:|
| **Jawa Timur** | Malang Raya, Kediri, Blitar, Banyuwangi, Nganjuk | Cabai, Melon, Sayuran, Bawang Merah, Bioflok | Truk Box & Ekspedisi Cepat | 1 – 2 Hari Kerja | Ready Stock & Kirim Cepat |
| **Jawa Tengah & DIY** | Brebes, Magelang, Temanggung, Boyolali, Sleman | Bawang Merah, Cabai Lereng, Sayur Organik | Ekspedisi Darat Reguler/Kargo | 1 – 2 Hari Kerja | Ready Stock & Kirim Cepat |
| **Jawa Barat & Banten** | Lembang, Garut, Pangalengan, Cianjur, Lebak | Sayuran Dataran Tinggi, Kentang, Hidroponik | Armada Pick-up & Truk Engkel | 1 – 2 Hari Kerja | Ready Stock & Kirim Cepat |
| **Sumatera Hub** | Berastagi Karo, Agam Bukittinggi, Kerinci, Lampung | Hortikultura Sayuran, Kopi, Jagung Hibrida | Truk Kargo Lintas Sumatera | 3 – 5 Hari Kerja | Ready Stock & Kirim Cepat |
| **Bali & Nusa Tenggara** | Bedugul Tabanan, Lombok Timur, Bima, Kupang | Sayur Segar Hotel, Bawang Merah, Melon | Jalur Darat & Feri Cepat | 2 – 4 Hari Kerja | Ready Stock & Kirim Cepat |
| **Kalimantan & IKN** | Kutai Kartanegara, Banjar, Tanah Laut, Singkawang | Sayur Pasokan IKN, Padi Pasang Surut, Buah | Kargo Laut Peti Kemas Surabaya | 4 – 7 Hari Kerja | Ready Stock & Kirim Cepat |
| **Sulawesi & Indonesia Timur** | Malino Gowa, Enrekang, Tomohon, Jayapura | Bawang Merah Buntu, Sayuran Dingin, Palawija | Kapal Pelni & Peti Kemas Cepat | 5 – 9 Hari Kerja | Ready Stock & Kirim Cepat |`;

const AGRI_CENTERS = [
  { name: 'Malang Raya', region: 'Batu, Pujon & Karangploso', province: 'Jawa Timur', soil: 'tanah andosol vulkanik subur lereng Gunung Arjuno-Panderman', focus: 'sayuran dataran tinggi, apel, bunga potong, dan melon hidroponik' },
  { name: 'Kediri & Blitar', region: 'Pare, Kepung, Nglegok & Gandusari', province: 'Jawa Timur', soil: 'endapan pasir lanau vulkanik Gunung Kelud berporositas tinggi', focus: 'sentra cabai rawit nasional, jagung pipil, dan peternakan ayam petelur' },
  { name: 'Nganjuk', region: 'Bagor, Sukomoro & Rejoso', province: 'Jawa Timur', soil: 'tanah aluvial lempung endapan sungai Brantas', focus: 'sentra produksi bawang merah utama Jawa Timur dan padi palawija' },
  { name: 'Banyuwangi', region: 'Genteng, Songgon & Cluring', province: 'Jawa Timur', soil: 'tanah vulkanik Ijen-Raung kaya hara organik', focus: 'buah naga organik, jeruk siam, semangka, dan cabai jamu' },
  { name: 'Magelang & Temanggung', region: 'Sawangan, Ngablak & Parakan', province: 'Jawa Tengah', soil: 'tanah andosol gembur lereng Merapi, Merbabu, dan Sumbing', focus: 'cabai keriting, kubis, tomat, tembakau, dan kopi arabika' },
  { name: 'Brebes', region: 'Larangan, Wanasari & Bulakamba', province: 'Jawa Tengah', soil: 'tanah aluvial pantai pesisir dengan kejenuhan pupuk kimia tinggi', focus: 'pusat bawang merah terbesar di Indonesia dan cabai merah besar' },
  { name: 'Boyolali & Klaten', region: 'Selo, Cepogo, Tulung & Delanggu', province: 'Jawa Tengah', soil: 'tanah regosol abu vulkanik Merapi dan aluvial subur', focus: 'sayuran organik, pakan rumput odot sapi perah, dan padi rojolele' },
  { name: 'Lembang & Garut', region: 'Cikajang, Cisurupan, Parongpong & Maribaya', province: 'Jawa Barat', soil: 'andosol cokelat tua berhawa sejuk 1.200 mdpl', focus: 'kentang granola, wortel, brokoli, paprika greenhouse, dan stroberi' },
  { name: 'Pangalengan & Ciwidey', region: 'Bandung Selatan Dataran Tinggi', province: 'Jawa Barat', soil: 'tanah andosol hitam gembur pegunungan Malabar & Patuha', focus: 'kentang industri bibit, teh, tomat apel, dan kubis dataran tinggi' },
  { name: 'Cianjur & Sukabumi', region: 'Cipanas, Pacet, Cisaat & Sukalarang', province: 'Jawa Barat', soil: 'tanah latosol merah dan andosol lereng Gunung Gede Pangrango', focus: 'sayuran daun premium ekspor, padi pandanwangi, dan melon greenhouse' },
  { name: 'Bedugul & Tabanan', region: 'Baturiti, Candi Kuning & Penebel', province: 'Bali', soil: 'tanah andosol danau Beratan berkabut sejuk', focus: 'sayuran salad eksotis hotel bintang 5, stroberi hidroponik, dan asparagus' },
  { name: 'Lombok Timur & Bima', region: 'Sembalun, Aikmel, Bolo & Woha', province: 'Nusa Tenggara Barat', soil: 'tanah vulkanik Rinjani dan aluvial beriklim kering', focus: 'bawang merah dataran rendah, cabai kering, dan jagung hibrida' },
  { name: 'Berastagi & Karo', region: 'Simpang Empat, Berastagi & Tigapanah', province: 'Sumatera Utara', soil: 'tanah andosol abu vulkanik Gunung Sinabung sangat kaya kalium', focus: 'jeruk manis madu, kentang, kubis ekspor, dan kolam bioflok nila' },
  { name: 'Simalungun & Dairi', region: 'Saribudolok, Sidikalang & Sumbul', province: 'Sumatera Utara', soil: 'tanah vulkanik kaldera Danau Toba subur berhawa sejuk', focus: 'kopi arabika single origin, cabai merah, dan sayuran daun' },
  { name: 'Agam & Bukittinggi', region: 'Baso, Tilatang Kamang & IV Koto', province: 'Sumatera Barat', soil: 'andosol lereng Gunung Marapi-Singgalang', focus: 'cabai keriting padang, bawang prei, wortel, dan alpukat miki' },
  { name: 'Kerinci', region: 'Kayu Aro, Gunung Tujuh & Siulak', province: 'Jambi', soil: 'tanah vulkanik andosol murni kaki Gunung Kerinci', focus: 'kentang kerinci, kubis, cabai, dan teh hitam perkebunan' },
  { name: 'Pagar Alam', region: 'Dempo Utara & Dempo Tengah', province: 'Sumatera Selatan', soil: 'tanah vulkanik Gunung Dempo 1.000 mdpl', focus: 'sayur-mayur dataran tinggi, kopi robusta basemah, dan tomat' },
  { name: 'Lampung Selatan', region: 'Kalianda, Natar & Palas', province: 'Lampung', soil: 'tanah latosol merah dan endapan pantai', focus: 'jagung pakan, semangka, pisang mas cavendish, dan budidaya bioflok lele' },
  { name: 'Kubu Raya', region: 'Rasau Jaya, Sungai Kakap & Siantan', province: 'Kalimantan Barat', soil: 'tanah gambut dangkal dan aluvial delta sungai Kapuas', focus: 'tanaman nanas madu, lidah buaya, kangkung darat, dan jagung manis' },
  { name: 'Tanah Laut & Banjar', region: 'Pelaihari, Martapura & Bati-Bati', province: 'Kalimantan Selatan', soil: 'tanah podsolik merah kuning dan rawa pasang surut', focus: 'padi sawah tadah hujan, kolam bioflok ikan patin, dan hortikultura sayur' },
  { name: 'Kutai Kartanegara', region: 'Loa Kulu, Tenggarong Seberang & Samboja', province: 'Kalimantan Timur', soil: 'tanah lempung berpasir dan dataran banjir Mahakam', focus: 'hortikultura sayur segar pemasok IKN Nusantara, buah melon, dan semangka' },
  { name: 'Malino & Gowa', region: 'Tinggimoncong, Tombolo Pao & Parangloe', province: 'Sulawesi Selatan', soil: 'tanah andosol pegunungan Bawakaraeng sejuk', focus: 'wortel, kentang, daun bawang, stroberi, dan tanaman hias' },
  { name: 'Enrekang', region: 'Baraka, Anggeraja & Buntu Batu', province: 'Sulawesi Selatan', soil: 'tanah kapur berlempung dan bukit terjal subur', focus: 'sentra bawang merah terbesar di kawasan timur Indonesia dan cabai' },
  { name: 'Tomohon & Minahasa', region: 'Tomohon Utara, Kakas & Langowan', province: 'Sulawesi Utara', soil: 'tanah vulkanik lereng Gunung Lokon dan Mahawu', focus: 'bunga krisan potong, sayuran daun hijau, dan tanaman rempah' },
  { name: 'Gorontalo', region: 'Limboto, Tibawa & Suwawa', province: 'Gorontalo', soil: 'tanah aluvial dataran danau dan perbukitan', focus: 'produksi jagung hibrida nasional, tomat ceri, dan cabai rawit rica' },
  { name: 'Kolaka', region: 'Wundulako, Pomalaa & Baula', province: 'Sulawesi Tenggara', soil: 'tanah lempung merah kaya mineral dan pesisir', focus: 'tanaman palawija, lada perdu, dan pembibitan kakao sambung pucuk' },
  { name: 'Jayapura & Keerom', region: 'Arso, Skouw & Muara Tami', province: 'Papua', soil: 'tanah aluvial lembah subur dataran rendah perbatasan', focus: 'sayuran sawi, kangkung, cabai rawit papua, dan jagung manis' },
  { name: 'Merauke', region: 'Kurik, Semangga & Tanah Miring', province: 'Papua Selatan', soil: 'dataran rendah aluvial rawa datar berhektar-hektar', focus: 'kawasan pangan food estate padi modern dan palawija berskala besar' },
  { name: 'Kupang & TTS', region: 'Kupang Timur, Soe & Amanuban', province: 'Nusa Tenggara Timur', soil: 'tanah mediteran merah kapur iklim kering semi-arid', focus: 'hortikultura irigasi tetes hemat air, bawang merah, dan pakan lamtoro taramba' },
  { name: 'Subang & Karawang', region: 'Jalan Cagak, Ciater & Purwasari', province: 'Jawa Barat', soil: 'andosol lereng Tangkuban Parahu dan aluvial persawahan', focus: 'nanas madu si madu Subang, bibit buah-buahan, dan melon hidroponik' }
];

const AGRI_ARCHETYPES = [
  {
    slugSuffix: 'manajemen-bioflok-kolam-ikan-nila-lele',
    serviceTitle: 'Penerapan Teknologi Bioflok Kolam Ikan Nila & Lele Efisiensi Pakan FCR Rendah',
    seoKeyword: 'bioflok ikan nila dan lele',
    category: 'Perikanan & Peternakan',
    tags: ['bioflok nila', 'bioflok lele', 'probiotik bacillus', 'fcr pakan ikan', 'kolam terpal bulat'],
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'peningkatan padat tebar ikan hingga 100–150 ekor/m³ dengan minim ganti air (*zero water discharge*) melalui penguraian kotoran amonia menjadi gumpalan protein flok kaya nutrisi',
    solutionDetail: 'Penggunaan aerator uniring hemat listrik, inokulasi kultur bakteri Bacillus subtilis & licheniformis, serta penghitungan rasio C/N harian menggunakan molase tetes tebu.',
    sopMandor: [
      '**Uji Volume Flok Menggunakan Kerucut Imhoff:** Ukur ketebalan flok setiap minggu pagi sebelum pemberian pakan. Volume flok ideal untuk ikan nila berada pada rentang 20–40 ml/liter. Jika flok melebihi 50 ml/liter, buang endapan dasar (*bottom drain*) selama 30 detik untuk mencegah anoksia ikan.',
      '**Pertahankan Rasio C/N Minimal 12:1:** Setiap pemberian pakan berprotein tinggi (>30%), tambahkan sumber karbon organik cair (molase atau tepung terigu terfermentasi) sebanyak 20–30% dari total berat pakan harian agar amonia bebas diikat menjadi protein mikroba.'
    ],
    tableHeaders: ['Parameter Kualitas Air', 'Standar Optimum Bioflok', 'Tindakan Koreksi Cepat'],
    tableRows: [
      ['Kadar Oksigen Terlarut (DO)', '> 4.0 – 5.0 mg/L nonstop', 'Tingkatkan tekanan blower & bersihkan pori selang uniring'],
      ['Derajat Keasaman (pH)', 'Stabil 7.2 – 8.2', 'Tambahkan kapur dolomit jika pH < 6.8'],
      ['Amonia Bebas (NH3-N)', '< 0.05 mg/L', 'Kocorkan molase + probiotik Bacillus pekat'],
      ['Food Conversion Ratio (FCR)', '0.8 – 1.0 (Hemat 25% pakan)', 'Pakan terkonversi kembali dari biomassa flok']
    ]
  },
  {
    slugSuffix: 'aplikasi-agens-hayati-trichoderma-cegah-layu-fusarium',
    serviceTitle: 'Aplikasi Agens Hayati Trichoderma & Gliocladium Basmi Layu Fusarium Tanah',
    seoKeyword: 'trichoderma cegah layu fusarium',
    category: 'Saprodi Pertanian',
    tags: ['agens hayati trichoderma', 'layu fusarium cabai', 'pupuk hayati antijamur', 'gliocladium', 'kesuburan tanah'],
    heroImage: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'pencegahan serangan jamur tular tanah ganas seperti Fusarium oxysporum, Phytophthora capsici, dan busuk akar Rhizoctonia pada komoditas cabai, tomat, dan melon',
    solutionDetail: 'Inokulasi spora jamur antagonis Trichoderma harzianum kepadatan > 10^8 CFU/gram yang dipadukan dengan asam humat aktif dan pupuk kandang matang fermentasi.',
    sopMandor: [
      '**Inokulasi Trichoderma Sejak Fase Pembibitan (H-7 Semai):** Jangan menunggu tanaman layu baru menyiram Trichoderma. Jamur ini bersifat preventif dan kolonizer perakaran. Campurkan serbuk Trichoderma ke dalam media semai cocopeat/kompos 7 hari sebelum biji disemai.',
      '**Dilarang Keras Campur Fungisida Kimia Sintetis:** Selama 10 hari sebelum dan sesudah aplikasi Trichoderma, dilarang menyiram atau menyemprot fungisida berbahan aktif tembaga, mankozeb, atau karbendazim karena akan mematikan koloni mikroba menguntungkan ini.'
    ],
    tableHeaders: ['Fase Pertumbuhan Tanaman', 'Dosis Trichoderma', 'Metode Aplikasi Terbaik'],
    tableRows: [
      ['Persiapan Media Semai', '100 gram per 25 kg media semai', 'Aduk rata bersama tanah dan kompos matang'],
      ['Pengolahan Lahan Dasar Bedengan', '5 – 10 kg per hektar', 'Tabur bersama pupuk kandang sebelum tutup mulsa'],
      ['Kocor Lubang Tanam (Umur 10 & 30 HST)', '5 gram per liter air (200 ml/tanaman)', 'Kocorkan basah di zona pangkal batang perakaran'],
      ['Pencegahan Serangan Busuk Batang', 'Pasta kental 10 gram + 50 ml air', 'Kuas langsung pada luka batang yang tergores']
    ]
  },
  {
    slugSuffix: 'instalasi-selang-drip-irigasi-tetes-hemat-air-dan-pupuk',
    serviceTitle: 'Instalasi Selang Drip Irigasi Tetes Presisi Hemat Air & Tenaga Kerja',
    seoKeyword: 'irigasi tetes selang drip',
    category: 'Perlengkapan Pertanian',
    tags: ['irigasi tetes', 'selang drip pertanian', 'fertigasi presisi', 'disc filter irigasi', 'venturi injector'],
    heroImage: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'penghematan air irigasi hingga 65% dan efisiensi tenaga kerja penyiraman kebun cabai, melon, bawang merah, maupun semangka di lahan luas maupun bukit terjal',
    solutionDetail: 'Rancangan sistem fertigasi menggunakan pipa induk HDPE/PVC, venturi injector otomatis, disc filter pembersih lumut, dan selang drip pipih lubang ganda teratur (jarak 10, 15, atau 20 cm).',
    sopMandor: [
      '**Wajib Pasang Disc Filter Minimal 120 Mesh:** Lumut, pasir, dan butiran pupuk yang tidak larut 100% adalah musuh utama selang drip. Pasang tabung disc filter tepat setelah outlet pompa air dan lakukan backwash pembersihan cartridge filter setiap 3 hari sekali.',
      '**Gunakan Tekanan Kerja Stabil 0.8 – 1.2 Bar:** Jangan memberikan tekanan pompa terlalu tinggi yang menyebabkan selang drip meledak terlepas, atau tekanan terlalu loyo yang membuat tetesan air di ujung baris bedengan tidak merata.'
    ],
    tableHeaders: ['Komponen Sistem Fertigasi', 'Spesifikasi Rekomendasi', 'Fungsi Utama Lapangan'],
    tableRows: [
      ['Selang Drip Lateral Tape', 'Tebal 0.20 mm (8 mil) emitter 15–20 cm', 'Meneteskan air tepat di pangkal akar di bawah mulsa'],
      ['Pipa Sub-Main Lateral', 'Pipa PE / Selang Layflat 1.5 – 2 Inch', 'Menyalurkan debit air stabil ke tiap baris bedengan'],
      ['Venturi Injector Fertigasi', 'Ukuran 3/4 Inch atau 1 Inch Bypass', 'Menghisap larutan pupuk cair otomatis ke saluran'],
      ['Pembersih Endapan Filter', 'Disc Filter 1.5 Inch 120 Mesh 130 Micron', 'Mencegah penyumbatan lubang emitter dari kotoran air']
    ]
  },
  {
    slugSuffix: 'pemilihan-plastik-uv-greenhouse-dan-insect-net-anti-hama',
    serviceTitle: 'Panduan Memilih Plastik UV Greenhouse & Insect Net Anti Kutu Kebul',
    seoKeyword: 'plastik uv greenhouse insect net',
    category: 'Perlengkapan Green House',
    tags: ['plastik uv 14 persen', 'plastik uv 200 micron', 'insect net 50 mesh', 'kasa nyamuk pertanian', 'greenhouse rangka baja'],
    heroImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'perlindungan tanaman dari guyuran air hujan pembawa spora jamur dan serangan serangga vektor virus (thrips, kutu kebul Bemisia tabaci, dan aphids) tanpa mereduksi intensitas cahaya fotosintesis',
    solutionDetail: 'Penggunaan plastik UV additive 14% tebal 200 micron anti-droplet dan insect net rajut kerapatan 50 mesh dengan sistem penjepit profil lock c-channel spring clip anti-robek.',
    sopMandor: [
      '**Pasang Plastik UV Saat Siang Terik Pukul 11.00–14.00:** Tarik plastik UV saat suhu udara panas agar lembaran plastik lentur optimal. Jika dipasang saat pagi hari dingin, plastik akan memuai dan kendur menggelambir saat terkena terik siang, memicu genangan air hujan di atas atap.',
      '**Gunakan Insect Net Kerapatan Minimal 50 Mesh:** Serangga kutu kebul pembawa virus kuning gemini memiliki ukuran tubuh mikroskopis (<0.8 mm). Menggunakan kasa 30 mesh biasa masih dapat diterobos hama kutu kebul. Wajib pilih kasa rajut 50 mesh monofilamen HDPE.'
    ],
    tableHeaders: ['Jenis Material Pelindung', 'Spesifikasi Mutu Standar', 'Daya Tahan Lapangan'],
    tableRows: [
      ['Plastik UV Atap Greenhouse', 'Kandungan UV 14%, Tebal 200 Micron, Anti-Fog', 'Tahan paparan cuaca 3 hingga 5 tahun nonstop'],
      ['Insect Net Dinding Samping', 'Kerapatan 50 Mesh (Anyaman Rapat Presisi)', 'Tahan gesekan dan angin kencang hingga 4 tahun'],
      ['Paranet Shading Net (Peneduh)', 'Kerapatan 65% – 75% Polietilena Murni', 'Menurunkan suhu mikro 3°C–5°C saat kemarau'],
      ['Profil Lock & Spring Wire', 'Plat Galvanis Anti-Karat tebal 0.8 mm + Kawat Lapis PE', 'Mengunci plastik kencang tanpa melubangi lembaran']
    ]
  },
  {
    slugSuffix: 'reklamasi-tanah-rusak-asam-humat-dan-dolomit-sebelum-tanam',
    serviceTitle: 'SOP Reklamasi pH Tanah Masam & Pemulihan Tanah Rusak Menggunakan Asam Humat',
    seoKeyword: 'asam humat dan dolomit tanah masam',
    category: 'Saprodi Pertanian',
    tags: ['reklamasi tanah masam', 'asam humat kalium humat', 'kapur dolomit pertanian', 'ktk tanah liat', 'pupuk dasar olah lahan'],
    heroImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'peningkatan pH tanah dari kondisi drop (pH < 5.0) menuju netral ideal (pH 6.2 – 6.8), penggemburan tanah liat padat, dan pelepasan residu pupuk fosfat kimia yang terikat logam',
    solutionDetail: 'Kombinasi aplikasi kapur pertanian dolomit (kadar Ca & Mg tinggi) dengan Potassium Humate granular berkadar asam humat > 65% saat pengolahan tanah dasar.',
    sopMandor: [
      '**Beri Jeda Waktu 7 Hari Antara Dolomit dan Pupuk Dasar:** Jangan menabur kapur dolomit berbarengan di hari yang sama dengan pupuk dasar NPK/Urea. Kalsium bebas dari kapur akan bereaksi dengan amonium membentuk gas amonia yang menguap ke udara, membuang nitrogen sia-sia.',
      '**Larutkan Asam Humat dengan Air Bersih Non-Klorin:** Saat mengocorkan asam humat ke lubang tanam, pastikan air yang digunakan bebas kaporit pekat agar efektivitas ikatan khelat gugus karboksil dan fenol pada molekul humat bekerja maksimal di perakaran.'
    ],
    tableHeaders: ['Kondisi pH Tanah Aktual', 'Kebutuhan Kapur Dolomit per Hektar', 'Kebutuhan Asam Humat per Hektar'],
    tableRows: [
      ['pH Sangat Masam (< 4.5)', '3.0 – 4.0 Ton / Hektar', '10 – 15 kg Potassium Humate murni'],
      ['pH Masam Sedang (4.5 – 5.5)', '1.5 – 2.5 Ton / Hektar', '7 – 10 kg Potassium Humate murni'],
      ['pH Agak Masam (5.5 – 6.2)', '800 kg – 1.2 Ton / Hektar', '5 kg Potassium Humate murni'],
      ['pH Netral Ideal (6.3 – 6.8)', 'Cukup perawatan 300–500 kg / Hektar', '3 – 5 kg sebagai pelindung KTK & mikroba']
    ]
  },
  {
    slugSuffix: 'manajemen-nutrisi-ab-mix-melon-dan-sayur-hidroponik',
    serviceTitle: 'Manajemen Nutrisi AB Mix & Kalibrasi EC Meter Hidroponik Melon & Sayur Daun',
    seoKeyword: 'nutrisi ab mix hidroponik melon',
    category: 'Perlengkapan Green House',
    tags: ['nutrisi ab mix', 'hidroponik melon substrat', 'ec meter ppm nutrisi', 'fertigasi tetes melon', 'buah manis brix tinggi'],
    heroImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'pengaturan kepekatan nutrisi mikro dan makro esensial (Nitrogen, Fosfor, Kalium, Kalsium, Magnesium, Boron) secara presisi berdasarkan fase vegetatif dan generatif untuk mencetak melon ber-Brix manis > 13%',
    solutionDetail: 'Pemberian nutrisi AB Mix kualitas greenhouse grade larut air 100% tanpa endapan, dipantau harian menggunakan alat ukur EC meter dan pH pen terkalibrasi buffer.',
    sopMandor: [
      '**Dilarang Mencampur Pekatan A dan Pekatan B dalam Satu Wadah:** Pekatan A (mengandung Kalsium Nitrat dan Besi Fe-EDDHA) tidak boleh bertemu langsung dengan Pekatan B (mengandung Sulfat dan Fosfat) dalam konsentrasi tinggi karena akan membentuk endapan gips Kalsium Sulfat yang mengkristal dan tidak dapat diserap tanaman.',
      '**Kenaikan Nilai EC Bertahap Mengikuti Umur Tanaman:** Pada fase semai gunakan EC 0.8–1.0 mS/cm, fase vegetatif naikkan ke EC 1.8–2.2 mS/cm, dan pada fase pembesaran buah (netting melon) dorong hingga EC 2.6–3.0 mS/cm untuk memadatkan daging buah dan menaikkan kadar gula Brix.'
    ],
    tableHeaders: ['Fase Tumbuh Melon Substrat', 'Target EC (mS/cm)', 'Target Nilai PPM', 'Nilai pH Larutan Tandon'],
    tableRows: [
      ['Fase Semai / Bibit (1–7 HSS)', '0.8 – 1.0 mS/cm', '400 – 500 PPM', 'pH 6.0 – 6.5'],
      ['Fase Vegetatif Awal (1–15 HST)', '1.5 – 1.8 mS/cm', '750 – 900 PPM', 'pH 5.8 – 6.2'],
      ['Fase Polinasi & Bunga (20–28 HST)', '2.0 – 2.2 mS/cm', '1.000 – 1.100 PPM', 'pH 5.8 – 6.2'],
      ['Fase Pembentukan Net Buah (35–55 HST)', '2.5 – 2.8 mS/cm', '1.250 – 1.400 PPM', 'pH 6.0 – 6.4'],
      ['Fase Pematangan Buah (H-7 Panen)', 'Turunkan siram air, stop N tinggi', 'EC 2.2 – 2.5 fokus Kalium Silika', 'Mencapai Brix > 13.5%']
    ]
  },
  {
    slugSuffix: 'pembuatan-pupuk-organik-padat-kohe-dekomposer-fermentasi',
    serviceTitle: 'SOP Fermentasi Pupuk Kandang (Kohe) Menggunakan Dekomposer Aktif Bebas Jamur',
    seoKeyword: 'fermentasi pupuk kandang kohe',
    category: 'Saprodi Pertanian',
    tags: ['fermentasi kohe sapi', 'pupuk kandang kambing', 'bakteri dekomposer', 'kompos organik matang', 'pencegahan busuk akar'],
    heroImage: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
    coreNeed: 'pengolahan kotoran hewan ternak mentah menjadi pupuk kompos matang sempurna ber-C/N ratio rendah (10–15) bebas biji gulma liar, larva uret, dan gas amonia panas yang membakar akar tanaman',
    solutionDetail: 'Aplikasi konsorsium bakteri aerob dekomposer (Lactobacillus, Actinomycetes, Ragi Saccharomyces) dengan aerasi pembalikan tumpukan teratur selama 14–21 hari.',
    sopMandor: [
      '**Pantau Suhu Tumpukan Menggunakan Termometer Kompos:** Pada hari ke-3 hingga ke-7, suhu tumpukan kohe wajib mencapai 55°C–65°C. Suhu panas thermophilic ini sangat krusial untuk mensterilkan telur cacing, nematoda, dan benih gulma. Lakukan pembalikan jika suhu menembus > 70°C agar bakteri pengurai tidak mati.',
      '**Ciri-Ciri Pupuk Kandang Matang Sempurna:** Pupuk tidak lagi berbau kotoran mentah (beraroma wangi seperti tanah hutan), suhu tumpukan sudah dingin setara suhu ruang, warna cokelat gelap kehitaman, dan remasannya remah tidak lengket basah.'
    ],
    tableHeaders: ['Parameter Kematangan Kompos', 'Kondisi Kohe Mentah Berbahaya', 'Kondisi Pupuk Matang Sempurna'],
    tableRows: [
      ['Suhu Tumpukan (°C)', 'Panas membara (50°C–75°C) saat basah', 'Dingin stabil sejuk (< 30°C)'],
      ['Aroma Tumpukan', 'Bau busuk amonia & feses menyengat', 'Bebas bau busuk, harum tanah gembur'],
      ['Warna & Tekstur', 'Kasar, menggumpal basah, lendir', 'Remah halus, warna hitam homogen'],
      ['Rasio Karbon/Nitrogen (C/N)', 'Tinggi (> 30–40) memicu fiksasi N', 'Ideal (10 – 15) langsung diserap tanaman']
    ]
  }
];

function generateProceduralArticle(center, archetype) {
  const slug = `${archetype.slugSuffix}-${center.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const title = `${archetype.serviceTitle} di ${center.name}: Solusi Teruji Petani Modern`;
  const seoTitle = `${archetype.serviceTitle} di ${center.name}`;
  const description = `Panduan praktis ${archetype.seoKeyword} di wilayah ${center.name}, ${center.province}. Fokus pengembangan ${center.focus} dengan efisiensi saprodi dan hasil panen melimpah.`;

  const intro = `Sektor pertanian dan agribisnis di kawasan **${center.name}, ${center.province}**—terutama pada sentra **${center.region}**—menghadapi tantangan budidaya yang unik. Berada di atas **${center.soil}**, petani setempat mengandalkan komoditas utama berupa **${center.focus}**. Pengelolaan lahan yang salah, serangan hama tular tanah, serta pemborosan pupuk kimia konvensional kerap menekan margin keuntungan petani di tengah fluktuasi harga pasar.

**Agrokomplek Cemerlang** hadir mendampingi petani dan pelaku usaha agribisnis di kawasan **${center.name}** dengan teknologi pertanian presisi dan penyediaan saprodi teruji, salah satunya melalui panduan **${archetype.serviceTitle.toLowerCase()}**.`;

  const section1 = `Budidaya pertanian di wilayah **${center.name}** sangat bergantung pada keseimbangan nutrisi tanah dan perlindungan tanaman dari stres cuaca ekstrem. Karakteristik **${center.soil}** memerlukan pendekatan rekayasa budidaya yang presisi agar penyerapan unsur hara tanaman berjalan maksimal.

Dalam menjawab ${archetype.coreNeed}, teknologi ini memberikan lompatan produktivitas nyata. ${archetype.solutionDetail} Dengan penerapan standar operasional prosedur yang terbukti di lapangan, petani di ${center.name} dapat memangkas biaya operasional sekaligus melipatgandakan kualitas tonase panen.`;

  const mandorNotesStr = archetype.sopMandor.map((note, idx) => `> ${idx + 1}. ${note}`).join('\n>\n');
  const tableHeaderStr = `| ${archetype.tableHeaders.join(' | ')} |\n| ${archetype.tableHeaders.map(() => '---').join(' | ')} |`;
  const tableRowsStr = archetype.tableRows.map(row => `| ${row.join(' | ')} |`).join('\n');

  const steps = [
    {
      title: `Analisis Lahan & Kebutuhan Teknis di ${center.name}`,
      desc: `Uji parameter dasar (pH tanah/air, EC nutrisi, porositas media tanam) dan penentuan layout bedengan atau konstruksi greenhouse.`
    },
    {
      title: `Persiapan Saprodi & Sterilisasi Media`,
      desc: `Aplikasi bahan pembenah tanah, inokulasi kultur mikroba hayati pengurai, atau perakitan instalasi fertigasi tertutup.`
    },
    {
      title: `Aplikasi Terjadwal Sesuai Standar Operasional Presisi`,
      desc: `Pemberian pupuk dan pemeliharaan dengan takaran terukur secara rutin, menghindari pencampuran zat kimia yang kontra-produktif.`
    },
    {
      title: `Monitoring Berkala & Evaluasi Hasil Panen`,
      desc: `Pengamatan visual vigor tanaman, pengukuran pembentukan bunga/buah, serta pemeliharaan sanitasi lingkungan kebun.`
    }
  ];
  const stepsStr = steps.map((st, idx) => `${idx + 1}. **${st.title}:** ${st.desc}`).join('\n');

  const faqs = [
    {
      q: `Apakah produk saprodi dan perlengkapan dari Agrokomplek Cemerlang bisa dikirim ke ${center.name}?`,
      a: `Ya, kami melayani pengiriman rutin ke seluruh area ${center.name} dan sekitarnya menggunakan ekspedisi kargo darat cepat maupun armada angkut langsung untuk pesanan volume komersial.`
    },
    {
      q: `Mengapa penerapan ${archetype.seoKeyword} sangat disarankan untuk petani di ${center.name}?`,
      a: `Karena metode ini dirancang untuk mengatasi kendala spesifik karakteristik tanah dan iklim di kawasan ${center.name}, terbukti menekan biaya pupuk sintetis dan meminimalkan resiko gagal panen.`
    },
    {
      q: `Bagaimana cara konsultasi perhitungan kebutuhan bahan untuk luasan lahan kami di ${center.name}?`,
      a: `Anda dapat langsung menghubungi tim agronomis kami melalui WhatsApp resmi untuk mendapatkan simulasi rancangan kebutuhan fertigasi, plastik UV, atau dosis pupuk hayati sesuai komoditas Anda.`
    }
  ];

  const faqsMarkdown = faqs.map(f => `### ${f.q}\n${f.a}`).join('\n\n');
  const schemaFaqs = faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a.replace(/\n/g, ' ').replace(/"/g, '\\"')
    }
  }));

  const content = `---
title: '${title.replace(/'/g, "''")}'
seoTitle: '${seoTitle.replace(/'/g, "''")}'
description: '${description.replace(/'/g, "''")}'
publishDate: '${getIndonesianDate()}'
author: 'Tim Ahli Agrokomplek Cemerlang'
category: '${archetype.category}'
tags: [${[
  `pertanian ${center.name.toLowerCase()}`,
  archetype.seoKeyword,
  ...archetype.tags
].map(t => `'${t}'`).join(', ')}]
heroImage: '${archetype.heroImage}'
featured: false
---

# ${title}

${intro}

---

## 1. Analisis Kebutuhan Budidaya di Kawasan ${center.name}

${section1}

---

> ### Catatan Mandor Kebun & Praktisi Lapangan
${mandorNotesStr}

---

## 2. Tabel Parameter Teknis & Rekomendasi Budidaya

${tableHeaderStr}
${tableRowsStr}

---

## 3. SOP Pelaksanaan Teknis di Lapangan

${stepsStr}

---

${NATIONWIDE_TABLE}

---

## Tanya Jawab Teknis Pertanian (FAQ)

${faqsMarkdown}

---

## Konsultasi Pertanian Presisi Bersama Agrokomplek Cemerlang

Maksimalkan hasil panen kebun dan kolam Anda di wilayah **${center.name}** bersama tim agronomis berpengalaman kami:

- **Katalog Produk Saprodi**: [Lihat Produk Pertanian & Greenhouse](/produk/)
- **Portofolio Proyek**: [Dokumentasi Proyek Greenhouse & Fertigasi](/proyek/)
- **Konsultasi WhatsApp**: [Hubungi Tim Agronomis (0857-4188-3391)](https://wa.me/6285741883391?text=${encodeURIComponent(`Halo Agrokomplek Cemerlang, saya ingin konsultasi kebutuhan ${archetype.serviceTitle} untuk lokasi di ${center.name}`)})

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ${JSON.stringify(schemaFaqs, null, 2)}
}
\`\`\`
`;

  return {
    slug,
    title,
    content
  };
}

export function generateDailyArticles(count = 1) {
  console.log(`[ARTICLE-GENERATOR] Checking existing articles in ${artikelDir}...`);
  if (!fs.existsSync(artikelDir)) {
    fs.mkdirSync(artikelDir, { recursive: true });
  }

  const existingFiles = fs.readdirSync(artikelDir).filter((f) => f.endsWith('.md'));
  const existingSlugs = new Set(existingFiles.map((f) => f.replace(/\.md$/, '')));

  console.log(`[ARTICLE-GENERATOR] Found ${existingSlugs.size} existing articles.`);

  // Build programmatic matrix: 30 centers x 7 archetypes = 210 targeted articles
  const candidateTopics = [];
  for (const center of AGRI_CENTERS) {
    for (const archetype of AGRI_ARCHETYPES) {
      candidateTopics.push(generateProceduralArticle(center, archetype));
    }
  }

  const availableTopics = candidateTopics.filter((art) => !existingSlugs.has(art.slug));

  if (availableTopics.length === 0) {
    console.log('[ARTICLE-GENERATOR] All 210+ programmatic topics already published!');
    return [];
  }

  const toPublish = availableTopics.slice(0, count);
  const generatedFiles = [];

  for (const item of toPublish) {
    const filePath = path.join(artikelDir, `${item.slug}.md`);
    fs.writeFileSync(filePath, item.content, 'utf8');
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
