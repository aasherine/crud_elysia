import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nama: text("nama").notNull(),
  kategori: text("kategori").notNull(),
  harga: real("harga").notNull(),
  stok: integer("stok").notNull().default(0),
  deskripsi: text("deskripsi").default(""),
  foto_url: text("foto_url").default(""),
});
