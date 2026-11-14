import type { Locale } from '../config/site';

/**
 * Chuỗi giao diện BỔ SUNG cho các khối mà `src/i18n/ui.ts` chưa phủ
 * (hero trang chủ, khối "Vì sao chọn YESTOURS", trang 404, ghi chú form...).
 *
 * File này nằm trong `src/components/` vì Agent Giao diện KHÔNG được ghi vào
 * `src/i18n/ui.ts`. Đề xuất: orchestrator gộp các khoá dưới đây vào `ui.ts`
 * rồi xoá file này.
 *
 * CẢNH BÁO: bản tiếng Hàn ở đây là bản dịch chưa qua người bản ngữ duyệt.
 */
const extra = {
  vi: {
    'hero.eyebrow': 'Dịch vụ tại Đà Nẵng',
    'hero.title': 'Vé Bà Nà Hills và đặt phòng khách sạn 4–5 sao',
    'hero.subtitle': 'YESTOURS cung cấp vé tham quan Bà Nà Hills và dịch vụ đặt phòng tại các khách sạn 4–5 sao. Công ty thành lập năm 2017, văn phòng đặt tại Đà Nẵng.',

    'home.categories.title': 'Chúng tôi làm gì',
    'home.categories.subtitle': 'Hai dịch vụ YESTOURS cung cấp.',
    'svc.1.title': 'Vé Bà Nà Hills',
    'svc.1.desc': 'Bán vé tham quan khu du lịch Bà Nà Hills cho khách lẻ và khách đoàn.',
    'svc.2.title': 'Đặt phòng khách sạn 4–5 sao',
    'svc.2.desc': 'Tư vấn và đặt phòng tại các khách sạn tiêu chuẩn 4 sao và 5 sao.',

    'home.why.title': 'Vì sao chọn YESTOURS',
    'why.1.title': 'Thành lập năm 2017',
    'why.1.desc': 'Doanh nghiệp đăng ký tại Đà Nẵng, thành lập năm 2017.',
    'why.2.title': 'Ban lãnh đạo Hàn – Việt',
    'why.2.desc': 'Đội ngũ điều hành gồm cả người Hàn Quốc và người Việt Nam.',
    'why.3.title': 'Trụ sở tại Đà Nẵng',
    'why.3.desc': 'Văn phòng đặt tại Đà Nẵng, có thể đến làm việc trực tiếp.',
    'why.4.title': 'Hai dịch vụ rõ ràng',
    'why.4.desc': 'Vé tham quan Bà Nà Hills và đặt phòng khách sạn 4–5 sao.',

    'ctaband.title': 'Cần mua vé Bà Nà Hills hoặc đặt phòng khách sạn?',
    'ctaband.text': 'Gửi yêu cầu, chúng tôi phản hồi kèm thông tin và báo giá phù hợp.',



    'contact.intro': 'Gửi yêu cầu hoặc gọi trực tiếp cho chúng tôi.',
    'contact.office': 'Văn phòng',
    'contact.map': 'Bản đồ',
    'contact.mapTitle': 'Bản đồ vị trí văn phòng YESTOURS',
    'contact.direct': 'Liên hệ trực tiếp',

    'form.noteMailto':
      'Bấm nút gửi sẽ mở ứng dụng email của bạn với nội dung đã điền sẵn.',
    'form.noteFallback':
      'Nếu ứng dụng email không tự mở, vui lòng gọi hoặc gửi email trực tiếp theo thông tin bên dưới.',
    'form.subject': 'Yêu cầu vé Bà Nà Hills / đặt phòng khách sạn',
    'form.optional': 'Không bắt buộc',

    'page.missing': 'Nội dung trang này đang được cập nhật.',
    'page.fallbackNotice':
      'Bản tiếng Việt được hiển thị vì bản dịch cho ngôn ngữ này chưa sẵn sàng.',

    'notfound.title': 'Không tìm thấy trang',
    'notfound.text': 'Trang bạn tìm không tồn tại hoặc đã được chuyển sang địa chỉ khác.',
    'notfound.home': 'Về trang chủ',

    'a11y.skip': 'Bỏ qua, tới nội dung chính',
    'a11y.menu': 'Menu',
    'a11y.openMenu': 'Mở menu',
    'a11y.closeMenu': 'Đóng menu',

    'review.banner':
      'Nội dung này là bản dịch chưa được người bản ngữ duyệt. Cảnh báo này chỉ hiện khi chạy dev.',
  },

  en: {
    'hero.eyebrow': 'Services in Da Nang',
    'hero.title': 'Ba Na Hills tickets and 4–5 star hotel bookings',
    'hero.subtitle': 'YESTOURS sells Ba Na Hills admission tickets and books rooms at 4-star and 5-star hotels. The company was founded in 2017 and has its office in Da Nang.',

    'home.categories.title': 'What we do',
    'home.categories.subtitle': 'The two services YESTOURS provides.',
    'svc.1.title': 'Ba Na Hills tickets',
    'svc.1.desc': 'Admission tickets to Ba Na Hills for individual visitors and groups.',
    'svc.2.title': '4–5 star hotel bookings',
    'svc.2.desc': 'Advice and room reservations at 4-star and 5-star hotels.',

    'home.why.title': 'Why YESTOURS',
    'why.1.title': 'Established in 2017',
    'why.1.desc': 'A company registered in Da Nang, founded in 2017.',
    'why.2.title': 'Korean–Vietnamese leadership',
    'why.2.desc': 'Our management team includes both Korean and Vietnamese members.',
    'why.3.title': 'Based in Da Nang',
    'why.3.desc': 'Our office is in Da Nang, and you are welcome to visit in person.',
    'why.4.title': 'Two clear services',
    'why.4.desc': 'Ba Na Hills tickets and 4–5 star hotel bookings.',

    'ctaband.title': 'Need Ba Na Hills tickets or a hotel room?',
    'ctaband.text': 'Send us your request and we will reply with details and a quote.',



    'contact.intro': 'Send us a request, or simply call us.',
    'contact.office': 'Office',
    'contact.map': 'Map',
    'contact.mapTitle': 'Map showing the YESTOURS office location',
    'contact.direct': 'Contact us directly',

    'form.noteMailto':
      'Pressing send opens your email app with the message already filled in.',
    'form.noteFallback':
      'If your email app does not open, please call or email us directly using the details below.',
    'form.subject': 'Ba Na Hills tickets / hotel booking enquiry',
    'form.optional': 'Optional',

    'page.missing': 'This page is being updated.',
    'page.fallbackNotice':
      'The Vietnamese version is shown because the translation for this language is not ready yet.',

    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist or has moved.',
    'notfound.home': 'Go to homepage',

    'a11y.skip': 'Skip to main content',
    'a11y.menu': 'Menu',
    'a11y.openMenu': 'Open menu',
    'a11y.closeMenu': 'Close menu',

    'review.banner':
      'This content is a translation that has not been reviewed by a native speaker. This warning only appears in development.',
  },

  ko: {
    'hero.eyebrow': '다낭 소재 서비스',
    'hero.title': '바나힐 입장권과 4~5성급 호텔 예약',
    'hero.subtitle': 'YESTOURS는 바나힐 입장권 판매와 4성·5성급 호텔 객실 예약 서비스를 제공합니다. 2017년에 설립되었으며 사무실은 다낭에 있습니다.',

    'home.categories.title': '주요 서비스',
    'home.categories.subtitle': 'YESTOURS가 제공하는 두 가지 서비스입니다.',
    'svc.1.title': '바나힐 입장권',
    'svc.1.desc': '개인 및 단체 고객을 위한 바나힐 입장권을 판매합니다.',
    'svc.2.title': '4~5성급 호텔 예약',
    'svc.2.desc': '4성·5성급 호텔 객실 상담 및 예약을 도와 드립니다.',

    'home.why.title': 'YESTOURS를 선택하는 이유',
    'why.1.title': '2017년 설립',
    'why.1.desc': '다낭에 등록된 회사로 2017년에 설립되었습니다.',
    'why.2.title': '한국·베트남 경영진',
    'why.2.desc': '경영진이 한국인과 베트남인으로 구성되어 있습니다.',
    'why.3.title': '다낭 소재',
    'why.3.desc': '사무실이 다낭에 있어 직접 방문해 상담하실 수 있습니다.',
    'why.4.title': '명확한 두 가지 서비스',
    'why.4.desc': '바나힐 입장권과 4~5성급 호텔 예약.',

    'ctaband.title': '바나힐 입장권이나 호텔 객실이 필요하신가요?',
    'ctaband.text': '문의를 남겨 주시면 안내와 견적을 보내 드립니다.',



    'contact.intro': '문의를 남기시거나 전화로 연락해 주세요.',
    'contact.office': '사무실',
    'contact.map': '지도',
    'contact.mapTitle': 'YESTOURS 사무실 위치 지도',
    'contact.direct': '직접 연락하기',

    'form.noteMailto': '보내기를 누르면 작성한 내용이 담긴 채로 이메일 앱이 열립니다.',
    'form.noteFallback':
      '이메일 앱이 열리지 않으면 아래 연락처로 전화하시거나 이메일을 보내 주세요.',
    'form.subject': '바나힐 입장권 / 호텔 예약 문의',
    'form.optional': '선택',

    'page.missing': '이 페이지는 준비 중입니다.',
    'page.fallbackNotice': '해당 언어 번역이 아직 준비되지 않아 베트남어 원문을 보여 드립니다.',

    'notfound.title': '페이지를 찾을 수 없습니다',
    'notfound.text': '찾으시는 페이지가 없거나 주소가 변경되었습니다.',
    'notfound.home': '홈으로 가기',

    'a11y.skip': '본문으로 건너뛰기',
    'a11y.menu': '메뉴',
    'a11y.openMenu': '메뉴 열기',
    'a11y.closeMenu': '메뉴 닫기',

    'review.banner':
      '이 내용은 원어민 검수를 거치지 않은 번역본입니다. 이 경고는 개발 환경에서만 표시됩니다.',
  },
} as const;

export type ExtraKey = keyof (typeof extra)['vi'];

export function tx(locale: Locale) {
  return (key: ExtraKey): string => extra[locale][key] ?? extra.vi[key];
}
