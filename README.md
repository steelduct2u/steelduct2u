# Steel Duct Environmental Sdn Bhd — Website

Laman web rasmi untuk **Steel Duct Environmental Sdn Bhd**, syarikat kontraktor HVAC dan ventilasi komersial bertauliah di Malaysia.

## Tech Stack

- **Framework**: Next.js 15 (Static Export)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages

## Cara Jalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) dalam browser.

## Build untuk Production

```bash
npm run build
```

Output folder: `out/`

## Deploy

Push ke branch `main` — Cloudflare Pages akan auto-deploy.

## Konfigurasi Domain

Set environment variable `NEXT_PUBLIC_SITE_URL` (contoh dalam `.env.example`):

- Lokal: salin `.env.example` ke `.env.local`.
- Production: Cloudflare Pages → Settings → Environment variables → `NEXT_PUBLIC_SITE_URL=https://steelduct2u.com`, kemudian redeploy.

Nilai ini digunakan oleh canonical, sitemap, Open Graph dan schema. Tanpa ia, URL jatuh ke `http://localhost:3000`.

## Skrip

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pembangunan (membunuh proses di port 3000 dahulu) |
| `npm run build` | Build static export ke `out/` (jangan jalankan semasa `dev` hidup) |
| `npm run lint` | ESLint |
| `npm run typecheck` | Semakan jenis TypeScript |

## Struktur Projek

```
src/
├── app/
│   ├── layout.tsx            # Metadata global + JSON-LD
│   ├── page.tsx              # Laman utama (susunan seksyen)
│   ├── services/[slug]/      # Halaman servis SEO (statik)
│   ├── sitemap.ts, robots.ts, manifest.ts
│   └── globals.css           # Tema, animasi, kelas kad (card-lift)
├── components/
│   ├── layout/               # Navbar, Navigation, Sidebar, Footer
│   ├── sections/             # Hero, Services, Gallery, Expertise, Sectors, FAQ, Contact, ...
│   └── ui/                   # SectionHeader, LazySection, CountUp, WhatsAppIcon, ...
├── config/
│   ├── site.ts               # Nama, kenalan, alamat, pautan WhatsApp
│   ├── services.ts           # Kandungan halaman servis (keyword SEO)
│   ├── faq.ts                # FAQ — sumber tunggal untuk paparan dan schema
│   └── schema.ts             # JSON-LD laman utama
└── types/                    # Antara muka TypeScript
```

## Peraturan SEO

- Satu keyword utama bagi satu URL; sasaran: Malaysia sahaja, bahasa Inggeris.
- Schema FAQPage dijana daripada `config/faq.ts` supaya sama dengan kandungan yang dipaparkan.
- Tambah servis baharu dengan menambah entri dalam `config/services.ts` (halaman, sitemap dan footer dikemas kini sendiri).
