import Link from "next/link";
import PageHero from "./PageHero";

export default function Hero() {
  return (
    <PageHero
      tall
      pill="Paket wisata Indonesia"
      title="Jelajahi Indonesia,"
      accent="Temukan Ceritamu"
      intro="Dari sunrise Bromo sampai laut Raja Ampat. Pilih paketnya, lihat itinerary dan harganya, lalu tanya langsung ke admin lewat WhatsApp."
      photo="hero"
      fallback="/images/hero/hero-main.svg"
    >
      <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/paket" className="btn-shine rounded-xl bg-gold-500 px-8 py-4 text-[15px] font-extrabold uppercase tracking-wide text-navy-950 hover:bg-gold-400 transition-colors">
          Lihat Paket Wisata
        </Link>
        <Link href="/#destinasi" className="rounded-xl border-2 border-white/40 px-8 py-4 text-[15px] font-bold uppercase tracking-wide text-white hover:bg-white/10 transition-colors">
          Jelajahi Destinasi
        </Link>
      </div>
    </PageHero>
  );
}
