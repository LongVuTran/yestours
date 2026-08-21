import { locales, type Locale, type Category } from '../config/site';
import { routeSlugs } from '../i18n/ui';

/**
 * Dựng URL cho từng ngôn ngữ. Mọi liên kết nội bộ đi qua đây để nút chuyển
 * ngôn ngữ và thẻ hreflang luôn khớp nhau.
 *
 * `build.format` mặc định của Astro là 'directory' → mọi đường dẫn có dấu / cuối.
 */

/** Slug trang điều khoản giống nhau ở cả ba ngôn ngữ. */
export const termsSlug = 'terms';

export const home = (lang: Locale) => `/${lang}/`;
export const toursIndex = (lang: Locale) => `/${lang}/${routeSlugs.tours[lang]}/`;
export const tourDetail = (lang: Locale, key: string) =>
  `/${lang}/${routeSlugs.tours[lang]}/${key}/`;
export const about = (lang: Locale) => `/${lang}/${routeSlugs.about[lang]}/`;
export const contact = (lang: Locale) => `/${lang}/${routeSlugs.contact[lang]}/`;
export const terms = (lang: Locale) => `/${lang}/${termsSlug}/`;
export const toursByCategory = (lang: Locale, category: Category) =>
  `${toursIndex(lang)}#${category}`;

/** Bản đồ ngôn ngữ → URL cho các trang tĩnh (trang nào cũng có đủ 3 bản). */
export function alternatesFor(
  fn: (lang: Locale) => string
): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, fn(l)])) as Record<Locale, string>;
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/** Ép kiểu tham số route về Locale; rơi về 'vi' nếu có gì bất thường. */
export function asLocale(value: unknown): Locale {
  return isLocale(value) ? value : 'vi';
}
