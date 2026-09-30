import { Sparkles } from "lucide-react";
import Photo from "./Photo";
import TornEdge from "./TornEdge";

export default function PageHero({
  pill,
  title,
  accent,
  intro,
  photo,
  fallback,
  tall = false,
  children,
}: {
  pill: string;
  title: string;
  accent: string;
  intro: string;
  photo: string;
  fallback: string;
  tall?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-navy-950">
      <div data-parallax className="absolute inset-x-0 -top-[6%] -bottom-[6%] -z-10 will-change-transform">
        <div className="kenburns absolute inset-0">
          <Photo name={photo} fallback={fallback} alt="" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/45 to-navy-950/75" />
      </div>
      <div
        className={`mx-auto max-w-4xl px-5 sm:px-8 text-center text-white ${
          tall ? "pt-20 pb-32 sm:pt-32 sm:pb-44" : "pt-16 pb-28 sm:pt-24 sm:pb-36"
        }`}
      >
        <span style={{ "--d": "100ms" } as React.CSSProperties} className="hero-in inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-950/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-400">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          {pill}
        </span>
        <h1 style={{ "--d": "250ms" } as React.CSSProperties} className="hero-in font-display mt-5 text-[3.2rem] sm:text-7xl lg:text-8xl">
          {title} <span className="text-gold-400">{accent}</span>
        </h1>
        <p style={{ "--d": "450ms" } as React.CSSProperties} className="hero-in mx-auto mt-5 max-w-xl text-[16px] sm:text-lg leading-relaxed text-white/85">{intro}</p>
        <div style={{ "--d": "650ms" } as React.CSSProperties} className="hero-in">{children}</div>
      </div>
      <TornEdge />
    </section>
  );
}
