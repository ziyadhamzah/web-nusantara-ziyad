// Ganti nomor WhatsApp admin di sini. Format internasional tanpa "+" atau "00".
export const WHATSAPP_NUMBER = "6281234567890";
// Tampilan nomor di website (boleh diformat bebas).
export const WHATSAPP_DISPLAY = "+62 812-3456-7890";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
