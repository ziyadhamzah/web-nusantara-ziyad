export type TransportOption = {
  slug: string;
  name: string;
  summary: string;
  photo: string;
  fallback: string;
  photoAlt: string;
  bestFor: string;
  details: string[];
};

export const transportOptions: TransportOption[] = [
  {
    slug: "pesawat",
    name: "Pesawat",
    summary: "Tercepat untuk melompati pulau.",
    photo: "hero",
    fallback: "/images/destinations/raja-ampat.svg",
    photoAlt: "Pemandangan dari ketinggian",
    bestFor: "Raja Ampat, Labuan Bajo, Bali",
    details: ["Bandara dengan koneksi paling sedikit", "Kurang cocok untuk tujuan dalam kota", "Bisa digabung dengan tiket bus"],
  },
  {
    slug: "private-car",
    name: "Private Car",
    summary: "Fleksibel, berhenti di mana saja.",
    photo: "bandung",
    fallback: "/images/destinations/bandung.svg",
    photoAlt: "Jalan lintasan dataran tinggi",
    bestFor: "Bali, Yogyakarta, Bandung",
    details: ["Cocok untuk keluarga atau kelompok", "Driver lokal sudah hafal rute", "Jam berangkat bisa diatur"],
  },
  {
    slug: "bus",
    name: "Bus",
    summary: "Paling ramah kantong untuk jarak jauh.",
    photo: "yogyakarta",
    fallback: "/images/destinations/yogyakarta.svg",
    photoAlt: "Kawasan candi",
    bestFor: "Jawa, Sumatra, Sulawesi",
    details: ["Tiket mudah didapat di terminal", "Waktu tempuh lebih lama", "Bisa bepergian semalam"],
  },
  {
    slug: "shuttle",
    name: "Shuttle",
    summary: "Berangkat bersama peserta lain.",
    photo: "lombok",
    fallback: "/images/destinations/lombok.svg",
    photoAlt: "Pantai di Lombok",
    bestFor: "Bromo, Malang, Pangandaran",
    details: ["Titik kumpul diumumkan lebih dulu", "Pilihan paling ekonomis", "Sudah termasuk di sebagian paket"],
  },
];
