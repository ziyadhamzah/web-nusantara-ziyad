import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Galeri — Nusantara Travel",
  description: "Dokumentasi destinasi dan perjalanan Nusantara Travel.",
};

const items = [
  ["gallery-1", "Pura di Bali", "Bali", "bali"],
  ["gallery-2", "Sunrise di Bromo", "Bromo", "bromo"],
  ["gallery-3", "Candi di Yogyakarta", "Yogyakarta", "yogyakarta"],
  ["gallery-4", "Laut Raja Ampat", "Raja Ampat", "raja-ampat"],
  ["gallery-5", "Pantai di Lombok", "Lombok", "lombok"],
  ["gallery-6", "Kebun teh Bandung", "Bandung", "bandung"],
  ["gallery-7", "Suasana Bali", "Bali", "bali"],
  ["gallery-8", "Kawasan Bromo", "Bromo", "bromo"],
];

export default function GaleriPage() {
  return (
    <>
      <PageHero pill="Galeri" title="Dokumentasi" accent="Perjalanan" intro="Potongan suasana dari destinasi yang ada di paket kami." photo="galeri" fallback="/images/destinations/raja-ampat.svg" />
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pb-20 sm:pb-28 grid grid-cols-2 lg:grid-cols-3 auto-rows-[170px] sm:auto-rows-[240px] gap-3 sm:gap-4">
        {items.map(([n, alt, cap, dest], i) => (
          <figure key={n} className={`group relative overflow-hidden rounded-2xl bg-navy-900 ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
            <Photo name={n} fallback={`/images/destinations/${dest}.svg`} alt={alt} sizes="(min-width:1024px) 33vw, 50vw" className="transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-navy-950/80 to-transparent w-full p-3 text-xs font-bold uppercase tracking-wider text-white">{cap}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
