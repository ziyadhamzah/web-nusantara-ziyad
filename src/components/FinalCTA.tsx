import Link from "next/link";
import { waLink } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-8 pb-16 sm:pb-24">
      <div data-reveal className="reveal rounded-[2rem] bg-gold-500 px-7 py-12 sm:px-14 sm:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-[2.6rem] sm:text-6xl text-navy-950 max-w-xl">Siap menentukan perjalanan berikutnya?</h2>
          <p className="mt-3 max-w-md text-navy-950/80">Ceritakan mau ke mana dan berapa orang. Kami bantu carikan paket yang paling pas.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link href="/booking" className="btn-shine rounded-xl bg-navy-950 px-7 py-4 text-center text-[14px] font-extrabold uppercase tracking-wide text-white hover:bg-navy-900 transition-colors">
            Booking Sekarang
          </Link>
          <a href={waLink("Halo Nusantara Travel, saya ingin merencanakan perjalanan.")} target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-navy-950 px-7 py-4 text-center text-[14px] font-bold uppercase tracking-wide text-navy-950 hover:bg-navy-950/10 transition-colors">
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
