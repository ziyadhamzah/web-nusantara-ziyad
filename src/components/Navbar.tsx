"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Compass, Home, ImageIcon, MapPin, Package, Phone, ArrowRight, CalendarCheck } from "lucide-react";
import Link2 from "next/link";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/config";

const links = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/#destinasi", label: "Destinasi", icon: MapPin },
  { href: "/paket", label: "Paket Wisata", icon: Package },
  { href: "/tentang", label: "Tentang Kami", icon: Compass },
  { href: "/galeri", label: "Galeri", icon: ImageIcon },
  { href: "/kontak", label: "Kontak", icon: Phone },
];

const WA_MSG = "Halo Nusantara Travel, saya ingin bertanya tentang paket wisata.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <div className="bg-black text-white text-center text-[11px] sm:text-xs font-bold tracking-wide py-2 px-4">
        <span className="text-gold-500">●</span>{" "}
        <span className="text-gold-400 uppercase">Tanya dulu, gratis:</span>{" "}
        <span className="uppercase">Cek paket & tanggal langsung via WhatsApp</span>
      </div>

      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "bg-navy-950/95 backdrop-blur-md border-gold-500/30 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)]" : "bg-navy-950 border-white/10"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-[62px] lg:h-[72px]" : "h-[72px] lg:h-[88px]"}`}>
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 shrink-0">
              <span className="flex h-12 w-14 lg:h-14 lg:w-16 items-center justify-center rounded-xl bg-cream-50 p-1.5">
                <Image
                  src="/images/logo-symbol.png"
                  alt="Logo Nusantara Travel"
                  width={360}
                  height={254}
                  sizes="64px"
                  className="h-full w-auto object-contain"
                  priority
                />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[26px] lg:text-[30px] text-white">Nusantara</span>
                <span className="block text-[10px] lg:text-[11px] font-bold tracking-[0.45em] text-gold-500 mt-0.5">TRAVEL</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi utama">
              {links.map(({ href, label, icon: Icon }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex flex-col items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors ${
                      active ? "text-gold-500" : "text-white/85 hover:text-gold-400"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px] text-gold-500" aria-hidden />
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <a href={waLink(WA_MSG)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] font-semibold text-white/90 hover:text-gold-400">
                <Phone className="h-4 w-4 text-gold-500" aria-hidden />
                {WHATSAPP_DISPLAY}
              </a>
              <Link2
                href="/booking"
                className="btn-shine flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-2.5 text-navy-950 shadow-[0_8px_24px_-8px_rgba(240,135,42,0.7)] hover:bg-gold-400 transition-colors"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden />
                <span className="text-[14px] font-extrabold uppercase tracking-wide leading-tight">Booking Sekarang</span>
              </Link2>
            </div>

            <button
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative h-11 w-11 -mr-1 flex items-center justify-center rounded-lg"
            >
              <span className={`absolute h-[2px] w-6 bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[7px]"}`} />
              <span className={`absolute h-[2px] w-6 bg-white transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute h-[2px] w-6 bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[7px]"}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={`lg:hidden fixed inset-x-0 top-[104px] bottom-0 z-40 bg-navy-950 overflow-y-auto transition-opacity duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-5 pt-3 pb-10" aria-label="Navigasi mobile">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={`flex items-center gap-4 py-4 border-b border-white/10 text-[17px] font-semibold ${
                isActive(href) ? "text-gold-500" : "text-white"
              }`}
            >
              <Icon className="h-5 w-5 text-gold-500" aria-hidden />
              <span className="flex-1">{label}</span>
              <ArrowRight className="h-4 w-4 text-white/40" aria-hidden />
            </Link>
          ))}
          <Link2
            href="/booking"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-4 text-center font-extrabold uppercase tracking-wide text-navy-950"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden /> Booking Sekarang
          </Link2>
        </nav>
      </div>
    </>
  );
}
