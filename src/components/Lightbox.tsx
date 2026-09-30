"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

/** Lightbox foto: layar penuh, navigasi keyboard, dan kunci scroll halaman. */
export default function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndex: (next: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const move = useCallback(
    (step: number) => {
      if (items.length === 0) return;
      onIndex((index + step + items.length) % items.length);
    },
    [index, items.length, onIndex]
  );

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, onClose]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[100] flex flex-col bg-ink-950/97 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-6">
        <p className="text-[12px] text-white/60">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup galeri"
          className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-sand-300"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center px-4 pb-4 sm:px-16 sm:pb-8">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Foto sebelumnya"
          className="absolute left-2 z-10 hidden h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-sand-300 sm:flex"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden />
        </button>

        <figure className="relative mx-auto h-full w-full max-w-5xl">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </figure>

        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Foto berikutnya"
          className="absolute right-2 z-10 hidden h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-sand-300 sm:flex"
        >
          <ChevronRight className="h-6 w-6" aria-hidden />
        </button>
      </div>

      {item.caption ? (
        <p className="px-5 pb-6 text-center text-[13px] text-white/60 sm:px-8 sm:pb-8">
          {item.caption}
        </p>
      ) : (
        <div className="pb-6 sm:pb-8" />
      )}
    </div>
  );
}