import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { TourPackage, formatPrice } from "@/data/packages";
import Photo from "./Photo";

export const destSlug = (n: string) => n.toLowerCase().replace(/\s+/g, "-");

export default function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <Link
      href={`/paket/${pkg.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-16px_rgba(7,26,53,0.3)] transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
        <Photo name={destSlug(pkg.destination)} fallback={pkg.cover} alt={`${pkg.name} — ${pkg.destination}`} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
        {pkg.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-navy-950">
            {pkg.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-4 text-xs font-semibold text-ink-600">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold-500" aria-hidden />{pkg.destination}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-gold-500" aria-hidden />{pkg.duration}</span>
        </div>
        <h3 className="font-display mt-2 text-[1.9rem] text-navy-950">{pkg.name}</h3>
        <p className="mt-1 text-[13.5px] leading-relaxed text-ink-600 line-clamp-2">{pkg.highlights.join(" · ")}</p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-600">Mulai dari</span>
            <span className="font-display text-3xl text-gold-600">{formatPrice(pkg.price)}</span>
          </div>
          <span className="rounded-xl bg-navy-950 px-4 py-2.5 text-[13px] font-bold text-white group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
            Lihat Detail
          </span>
        </div>
      </div>
    </Link>
  );
}
