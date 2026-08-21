import { getCollection, type CollectionEntry } from 'astro:content';
import { locales, type Locale, type Category } from '../config/site';

export type Tour = CollectionEntry<'tours'>;
export type Page = CollectionEntry<'pages'>;

/**
 * Đọc collection một cách AN TOÀN.
 * Agent Nội dung viết `src/content/**` song song; lúc build đầu tiên collection
 * có thể còn rỗng. Mọi hàm ở đây phải trả mảng rỗng chứ không được ném lỗi.
 */
async function safeCollection<T extends 'tours' | 'pages'>(name: T) {
  try {
    return (await getCollection(name)) ?? [];
  } catch {
    return [];
  }
}

/** Tất cả tour, đã loại bản trùng `lang:key`, sắp theo `order` rồi tới tiêu đề. */
export async function allTours(): Promise<Tour[]> {
  const entries = (await safeCollection('tours')) as Tour[];
  const seen = new Set<string>();
  const unique: Tour[] = [];
  for (const entry of entries) {
    const id = `${entry.data.lang}:${entry.data.key}`;
    if (seen.has(id)) continue;
    seen.add(id);
    unique.push(entry);
  }
  return unique.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)
  );
}

export async function toursFor(lang: Locale): Promise<Tour[]> {
  return (await allTours()).filter((t) => t.data.lang === lang);
}

export async function featuredTours(lang: Locale, limit = 6): Promise<Tour[]> {
  const forLang = await toursFor(lang);
  const featured = forLang.filter((t) => t.data.featured);
  // Chưa đánh dấu featured nào thì lấy tạm những tour đầu danh sách.
  return (featured.length > 0 ? featured : forLang).slice(0, limit);
}

export function countByCategory(tours: Tour[]): Record<Category, number> {
  const counts = { inbound: 0, outbound: 0, domestic: 0 };
  for (const t of tours) counts[t.data.category] += 1;
  return counts;
}

/** Ảnh đại diện cho một nhóm tour, dùng làm nền khối danh mục. Có thể không có. */
export function coverImage(tours: Tour[]): { src: string; alt: string } | null {
  const withImage = tours.find((t) => t.data.image?.trim());
  return withImage ? { src: withImage.data.image, alt: withImage.data.imageAlt } : null;
}

/** key → những ngôn ngữ thực sự có bản dịch. Dùng cho hreflang + nút đổi ngôn ngữ. */
export async function tourLangIndex(): Promise<Map<string, Locale[]>> {
  const index = new Map<string, Locale[]>();
  for (const entry of await allTours()) {
    const list = index.get(entry.data.key) ?? [];
    if (!list.includes(entry.data.lang)) list.push(entry.data.lang);
    index.set(entry.data.key, list);
  }
  return index;
}

/**
 * Nội dung trang tĩnh theo khoá.
 * Thiếu bản dịch thì rơi về tiếng Việt và báo `isFallback` để trang hiện ghi chú.
 */
export async function staticPage(
  key: string,
  lang: Locale
): Promise<{ entry: Page | null; isFallback: boolean }> {
  const entries = (await safeCollection('pages')) as Page[];
  const forKey = entries.filter((p) => p.data.key === key);
  const exact = forKey.find((p) => p.data.lang === lang);
  if (exact) return { entry: exact, isFallback: false };
  for (const fallbackLang of locales) {
    const candidate = forKey.find((p) => p.data.lang === fallbackLang);
    if (candidate) return { entry: candidate, isFallback: true };
  }
  return { entry: null, isFallback: false };
}
