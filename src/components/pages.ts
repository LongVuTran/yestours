import { getCollection, type CollectionEntry } from 'astro:content';
import { locales, type Locale } from '../config/site';

export type Page = CollectionEntry<'pages'>;

/**
 * Nội dung trang tĩnh theo khoá.
 * Thiếu bản dịch thì rơi về tiếng Việt và báo `isFallback` để trang hiện ghi chú.
 */
export async function staticPage(
  key: string,
  lang: Locale
): Promise<{ entry: Page | null; isFallback: boolean }> {
  let entries: Page[] = [];
  try {
    entries = await getCollection('pages');
  } catch {
    entries = [];
  }
  const forKey = entries.filter((p) => p.data.key === key);
  const exact = forKey.find((p) => p.data.lang === lang);
  if (exact) return { entry: exact, isFallback: false };
  for (const fallbackLang of locales) {
    const candidate = forKey.find((p) => p.data.lang === fallbackLang);
    if (candidate) return { entry: candidate, isFallback: true };
  }
  return { entry: null, isFallback: false };
}
