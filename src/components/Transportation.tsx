import { Plane, Bus, CarFront, ShipWheel } from "lucide-react";
import { transportOptions } from "@/data/transportation";
import SectionHeading from "./SectionHeading";

const icons = { pesawat: Plane, bus: Bus, car: CarFront, shuttle: ShipWheel } as const;

const label: Record<string, string> = {
  pesawat: "Pesawat",
  bus: "Bus",
  car: "Private Car",
  shuttle: "Shuttle",
};

/** Cara menuju destinasi, ditulis sebagai daftar teks tanpa kartu. */
export default function Transportation() {
  return (
    <section id="transportasi" className="scroll-mt-24 bg-ink-950 section">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            light
            pill="Getting around"
            title="Cara menuju"
            accent="tujuan kamu"
            intro="Setiap tujuan punya pilihan berbeda. Ini yang kami pakai agar ritme perjalanan tetap nyaman."
          />

          <ul className="divide-y divide-white/10 border-t border-white/10">
            {transportOptions.map((t, i) => {
              const Icon = icons[t.slug as keyof typeof icons] ?? Bus;
              return (
                <li
                  key={t.slug}
                  style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
                  className="reveal grid grid-cols-[auto_1fr] gap-5 py-7 sm:gap-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center border border-white/15 text-sand-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block t-h3 text-white">
                      {label[t.slug] ?? t.name}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-white/60">
                      {t.summary}
                    </span>

                    <span className="mt-4 flex flex-wrap items-baseline gap-x-2.5">
                      <span className="t-label text-white/35">Cocok untuk</span>
                      <span className="text-[13px] text-white/70">{t.bestFor}</span>
                    </span>

                    <span className="mt-2 block text-[13px] leading-relaxed text-white/45">
                      {t.details.join(" - ")}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
