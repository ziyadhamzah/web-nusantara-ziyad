"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CalendarCheck2,
  Check,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { packages, formatPrice, getPackageBySlug } from "@/data/packages";
import Photo from "@/components/Photo";
import { destSlug } from "@/components/PackageCard";
import { waLink } from "@/lib/config";

const inputCls =
  "mt-1.5 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-600/45 focus:border-gold-500 focus:outline-none";
const labelCls = "text-[11px] font-bold uppercase tracking-wide text-navy-950";
const errCls = "mt-1 text-[12px] font-medium text-red-600";

const steps = [
  { icon: CalendarCheck2, t: "Isi form booking", d: "Pilih paket, tanggal, dan jumlah peserta." },
  { icon: MessageCircle, t: "Konfirmasi via WhatsApp", d: "Admin kami balas dan pastikan ketersediaan." },
  { icon: ShieldCheck, t: "DP 50% & fix jadwal", d: "Setelah DP, jadwal perjalanan terkunci." },
];

export default function BookingClient() {
  const params = useSearchParams();
  const initialSlug = params.get("paket") ?? "";

  const [slug, setSlug] = useState(initialSlug);
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");
  const [jumlah, setJumlah] = useState(2);
  const [tanggal, setTanggal] = useState("");
  const [catatan, setCatatan] = useState("");
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  const pkg = useMemo(() => getPackageBySlug(slug), [slug]);
  const total = pkg ? pkg.price * Math.max(1, jumlah || 0) : 0;

  const errors = {
    slug: !slug ? "Pilih salah satu paket dulu." : "",
    nama: !nama.trim() ? "Nama wajib diisi." : "",
    telepon: !telepon.trim() ? "Nomor WhatsApp wajib diisi." : "",
    jumlah: !jumlah || jumlah < 1 ? "Minimal 1 peserta." : "",
    tanggal: !tanggal ? "Pilih rencana tanggal keberangkatan." : "",
  };
  const isValid = Object.values(errors).every((e) => !e);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValid || !pkg) return;

    const teks =
      `Halo Nusantara Travel, saya ingin booking:\n\n` +
      `Paket: ${pkg.name} (${pkg.destination})\n` +
      `Nama: ${nama}\n` +
      `No. WhatsApp: ${telepon}\n` +
      `Jumlah peserta: ${jumlah} orang\n` +
      `Rencana tanggal: ${tanggal}\n` +
      `Estimasi total: ${formatPrice(total)}` +
      (catatan ? `\nCatatan: ${catatan}` : "") +
      `\n\nMohon info ketersediaan dan langkah selanjutnya ya. Terima kasih!`;

    window.open(waLink(teks), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 py-10 sm:py-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      {/* FORM */}
      <div className="rounded-3xl bg-white p-6 sm:p-9 shadow-[0_10px_30px_-16px_rgba(7,26,53,0.3)]">
        <h1 className="font-display text-4xl sm:text-5xl text-navy-950">Form Booking</h1>
        <p className="mt-2 text-ink-600 text-[15px]">
          Isi data di bawah, nanti otomatis tersusun jadi pesan WhatsApp ke admin kami.
        </p>

        {sent ? (
          <div className="mt-8 rounded-2xl border-2 border-gold-500 bg-gold-500/10 p-6 text-center">
            <Check className="mx-auto h-10 w-10 text-gold-600" aria-hidden />
            <h2 className="font-display text-3xl text-navy-950 mt-3">Permintaan Terkirim</h2>
            <p className="mt-2 text-ink-600 text-[14px]">
              Kalau tab WhatsApp tidak otomatis terbuka, klik tombol di bawah lagi. Admin akan
              membalas untuk konfirmasi ketersediaan.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-5 text-sm font-bold text-navy-950 underline underline-offset-4"
            >
              Ubah data booking
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-7 space-y-5">
            <div>
              <label htmlFor="bk-paket" className={labelCls}>Pilih Paket *</label>
              <select
                id="bk-paket"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className={inputCls}
              >
                <option value="">— Pilih paket wisata —</option>
                {packages.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} · {p.destination} · {formatPrice(p.price)}
                  </option>
                ))}
              </select>
              {touched && errors.slug && <p className={errCls}>{errors.slug}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="bk-nama" className={labelCls}>Nama Lengkap *</label>
                <input id="bk-nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Budi Santoso" className={inputCls} />
                {touched && errors.nama && <p className={errCls}>{errors.nama}</p>}
              </div>
              <div>
                <label htmlFor="bk-telp" className={labelCls}>Nomor WhatsApp *</label>
                <input id="bk-telp" value={telepon} onChange={(e) => setTelepon(e.target.value)} placeholder="+62 812-3456-7890" className={inputCls} />
                {touched && errors.telepon && <p className={errCls}>{errors.telepon}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="bk-jumlah" className={labelCls}>Jumlah Peserta *</label>
                <input id="bk-jumlah" type="number" min={1} value={jumlah} onChange={(e) => setJumlah(parseInt(e.target.value || "0", 10))} className={inputCls} />
                {touched && errors.jumlah && <p className={errCls}>{errors.jumlah}</p>}
              </div>
              <div>
                <label htmlFor="bk-tanggal" className={labelCls}>Rencana Tanggal Berangkat *</label>
                <input id="bk-tanggal" type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className={inputCls} />
                {touched && errors.tanggal && <p className={errCls}>{errors.tanggal}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="bk-catatan" className={labelCls}>Catatan Tambahan (opsional)</label>
              <textarea id="bk-catatan" rows={3} value={catatan} onChange={(e) => setCatatan(e.target.value)} placeholder="Contoh: butuh kamar terpisah, ada anak kecil, dll." className={inputCls} />
            </div>

            <button
              type="submit"
              className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-navy-950 hover:bg-gold-400 transition-colors"
            >
              <MessageCircle className="h-5 w-5" aria-hidden /> Kirim Booking via WhatsApp
            </button>
            <p className="text-center text-[12px] text-ink-600">
              Belum ada pembayaran di langkah ini. Admin akan konfirmasi ketersediaan dulu.
            </p>
          </form>
        )}
      </div>

      {/* SUMMARY */}
      <aside className="space-y-5">
        <div className="rounded-3xl bg-navy-950 p-6 sm:p-7 text-white">
          <p className="text-xs font-bold uppercase tracking-wide text-white/60">Ringkasan</p>
          {pkg ? (
            <>
              <div className="relative mt-3 h-36 overflow-hidden rounded-2xl bg-navy-900">
                <Photo name={destSlug(pkg.destination)} fallback={pkg.cover} alt={pkg.name} sizes="400px" />
              </div>
              <h2 className="font-display text-3xl mt-4">{pkg.name}</h2>
              <p className="flex items-center gap-1.5 text-[13px] text-white/70 mt-1">
                <MapPin className="h-3.5 w-3.5 text-gold-400" aria-hidden />{pkg.location}
              </p>
              <dl className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-sm">
                <div className="flex justify-between"><dt className="text-white/60">Harga / orang</dt><dd className="font-semibold">{formatPrice(pkg.price)}</dd></div>
                <div className="flex justify-between"><dt className="text-white/60 flex items-center gap-1"><Users className="h-3.5 w-3.5" aria-hidden />Peserta</dt><dd className="font-semibold">{jumlah || 0} orang</dd></div>
              </dl>
              <div className="mt-4 flex items-baseline justify-between border-t border-white/10 pt-4">
                <span className="text-sm text-white/70">Estimasi total</span>
                <span className="font-display text-3xl text-gold-400">{formatPrice(total)}</span>
              </div>
            </>
          ) : (
            <p className="mt-3 text-[14px] text-white/60">Pilih paket di form untuk melihat ringkasan dan estimasi harga di sini.</p>
          )}
        </div>

        <div className="rounded-3xl bg-white p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wide text-gold-600">Proses Booking</p>
          <ol className="mt-4 space-y-4">
            {steps.map(({ icon: Icon, t, d }, i) => (
              <li key={t} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600 font-display text-base">{i + 1}</span>
                <div>
                  <p className="font-bold text-navy-950 text-[14px] flex items-center gap-1.5"><Icon className="h-4 w-4 text-gold-600" aria-hidden />{t}</p>
                  <p className="text-[13px] text-ink-600 mt-0.5">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[12px] text-ink-600 border-t border-navy-900/10 pt-4">
            Belum yakin mau ke mana?{" "}
            <Link href="/paket" className="font-bold text-navy-950 underline underline-offset-2">
              Lihat semua paket
            </Link>
          </p>
        </div>
      </aside>
    </div>
  );
}
