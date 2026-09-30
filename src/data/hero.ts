export type HeroSlide = {
  photo: string;
  fallback: string;
  label: string;
  eyebrow: string;
  lines: string[];
  subtitle: string;
};

export const heroSlides: HeroSlide[] = [
  {
    photo: "bali",
    fallback: "/images/destinations/bali.svg",
    label: "Bali",
    eyebrow: "Sawah, tebing, dan laut selatan",
    lines: ["Jelajahi", "Keindahan", "Nusantara"],
    subtitle:
      "Dari sawah berundak di Ubud sampai tebing Uluwatu, perjalanan yang dirancang untuk ritme manusia, bukan sekadar daftar tempat.",
  },
  {
    photo: "raja-ampat",
    fallback: "/images/destinations/raja-ampat.svg",
    label: "Raja Ampat",
    eyebrow: "Perairan Formosa, Papua Barat Daya",
    lines: ["Temukan", "Surga", "Tropis"],
    subtitle:
      "Gugusan karst yang menghijau, air sebening kaca, dan terumbu karang yang masih jarang disentuh orang lain.",
  },
  {
    photo: "bromo",
    fallback: "/images/destinations/bromo.svg",
    label: "Bromo",
    eyebrow: "Laut pasir dan kawah, Jawa Timur",
    lines: ["Petualangan", "Dimulai", "di Sini"],
    subtitle:
      "Bangun sebelum matahari, naik jip melintasi lautan pasir, dan lihat Indonesia dari titik tertinggi.",
  },
  {
    photo: "lombok",
    fallback: "/images/destinations/lombok.svg",
    label: "Lombok",
    eyebrow: "Pantai pink dan Gili, Nusa Tenggara",
    lines: ["Perjalanan", "yang Tak", "Terlupakan"],
    subtitle:
      "Pantai pink yang jarang ditemukan, island hopping yang tenang, dan hari-hari yang ingin kamu ulangi.",
  },
];
