# Nusantara Travel

Website travel wisata untuk **Nusantara Travel** — dibangun dengan Next.js (App Router) + Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Struktur halaman

- `/` — Homepage (hero, destinasi, paket unggulan, why us, about, gallery, CTA)
- `/paket` — Daftar semua paket wisata
- `/paket/[slug]` — Detail paket (deskripsi, fasilitas, itinerary, CTA booking)
- `/tentang` — Tentang Nusantara Travel
- `/galeri` — Galeri dokumentasi
- `/kontak` — Kontak & WhatsApp

## Yang perlu diganti sebelum go-live

1. **Nomor WhatsApp** — edit `src/lib/config.ts`, ganti `WHATSAPP_NUMBER`.
2. **Data paket wisata** — edit `src/data/packages.ts` (harga, itinerary, fasilitas masih data dummy yang wajar, sesuaikan dengan paket asli).
3. **Foto destinasi & gallery** — semua gambar saat ini adalah ilustrasi SVG bergaya editorial (bukan foto asli), dibuat karena lingkungan build ini tidak punya akses ke sumber foto stok/eksternal. Ganti dengan foto asli destinasi di:
   - `public/images/hero/`
   - `public/images/destinations/`
   - `public/images/packages/`
   - `public/images/gallery/`
   Timpa file dengan nama yang sama (format `.jpg`/`.webp` juga bisa, tinggal update ekstensi di kode terkait) untuk hasil yang lebih meyakinkan sebagai bisnis travel sungguhan.
4. **Email & jam layanan** — ada di `src/components/Footer.tsx` dan `src/app/kontak/page.tsx`.

## Deploy

Project ini kompatibel dengan Vercel (paling mudah), Netlify, atau hosting Node lainnya:

```bash
npx vercel
```

Atau push ke GitHub lalu import repo di vercel.com/new.

## Catatan

- Tidak ada backend/database — semua data paket berupa data statis di `src/data/`.
- Testimonial sengaja tidak disertakan karena belum ada data testimoni asli.
- Semua CTA booking mengarahkan ke WhatsApp dengan pesan pre-filled sesuai konteks halaman.
