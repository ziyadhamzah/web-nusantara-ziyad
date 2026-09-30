import Link from "next/link";
import { ArrowRight, Compass, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/config";
import Breadcrumbs from "./Breadcrumbs";
import TornEdge from "./TornEdge";
import { packages } from "@/data/packages";

/**
 * Layar 404 editorial. Dipakai untuk route global dan untuk slug paket yang tidak ada,
 * supaya tampilannya konsisten di kedua kasus.
 */
export default function NotFoundView({
  code = "404",
  title = "Halaman ini tidak ketemu",
  description = "Alamatnya mungkin salah ketik, atau halamannya sudah dipindahkan. Kembali ke katalog paket untuk melanjutkan.",
}: {
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <div className="mx-auto max-w-3xl px-5 pt-8 pb-24 text-center sm:px-8 sm:pb-32 sm:pt-10">
        <div className="flex justify-center">
          <Breadcrumbs items={[{ label: code }]} />
        </div>

        <p
          style={{ "--d": "100ms" } as React.CSSProperties}
          className="hero-in font-display mt-10 text-[4.5rem] leading-none text-white/10 sm:text-[7rem]"
        >
          {code}
        </p>

        <h1
          style={{ "--d": "240ms" } as React.CSSProperties}
          className="hero-in mt-4 t-h1 text-white"
        >
          {title}
        </h1>

        <p
          style={{ "--d": "380ms" } as React.CSSProperties}
          className="hero-in mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/70"
        >
          {description}
        </p>

        <div
          style={{ "--d": "520ms" } as React.CSSProperties}
          className="hero-in mt-9 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link href="/paket" className="btn btn-solid">
            <Compass className="h-4 w-4" aria-hidden />
            Lihat Semua Paket
          </Link>
          <a
            href={waLink("Halo Nusantara Travel, saya butuh bantuan menemukan paket yang tepat.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
            data-wa="1"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Tanya Admin
          </a>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-left">
          <p className="t-label text-white/45">
            Mungkin kamu cari ini
          </p>
          <ul className="mt-4 divide-y divide-white/10 border-t border-white/10">
            {packages.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/paket/${p.slug}`}
                  className="group flex items-center justify-between gap-3 py-4 text-[15px] font-medium text-white/85 transition-colors hover:text-sand-300"
                >
                  <span className="min-w-0 truncate">{p.name}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 opacity-50 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <TornEdge />
    </section>
  );
}