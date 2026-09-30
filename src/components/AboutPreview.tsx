import Link from "next/link";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";

export default function AboutPreview() {
  return (
    <section className="bg-cream-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div data-reveal className="reveal relative h-[320px] sm:h-[440px] overflow-hidden rounded-3xl bg-navy-900">
          <Photo name="tentang" fallback="/images/destinations/yogyakarta.svg" alt="Perjalanan bersama Nusantara Travel" sizes="(min-width:1024px) 50vw, 100vw" />
        </div>
        <div style={{ "--d": "150ms" } as React.CSSProperties} className="reveal">
          <SectionHeading pill="Tentang kami" title="Capek ribet nyusun itinerary?" accent="Serahkan ke kami" />
          <p className="mt-5 leading-relaxed text-ink-600 max-w-lg">
            Nusantara Travel fokus di perjalanan domestik: gunung, pantai, dan kota budaya. Kamu tinggal pilih paket atau ceritakan maunya, sisanya kami atur.
          </p>
          <Link href="/tentang" className="mt-7 inline-block rounded-xl bg-navy-950 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-gold-500 hover:text-navy-950 transition-colors">
            Kenal Kami Lebih Dekat
          </Link>
        </div>
      </div>
    </section>
  );
}
