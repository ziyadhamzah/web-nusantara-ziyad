import { Headset, Map, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  { icon: Map, t: "Itinerary sudah dipikirkan", d: "Urutan tempat disusun supaya tidak bolak-balik di jalan. Kamu tidak perlu riset dari nol." },
  { icon: Headset, t: "Ada yang mendampingi", d: "Driver atau pemandu lokal ikut di lapangan, jadi kalau ada kendala ada orangnya." },
  { icon: MessageCircle, t: "Booking cukup lewat chat", d: "Tanya tanggal, konfirmasi, sampai DP, semuanya lewat satu percakapan WhatsApp." },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24">
      <div className="reveal rounded-[2rem] bg-navy-950 p-7 sm:p-14 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
        <SectionHeading light pill="Kenapa kami" title="Liburan itu buat dinikmati," accent="bukan dipusingkan" />
        <ul className="space-y-5">
          {reasons.map(({ icon: Icon, t, d }, i) => (
            <li key={t} style={{ "--d": `${200 + i * 130}ms` } as React.CSSProperties} className="reveal flex gap-4 rounded-2xl bg-white/5 p-5 border border-white/10">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-white">{t}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-white/65">{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
