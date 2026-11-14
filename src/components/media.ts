import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Locale } from '../config/site';
import { imageAlts } from '../i18n/ui';

/**
 * Ảnh hero cố định trong `/public/images` — không thuộc collection nào, nên alt
 * lấy từ `imageAlts` trong `src/i18n/ui.ts` (nguồn sự thật do orchestrator giữ).
 *
 * Ảnh do Agent Nội dung tải về và đã chuyển sang WebP. Agent Giao diện chỉ đọc.
 */
export type SiteImage = { src: string; alt: string };

const HERO_SRC = '/images/hero.webp';

/**
 * Ảnh có thật trên đĩa không?
 * Chạy lúc build (Node) để cơ chế fallback là THẬT chứ không chỉ
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

/** Ảnh Open Graph mặc định cho trang không có ảnh riêng. */
export function defaultOgImage(): string | undefined {
  return assetExists(HERO_SRC) ? HERO_SRC : undefined;
}
