import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stories } from "@/data/stories";
import Photo from "@/components/Photo";
import SubpageHeader from "@/components/SubpageHeader";

export const metadata: Metadata = {
  title: "Travel Stories - Nusantara Travel",
  description:
    "Catatan perjalanan dari Nusantara Travel: panduan praktis, persiapan, daninspirasi rute keliling Indonesia.",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

const [lead, ...rest] = stories;

export default function CeritaPage() {
  return (
    <>
      <SubpageHeader
        eyebrow="Travel stories"
        title="Catatan dari"
        accent="perjalanan kami"
        intro="Pengalaman lapangan yang kami tukar jadi tulisan, supaya lebih banyak yang bisa dipetik sebelum berangkat."
        photo="galeri"
        fallback="/images/destinations/bali.svg"
        crumbs={[{ label: "Cerita" }]}
        meta={[
          { label: "Artikel", value: `${stories.length} cerita` },
          { label: "Topik", value: "Panduan & retrace" },
        ]}
      />

      <section className="bg-cream-50 section">
        <div className="shell">
          <article className="reveal">
            <Link href={`/cerita/${lead.slug}`} className="group block">
              <span className="relative block aspect-[16/9] overflow-hidden bg-ink-900">
                <Photo
                  name={lead.photo}
                  fallback={lead.fallback}
                  alt={lead.photoAlt}
                  sizes="100vw"
                  priority
                  className="zoomable"
                />
              </span>
              <span className="mt-6 block t-label text-sand-700">
                {lead.category}
              </span>
              <span className="mt-3 block t-h1 text-ink-900 transition-colors duration-500 group-hover:text-sand-700">
                {lead.title}
              </span>
              <span className="mt-3 block max-w-xl text-[15px] leading-relaxed text-ink-600">
                {lead.excerpt}
              </span>
              <span className="mt-5 flex items-center gap-3 t-label text-ink-600">
                {formatDate(lead.date)}
                <span aria-hidden className="h-px w-6 bg-ink-900/25" />
                {lead.readMinutes} menit baca
              </span>
            </Link>
          </article>

          <ul className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <li key={s.slug} style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className="reveal">
                <Link href={`/cerita/${s.slug}`} className="group block">
                  <span className="relative block aspect-[4/3] overflow-hidden bg-ink-900">
                    <Photo
                      name={s.photo}
                      fallback={s.fallback}
                      alt={s.photoAlt}
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="zoomable"
                    />
                  </span>
                  <span className="mt-5 block t-label text-sand-700">
                    {s.category}
                  </span>
                  <span className="mt-2.5 block t-h3 text-ink-900 transition-colors duration-500 group-hover:text-sand-700">
                    {s.title}
                  </span>
                  <span className="mt-3 block text-[15px] leading-relaxed text-ink-600">
                    {s.excerpt}
                  </span>
                  <span className="t-label mt-5 flex items-center gap-2 text-ink-600">
                    {formatDate(s.date)}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
