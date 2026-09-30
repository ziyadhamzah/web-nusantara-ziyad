import Link from "next/link";
import { packages } from "@/data/packages";
import PackageCard from "./PackageCard";
import SectionHeading from "./SectionHeading";

export default function FeaturedPackages() {
  return (
    <section className="bg-cream-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <SectionHeading pill="Paket wisata" title="Paket yang paling" accent="sering ditanyakan" />
          <Link href="/paket" className="w-fit rounded-xl border-2 border-navy-950 px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 hover:bg-navy-950 hover:text-white transition-colors">
            Semua Paket
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.slice(0, 3).map((p, i) => (
            <div key={p.slug} style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className="reveal"><PackageCard pkg={p} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
