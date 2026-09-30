import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";

const slug = (n: string) => n.toLowerCase().replace(/\s+/g, "-");

export default function Destinations() {
  return (
    <section id="destinasi" className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24 scroll-mt-28">
      <SectionHeading pill="Destinasi pilihan" title="Mau ke mana" accent="bulan ini?" intro="Beberapa tujuan yang paling sering ditanyakan calon peserta." />

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((d, i) => (
          <li key={d.name} style={{ "--d": `${(i % 3) * 110}ms` } as React.CSSProperties} className={`reveal ${i === 0 ? "lg:col-span-2" : ""}`}>
            <Link href="/paket" className="group relative block h-[300px] sm:h-[340px] overflow-hidden rounded-3xl bg-navy-900 ring-0 ring-gold-500 transition-shadow duration-500 hover:ring-4">
              <Photo name={slug(d.name)} fallback={d.image} alt={`Pemandangan ${d.name}`} sizes="(min-width:1024px) 40vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              <span className="absolute right-4 top-4 flex h-11 w-11 -translate-y-2 items-center justify-center rounded-full bg-gold-500 text-navy-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden><ArrowUpRight className="h-5 w-5" /></span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-gold-400">
                  <MapPin className="h-3.5 w-3.5" aria-hidden /> {d.province}
                </p>
                <h3 className="font-display text-4xl text-white mt-1">{d.name}</h3>
                <p className="mt-1 text-[13px] text-white/75 line-clamp-2 max-w-md">{d.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
