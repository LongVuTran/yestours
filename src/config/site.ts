/**
 * Nguồn sự thật duy nhất về thông tin công ty.
 * Trích từ Giấy chứng nhận ĐKKD số 0401834732 (thay đổi lần 7, ngày 08/07/2026).
 * KHÔNG hard-code các giá trị này ở bất kỳ chỗ nào khác.
 */
export const site = {
  domain: 'yestours.website',
  url: 'https://yestours.website',

  company: {
    brand: 'YESTOURS',
    nameVi: 'CÔNG TY TNHH MTV DỊCH VỤ DU LỊCH YES',
    nameEn: 'YES TOURIST SERVICES COMPANY LIMITED',
    taxId: '0401834732',
    establishedYear: 2017,
    charterCapital: '500.000.000 VNĐ',
    director: 'SONG JAE NAM',
    owner: 'TRẦN THỊ PHƯƠNG THANH',
  },

  address: {
    vi: 'Tầng 3A – 242 Trần Hưng Đạo, Phường An Hải, Thành phố Đà Nẵng, Việt Nam',
    en: '3A Floor – 242 Tran Hung Dao St., An Hai Ward, Da Nang City, Vietnam',
    ko: '베트남 다낭시 안하이동 쩐흥다오 242번지 3A층',
    mapQuery: '242+Tran+Hung+Dao+An+Hai+Da+Nang',
  },

  contact: {
    phone: '02363583457',
    phoneDisplay: '(0236) 358 3457',
    phoneHref: 'tel:+842363583457',
    email: 'yestours.danang@gmail.com',
    // Sẽ đổi sang info@yestours.website sau khi bật Cloudflare Email Routing.
    emailBranded: null as string | null,
  },

  /**
   * Kênh chat — ĐANG TẮT HẾT.
   * Khách hàng chưa cung cấp (Vòng 3, Q18). Điền giá trị vào là nút tự hiện.
   * KHÔNG bịa số. null = ẩn nút.
   */
  channels: {
    zalo: null as string | null,        // vd: '0905123456'
    kakaotalk: null as string | null,   // vd: 'yestours'  — quan trọng nhất cho khách Hàn
    whatsapp: null as string | null,    // vd: '+84905123456'
    facebook: null as string | null,    // vd: 'https://facebook.com/yestours'
    hotline: null as string | null,     // số di động, ngoài số bàn
  },

  /** Endpoint form liên hệ. Tạo ở formspree.io rồi dán ID vào. */
  formspreeId: null as string | null,

  /**
   * Không hiển thị giá tour (Vòng 4, Q21c).
   * Nội dung tour hiện tại là MẪU do AI soạn, chưa phải tour thật của công ty.
   * Bật true chỉ khi đã có bảng giá thật được duyệt.
   */
  showPrices: false,
} as const;

export const locales = ['vi', 'en', 'ko'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
  ko: '한국어',
};

export const localeFlags: Record<Locale, string> = { vi: '🇻🇳', en: '🇬🇧', ko: '🇰🇷' };

export const categories = ['inbound', 'outbound', 'domestic'] as const;
export type Category = (typeof categories)[number];
