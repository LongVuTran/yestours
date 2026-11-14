import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeEnum = z.enum(['vi', 'en', 'ko']);

/** Trang tĩnh: hiện chỉ còn trang Liên hệ. */
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

export const collections = { pages };
