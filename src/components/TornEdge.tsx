/** Tepi sobekan di bagian bawah section; warna diisi lewat className (text-*). */
export default function TornEdge({ className = "text-cream-50" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`absolute bottom-[-1px] left-0 w-full h-[34px] sm:h-[52px] ${className}`}
    >
      <path
        fill="currentColor"
        d="M0 60V30l30-8 28 10 34-14 30 12 38-10 36 14 32-12 40 8 36-14 30 12 40-6 34 10 36-12 38 12 30-10 36 10 40-14 34 12 36-8 30 10 38-12 36 12 34-10 40 10 32-12 36 10 38-8 30 12 36-14 40 12 34-10 36 8 30-12 40 12 36-8 34 10 38-14 32 12 36-8 40 10 30-12 36 10 34-8 38 12 32-10 40 8 36-12 30 10 34-8 38 12 36-10 40 8 32-12 36 10 30-8 38 12 34-10 40 8 36-12V60Z"
      />
    </svg>
  );
}
