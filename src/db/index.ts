import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { products } from "./schema";

const sqlite = new Database("./sqlite.db");
sqlite.run(`CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama TEXT NOT NULL,
  kategori TEXT NOT NULL,
  harga REAL NOT NULL,
  stok INTEGER NOT NULL DEFAULT 0,
  deskripsi TEXT DEFAULT '',
  foto_url TEXT DEFAULT ''
)`);

export const db = drizzle(sqlite);
export { products };
