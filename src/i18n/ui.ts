import type { Locale } from '../config/site';

/**
 * Chuỗi giao diện (nav, nút, nhãn footer). Do ORCHESTRATOR sở hữu.
 * Cả hai agent chỉ ĐỌC, không sửa. Nội dung dài nằm ở src/content/**.
 */
export const ui = {
  vi: {
    'nav.home': 'Trang chủ', 'nav.about': 'Giới thiệu', 'nav.tours': 'Tour du lịch',
    'nav.inbound': 'Tour Inbound', 'nav.outbound': 'Tour nước ngoài', 'nav.domestic': 'Tour trong nước',
    'nav.contact': 'Liên hệ',
    'cta.quote': 'Liên hệ nhận báo giá', 'cta.viewTour': 'Xem chi tiết', 'cta.allTours': 'Xem tất cả tour',
    'cta.callNow': 'Gọi ngay', 'cta.sendEmail': 'Gửi email',
    'tour.duration': 'Thời gian', 'tour.departFrom': 'Khởi hành từ', 'tour.destinations': 'Điểm đến',
    'tour.highlights': 'Điểm nổi bật', 'tour.itinerary': 'Lịch trình', 'tour.included': 'Bao gồm',
    'tour.excluded': 'Không bao gồm', 'tour.priceOnRequest': 'Giá liên hệ',
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
    'nav.home': 'Home', 'nav.about': 'About Us', 'nav.tours': 'Tours',
    'nav.inbound': 'Vietnam Tours', 'nav.outbound': 'Overseas Tours', 'nav.domestic': 'Domestic Tours',
    'nav.contact': 'Contact',
    'cta.quote': 'Request a Quote', 'cta.viewTour': 'View Details', 'cta.allTours': 'View All Tours',
    'cta.callNow': 'Call Now', 'cta.sendEmail': 'Send Email',
    'tour.duration': 'Duration', 'tour.departFrom': 'Departs From', 'tour.destinations': 'Destinations',
    'tour.highlights': 'Highlights', 'tour.itinerary': 'Itinerary', 'tour.included': 'Included',
    'tour.excluded': 'Not Included', 'tour.priceOnRequest': 'Price on Request',
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
    'nav.home': '홈', 'nav.about': '회사 소개', 'nav.tours': '투어',
    'nav.inbound': '베트남 투어', 'nav.outbound': '해외 투어', 'nav.domestic': '국내 투어',
    'nav.contact': '문의하기',
    'cta.quote': '견적 문의', 'cta.viewTour': '자세히 보기', 'cta.allTours': '전체 투어 보기',
    'cta.callNow': '전화 문의', 'cta.sendEmail': '이메일 보내기',
    'tour.duration': '기간', 'tour.departFrom': '출발지', 'tour.destinations': '여행지',
    'tour.highlights': '주요 특징', 'tour.itinerary': '일정', 'tour.included': '포함 사항',
    'tour.excluded': '불포함 사항', 'tour.priceOnRequest': '가격 문의',
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
  about: { vi: 'gioi-thieu', en: 'about', ko: 'about' },
  tours: { vi: 'tour', en: 'tours', ko: 'tours' },
  contact: { vi: 'lien-he', en: 'contact', ko: 'contact' },
} as const;
