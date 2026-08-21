import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Locale, Category } from '../config/site';
import { imageAlts } from '../i18n/ui';

/**
 * Bốn ảnh cố định trong `/public/images` — không thuộc collection nào, nên alt
 * lấy từ `imageAlts` trong `src/i18n/ui.ts` (nguồn sự thật do orchestrator giữ).
 *
 * Ảnh do Agent Nội dung tải về và đã chuyển sang WebP. Agent Giao diện chỉ đọc.
 */
export type SiteImage = { src: string; alt: string };

const HERO_SRC = '/images/hero.webp';
const CATEGORY_SRC: Record<Category, string> = {
  inbound: '/images/category-inbound.webp',
  outbound: '/images/category-outbound.webp',
  domestic: '/images/category-domestic.webp',
};

/**
 * Ảnh có thật trên đĩa không?
 * Chạy lúc build (Node) để cơ chế fallback sang ảnh tour là THẬT chứ không chỉ
 * nằm trong code: xoá file khỏi `public/images` thì trang tự dùng ảnh khác thay
 * vì nhả ra một thẻ <img> gãy.
 */
function assetExists(src: string): boolean {
  try {
    return existsSync(join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
}

export function heroImage(lang: Locale): SiteImage | null {
  return assetExists(HERO_SRC) ? { src: HERO_SRC, alt: imageAlts.hero[lang] } : null;
}

export function categoryImage(category: Category, lang: Locale): SiteImage | null {
  const src = CATEGORY_SRC[category];
  return assetExists(src) ? { src, alt: imageAlts[category][lang] } : null;
}

/** Ảnh Open Graph mặc định cho trang không có ảnh riêng. */
export function defaultOgImage(): string | undefined {
  return assetExists(HERO_SRC) ? HERO_SRC : undefined;
}
