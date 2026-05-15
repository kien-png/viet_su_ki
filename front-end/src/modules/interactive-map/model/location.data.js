import bachDangFeaturedImage from '../../../assets/images/wikimedia/bach_dang_featured.jpg';
import bachDangMapImage from '../../../assets/images/wikimedia/bach_dang_map.jpg';
import dienBienFeaturedImage from '../../../assets/images/wikimedia/dien_bien_featured.jpg';
import dienBienGalleryImage from '../../../assets/images/wikimedia/dien_bien_gallery_1.jpg';
import dienBienMuseumImage from '../../../assets/images/wikimedia/dien_bien_gallery_2.jpg';
import dienBienMemorialImage from '../../../assets/images/wikimedia/dien_bien_gallery_3.jpg';
import dienBienMapImage from '../../../assets/images/wikimedia/dien_bien_map.jpg';
import hueFeaturedImage from '../../../assets/images/wikimedia/hue_featured.jpg';
import hueHeroImage from '../../../assets/images/wikimedia/hue_gallery_1.jpg';
import hueCitadelImage from '../../../assets/images/wikimedia/hue_gallery_3.jpg';
import hueMapImage from '../../../assets/images/wikimedia/hue_map.jpg';

const bachDangBattleImage = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Battle_of_Bach_Dang_river.jpg';
const bachDangStakeFieldImage = 'https://upload.wikimedia.org/wikipedia/commons/4/49/C%E1%BB%8Dc_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng.jpg';
const bachDangTempleImage =
  'https://upload.wikimedia.org/wikipedia/commons/b/b3/B%C3%A3i_c%E1%BB%8Dc_tr%C3%AAn_s%C3%B4ng_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng.jpg';

export const historicalLocations = [
  {
    id: 'hue',
    name: 'Cố đô Huế',
    slug: 'co-do-hue',
    region: 'Miền Trung',
    province: 'Thừa Thiên Huế',
    title: 'Triều Đại Nhà Nguyễn',
    summary: 'Cố đô Huế là trái tim của triều Nguyễn, nơi lưu giữ tinh hoa văn hóa cung đình Việt.',
    description:
      'Từ Kinh thành Huế đến các lăng tẩm, quần thể di tích nơi đây phản chiếu một giai đoạn định hình bản sắc quốc gia với quy hoạch cung điện, nghi lễ và nghệ thuật tinh xảo.',
    quote: 'Một huyết mạch văn hiến và quyền lực để chế định cốt cách của Việt Nam.',
    featuredImage: hueFeaturedImage,
    mapImage: hueMapImage,
    period: '1802 - 1945',
    rulers: ['Vua Gia Long', 'Vua Minh Mạng'],
    coordinates: { longitude: 107.585, latitude: 16.4637 },
    type: 'capital',
    stats: [
      { label: 'Di sản UNESCO', value: '1 quần thể' },
      { label: 'Điểm nổi bật', value: 'Kinh thành Huế' },
      { label: 'Dấu mốc', value: '1802' }
    ],
    timelineMoments: [
      { year: '1802', title: 'Huế trở thành kinh đô', description: 'Gia Long thống nhất sơn hà và xác lập trung tâm quyền lực mới.' },
      { year: '1821', title: 'Mở rộng quy hoạch Hoàng thành', description: 'Kiến trúc cung đình được chuẩn hóa với trục nghi lễ nghiêm cẩn.' },
      { year: '1945', title: 'Khép lại chế độ quân chủ', description: 'Huế bước vào một chương mới nhưng vẫn giữ vai trò trung tâm ký ức quốc gia.' }
    ],
    architectureGallery: [
      { id: 'hue-g1', title: 'Toàn cảnh Kinh thành Huế', image: hueHeroImage },
      { id: 'hue-g2', title: 'Không gian Hoàng thành', image: hueCitadelImage },
      { id: 'hue-g3', title: 'Dấu tích triều Nguyễn', image: hueFeaturedImage }
    ],
    figures: ['Vua Gia Long', 'Vua Minh Mạng', 'Tôn Thất Thuyết'],
    searchTags: ['kinh đô', 'nhà nguyễn', 'huế', 'di sản']
  },
  {
    id: 'dien-bien-phu',
    name: 'Điện Biên Phủ',
    slug: 'dien-bien-phu',
    region: 'Tây Bắc',
    province: 'Điện Biên',
    title: 'Kháng chiến chống Pháp',
    summary: 'Điện Biên Phủ là biểu tượng của chiến thắng quyết định trước thực dân Pháp năm 1954.',
    description:
      'Thung lũng Mường Thanh trở thành chiến địa nơi nghệ thuật quân sự, hậu cần và ý chí độc lập tạo nên một trong những chiến thắng có ảnh hưởng toàn cầu của thế kỷ XX.',
    quote: 'Một chiến thắng làm thay đổi bản đồ chính trị và niềm tin của các dân tộc thuộc địa.',
    featuredImage: dienBienFeaturedImage,
    mapImage: dienBienMapImage,
    period: '1954',
    rulers: ['Võ Nguyên Giáp'],
    coordinates: { longitude: 103.023, latitude: 21.386 },
    type: 'archaeological',
    stats: [
      { label: 'Chiến dịch', value: '56 ngày đêm' },
      { label: 'Mốc lịch sử', value: '7/5/1954' },
      { label: 'Biểu tượng', value: 'Hầm De Castries' }
    ],
    timelineMoments: [
      { year: '1953', title: 'Kế hoạch Nava', description: 'Pháp xây dựng tập đoàn cứ điểm để khóa chiến trường Bắc Bộ.' },
      { year: '3/1954', title: 'Nổ súng chiến dịch', description: 'Pháo binh và công binh mở màn chiến dịch trong địa hình hiểm trở.' },
      { year: '7/5/1954', title: 'Toàn thắng', description: 'Chiến thắng Điện Biên Phủ buộc Pháp ký Hiệp định Geneva.' }
    ],
    architectureGallery: [
      { id: 'dbp-g1', title: 'Thung lũng Mường Thanh', image: dienBienGalleryImage },
      { id: 'dbp-g2', title: 'Bảo tàng chiến thắng', image: dienBienMuseumImage },
      { id: 'dbp-g3', title: 'Không gian tưởng niệm chiến dịch', image: dienBienMemorialImage }
    ],
    figures: ['Võ Nguyên Giáp', 'Phan Đình Giót'],
    searchTags: ['dien bien phu', '1954', 'chien dich', 'khang chien chong phap']
  },
  {
    id: 'bach-dang',
    name: 'Sông Bạch Đằng',
    slug: 'bach-dang',
    region: 'Đông Bắc',
    province: 'Quảng Ninh - Hải Phòng',
    title: 'Những chiến thắng trên sông',
    summary: 'Bạch Đằng là biểu tượng của chiến lược thủy chiến và ý chí giữ nước qua nhiều thời kỳ.',
    description:
      'Từ Ngô Quyền đến Trần Hưng Đạo, dòng sông này đã chứng kiến những trận đánh mà địa hình, cọc gỗ và khả năng hợp nhất toàn dân trở thành nghệ thuật quân sự đặc sắc của Đại Việt.',
    quote: 'Dòng sông lịch sử khắc ghi những chiến công nhắc nhớ tinh thần tự chủ của dân tộc.',
    featuredImage: bachDangFeaturedImage,
    mapImage: bachDangMapImage,
    period: '938 - 1288',
    rulers: ['Ngô Quyền', 'Trần Hưng Đạo'],
    coordinates: { longitude: 106.823, latitude: 20.941 },
    type: 'archaeological',
    stats: [
      { label: 'Thời kỳ', value: '938 - 1288' },
      { label: 'Loại hình', value: 'Thủy chiến' },
      { label: 'Biểu tượng', value: 'Bãi cọc' }
    ],
    timelineMoments: [
      { year: '938', title: 'Ngô Quyền đại phá quân Nam Hán', description: 'Mốc mở đầu cho thời kỳ độc lập tự chủ lâu dài.' },
      { year: '981', title: 'Lê Hoàn chiến thắng', description: 'Bạch Đằng tiếp tục là nơi kiểm chứng ưu thế địa hình sông nước.' },
      { year: '1288', title: 'Trần Hưng Đạo đánh bại quân Nguyên', description: 'Đỉnh cao nghệ thuật chiến tranh nhân dân trên sông nước.' }
    ],
    architectureGallery: [
      { id: 'bd-g1', title: 'Tranh trận Bạch Đằng', image: bachDangBattleImage },
      { id: 'bd-g2', title: 'Bãi cọc khảo cổ', image: bachDangStakeFieldImage },
      { id: 'bd-g3', title: 'Di tích trên sông Bạch Đằng', image: bachDangTempleImage }
    ],
    figures: ['Ngô Quyền', 'Trần Hưng Đạo'],
    searchTags: ['bach dang', 'tran hung dao', 'ngo quyen', '1288']
  }
];
