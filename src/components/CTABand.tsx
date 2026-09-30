import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/config";

/** Ajakan bertindak untuk halaman interior: panel gelap tanpa sudut membulat. */
export default function CTABand({
  eyebrow = "Langkah berikutnya",
  title,
  body,
  primaryLabel = "Booking Sekarang",
  primaryHref = "/booking",
  waMessage = "Halo Nusantara Travel, saya ingin merencanakan perjalanan.",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  waMessage?: string;
  className?: string;
}) {
  return (
    <section className={`shell pb-16 sm:pb-24 ${className}`}>
      <div className="reveal relative overflow-hidden bg-ink-950 px-6 py-11 sm:px-12 sm:py-14">
        <div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="t-label text-sand-300">{eyebrow}</span>
            <h2 className="mt-4 t-h1 text-white">
              {title}
            </h2>
            <p className="t-lead mt-6 !max-w-xl !text-white/60">{body}</p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn btn-solid">
              {primaryLabel}
            </Link>
            <a
              href={waLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
              data-wa="1"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[12px] text-ink-600">
        Preferensi chat lewat telepon atau WhatsApp - dibalas di jam kerja, Senin sampai Sabtu.
      </p>
    </section>
  );
}