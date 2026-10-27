import { db, products } from "./db";
import { count } from "drizzle-orm";

const contoh = [
  { nama: "Jepit Mutiara Pastel", kategori: "Jepit rambut", harga: 15000, stok: 20, deskripsi: "Jepit mutiara manis warna pastel.", foto_url: "https://picsum.photos/seed/jepit/400/400" },
  { nama: "Scrunchie Satin Pink", kategori: "Scrunchie", harga: 12000, stok: 35, deskripsi: "Scrunchie satin lembut anti kusut.", foto_url: "https://picsum.photos/seed/scrunchie/400/400" },
  { nama: "Kalung Choker Pita", kategori: "Kalung", harga: 25000, stok: 15, deskripsi: "Choker pita coquette aesthetic.", foto_url: "https://picsum.photos/seed/kalung/400/400" },
  { nama: "Gelang Beads Girly", kategori: "Gelang", harga: 18000, stok: 25, deskripsi: "Gelang beads warna-warni lucu.", foto_url: "https://picsum.photos/seed/gelang/400/400" },
  { nama: "Anting Bow Kecil", kategori: "Anting", harga: 20000, stok: 18, deskripsi: "Anting pita kecil anti alergi.", foto_url: "https://picsum.photos/seed/anting/400/400" },
  { nama: "Cincin Flower Gold", kategori: "Cincin", harga: 22000, stok: 12, deskripsi: "Cincin bunga gold elegan.", foto_url: "https://picsum.photos/seed/cincin/400/400" },
  { nama: "Tas Mini Rantai", kategori: "Tas mini", harga: 75000, stok: 8, deskripsi: "Tas mini rantai buat hangout.", foto_url: "https://picsum.photos/seed/tas/400/400" },
  { nama: "Kaca Saku Kelinci", kategori: "Kaca", harga: 10000, stok: 30, deskripsi: "Kaca saku motif kelinci imut.", foto_url: "https://picsum.photos/seed/kaca/400/400" },
];

const [{ value }] = await db.select({ value: count() }).from(products);
if (value === 0) {
  await db.insert(products).values(contoh);
  console.log("seeded 8 produk 🎀");
} else {
  console.log(`skip seed, sudah ada ${value} produk`);
}
