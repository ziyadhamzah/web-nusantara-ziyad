import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/config";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontak — Nusantara Travel",
  description: "Hubungi Nusantara Travel untuk pertanyaan seputar paket wisata dan booking.",
};

export default function KontakPage() {
  return (
    <>
      <PageHero pill="Kami siap membantu" title="Hubungi" accent="Kami" intro="Punya pertanyaan soal paket, tanggal, atau rombongan? Ceritakan rencanamu, tim kami balas lewat WhatsApp." photo="kontak" fallback="/images/destinations/lombok.svg" />
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pb-20 sm:pb-28 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-[0_10px_30px_-16px_rgba(7,26,53,0.3)]">
          <h2 className="font-display text-4xl sm:text-5xl text-navy-950 mb-6">Bagaimana kami bisa membantu?</h2>
          <ContactForm />
        </div>
        <aside className="rounded-3xl bg-navy-950 p-7 sm:p-10 text-white h-fit">
          <h2 className="font-display text-4xl text-gold-400">Kontak langsung</h2>
          <ul className="mt-6 space-y-5 text-[15px]">
            <li className="flex gap-3"><Phone className="h-5 w-5 mt-0.5 text-gold-500 shrink-0" aria-hidden /><div><b>WhatsApp</b><br />{WHATSAPP_DISPLAY}</div></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 mt-0.5 text-gold-500 shrink-0" aria-hidden /><div><b>Email</b><br />halo@nusantaratravel.id</div></li>
            <li className="flex gap-3"><Clock className="h-5 w-5 mt-0.5 text-gold-500 shrink-0" aria-hidden /><div><b>Jam layanan</b><br />Senin–Sabtu, 09.00–20.00 WIB</div></li>
          </ul>
          <a href={waLink("Halo Nusantara Travel, saya ingin bertanya-tanya.")} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 rounded-xl border-2 border-gold-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-colors">
            <MessageCircle className="h-4 w-4" aria-hidden /> Chat langsung
          </a>
        </aside>
      </div>
    </>
  );
}
