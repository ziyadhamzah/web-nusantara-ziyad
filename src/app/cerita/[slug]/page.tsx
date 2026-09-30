import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { stories } from "@/data/stories";
import { waLink } from "@/lib/config";
import Photo from "@/components/Photo";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

// Cerita berasal dari data statis, jadi slug di luar daftar ini memang tidak ada.
export const dynamicParams = false;

const bySlug = (slug: string) => stories.find((s) => s.slug === slug);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = bySlug(slug);
  if (!story) return {};
  return {
    title: `${story.title} - Nusantara Travel`,
    description: story.excerpt,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = bySlug(slug);
  if (!story) notFound();

  const others = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-cream-100 section">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <Link
              href="/cerita"
              className="reveal inline-flex items-center gap-2 t-label text-ink-600 transition-colors hover:text-sand-700"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Semua cerita
            </Link>

            <p className="reveal t-label mt-10 text-sand-700">{story.category}</p>
            <h1 className="reveal font-display mt-4 text-[2.5rem] leading-[0.98] text-ink-900 sm:text-[3.6rem]">
              {story.title}
            </h1>
            <p className="reveal mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-600 sm:text-lg">
              {story.excerpt}
            </p>

            <div className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink-900/10 pt-6 t-label text-ink-600">
              <span>{story.author}</span>
              <span aria-hidden className="h-px w-6 bg-ink-900/25" />
              <span>{formatDate(story.date)}</span>
              <span aria-hidden className="h-px w-6 bg-ink-900/25" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {story.readMinutes} menit baca
              </span>
            </div>
          </div>
        </header>

        <div className="bg-cream-50 section">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="reveal-img relative aspect-[16/9] w-full overflow-hidden bg-ink-900">
              <Photo
                name={story.photo}
                fallback={story.fallback}
                alt={story.photoAlt}
                sizes="100vw"
                priority
              />
            </div>

            <div className="mx-auto mt-14 max-w-[720px] space-y-12">
              {story.body.map((block, i) => (
                <section key={block.heading} className="reveal">
                  <p className="t-label text-sand-700">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-3 text-[1.9rem] leading-snug text-ink-900 sm:text-[2.2rem]">
                    {block.heading}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[auto_1fr] gap-4 text-[15px] leading-relaxed text-ink-600"
                      >
                        <span
                          aria-hidden
                          className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-sand-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mx-auto mt-16 max-w-[720px] border-t border-ink-900/10 pt-10">
              <p className="font-display text-[1.6rem] leading-snug text-ink-900">
                Sudah punya rencana tujuan?
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                Kirim kebutuhan kamu, kami balik dengan itinerary dan estimasi biaya.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/booking" className="btn btn-ink w-fit">
                  Mulai Booking
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={waLink(`Halo Nusantara Travel, saya baca cerita "${story.title}" dan mau tanya.`)}
                  className="btn btn-outline-dark w-fit"
                  data-wa="1"
                >
                  Tanya via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-ink-900/10 bg-cream-100 section">
        <div className="shell">
          <h2 className="t-h1 text-ink-900 sm:text-[2.4rem]">
            Bacaan lain
          </h2>

          <ul className="mt-10 grid gap-10 sm:grid-cols-3">
            {others.map((s, i) => (
              <li key={s.slug} style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className="reveal">
                <Link href={`/cerita/${s.slug}`} className="group block">
                  <span className="relative block aspect-[4/3] overflow-hidden bg-ink-900">
                    <Photo
                      name={s.photo}
                      fallback={s.fallback}
                      alt={s.photoAlt}
                      sizes="(min-width:640px) 33vw, 100vw"
                      className="zoomable"
                    />
                  </span>
                  <span className="mt-4 block t-label text-sand-700">
                    {s.category}
                  </span>
                  <span className="font-display mt-2 block text-[1.45rem] leading-snug text-ink-900 transition-colors duration-500 group-hover:text-sand-700">
                    {s.title}
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