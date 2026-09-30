import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Booking — Nusantara Travel",
  description: "Booking paket wisata Nusantara Travel: pilih paket, isi data, dan konfirmasi via WhatsApp.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        pill="Booking"
        title="Ayo Susun"
        accent="Perjalananmu"
        intro="Pilih paket, isi data peserta, dan kami bantu konfirmasi jadwal lewat WhatsApp."
        photo="booking"
        fallback="/images/destinations/lombok.svg"
      />
      <Suspense fallback={null}>
        <BookingClient />
      </Suspense>
    </>
  );
}
