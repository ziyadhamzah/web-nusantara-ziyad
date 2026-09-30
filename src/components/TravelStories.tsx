import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stories } from "@/data/stories";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";

const lead = stories[0];
const rest = stories.slice(1, 4);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

/** Travel stories: satu artikel utama besar, lalu tiga artikel kecil. */
export default function TravelStories() {
  return (
    <section id="cerita" className="scroll-mt-24 bg-cream-100 section">
      <div className="shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Travel stories"
            title="Catatan dari"
            accent="perjalanan kami"
            intro="Pengalaman lapangan yang kami tukar jadi tulisan, supaya rinciannya terasa sebelum berangkat."
          />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <article className="reveal">
            <Link href={`/cerita/${lead.slug}`} className="group block">
              <span className="relative block aspect-[16/10] overflow-hidden bg-ink-900">
                <Photo
                  name={lead.photo}
                  fallback={lead.fallback}
                  alt={lead.photoAlt}
                  sizes="(min-width:1024px) 52vw, 100vw"
                  className="zoomable"
                />
              </span>
              <span className="mt-6 block t-label text-sand-700">
                {lead.category}
              </span>
              <span className="mt-3 block t-h2 text-ink-900 transition-colors duration-500 group-hover:text-sand-700">
                {lead.title}
              </span>
              <span className="mt-3 block max-w-lg text-[15px] leading-relaxed text-ink-600">
                {lead.excerpt}
              </span>
              <span className="mt-5 flex items-center gap-3 t-label text-ink-600">
                {formatDate(lead.date)}
                <span aria-hidden className="h-px w-6 bg-ink-900/25" />
                {lead.readMinutes} menit baca
              </span>
            </Link>
          </article>

          <ul className="flex flex-col divide-y divide-ink-900/10 border-t border-ink-900/10">
            {rest.map((s, i) => (
              <li key={s.slug} style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className="reveal">
                <Link href={`/cerita/${s.slug}`} className="group grid grid-cols-[112px_1fr] gap-5 py-6 sm:grid-cols-[168px_1fr] sm:gap-7">
                  <span className="relative block aspect-[4/3] overflow-hidden bg-ink-900">
                    <Photo
                      name={s.photo}
                      fallback={s.fallback}
                      alt={s.photoAlt}
                      sizes="168px"
                      className="zoomable"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block t-label text-sand-700">
                      {s.category}
                    </span>
                    <span className="mt-2 block t-h3 text-ink-900 transition-colors duration-500 group-hover:text-sand-700">
                      {s.title}
                    </span>
                    <span className="mt-2 block t-label text-ink-600">
                      {s.readMinutes} menit baca
                    </span>
                  </span>
                </Link>
              </li>
            ))}

            <li className="pt-6">
              <Link
                href="/cerita"
                className="inline-flex items-center gap-2 t-label text-ink-900 transition-colors hover:text-sand-700"
              >
                Semua cerita
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}