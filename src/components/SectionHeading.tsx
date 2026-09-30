import { Sparkles } from "lucide-react";

export default function SectionHeading({
  pill,
  title,
  accent,
  intro,
  light = false,
  center = false,
}: {
  pill: string;
  title: string;
  accent: string;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`reveal ${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${
          light
            ? "border-gold-400/40 bg-gold-400/10 text-gold-400"
            : "border-gold-500/30 bg-gold-500/10 text-gold-600"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden />
        {pill}
      </span>
      <h2 className={`font-display mt-4 text-[2.6rem] sm:text-6xl ${light ? "text-white" : "text-navy-950"}`}>
        {title} <span className="text-gold-500">{accent}</span>
      </h2>
      {intro && (
        <p className={`mt-4 leading-relaxed ${light ? "text-white/70" : "text-ink-600"}`}>{intro}</p>
      )}
    </div>
  );
}
