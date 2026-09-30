import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import Photo from "./Photo";

export type HeaderMeta = { label: string; value: string };

/** Header editorial untuk halaman interior: teks rata kiri + blok foto + deretan meta. */
export default function SubpageHeader({
  eyebrow,
  title,
  accent,
  intro,
  photo,
  fallback,
  crumbs,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  photo?: string;
  fallback?: string;
  crumbs?: Crumb[];
  meta?: HeaderMeta[];
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-ink-950">
      <div className="shell pt-8 pb-20 sm:pt-10 sm:pb-24">
        <Breadcrumbs items={crumbs} />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="hero-in t-label text-sand-400">{eyebrow}</p>

            <h1 className="hero-in t-display mt-5 text-white">
              {title} <span className="text-sand-400">{accent}</span>
            </h1>

            <p className="hero-in t-lead mt-7 !text-white/60">{intro}</p>

            {children ? (
              <div style={{ "--d": "460ms" } as React.CSSProperties} className="hero-in mt-9">
                {children}
              </div>
            ) : null}
          </div>

          {photo ? (
            <figure
              style={{ "--d": "260ms" } as React.CSSProperties}
              className="hero-in relative hidden lg:block"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-ink-900">
                <Photo
                  name={photo}
                  fallback={fallback ?? "/images/destinations/bali.svg"}
                  alt=""
                  priority
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
              </div>
            </figure>
          ) : null}
        </div>

        {meta && meta.length > 0 ? (
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/12 pt-8 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="t-label text-white/40">{m.label}</dt>
                <dd className="t-num mt-3 t-h3 text-white">{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}