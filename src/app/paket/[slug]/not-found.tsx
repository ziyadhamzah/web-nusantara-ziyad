import Link from "next/link";

export default function PackageNotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="text-gold-600 text-xs tracking-[0.2em] uppercase mb-3">404</p>
      <h1 className="font-display text-navy-950 text-2xl sm:text-3xl mb-4">
        Paket Tidak Ditemukan
      </h1>
      <p className="text-ink-600 mb-8">
        Paket yang kamu cari mungkin sudah tidak tersedia atau URL-nya salah.
      </p>
      <Link
        href="/paket"
        className="inline-flex items-center justify-center rounded-sm bg-navy-950 px-6 py-3.5 text-[15px] font-medium text-cream-50 hover:bg-navy-900 transition-colors"
      >
        Lihat Semua Paket
      </Link>
    </div>
  );
}
