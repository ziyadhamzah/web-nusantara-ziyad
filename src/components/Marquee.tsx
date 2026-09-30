import { destinations } from "@/data/destinations";

export default function Marquee() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {[...destinations, ...destinations].map((d, i) => (
        <li key={`${d.name}-${i}`} className="flex items-center">
          <span className={`font-display text-[3.2rem] sm:text-7xl px-6 sm:px-10 ${i % 2 ? "text-outline" : "text-navy-950"}`}>{d.name}</span>
          <span className="text-gold-500 text-2xl" aria-hidden>✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden border-y border-navy-900/10 py-3 sm:py-5 select-none" role="presentation">
      <div className="marquee-track">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
