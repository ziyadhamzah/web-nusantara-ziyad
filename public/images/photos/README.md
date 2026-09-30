# Taruh foto asli di sini

Website otomatis memakai foto di folder ini. Kalau file belum ada, tampil ilustrasi cadangan.
Format: .jpg, lebar minimal 1600px (hero) / 1000px (lainnya). Nama file harus persis:

hero.jpg          -> hero homepage (pemandangan lebar)
paket.jpg         -> banner halaman Paket Wisata
tentang.jpg       -> banner halaman Tentang + section About
tentang-2.jpg     -> foto kedua di halaman Tentang
galeri.jpg        -> banner halaman Galeri
kontak.jpg        -> banner halaman Kontak

bali.jpg  bromo.jpg  yogyakarta.jpg  raja-ampat.jpg  lombok.jpg  bandung.jpg
   -> kartu destinasi, kartu paket, dan header detail paket

gallery-1.jpg sampai gallery-8.jpg -> galeri

Sumber foto gratis: unsplash.com, pexels.com (cari "Bali temple", "Mount Bromo", dst).

## Cara paling cepat
Jalankan `npm run photos` (butuh internet). Skrip mengunduh 20 foto berlisensi bebas dari
Wikimedia Commons dengan nama file yang benar, dan membuat CREDITS.md berisi nama fotografer.
Foto yang sudah ada tidak ditimpa. Kalau ada slot yang gagal, isi manual dari unsplash/pexels.
