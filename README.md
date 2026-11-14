# yestours.website

Website chính thức của **CÔNG TY TNHH MTV DỊCH VỤ DU LỊCH YES** (YESTOURS) — Đà Nẵng, Việt Nam.

Hiện chỉ có hai trang: **Trang chủ** và **Liên hệ** (các trang tour, giới thiệu, điều khoản đã gỡ; URL cũ được 301 về trang chủ trong `public/_redirects`).
Ba ngôn ngữ: Tiếng Việt · English · 한국어.

## Công nghệ

- [Astro 7](https://astro.build) — static site, không cần server
- Tailwind CSS 4
- Cloudflare Pages — tự động deploy khi push

## Phát triển

```bash
npm install
npm run dev
```

## Cấu hình

Sửa thông tin liên hệ, kênh chat tại **`src/config/site.ts`**.
Nội dung trang Liên hệ: `src/content/pages/{vi,en,ko}/contact.md`.

Chi tiết quy ước xem [CLAUDE.md](./CLAUDE.md).
