import type { Locale } from '../config/site';

/**
 * Chuỗi giao diện (nav, nút, nhãn footer). Do ORCHESTRATOR sở hữu.
 * Cả hai agent chỉ ĐỌC, không sửa. Nội dung dài nằm ở src/content/**.
 */
export const ui = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.contact': 'Liên hệ',
    'cta.quote': 'Liên hệ nhận báo giá',
    'cta.callNow': 'Gọi ngay', 'cta.sendEmail': 'Gửi email',
    'form.title': 'Gửi yêu cầu tư vấn', 'form.name': 'Họ và tên', 'form.email': 'Email',
    'form.phone': 'Số điện thoại', 'form.message': 'Nội dung yêu cầu', 'form.submit': 'Gửi yêu cầu',
    'form.required': 'Bắt buộc',
    'footer.company': 'Thông tin công ty', 'footer.taxId': 'Mã số doanh nghiệp',
    'footer.address': 'Địa chỉ', 'footer.phone': 'Điện thoại', 'footer.email': 'Email',
    'footer.quickLinks': 'Liên kết nhanh', 'footer.rights': 'Bảo lưu mọi quyền.',
    'footer.since': 'Thành lập năm',
    'meta.langSwitch': 'Ngôn ngữ',
  },
  en: {
    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'cta.quote': 'Request a Quote',
    'cta.callNow': 'Call Now', 'cta.sendEmail': 'Send Email',
    'form.title': 'Send an Enquiry', 'form.name': 'Full Name', 'form.email': 'Email',
    'form.phone': 'Phone Number', 'form.message': 'Your Message', 'form.submit': 'Send Enquiry',
    'form.required': 'Required',
    'footer.company': 'Company Information', 'footer.taxId': 'Business Reg. No.',
    'footer.address': 'Address', 'footer.phone': 'Phone', 'footer.email': 'Email',
    'footer.quickLinks': 'Quick Links', 'footer.rights': 'All rights reserved.',
    'footer.since': 'Established',
    'meta.langSwitch': 'Language',
  },
  ko: {
    'nav.home': '홈',
    'nav.contact': '문의하기',
    'cta.quote': '견적 문의',
    'cta.callNow': '전화 문의', 'cta.sendEmail': '이메일 보내기',
    'form.title': '상담 신청', 'form.name': '성함', 'form.email': '이메일',
    'form.phone': '연락처', 'form.message': '문의 내용', 'form.submit': '문의 보내기',
    'form.required': '필수',
    'footer.company': '회사 정보', 'footer.taxId': '사업자등록번호',
    'footer.address': '주소', 'footer.phone': '전화', 'footer.email': '이메일',
    'footer.quickLinks': '바로가기', 'footer.rights': '모든 권리 보유.',
    'footer.since': '설립',
    'meta.langSwitch': '언어',
  },
} as const;

export type UIKey = keyof (typeof ui)['vi'];

export function t(locale: Locale) {
  return (key: UIKey): string => ui[locale][key] ?? ui.vi[key];
}

/** Slug URL cho từng ngôn ngữ, dùng cho nút chuyển ngôn ngữ giữ nguyên trang. */
export const routeSlugs = {
  contact: { vi: 'lien-he', en: 'contact', ko: 'contact' },
} as const;

/**
 * Alt cho ảnh cố định (hero). Do ORCHESTRATOR sở hữu.
 * Mô tả đúng nội dung ảnh thật đã tải về, không phải mô tả chung chung.
 */
export const imageAlts = {
  hero: {
    vi: 'Bãi biển Đà Nẵng nhìn từ trên cao lúc bình minh, đường bờ biển cong ôm lấy thành phố',
    en: 'Aerial view of Da Nang beach at sunrise, the shoreline curving along the city skyline',
    ko: '해돋이 무렵 상공에서 내려다본 다낭 해변과 도시 스카이라인',
  },
  banaHills: {
    vi: 'Cầu Vàng ở Bà Nà Hills uốn cong trên hai bàn tay đá khổng lồ, du khách đi bộ trên cầu giữa nền trời xanh',
    en: 'The Golden Bridge at Ba Na Hills curving over two giant stone hands, with visitors walking across under a blue sky',
    ko: '바나힐의 골든 브리지. 거대한 두 돌 손이 떠받친 다리 위를 푸른 하늘 아래 관광객들이 걷고 있다',
  },
  hotel: {
    vi: 'Phòng nghỉ khách sạn với ghế sofa trước ô cửa kính lớn nhìn ra biển và hồ bơi',
    en: 'A hotel suite with a sofa in front of a large picture window overlooking the sea and a pool',
    ko: '바다와 수영장이 내다보이는 큰 통창 앞에 소파가 놓인 호텔 객실',
  },
} as const;

export type FixedImage = keyof typeof imageAlts;
