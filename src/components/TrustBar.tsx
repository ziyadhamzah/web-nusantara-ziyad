import { CalendarCheck, MessageCircle, ReceiptText, Users } from "lucide-react";

const points = [
  { icon: CalendarCheck, t: "Itinerary hari per hari", d: "Kamu tahu persis apa yang dikerjakan tiap hari." },
  { icon: ReceiptText, t: "Harga jelas di awal", d: "Yang termasuk dan tidak termasuk ditulis lengkap." },
  { icon: MessageCircle, t: "Bisa tanya dulu", d: "Admin membalas lewat WhatsApp, tanpa form ribet." },
  { icon: Users, t: "Bisa disesuaikan", d: "Rombongan keluarga, teman, atau kantor." },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-4 sm:-mt-8">
      <ul className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {points.map(({ icon: Icon, t, d }, i) => (
          <li key={t} style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className="reveal flex gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_30px_-14px_rgba(7,26,53,0.25)]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/12 text-gold-600 bg-[rgba(240,135,42,0.12)]">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-bold text-[15px] text-navy-950">{t}</p>
              <p className="text-[13px] text-ink-600 leading-snug mt-1">{d}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
