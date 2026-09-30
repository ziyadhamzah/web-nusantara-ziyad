import type { Metadata } from "next";
import NotFoundView from "@/components/NotFoundView";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan — Nusantara Travel",
  description: "Alamat yang kamu buka tidak tersedia. Kembali ke katalog paket Nusantara Travel.",
};

export default function NotFound() {
  return <NotFoundView />;
}
