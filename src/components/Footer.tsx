import Image from "next/image";
import Link from "next/link";
import { Mail, Clock, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/config";
import { destinations } from "@/data/destinations";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-14 sm:py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-5 inline-block rounded-2xl bg-cream-50 p-3">
            <Image src="/images/logo-full.png" alt="Nusantara Travel — Jelajahi Indonesia, Temukan Ceritamu" width={560} height={487} sizes="150px" className="h-auto w-32 sm:w-36" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Membantu kamu merencanakan perjalanan keliling Indonesia, dari itinerary sampai hal-hal kecil yang sering terlewat.
          </p>
        </div>
        <div>
          <h4 className="font-display text-2xl text-gold-400 mb-4">Jelajahi</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-gold-400">Beranda</Link></li>
            <li><Link href="/paket" className="hover:text-gold-400">Paket Wisata</Link></li>
            <li><Link href="/tentang" className="hover:text-gold-400">Tentang Kami</Link></li>
            <li><Link href="/galeri" className="hover:text-gold-400">Galeri</Link></li>
            <li><Link href="/kontak" className="hover:text-gold-400">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-2xl text-gold-400 mb-4">Destinasi</h4>
          <ul className="space-y-2.5 text-sm">
            {destinations.map((d) => (
              <li key={d.name}><Link href="/paket" className="hover:text-gold-400">{d.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-2xl text-gold-400 mb-4">Kontak</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-gold-500 shrink-0" aria-hidden />{WHATSAPP_DISPLAY}</li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-gold-500 shrink-0" aria-hidden />halo@nusantaratravel.id</li>
            <li className="flex gap-2.5"><Clock className="h-4 w-4 mt-0.5 text-gold-500 shrink-0" aria-hidden />Senin–Sabtu, 09.00–20.00 WIB</li>
          </ul>
          <a href={waLink("Halo Nusantara Travel, saya ingin bertanya-tanya.")} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-xl bg-gold-500 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-navy-950 hover:bg-gold-400">
            Chat WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} Nusantara Travel. Project simulasi challenge.</p>
          <p>Jelajahi Indonesia, Temukan Ceritamu.</p>
        </div>
      </div>
    </footer>
  );
}
