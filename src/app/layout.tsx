import type { Metadata } from "next";
import "@fontsource/bebas-neue/400.css";
import "@fontsource-variable/montserrat";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealProvider from "@/components/RevealProvider";
import PromoPopup from "@/components/PromoPopup";

export const metadata: Metadata = {
  title: "Nusantara Travel — Jelajahi Indonesia, Ciptakan Cerita",
  description:
    "Paket wisata Indonesia dengan itinerary jelas, harga transparan, dan booking mudah lewat WhatsApp. Bali, Bromo, Yogyakarta, Raja Ampat, Lombok, dan Bandung.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased bg-cream-50 text-ink-900">
        <noscript><style>{".reveal{opacity:1!important;transform:none!important}"}</style></noscript>
        <RevealProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <PromoPopup />
      </body>
    </html>
  );
}
