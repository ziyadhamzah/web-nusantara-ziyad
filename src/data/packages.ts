export type Itinerary = {
  day: string;
  title: string;
  items: string[];
};

export type TourPackage = {
  slug: string;
  name: string;
  destination: string;
  location: string;
  duration: string;
  price: number;
  priceNote?: string;
  cover: string;
  tag?: string;
  highlights: string[];
  facilities: string[];
  notIncluded: string[];
  description: string;
  itinerary: Itinerary[];
  importantInfo: string[];
};

export const packages: TourPackage[] = [
  {
    slug: "bali-escape",
    name: "Bali Escape",
    destination: "Bali",
    location: "Ubud, Uluwatu, Seminyak",
    duration: "3 Hari 2 Malam",
    price: 2850000,
    priceNote: "per orang, minimal 2 peserta",
    cover: "/images/packages/bali-escape.svg",
    tag: "Paling Diminati",
    highlights: [
      "Sunset di Tebing Uluwatu",
      "Menyusuri sawah berundak Tegallalang",
      "Waktu bebas eksplorasi Seminyak",
    ],
    facilities: [
      "Penginapan 2 malam (kamar AC)",
      "Mobil + driver selama trip",
      "Tiket masuk sesuai itinerary",
      "Air mineral selama perjalanan",
    ],
    notIncluded: [
      "Tiket pesawat pulang-pergi",
      "Makan di luar itinerary",
      "Pengeluaran pribadi",
    ],
    description:
      "Paket ini dirancang untuk yang ingin merasakan Bali tanpa terburu-buru — dari suasana tenang Ubud, tebing dramatis Uluwatu, sampai malam santai di Seminyak. Cocok untuk pasangan, teman dekat, atau solo traveler yang mau jalan dengan ritme yang nyaman.",
    itinerary: [
      {
        day: "Hari 1",
        title: "Kedatangan & Ubud",
        items: [
          "Penjemputan di Bandara Ngurah Rai",
          "Check-in penginapan area Ubud",
          "Sore santai di Tegallalang Rice Terrace",
        ],
      },
      {
        day: "Hari 2",
        title: "Uluwatu & Pantai",
        items: [
          "Sarapan di penginapan",
          "Kunjungan Pura Uluwatu",
          "Sunset di tebing Uluwatu",
          "Makan malam seafood Jimbaran (opsional, biaya sendiri)",
        ],
      },
      {
        day: "Hari 3",
        title: "Seminyak & Kepulangan",
        items: [
          "Waktu bebas di Seminyak",
          "Check-out & transfer ke bandara",
        ],
      },
    ],
    importantInfo: [
      "Itinerary dapat menyesuaikan cuaca dan kondisi lapangan",
      "Booking minimal H-5 sebelum keberangkatan",
      "DP 50% untuk konfirmasi jadwal",
    ],
  },
  {
    slug: "bromo-sunrise-adventure",
    name: "Bromo Sunrise Adventure",
    destination: "Bromo",
    location: "Gunung Bromo, Jawa Timur",
    duration: "2 Hari 1 Malam",
    price: 1350000,
    priceNote: "per orang, minimal 4 peserta",
    cover: "/images/packages/bromo-sunrise.svg",
    tag: "Sunrise Terbaik",
    highlights: [
      "Sunrise dari Penanjakan",
      "Naik jip melintasi lautan pasir",
      "Kawah Bromo & Bukit Teletubbies",
    ],
    facilities: [
      "Penginapan 1 malam dekat kawasan Bromo",
      "Jip 4x4 sesuai rute sunrise",
      "Tiket masuk kawasan Taman Nasional",
      "Pemandu lokal",
    ],
    notIncluded: [
      "Transport menuju titik kumpul",
      "Makan siang & malam",
      "Sewa jaket / perlengkapan dingin",
    ],
    description:
      "Untuk yang mengejar momen sunrise ikonik di atas lautan pasir Bromo. Perjalanan pendek tapi padat — cocok untuk weekend trip bareng teman kantor atau komunitas.",
    itinerary: [
      {
        day: "Hari 1",
        title: "Perjalanan & Persiapan",
        items: [
          "Kumpul di titik meeting point",
          "Perjalanan menuju penginapan area Bromo",
          "Istirahat & briefing pendakian",
        ],
      },
      {
        day: "Hari 2",
        title: "Sunrise & Kawah",
        items: [
          "Penjemputan dini hari dengan jip",
          "Sunrise di Penanjakan",
          "Kawah Bromo & Bukit Teletubbies",
          "Perjalanan pulang",
        ],
      },
    ],
    importantInfo: [
      "Suhu dini hari bisa di bawah 10°C, siapkan jaket tebal",
      "Fisik disarankan cukup fit untuk trekking ringan",
      "Kuota jip terbatas, booking lebih awal",
    ],
  },
  {
    slug: "yogyakarta-heritage-trail",
    name: "Yogyakarta Heritage Trail",
    destination: "Yogyakarta",
    location: "Borobudur, Prambanan, Malioboro",
    duration: "3 Hari 2 Malam",
    price: 2100000,
    priceNote: "per orang, minimal 2 peserta",
    cover: "/images/packages/yogyakarta-heritage.svg",
    highlights: [
      "Sunrise di Candi Borobudur",
      "Menjelajah kompleks Candi Prambanan",
      "Malam kuliner di Malioboro",
    ],
    facilities: [
      "Penginapan 2 malam area Malioboro",
      "Mobil + driver selama trip",
      "Tiket masuk candi",
      "Pemandu lokal di Borobudur & Prambanan",
    ],
    notIncluded: [
      "Tiket kereta/pesawat menuju Yogyakarta",
      "Makan di luar itinerary",
      "Tiket sunrise premium Borobudur (opsional)",
    ],
    description:
      "Perjalanan yang menggabungkan sejarah, budaya, dan kuliner Yogyakarta. Ritme perjalanan santai dengan waktu cukup untuk menikmati tiap tempat, bukan sekadar foto-foto lalu pindah lokasi.",
    itinerary: [
      {
        day: "Hari 1",
        title: "Kedatangan & Malioboro",
        items: [
          "Penjemputan di stasiun/bandara",
          "Check-in penginapan",
          "Malam santai di Malioboro",
        ],
      },
      {
        day: "Hari 2",
        title: "Borobudur & Prambanan",
        items: [
          "Sunrise di Candi Borobudur",
          "Sarapan lokal",
          "Kunjungan Candi Prambanan sore hari",
        ],
      },
      {
        day: "Hari 3",
        title: "Waktu Bebas & Kepulangan",
        items: [
          "Belanja oleh-oleh",
          "Check-out & transfer kepulangan",
        ],
      },
    ],
    importantInfo: [
      "Tiket sunrise Borobudur terbatas, disarankan booking H-7",
      "Gunakan alas kaki nyaman untuk berjalan di kompleks candi",
    ],
  },
  {
    slug: "raja-ampat-explorer",
    name: "Raja Ampat Explorer",
    destination: "Raja Ampat",
    location: "Waisai & Kepulauan sekitarnya",
    duration: "4 Hari 3 Malam",
    price: 6900000,
    priceNote: "per orang, minimal 4 peserta",
    cover: "/images/packages/raja-ampat.svg",
    tag: "Butuh Persiapan Lebih",
    highlights: [
      "Snorkeling di spot terumbu karang terbaik",
      "Island hopping ke pulau-pulau tersembunyi",
      "Sunset di dermaga kayu khas Raja Ampat",
    ],
    facilities: [
      "Penginapan 3 malam (homestay/resort sederhana)",
      "Speedboat island hopping",
      "Alat snorkeling dasar",
      "Pemandu lokal",
    ],
    notIncluded: [
      "Tiket pesawat menuju Sorong",
      "Tiket masuk kawasan konservasi (dibayar di lokasi)",
      "Makan di luar paket",
    ],
    description:
      "Buat yang serius ingin melihat kekayaan laut Indonesia bagian timur. Perjalanan ini butuh waktu tempuh lebih panjang, tapi sepadan dengan pemandangan yang ditawarkan — air jernih, gugusan karst, dan biota laut yang masih terjaga.",
    itinerary: [
      {
        day: "Hari 1",
        title: "Menuju Waisai",
        items: [
          "Penjemputan dari pelabuhan/bandara Waisai",
          "Check-in penginapan",
          "Orientasi lokasi & briefing trip",
        ],
      },
      {
        day: "Hari 2",
        title: "Island Hopping",
        items: [
          "Snorkeling spot pertama",
          "Island hopping ke 2-3 pulau",
          "Makan siang di atas kapal/pulau",
        ],
      },
      {
        day: "Hari 3",
        title: "Eksplorasi Lanjutan",
        items: [
          "Kunjungan spot foto ikonik",
          "Waktu bebas di pantai",
          "Sunset di dermaga",
        ],
      },
      {
        day: "Hari 4",
        title: "Kepulangan",
        items: [
          "Sarapan & bebenah",
          "Transfer menuju pelabuhan/bandara",
        ],
      },
    ],
    importantInfo: [
      "Perjalanan menuju Raja Ampat memerlukan transit, cek jadwal pesawat lebih awal",
      "Bawa sunscreen & obat pribadi, fasilitas medis terbatas",
      "Cuaca laut dapat memengaruhi rute island hopping",
    ],
  },
  {
    slug: "lombok-gili-getaway",
    name: "Lombok & Gili Getaway",
    destination: "Lombok",
    location: "Kuta Lombok & Gili Trawangan",
    duration: "3 Hari 2 Malam",
    price: 2450000,
    priceNote: "per orang, minimal 2 peserta",
    cover: "/images/packages/lombok-gili.svg",
    highlights: [
      "Pantai Pink Kuta Lombok",
      "Menyeberang ke Gili Trawangan",
      "Waktu santai bebas kendaraan bermotor di Gili",
    ],
    facilities: [
      "Penginapan 2 malam",
      "Speedboat menuju Gili Trawangan",
      "Mobil + driver di Lombok daratan",
      "Tiket masuk sesuai itinerary",
    ],
    notIncluded: [
      "Tiket pesawat menuju Lombok",
      "Sewa sepeda/cidomo di Gili",
      "Makan di luar itinerary",
    ],
    description:
      "Kombinasi Lombok daratan yang tenang dan Gili Trawangan yang lebih hidup di malam hari. Cocok untuk yang ingin dua suasana berbeda dalam satu perjalanan singkat.",
    itinerary: [
      {
        day: "Hari 1",
        title: "Kuta Lombok",
        items: [
          "Penjemputan bandara",
          "Kunjungan Pantai Pink",
          "Check-in penginapan Kuta Lombok",
        ],
      },
      {
        day: "Hari 2",
        title: "Menyeberang ke Gili",
        items: [
          "Perjalanan menuju pelabuhan",
          "Speedboat ke Gili Trawangan",
          "Waktu bebas eksplorasi pulau",
        ],
      },
      {
        day: "Hari 3",
        title: "Kepulangan",
        items: [
          "Sarapan santai",
          "Kembali ke Lombok daratan",
          "Transfer menuju bandara",
        ],
      },
    ],
    importantInfo: [
      "Jadwal speedboat menyesuaikan cuaca laut",
      "Gili Trawangan bebas kendaraan bermotor",
    ],
  },
  {
    slug: "bandung-highland-escape",
    name: "Bandung Highland Escape",
    destination: "Bandung",
    location: "Lembang & Ciwidey",
    duration: "2 Hari 1 Malam",
    price: 1150000,
    priceNote: "per orang, minimal 4 peserta",
    cover: "/images/packages/bandung-highland.svg",
    highlights: [
      "Udara sejuk kawasan Lembang",
      "Kebun teh & kawah Ciwidey",
      "Waktu santai untuk kuliner khas Bandung",
    ],
    facilities: [
      "Penginapan 1 malam area Lembang",
      "Mobil + driver selama trip",
      "Tiket masuk sesuai itinerary",
    ],
    notIncluded: [
      "Transport menuju titik kumpul",
      "Makan di luar itinerary",
    ],
    description:
      "Trip singkat untuk kabur dari rutinitas — udara sejuk, pemandangan kebun teh, dan waktu yang cukup untuk menikmati kuliner Bandung tanpa terburu-buru.",
    itinerary: [
      {
        day: "Hari 1",
        title: "Lembang",
        items: [
          "Penjemputan di titik kumpul",
          "Kunjungan kawasan wisata Lembang",
          "Check-in penginapan",
        ],
      },
      {
        day: "Hari 2",
        title: "Ciwidey & Kepulangan",
        items: [
          "Kunjungan kebun teh & Kawah Putih",
          "Makan siang khas Sunda",
          "Perjalanan pulang",
        ],
      },
    ],
    importantInfo: [
      "Suhu malam di Lembang cukup dingin, bawa jaket",
      "Akhir pekan cenderung ramai, disarankan booking H-3",
    ],
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}
