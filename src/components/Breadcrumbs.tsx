import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({
  items,
  light = true,
}: {
  items?: Crumb[];
  light?: boolean;
}) {
  const tone = light ? "text-white/50" : "text-ink-600/80";
  const active = light ? "text-sand-300" : "text-sand-700";

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-bold uppercase tracking-[0.14em] ${tone}`}>
        <li>
          <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-sand-300">
            <Home className="h-3.5 w-3.5" aria-hidden />
            Beranda
          </Link>
        </li>
        {(items ?? []).map((c) => (
          <li key={c.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-40" aria-hidden />
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-sand-300">
                {c.label}
              </Link>
            ) : (
              <span className={active} aria-current="page">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
