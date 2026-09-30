import type { Metadata } from "next";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Paket Wisata — Nusantara Travel",
  description: "Semua paket wisata Nusantara Travel: destinasi, harga, durasi, dan fasilitas.",
};

export default function PaketPage() {
  return (
    <>
      <PageHero pill="Paket wisata" title="Pilih Paket" accent="Perjalananmu" intro="Semua paket lengkap dengan itinerary, fasilitas, dan harga. Tanya-tanya dulu juga boleh sebelum booking." photo="paket" fallback="/images/destinations/bromo.svg" />
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pb-20 sm:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <div key={p.slug} style={{ "--d": `${(i % 3) * 110}ms` } as React.CSSProperties} className="reveal"><PackageCard pkg={p} /></div>
          ))}
        </div>
      </div>
    </>
  );
}
