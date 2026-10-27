# 🎀 GirlyStuff - CRUD Elysia

Tugas CRUD toko aksesoris girly sederhana.

## Stack

- **Runtime:** Bun
- **Framework:** ElysiaJS
- **Database:** SQLite + Drizzle ORM
- **Frontend:** HTML + Tailwind CSS (CDN)

## Cara Run

```bash
# Install dependencies
bun install

# Setup database & seed data
bun run src/db/seed.ts

# Jalankan server
bun run src/index.ts
```

Buka `http://localhost:3000` di browser.

## Endpoints

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
