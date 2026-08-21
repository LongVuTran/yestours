import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeEnum = z.enum(['vi', 'en', 'ko']);

/**
 * HỢP ĐỒNG GIỮA AGENT NỘI DUNG VÀ AGENT GIAO DIỆN.
 * Agent nội dung ghi file khớp schema này. Agent giao diện đọc đúng các trường này.
 * Đổi schema phải báo cả hai bên.
 */
const tours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tours' }),
  schema: z.object({
    /** Khoá ổn định, GIỐNG NHAU giữa 3 ngôn ngữ. vd: 'danang-hoian-hue-4d3n' */
    key: z.string(),
    lang: localeEnum,
    title: z.string(),
    /** 1–2 câu, hiện trên thẻ tour ở trang danh mục */
    summary: z.string(),
    category: z.enum(['inbound', 'outbound', 'domestic']),
    /** vd: '4 ngày 3 đêm' / '4 Days 3 Nights' / '3박 4일' */
    duration: z.string(),
    /** Nơi khởi hành */
    departFrom: z.string(),
    destinations: z.array(z.string()).min(1),
    highlights: z.array(z.string()).min(3).max(6),
    itinerary: z
      .array(z.object({ day: z.string(), title: z.string(), detail: z.string() }))
      .min(1),
    included: z.array(z.string()).default([]),
    excluded: z.array(z.string()).default([]),
    /** Đường dẫn trong /public, vd: '/images/tours/ba-na-hills.jpg' */
    image: z.string(),
    imageAlt: z.string(),
    /** Bắt buộc ghi nguồn — chỉ dùng ảnh có giấy phép thương mại (Unsplash/Pexels) */
    imageCredit: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    /** true = bản dịch máy, CHƯA được người bản ngữ duyệt. Bản KR phải để true. */
    needsReview: z.boolean().default(false),
  }),
});

/** Trang tĩnh: gioi-thieu, lien-he, chinh-sach... */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    key: z.string(),
    lang: localeEnum,
    title: z.string(),
    description: z.string(),
    needsReview: z.boolean().default(false),
  }),
});

export const collections = { tours, pages };
