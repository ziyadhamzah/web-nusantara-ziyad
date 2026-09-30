export type Destination = {
  name: string;
  province: string;
  description: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    name: "Bali",
    province: "Bali",
    description:
      "Dari sawah berundak sampai tebing menghadap laut — Bali selalu punya sisi baru untuk dijelajahi.",
    image: "/images/destinations/bali.svg",
  },
  {
    name: "Bromo",
    province: "Jawa Timur",
    description:
      "Lautan pasir dan sunrise di atas kawah aktif, favorit untuk trip singkat akhir pekan.",
    image: "/images/destinations/bromo.svg",
  },
  {
    name: "Yogyakarta",
    province: "DI Yogyakarta",
    description:
      "Candi bersejarah, jalanan Malioboro yang ramai, dan kuliner yang selalu bikin balik lagi.",
    image: "/images/destinations/yogyakarta.svg",
  },
  {
    name: "Raja Ampat",
    province: "Papua Barat Daya",
    description:
      "Salah satu titik snorkeling terbaik dunia, dengan gugusan karst dan laut sejernih kaca.",
    image: "/images/destinations/raja-ampat.svg",
  },
  {
    name: "Lombok",
    province: "Nusa Tenggara Barat",
    description:
      "Pantai pink yang jarang ditemukan di tempat lain, plus akses mudah ke Gili Trawangan.",
    image: "/images/destinations/lombok.svg",
  },
  {
    name: "Bandung",
    province: "Jawa Barat",
    description:
      "Udara sejuk dataran tinggi, kebun teh, dan kuliner khas Sunda yang selalu ramai peminat.",
    image: "/images/destinations/bandung.svg",
  },
];
