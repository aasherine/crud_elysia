import { Elysia, t } from "elysia";
import { eq } from "drizzle-orm";
import { db, products } from "./db";

const Produk = t.Object({
  nama: t.String({ minLength: 1 }),
  kategori: t.String({ minLength: 1 }),
  harga: t.Number({ minimum: 0 }),
  stok: t.Integer({ minimum: 0 }),
  deskripsi: t.Optional(t.String()),
  foto_url: t.Optional(t.String()),
});

new Elysia()
  .get("/", ({ set }) => {
    set.headers["content-type"] = "text/html; charset=utf-8";
    return Bun.file("public/index.html").text();
  })
  .get("/products/:id", async ({ params, status }) => {
    const r = await db.select().from(products).where(eq(products.id, Number(params.id)));
    const p = r[0];
    if (!p) return status(404, { error: "tidak ketemu" });
    let html = await Bun.file("public/detail.html").text();
    html = html.replaceAll("{{id}}", String(p.id));
    html = html.replaceAll("{{nama}}", p.nama);
    html = html.replaceAll("{{kategori}}", p.kategori);
    html = html.replaceAll("{{harga}}", Number(p.harga).toLocaleString("id-ID"));
    html = html.replaceAll("{{stok}}", String(p.stok));
    html = html.replaceAll("{{deskripsi}}", p.deskripsi || "");
    html = html.replaceAll("{{foto_url}}", p.foto_url || "");
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  })
  .get("/api/products", () => db.select().from(products))
  .get("/api/products/:id", ({ params, status }) =>
    db.select().from(products).where(eq(products.id, Number(params.id)))
      .then((r) => (r[0] ? r[0] : status(404, { error: "tidak ketemu" })))
  )
  .post("/api/products", ({ body }) => db.insert(products).values(body).returning().then((r) => r[0]), { body: Produk })
  .put("/api/products/:id", ({ params, body }) =>
    db.update(products).set(body).where(eq(products.id, Number(params.id))).returning().then((r) => r[0]),
    { body: Produk }
  )
  .delete("/api/products/:id", ({ params }) =>
    db.delete(products).where(eq(products.id, Number(params.id))).returning().then((r) => ({ ok: r.length > 0 })),
  )
  .listen(3000, () => console.log("🎀 http://localhost:3000"));
