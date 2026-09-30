import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { packages, getPackageBySlug, formatPrice } from "@/data/packages";
import { waLink } from "@/lib/config";
import PackageCard, { destSlug } from "@/components/PackageCard";
import Photo from "@/components/Photo";
import TornEdge from "@/components/TornEdge";
import { ArrowLeft, CalendarCheck, Check, Clock, Info, MapPin, MessageCircle, X } from "lucide-react";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} — Nusantara Travel`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const related = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);
  const waText = `Halo Nusantara Travel, saya ingin tanya-tanya soal paket "${pkg.name}".`;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950">
        <div className="absolute inset-0 -z-10">
          <Photo name={destSlug(pkg.destination)} fallback={pkg.cover} alt={`${pkg.name} — ${pkg.destination}`} priority />
          <div className="absolute inset-0 bg-navy-950/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-8 pt-10 pb-28 sm:pt-16 sm:pb-40 text-white">
          <Link href="/paket" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-gold-400">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Semua paket
          </Link>
          <h1 className="font-display mt-5 text-[3rem] sm:text-7xl max-w-3xl">{pkg.name}</h1>
          <ul className="mt-5 flex flex-wrap gap-2.5 text-[13px] font-semibold">
            <li className="flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2"><MapPin className="h-4 w-4 text-gold-400" aria-hidden />{pkg.location}</li>
            <li className="flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2"><Clock className="h-4 w-4 text-gold-400" aria-hidden />{pkg.duration}</li>
            <li className="rounded-full bg-gold-500 px-4 py-2 text-navy-950 font-extrabold">{formatPrice(pkg.price)}</li>
          </ul>
        </div>
        <TornEdge />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 pb-16 sm:pb-24 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-3xl bg-white p-6 sm:p-8">
            <h2 className="font-display text-4xl text-navy-950">Deskripsi</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{pkg.description}</p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[14.5px] font-medium text-navy-950">
                  <Check className="h-5 w-5 shrink-0 text-gold-500" aria-hidden />{h}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <h3 className="font-display text-3xl text-navy-950">Sudah Termasuk</h3>
              <ul className="mt-4 space-y-2.5">
                {pkg.facilities.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[14px] text-ink-600"><Check className="h-4 w-4 mt-0.5 shrink-0 text-gold-500" aria-hidden />{f}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <h3 className="font-display text-3xl text-navy-950">Belum Termasuk</h3>
              <ul className="mt-4 space-y-2.5">
                {pkg.notIncluded.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[14px] text-ink-600"><X className="h-4 w-4 mt-0.5 shrink-0 text-ink-600/60" aria-hidden />{f}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 sm:p-8">
            <h2 className="font-display text-4xl text-navy-950">Itinerary</h2>
            <ol className="mt-6 space-y-0">
              {pkg.itinerary.map((day, i) => (
                <li key={day.day} className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                  {i < pkg.itinerary.length - 1 && <span className="absolute left-[19px] top-10 bottom-0 w-px bg-gold-500/40" aria-hidden />}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-950 font-display text-lg text-gold-400">{i + 1}</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-gold-600">{day.day}</p>
                    <h3 className="font-bold text-navy-950 text-lg">{day.title}</h3>
                    <ul className="mt-2 space-y-1.5">
                      {day.items.map((it) => (
                        <li key={it} className="text-[14px] text-ink-600">• {it}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-3xl border-2 border-dashed border-gold-500/50 bg-gold-500/5 p-6 sm:p-8">
            <h3 className="font-display text-3xl text-navy-950 flex items-center gap-2"><Info className="h-6 w-6 text-gold-500" aria-hidden />Informasi Penting</h3>
            <ul className="mt-3 space-y-2">
              {pkg.importantInfo.map((f) => (
                <li key={f} className="text-[14px] text-ink-600">• {f}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 h-fit rounded-3xl bg-navy-950 p-7 text-white">
          <p className="text-xs font-bold uppercase tracking-wide text-white/60">Mulai dari</p>
          <p className="font-display text-5xl text-gold-400 mt-1">{formatPrice(pkg.price)}</p>
          {pkg.priceNote && <p className="text-[13px] text-white/60 mt-1">{pkg.priceNote}</p>}
          <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
            <div className="flex justify-between gap-4"><dt className="text-white/60">Destinasi</dt><dd className="font-semibold text-right">{pkg.destination}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-white/60">Durasi</dt><dd className="font-semibold text-right">{pkg.duration}</dd></div>
          </dl>
          <Link
            href={`/booking?paket=${pkg.slug}`}
            className="btn-shine mt-7 flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-4 text-[14px] font-extrabold uppercase tracking-wide text-navy-950 hover:bg-gold-400 transition-colors"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden /> Booking Paket Ini
          </Link>
          <a
            href={waLink(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border-2 border-navy-900/15 px-5 py-3.5 text-[13px] font-bold uppercase tracking-wide text-navy-950 hover:bg-navy-900/5 transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> Tanya Dulu via WA
          </a>
          <p className="mt-3 text-center text-xs text-white/50">Harga simulasi, konfirmasi ke admin sebelum booking.</p>
        </aside>
      </div>

      <section className="bg-cream-100/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-14 sm:py-20">
          <h2 className="font-display text-4xl sm:text-5xl text-navy-950 mb-8">Paket lainnya</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
