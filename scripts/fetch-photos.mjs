// Unduh foto destinasi berlisensi bebas dari Wikimedia Commons.
// Jalankan di laptop kamu:  npm run photos
// Hasil: public/images/photos/*.jpg  +  CREDITS.md (atribusi fotografer)
import { mkdir, writeFile, access } from "node:fs/promises";

const OUT = "public/images/photos";
const API = "https://commons.wikimedia.org/w/api.php";
const UA = "NusantaraTravelPortfolio/1.0 (project latihan; contoh@email.com)";
const OK_LICENSE = /^(cc0|cc[- ]by|cc[- ]by[- ]sa|public domain|pd)/i;
const BAD_TITLE = /(map|logo|flag|diagram|coat|poster|stamp|drawing|painting|panorama_?stitch)/i;

const SLOTS = {
  hero: "Mount Bromo sunrise",
  paket: "Nusa Penida Kelingking Beach",
  tentang: "Tegallalang rice terrace Ubud",
  "tentang-2": "Gili Trawangan beach",
  galeri: "Uluwatu temple Bali cliff",
  kontak: "Tanah Lot temple sunset",
  bali: "Pura Ulun Danu Bratan",
  bromo: "Bromo Tengger Semeru volcano",
  yogyakarta: "Prambanan temple",
  "raja-ampat": "Raja Ampat islands Wayag",
  lombok: "Pink Beach Lombok",
  bandung: "Kawah Putih Ciwidey",
  "gallery-1": "Lempuyang gate Bali",
  "gallery-2": "Penanjakan Bromo sunrise view",
  "gallery-3": "Borobudur temple",
  "gallery-4": "Piaynemo Raja Ampat",
  "gallery-5": "Kuta Lombok beach",
  "gallery-6": "Tea plantation Bandung Lembang",
  "gallery-7": "Seminyak beach Bali",
  "gallery-8": "Mount Batok Bromo crater",
};

const strip = (h = "") => h.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
const exists = (p) => access(p).then(() => true, () => false);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(q) {
  const params = new URLSearchParams({
    action: "query", format: "json", origin: "*",
    generator: "search", gsrnamespace: "6", gsrlimit: "25",
    gsrsearch: `${q} filetype:bitmap`,
    prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "1920",
  });
  const res = await fetch(`${API}?${params}`, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return Object.values(data.query?.pages ?? {}).sort((a, b) => a.index - b.index);
}

const used = new Set();
const credits = [];
await mkdir(OUT, { recursive: true });

for (const [name, query] of Object.entries(SLOTS)) {
  const file = `${OUT}/${name}.jpg`;
  if (await exists(file)) { console.log(`- ${name}: sudah ada, dilewati`); continue; }
  try {
    const pages = await search(query);
    const pick = pages.find((p) => {
      const i = p.imageinfo?.[0]; if (!i) return false;
      const lic = i.extmetadata?.LicenseShortName?.value ?? "";
      return i.mime === "image/jpeg" && i.width >= 1600 && i.width > i.height * 1.2 &&
        OK_LICENSE.test(lic) && !BAD_TITLE.test(p.title) && !used.has(p.title);
    });
    if (!pick) { console.log(`x ${name}: tidak ada hasil yang cocok untuk "${query}"`); continue; }
    const i = pick.imageinfo[0];
    const img = await fetch(i.thumburl || i.url, { headers: { "User-Agent": UA } });
    if (!img.ok) throw new Error(`unduh gagal HTTP ${img.status}`);
    await writeFile(file, Buffer.from(await img.arrayBuffer()));
    used.add(pick.title);
    const m = i.extmetadata ?? {};
    credits.push(`- **${name}.jpg** — ${pick.title.replace("File:", "")} · ${strip(m.Artist?.value) || "Unknown"} · ${m.LicenseShortName?.value} · ${i.descriptionurl}`);
    console.log(`✓ ${name}: ${pick.title}`);
  } catch (e) {
    console.log(`x ${name}: ${e.message}`);
  }
  await sleep(700);
}

if (credits.length) {
  await writeFile(`${OUT}/CREDITS.md`, `# Kredit Foto\n\nFoto dari Wikimedia Commons (lisensi bebas). Sebutkan fotografer sesuai lisensi.\n\n${credits.join("\n")}\n`);
  console.log(`\nSelesai. Kredit tersimpan di ${OUT}/CREDITS.md`);
} else {
  console.log("\nTidak ada foto yang terunduh. Cek koneksi internet, lalu ulangi.");
}
