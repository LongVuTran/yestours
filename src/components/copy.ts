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
    'hero.eyebrow': 'Công ty lữ hành tại Đà Nẵng',
    'hero.title': 'Khám phá Việt Nam cùng YESTOURS',
    'hero.subtitle':
      'Tour đón khách quốc tế, tour đi nước ngoài và tour trong nước — thiết kế theo yêu cầu, phục vụ bằng tiếng Việt, tiếng Anh và tiếng Hàn.',

    'home.categories.title': 'Chúng tôi làm gì',
    'home.categories.subtitle': 'Ba nhóm dịch vụ chính của YESTOURS.',
    'cat.inbound.desc':
      'Đón và phục vụ khách quốc tế đến Việt Nam: Đà Nẵng, Hội An, Huế và các điểm đến khác.',
    'cat.outbound.desc':
      'Tổ chức hành trình cho khách đi nước ngoài, lo trọn gói từ thủ tục đến hướng dẫn viên.',
    'cat.domestic.desc':
      'Tour trong nước cho khách đoàn, khách gia đình và khách doanh nghiệp.',

    'home.featured.title': 'Tour tiêu biểu',
    'home.featured.subtitle': 'Một vài hành trình được hỏi nhiều nhất.',

    'home.why.title': 'Vì sao chọn YESTOURS',
    'why.1.title': 'Thành lập năm 2017',
    'why.1.desc': 'Doanh nghiệp lữ hành đăng ký tại Đà Nẵng, hoạt động từ năm 2017.',
    'why.2.title': 'Ban lãnh đạo Hàn – Việt',
    'why.2.desc': 'Đội ngũ điều hành gồm cả người Hàn Quốc và người Việt Nam.',
    'why.3.title': 'Trụ sở tại Đà Nẵng',
    'why.3.desc': 'Văn phòng ngay tại Đà Nẵng, gần các điểm đến miền Trung.',
    'why.4.title': 'Hỗ trợ ba ngôn ngữ',
    'why.4.desc': 'Tư vấn và phục vụ bằng tiếng Việt, tiếng Anh và tiếng Hàn.',

    'ctaband.title': 'Cần một hành trình riêng cho đoàn của bạn?',
    'ctaband.text': 'Gửi yêu cầu, chúng tôi phản hồi kèm lịch trình và báo giá phù hợp.',

    'tours.intro': 'Chọn nhóm tour bạn quan tâm.',
    'tours.filter.all': 'Tất cả',
    'tours.filter.label': 'Lọc theo nhóm tour',
    'tours.empty':
      'Chưa có tour nào trong mục này. Vui lòng liên hệ để chúng tôi tư vấn hành trình riêng.',

    'tour.back': 'Quay lại danh sách tour',
    'tour.quickFacts': 'Thông tin nhanh',
    'tour.ctaTitle': 'Quan tâm hành trình này?',
    'tour.ctaText':
      'Liên hệ để nhận lịch trình chi tiết và báo giá theo số khách và ngày khởi hành.',
    'tour.photoCredit': 'Ảnh',

    'contact.intro': 'Gửi yêu cầu hoặc gọi trực tiếp cho chúng tôi.',
    'contact.office': 'Văn phòng',
    'contact.map': 'Bản đồ',
    'contact.mapTitle': 'Bản đồ vị trí văn phòng YESTOURS',
    'contact.direct': 'Liên hệ trực tiếp',

    'form.noteMailto':
      'Bấm nút gửi sẽ mở ứng dụng email của bạn với nội dung đã điền sẵn.',
    'form.noteFallback':
      'Nếu ứng dụng email không tự mở, vui lòng gọi hoặc gửi email trực tiếp theo thông tin bên dưới.',
    'form.subject': 'Yêu cầu tư vấn tour',
    'form.optional': 'Không bắt buộc',

    'page.missing': 'Nội dung trang này đang được cập nhật.',
    'page.fallbackNotice':
      'Bản tiếng Việt được hiển thị vì bản dịch cho ngôn ngữ này chưa sẵn sàng.',

    'nav.terms': 'Điều khoản',
    'notfound.title': 'Không tìm thấy trang',
    'notfound.text': 'Trang bạn tìm không tồn tại hoặc đã được chuyển sang địa chỉ khác.',
    'notfound.home': 'Về trang chủ',

    'a11y.skip': 'Bỏ qua, tới nội dung chính',
    'a11y.menu': 'Menu',
    'a11y.openMenu': 'Mở menu',
    'a11y.closeMenu': 'Đóng menu',
    'a11y.breadcrumb': 'Đường dẫn',

    'review.banner':
      'Nội dung này là bản dịch chưa được người bản ngữ duyệt. Cảnh báo này chỉ hiện khi chạy dev.',
  },

  en: {
    'hero.eyebrow': 'A tour operator based in Da Nang',
    'hero.title': 'Discover Vietnam with YESTOURS',
    'hero.subtitle':
      'Inbound tours, overseas tours and domestic tours — tailored to your group, with support in Vietnamese, English and Korean.',

    'home.categories.title': 'What we do',
    'home.categories.subtitle': 'The three services YESTOURS is built around.',
    'cat.inbound.desc':
      'Welcoming international travellers to Vietnam: Da Nang, Hoi An, Hue and beyond.',
    'cat.outbound.desc':
      'Overseas itineraries arranged end to end, from paperwork to tour guides.',
    'cat.domestic.desc':
      'Domestic tours for groups, families and corporate travellers.',

    'home.featured.title': 'Featured tours',
    'home.featured.subtitle': 'A few of the itineraries we are asked about most.',

    'home.why.title': 'Why YESTOURS',
    'why.1.title': 'Established in 2017',
    'why.1.desc': 'A licensed tour operator registered in Da Nang, operating since 2017.',
    'why.2.title': 'Korean–Vietnamese leadership',
    'why.2.desc': 'Our management team includes both Korean and Vietnamese members.',
    'why.3.title': 'Based in Da Nang',
    'why.3.desc': 'Our office is in Da Nang, close to the destinations of Central Vietnam.',
    'why.4.title': 'Three languages',
    'why.4.desc': 'We advise and guide in Vietnamese, English and Korean.',

    'ctaband.title': 'Need an itinerary built around your group?',
    'ctaband.text': 'Send us your request and we will reply with a plan and a quote.',

    'tours.intro': 'Choose the kind of tour you are looking for.',
    'tours.filter.all': 'All',
    'tours.filter.label': 'Filter by tour type',
    'tours.empty':
      'No tours listed here yet. Please get in touch and we will plan an itinerary for you.',

    'tour.back': 'Back to all tours',
    'tour.quickFacts': 'At a glance',
    'tour.ctaTitle': 'Interested in this itinerary?',
    'tour.ctaText':
      'Contact us for the full day-by-day plan and a quote based on your group size and travel dates.',
    'tour.photoCredit': 'Photo',

    'contact.intro': 'Send us a request, or simply call us.',
    'contact.office': 'Office',
    'contact.map': 'Map',
    'contact.mapTitle': 'Map showing the YESTOURS office location',
    'contact.direct': 'Contact us directly',

    'form.noteMailto':
      'Pressing send opens your email app with the message already filled in.',
    'form.noteFallback':
      'If your email app does not open, please call or email us directly using the details below.',
    'form.subject': 'Tour enquiry',
    'form.optional': 'Optional',

    'page.missing': 'This page is being updated.',
    'page.fallbackNotice':
      'The Vietnamese version is shown because the translation for this language is not ready yet.',

    'nav.terms': 'Terms',
    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist or has moved.',
    'notfound.home': 'Go to homepage',

    'a11y.skip': 'Skip to main content',
    'a11y.menu': 'Menu',
    'a11y.openMenu': 'Open menu',
    'a11y.closeMenu': 'Close menu',
    'a11y.breadcrumb': 'Breadcrumb',

    'review.banner':
      'This content is a translation that has not been reviewed by a native speaker. This warning only appears in development.',
  },

  ko: {
    'hero.eyebrow': '다낭에 위치한 여행사',
    'hero.title': 'YESTOURS와 함께 베트남을 만나다',
    'hero.subtitle':
      '베트남 인바운드 투어, 해외 투어, 국내 투어 — 단체 일정에 맞춰 구성해 드리며 베트남어·영어·한국어로 안내합니다.',

    'home.categories.title': '주요 서비스',
    'home.categories.subtitle': 'YESTOURS가 제공하는 세 가지 서비스입니다.',
    'cat.inbound.desc':
      '베트남을 찾는 해외 여행객을 위한 투어 — 다낭, 호이안, 후에 등을 안내합니다.',
    'cat.outbound.desc': '해외 여행 일정을 서류 준비부터 가이드까지 전 과정 준비해 드립니다.',
    'cat.domestic.desc': '단체, 가족, 기업 고객을 위한 베트남 국내 투어입니다.',

    'home.featured.title': '추천 투어',
    'home.featured.subtitle': '문의가 가장 많은 일정입니다.',

    'home.why.title': 'YESTOURS를 선택하는 이유',
    'why.1.title': '2017년 설립',
    'why.1.desc': '다낭에 등록된 여행사로 2017년부터 운영하고 있습니다.',
    'why.2.title': '한국·베트남 경영진',
    'why.2.desc': '경영진이 한국인과 베트남인으로 구성되어 있습니다.',
    'why.3.title': '다낭 소재',
    'why.3.desc': '사무실이 다낭에 있어 베트남 중부 주요 여행지와 가깝습니다.',
    'why.4.title': '3개 언어 지원',
    'why.4.desc': '베트남어, 영어, 한국어로 상담하고 안내합니다.',

    'ctaband.title': '단체에 맞춘 일정이 필요하신가요?',
    'ctaband.text': '문의를 남겨 주시면 일정과 견적을 함께 보내 드립니다.',

    'tours.intro': '원하시는 투어 종류를 선택하세요.',
    'tours.filter.all': '전체',
    'tours.filter.label': '투어 종류로 보기',
    'tours.empty': '해당 분류에 등록된 투어가 아직 없습니다. 문의해 주시면 일정을 구성해 드립니다.',

    'tour.back': '투어 목록으로 돌아가기',
    'tour.quickFacts': '한눈에 보기',
    'tour.ctaTitle': '이 일정에 관심이 있으신가요?',
    'tour.ctaText': '인원과 출발일에 맞춘 상세 일정과 견적을 보내 드립니다. 문의해 주세요.',
    'tour.photoCredit': '사진',

    'contact.intro': '문의를 남기시거나 전화로 연락해 주세요.',
    'contact.office': '사무실',
    'contact.map': '지도',
    'contact.mapTitle': 'YESTOURS 사무실 위치 지도',
    'contact.direct': '직접 연락하기',

    'form.noteMailto': '보내기를 누르면 작성한 내용이 담긴 채로 이메일 앱이 열립니다.',
    'form.noteFallback':
      '이메일 앱이 열리지 않으면 아래 연락처로 전화하시거나 이메일을 보내 주세요.',
    'form.subject': '투어 문의',
    'form.optional': '선택',

    'page.missing': '이 페이지는 준비 중입니다.',
    'page.fallbackNotice': '해당 언어 번역이 아직 준비되지 않아 베트남어 원문을 보여 드립니다.',

    'nav.terms': '이용약관',
    'notfound.title': '페이지를 찾을 수 없습니다',
    'notfound.text': '찾으시는 페이지가 없거나 주소가 변경되었습니다.',
    'notfound.home': '홈으로 가기',

    'a11y.skip': '본문으로 건너뛰기',
    'a11y.menu': '메뉴',
    'a11y.openMenu': '메뉴 열기',
    'a11y.closeMenu': '메뉴 닫기',
    'a11y.breadcrumb': '탐색 경로',

    'review.banner':
      '이 내용은 원어민 검수를 거치지 않은 번역본입니다. 이 경고는 개발 환경에서만 표시됩니다.',
  },
} as const;

export type ExtraKey = keyof (typeof extra)['vi'];

export function tx(locale: Locale) {
  return (key: ExtraKey): string => extra[locale][key] ?? extra.vi[key];
}
