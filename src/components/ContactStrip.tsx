import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/config";

/** Ajakan menghubungi sebelum footer. Detail kontak ada di footer, tidak diulang di sini. */
export default function ContactStrip() {
  return (
    <section id="kontak" className="scroll-mt-24 border-y border-ink-900/10 bg-cream-100">
      <div className="shell section">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="reveal">
            <p className="t-label text-sand-700">Contact</p>
            <h2 className="mt-5 t-h1 text-ink-900">
              Ada yang mau <span className="text-sand-700">ditanyakan?</span>
            </h2>
            <p className="t-lead mt-6">
              Ceritakan tujuan dan tanggalnya. Tim kami jawab lewat WhatsApp, dan kalau sudah jelas
              baru/details surpresa di akhir tidak ada.
            </p>
          </div>

          <div className="reveal flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={waLink("Halo Nusantara Travel, saya mau tanya soal paket")}
              className="btn btn-ink w-fit"
              data-wa="1"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat via WhatsApp
            </a>
            <Link href="/kontak" className="btn btn-outline-dark w-fit">
              Halaman kontak
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}