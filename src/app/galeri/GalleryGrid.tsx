"use client";

import { useMemo, useState } from "react";
import { Images } from "lucide-react";
import { gallery } from "@/data/gallery";
import Photo from "@/components/Photo";
import Lightbox from "@/components/Lightbox";

/** Pola ukuran tile: satu blok besar, sisanya menyesi. */
const spans = [
  "col-span-2 row-span-2",
  "",
  "",
  "",
  "col-span-2",
  "",
  "",
  "",
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("Semua");
  const [open, setOpen] = useState<number | null>(null);

  const places = useMemo(
    () => ["Semua", ...Array.from(new Set(gallery.map((i) => i.destination)))],
    []
  );
  const shown = filter === "Semua" ? gallery : gallery.filter((i) => i.destination === filter);

  return (
    <section className="shell section">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-900/10 pb-5">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {places.map((p) => {
            const active = filter === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setFilter(p)}
                aria-pressed={active}
                className={`relative t-label transition-colors ${
                  active ? "text-ink-900" : "text-ink-600 hover:text-ink-900"
                }`}
              >
                {p}
                <span
                  aria-hidden
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-sand-500 transition-transform duration-400 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <p className="flex items-center gap-2 t-label text-ink-600">
          <Images className="h-4 w-4 text-sand-700" aria-hidden />
          {shown.length} foto
        </p>
      </div>

      <div
        key={filter}
        className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 [grid-auto-flow:dense] sm:auto-rows-[210px] sm:gap-4 lg:auto-rows-[225px] lg:grid-cols-4"
      >
        {shown.map((it, i) => (
          <button
            key={it.name}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Perbesar foto ${it.caption}`}
            style={{ "--d": `${(i % 6) * 80}ms` } as React.CSSProperties}
            className={`reveal-img group relative overflow-hidden bg-ink-900 ${spans[i % spans.length]}`}
          >
            <Photo
              name={it.name}
              fallback={`/images/destinations/${it.destinationSlug}.svg`}
              alt={it.alt}
              sizes="(min-width:1024px) 30vw, 50vw"
              className="zoomable"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-95"
            />
            <span className="absolute inset-x-0 bottom-0 p-4 text-left">
              <span className="block t-label text-white">
                {it.caption}
              </span>
            </span>
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="mt-10 text-center text-[15px] text-ink-600">
          Belum ada foto untuk filter ini.
        </p>
      ) : null}

      {open !== null ? (
        <Lightbox
          items={shown.map((it) => ({
            src: `/images/photos/${it.name}.jpg`,
            alt: it.alt,
            caption: it.caption,
          }))}
          index={open}
          onClose={() => setOpen(null)}
          onIndex={setOpen}
        />
      ) : null}
    </section>
  );
}