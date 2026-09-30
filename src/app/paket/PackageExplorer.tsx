"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { packages, formatPrice, type TourPackage } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

const SORTS = [
  { id: "rekomendasi", label: "Rekomendasi" },
  { id: "termurah", label: "Harga terendah" },
  { id: "termahal", label: "Harga tertinggi" },
  { id: "terpanjang", label: "Durasi terpanjang" },
] as const;

type SortId = (typeof SORTS)[number]["id"];

/** "3 Hari 2 Malam" -> 3 (untuk sorting durasi). */
function dayCount(duration: string) {
  const m = duration.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

function sortPackages(list: TourPackage[], sort: SortId) {
  const copy = [...list];
  switch (sort) {
    case "termurah":
      return copy.sort((a, b) => a.price - b.price);
    case "termahal":
      return copy.sort((a, b) => b.price - a.price);
    case "terpanjang":
      return copy.sort((a, b) => dayCount(b.duration) - dayCount(a.duration));
    default:
      return copy;
  }
}

export default function PackageExplorer() {
  const [query, setQuery] = useState("");
  const [dest, setDest] = useState("Semua");
  const [sort, setSort] = useState<SortId>("rekomendasi");

  const destinations = useMemo(
    () => ["Semua", ...Array.from(new Set(packages.map((p) => p.destination)))],
    []
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = packages.filter((p) => {
      const cocokDest = dest === "Semua" || p.destination === dest;
      const haystack = [p.name, p.destination, p.location, p.duration, ...p.highlights]
        .join(" ")
        .toLowerCase();
      return cocokDest && (!q || haystack.includes(q));
    });
    return sortPackages(filtered, sort);
  }, [query, dest, sort]);

  const bersih = () => {
    setQuery("");
    setDest("Semua");
    setSort("rekomendasi");
  };
  const terfilter = query.trim() !== "" || dest !== "Semua" || sort !== "rekomendasi";

  return (
    <section className="shell pb-20 pt-14 sm:pb-24 sm:pt-16">
      {/* Toolbar */}
      <div className="border-y border-ink-900/10 py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-600"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari paket, destinasi, atau kegunaan"
              aria-label="Cari paket"
              className="w-full border-b border-ink-900/20 bg-transparent py-3.5 pl-11 pr-4 text-[15px] text-ink-900 transition-colors placeholder:text-ink-600/60 focus:border-sand-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal className="hidden h-4 w-4 shrink-0 text-ink-600 sm:block" aria-hidden />
            <label htmlFor="urutkan" className="sr-only">
              Urutkan paket
            </label>
            <select
              id="urutkan"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortId)}
              className="w-full border-b border-ink-900/20 bg-transparent px-1 py-3.5 text-[15px] font-medium text-ink-900 transition-colors focus:border-sand-500 focus:outline-none sm:w-auto"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
          {destinations.map((d) => {
            const aktif = dest === d;
            return (
              <button
                key={d}
                type="button"
                onClick={() => setDest(d)}
                aria-pressed={aktif}
                className={`t-label relative transition-colors ${
                  aktif ? "text-ink-900" : "text-ink-600 hover:text-ink-900"
                }`}
              >
                {d}
                <span
                  aria-hidden
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-sand-500 transition-transform duration-400 ${
                    aktif ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Status hasil */}
      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-ink-900/10 pb-4">
        <p className="text-[15px] text-ink-600">
          Menampilkan{" "}
          <span className="t-num text-[1.5rem] text-ink-900">{results.length}</span> dari{" "}
          {packages.length} paket
          {dest !== "Semua" ? <span> - {dest}</span> : null}
        </p>
        {terfilter ? (
          <button
            type="button"
            onClick={bersih}
            className="t-label inline-flex items-center gap-1.5 text-sand-700 transition-colors hover:text-ink-900"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
            Atur ulang
          </button>
        ) : (
          <p className="text-[13px] text-ink-600/80">
            Harga per orang, sudah termasuk yang tercantum
          </p>
        )}
      </div>

      {/* Grid */}
      {results.length > 0 ? (
        <div
          key={`${dest}-${sort}-${query}`}
          className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {results.map((p, i) => (
            <div
              key={p.slug}
              style={{ "--d": `${(i % 3) * 110}ms` } as React.CSSProperties}
              className="reveal"
            >
              <PackageCard pkg={p} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 border-t border-ink-900/10 px-6 py-20 text-center">
          <p className="t-h1 text-ink-900">Belum ada yang cocok</p>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-600">
            Coba kata kunci lain atau atur ulang filter. Kalau destinasi yang kamu cari belum ada di
            daftar, chat admin - biasanya masih bisa disusun ulang.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={bersih} className="btn btn-ink">
              Reset Filter
            </button>
            <a href="/kontak" className="btn btn-outline-dark">
              Tanya Admin
            </a>
          </div>
        </div>
      )}

      <p className="mt-10 text-center text-[13px] text-ink-600/80">
        Harga termurah saat ini {formatPrice(Math.min(...packages.map((p) => p.price)))} per orang.
      </p>
    </section>
  );
}