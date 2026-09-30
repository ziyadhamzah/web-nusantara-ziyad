"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { waLink } from "@/lib/config";

const field = "mt-1.5 w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-600/50 focus:border-gold-500 focus:outline-none";
const label = "text-[11px] font-bold uppercase tracking-wide text-navy-950";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [paket, setPaket] = useState("");
  const [pesan, setPesan] = useState("");

  function kirim(e: React.FormEvent) {
    e.preventDefault();
    const teks = `Halo Nusantara Travel, saya ${nama}.${paket ? ` Saya tertarik dengan ${paket}.` : ""}${pesan ? ` ${pesan}` : ""}`;
    window.open(waLink(teks), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={kirim} className="space-y-5">
      <div>
        <label htmlFor="nama" className={label}>Nama lengkap *</label>
        <input id="nama" required value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Budi Santoso" className={field} />
      </div>
      <div>
        <label htmlFor="paket" className={label}>Paket / destinasi yang diminati</label>
        <input id="paket" value={paket} onChange={(e) => setPaket(e.target.value)} placeholder="Contoh: Bali Escape, 4 orang" className={field} />
      </div>
      <div>
        <label htmlFor="pesan" className={label}>Pertanyaan atau rencana tanggal</label>
        <textarea id="pesan" rows={4} value={pesan} onChange={(e) => setPesan(e.target.value)} placeholder="Ceritakan singkat rencanamu..." className={field} />
      </div>
      <button type="submit" className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-4 text-[14px] font-extrabold uppercase tracking-wide text-navy-950 hover:bg-gold-400 transition-colors">
        <Send className="h-4 w-4" aria-hidden /> Kirim via WhatsApp
      </button>
    </form>
  );
}
