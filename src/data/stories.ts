export type StoryBlock = {
  heading: string;
  items: string[];
};

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  photo: string;
  fallback: string;
  photoAlt: string;
  author: string;
  body: StoryBlock[];
};

export const stories: Story[] = [
  {
    slug: "tips-liburan-ke-bali",
    title: "Tips Liburan ke Bali",
    excerpt: "Musim, jam kunjungan, dan hal kecil yang bikin perjalanan jauh lebih enak.",
    category: "Panduan",
    date: "2026-08-18",
    readMinutes: 6,
    photo: "bali",
    fallback: "/images/destinations/bali.svg",
    photoAlt: "Sawah berundak di Bali",
    author: "Tim Nusantara Travel",
    body: [
      {
        heading: "Tentukan musimnya",
        items: [
          "Musim kering: Mei sampai Oktober, langit lebih cerah",
          "Musim hujan: beberapa lokasi licin dan akses bisa tertutup",
          "Kalau tanggal fleksibel, hindari akhir pekan saat libur nasional",
        ],
      },
      {
        heading: "Datang sebelum jam sembilan",
        items: [
          "Tegallalang dan Uluwatu sudah ramai sejak pagi buta",
          "Pagi memberi cahaya lebih lembut dan foto tanpa banyak orang",
          "Datang pagi supaya lagi sepi saat mau pindah spot",
        ],
      },
      {
        heading: "Bawa uang tunai",
        items: [
          "Warung kecil dan driver sering tidak menerima nontunai",
          "Siapkan pecahan kecil untuk pembayaran di pura",
          "Sisakan uang untuk pengeluaran yang tidak terduga",
        ],
      },
      {
        heading: "Satu agenda untuk satu hari",
        items: [
          "Pilih satu area utama setiap hari, sisanya cadangan",
          "Empat kota dalam dua hari biasanya berakhir dengan lelah",
          "Waktu kosong itu bagian dari pengalaman, bukan sia-sia",
        ],
      },
    ],
  },
  {
    slug: "persiapan-naik-gunung-bromo",
    title: "Persiapan Sebelum Naik Gunung Bromo",
    excerpt: "Checklist singkat supaya kamu fokus menikmati sunrise-nya.",
    category: "Persiapan",
    date: "2026-08-02",
    readMinutes: 7,
    photo: "bromo",
    fallback: "/images/destinations/bromo.svg",
    photoAlt: "Laut pasir di kawasan Bromo",
    author: "Tim Nusantara Travel",
    body: [
      {
        heading: "Kondisi fisik",
        items: [
          "Jalan naik dan turun setelah titik turun mobil",
          "Gunakan langkah pelan, terutama di bagian berundak",
          "Turun lebih pelan daripada naik",
        ],
      },
      {
        heading: "Pakaian berlapis",
        items: [
          " Lapisan dasar yang menyerap keringat",
          "Lapisan tengah yang menahan angin",
          "Lapisan luar tahan air, bukan yang tebal",
          "Suhu berubah drastis begitu matahari naik",
        ],
      },
      {
        heading: "Alas kaki dan perlengkapan",
        items: [
          "Sepatu yang sudah sering dipakai, bukan yang baru",
          "Jaket tebal untuk jam tiga pagi",
          "Senter kepala, paling penting untuk perjalanan pulang",
          "Obat safari dan air mineral untuk perjalanan",
        ],
      },
      {
        heading: "Tepat waktu di titik kumpul",
        items: [
          "Catat nama hotel atau titik kumpul, bukan nama desa",
          "Tambah waktu turun ke titik kumpul kalau menginap di kota",
          "Konfirmasi jam keberangkatan dua hari sebelumnya",
        ],
      },
    ],
  },
  {
    slug: "hidden-gem-indonesia",
    title: "Hidden Gem Indonesia",
    excerpt: "Tempat yang belum ramai tapi layak masuk daftar Travelers berikutnya.",
    category: "Inspirasi",
    date: "2026-07-21",
    readMinutes: 8,
    photo: "raja-ampat",
    fallback: "/images/destinations/raja-ampat.svg",
    photoAlt: "Perairan Raja Ampat",
    author: "Tim Nusantara Travel",
    body: [
      {
        heading: "Ngarai Sumur Upas, Jambi",
        items: [
          "Wilayah Kerinci jarang masuk itinerary",
          "Dinding canyon tinggi dan air cukup jernih",
          "Terbaik setelah musim hujan",
          "Akses lebih mudah dengan pemandu lokal",
        ],
      },
      {
        heading: "Pulau Sangeang, Sumbawa",
        items: [
          "Salah satu titik menyelam yang belum banyak disentuh",
          "Bisa disambung dengan Sumbawa Besar dalam satu rute",
          "Penginapan masih sederhana, sebaiknya dipesan dari jauh hari",
        ],
      },
      {
        heading: "Bukit Triwarna, Ende",
        items: [
          "Warna dinding berubah tergantung jam dan arah cahaya",
          "Pendakian singkat dari campsite utama",
          "Bagus disambung dengan snorkeling di Labuan Bajo",
        ],
      },
    ],
  },
  {
    slug: "memilih-paket-wisata",
    title: "Tips Memilih Paket Wisata",
    excerpt: "Harga termurah belum tentu yang paling layak. Ini yang perlu ditanyakan.",
    category: "Panduan",
    date: "2026-07-05",
    readMinutes: 5,
    photo: "yogyakarta",
    fallback: "/images/destinations/yogyakarta.svg",
    photoAlt: "Candi di Yogyakarta",
    author: "Tim Nusantara Travel",
    body: [
      {
        heading: "Baca itinerary per hari",
        items: [
          "Banyak paket terlihat lengkap karena fotonya bagus",
          "Cek berapa jam kamu berada di tiap lokasi",
          "Paket dengan empat tempat sehari biasanya kurang santai",
        ],
      },
      {
        heading: "Cek apa yang termasuk dan tidak",
        items: [
          "Makan di luar itinerary berarti biaya tambahan",
          "Tiket masuk yang tidak disebut sering jadi kejutan",
          "Tanya apakah penginapan sudah termasuk atau belum",
        ],
      },
      {
        heading: "Tanyakan hal yang jarang ditanyakan",
        items: [
          "Berapa minimal pesertanya",
          "Bagaimana kalau tanggalnya berubah",
          "Berapa lama konfirmasi setelah DP",
          "Apakah bisa customized untuk kelompok",
        ],
      },
    ],
  },
  {
    slug: "barang-wajib-dibawa",
    title: "Apa Saja yang Perlu Dibawa",
    excerpt: "Barang yang sering dilupakan: pengisi daya, obat pribadi, dan tas kecil.",
    category: "Persiapan",
    date: "2026-06-24",
    readMinutes: 6,
    photo: "lombok",
    fallback: "/images/destinations/lombok.svg",
    photoAlt: "Pantai di Lombok",
    author: "Tim Nusantara Travel",
    body: [
      {
        heading: "Kotak P3K",
        items: [
          "Obat pribadi dan resepnya",
          "Plester, antihistamin, dan multivitamin",
          "Gel untuk lecet atau sunscreen",
          "Obat yang jarang dijual di sekitar lokasi",
        ],
      },
      {
        heading: "Daya dan kabel",
        items: [
          "Satu power bank 10.000 mAh cukup untuk sehari penuh",
          "Masalahnya biasanya lupa membawa kabelnya",
          "Adaptor stopkontak untuk tipe yang berbeda",
        ],
      },
      {
        heading: "Tas dan prioritas",
        items: [
          "Tas kecil untuk dibawa saat jalan",
          "Pakaian yang cepat kering dan tidak mudah kusut",
          "Kamera atau HP yang sinyalnya kuat",
          "Bawa lip balm untuk bibir yang mudah kering",
        ],
      },
    ],
  },
];
