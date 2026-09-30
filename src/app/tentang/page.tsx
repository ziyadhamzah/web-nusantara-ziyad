import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, ListChecks, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/config";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Tentang Kami — Nusantara Travel",
  description: "Kenalan lebih dekat dengan Nusantara Travel dan cara kami menyusun perjalanan.",
};

const values = [
  { icon: HeartHandshake, t: "Jujur soal harga", d: "Yang termasuk dan tidak termasuk kami jelaskan sejak awal, tanpa biaya tersembunyi." },
  { icon: ListChecks, t: "Itinerary realistis", d: "Kami hindari jadwal yang terlalu padat sampai bikin capek. Namanya juga liburan." },
  { icon: MessageCircle, t: "Komunikasi terbuka", d: "Ada pertanyaan sebelum atau selama perjalanan, tinggal chat WhatsApp." },
];

export default function TentangPage() {
  return (
    <>
      <PageHero pill="Tentang kami" title="Kenalan Dengan" accent="Nusantara Travel" intro="Biro perjalanan yang fokus pada paket wisata domestik, dari gunung dan pantai sampai kota budaya." photo="tentang" fallback="/images/destinations/bali.svg" />

      <section className="mx-auto max-w-7xl px-4 sm:px-8 pb-16 sm:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <SectionHeading pill="Cerita kami" title="Kami bantu rencanakan," accent="kamu tinggal menikmati" />
          <p className="mt-5 leading-relaxed text-ink-600">
            Kami tidak menjual perjalanan generik. Setiap paket disusun dengan ritme yang nyaman dijalani, bukan sekadar daftar tempat yang harus dikunjungi.
          </p>
          <p className="mt-4 leading-relaxed text-ink-600">
            Jenis perjalanan yang kami tangani: liburan keluarga, trip bareng teman, dan rombongan komunitas atau kantor.
          </p>
        </div>
        <div className="relative h-[320px] sm:h-[420px] overflow-hidden rounded-3xl bg-navy-900">
          <Photo name="tentang-2" fallback="/images/destinations/raja-ampat.svg" alt="Perjalanan bersama Nusantara Travel" sizes="(min-width:1024px) 50vw, 100vw" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-8 pb-16 sm:pb-24">
        <ul className="grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, t, d }) => (
            <li key={t} className="rounded-3xl bg-navy-950 p-7 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-950"><Icon className="h-6 w-6" aria-hidden /></span>
              <h3 className="font-display text-3xl mt-5">{t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/65">{d}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/paket" className="rounded-xl bg-gold-500 px-7 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-navy-950 hover:bg-gold-400">Lihat Paket Wisata</Link>
          <a href={waLink("Halo Nusantara Travel, saya ingin diskusi rencana perjalanan.")} target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-navy-950 px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-navy-950 hover:bg-navy-950 hover:text-white transition-colors">Chat WhatsApp</a>
        </div>
      </section>
    </>
  );
}
