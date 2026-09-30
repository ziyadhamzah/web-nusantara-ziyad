import Link from "next/link";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";

const tiles = [
  { n: "gallery-1", f: "/images/gallery/gallery-1.svg", alt: "Pura di Bali", cls: "col-span-2 row-span-2" },
  { n: "gallery-2", f: "/images/gallery/gallery-2.svg", alt: "Sunrise di Bromo", cls: "" },
  { n: "gallery-4", f: "/images/gallery/gallery-4.svg", alt: "Laut Raja Ampat", cls: "" },
  { n: "gallery-5", f: "/images/gallery/gallery-5.svg", alt: "Pantai di Lombok", cls: "col-span-2 sm:col-span-1" },
  { n: "gallery-3", f: "/images/gallery/gallery-3.svg", alt: "Candi di Yogyakarta", cls: "hidden sm:block" },
];

export default function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
        <SectionHeading pill="Dokumentasi" title="Dari perjalanan" accent="yang lalu" />
        <Link href="/galeri" className="w-fit rounded-xl border-2 border-navy-950 px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 hover:bg-navy-950 hover:text-white transition-colors">
          Lihat Galeri
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[230px] gap-3">
        {tiles.map((t, i) => (
          <div key={t.n} style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className={`reveal group relative overflow-hidden rounded-2xl bg-navy-900 ${t.cls}`}>
            <Photo name={t.n} fallback={t.f} alt={t.alt} sizes="(min-width:1024px) 30vw, 50vw" className="transition-transform duration-700 group-hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}
