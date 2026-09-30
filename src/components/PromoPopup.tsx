"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X, Sparkles, CalendarCheck, ShieldCheck, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/config";

const SEEN_KEY = "nt_promo_seen";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1400);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    sessionStorage.setItem(SEEN_KEY, "1");
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Promo spesial Nusantara Travel"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/80 backdrop-blur-sm p-4"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="hero-in relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <button
          onClick={close}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/70 text-white hover:bg-navy-950"
        >
          <X className="h-4.5 w-4.5" aria-hidden />
        </button>

        {/* Poster visual */}
        <div className="relative h-56 sm:h-64 bg-navy-950 grain">
          <Image src="/images/hero/hero-main.svg" alt="" fill className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/10" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-navy-950">
              <Sparkles className="h-3.5 w-3.5" aria-hidden /> Promo Minggu Ini
            </span>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl text-white leading-none">
              Diskon <span className="text-gold-400">10%</span>
            </h2>
            <p className="text-white/80 text-sm mt-1">untuk booking paket wisata pilihan.</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">
          <ul className="grid grid-cols-2 gap-3 text-[13px] font-medium text-navy-950">
            <li className="flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-gold-600 shrink-0" aria-hidden />Berlaku semua paket</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold-600 shrink-0" aria-hidden />DP 50% saja</li>
          </ul>

          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href={waLink("Halo Nusantara Travel, saya mau klaim promo diskon 10% untuk booking paket wisata!")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn-shine flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3.5 text-[14px] font-extrabold uppercase tracking-wide text-navy-950 hover:bg-gold-400 transition-colors"
            >
              <MessageCircle className="h-4.5 w-4.5" aria-hidden /> Klaim Promo Sekarang
            </a>
            <Link
              href="/paket"
              onClick={close}
              className="text-center text-[13px] font-semibold text-navy-950/70 hover:text-navy-950 py-1"
            >
              Lihat paket wisata dulu
            </Link>
          </div>
          <p className="mt-2 text-center text-[11px] text-ink-600/70">Syarat & ketentuan berlaku. Promo simulasi untuk keperluan portofolio.</p>
        </div>
      </div>
    </div>
  );
}
