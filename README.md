# yestours.website

Website chính thức của **CÔNG TY TNHH MTV DỊCH VỤ DU LỊCH YES** (YESTOURS) — Đà Nẵng, Việt Nam.

Tour inbound (đón khách quốc tế đến Việt Nam) · Tour nước ngoài · Tour nội địa.
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

Sửa thông tin liên hệ, kênh chat, bật/tắt hiển thị giá tại **`src/config/site.ts`**.
Thêm tour mới: tạo file Markdown trong `src/content/tours/{vi,en,ko}/`.

Chi tiết quy ước xem [CLAUDE.md](./CLAUDE.md).
