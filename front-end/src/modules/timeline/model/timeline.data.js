import timelineImage from '../../../assets/images/timeline.png';
import detailImage from '../../../assets/images/history_map_detail.png';

export const historicalTimeline = [
  {
    id: 'van-lang',
    title: 'Văn Lang',
    period: 'Khoảng thế kỷ VII TCN - 258 TCN',
    summary: 'Nhà nước sơ khai đầu tiên đặt nền cho bản sắc cộng đồng Lạc Việt.',
    bulletPoints: ['Hình thành tổ chức bộ lạc', 'Vua Hùng và truyền thuyết dựng nước', 'Văn hóa Đông Sơn nảy mầm'],
    image: timelineImage,
    theme: 'Nguồn cội quốc gia'
  },
  {
    id: 'au-lac',
    title: 'Âu Lạc',
    period: '257 TCN - 179 TCN',
    summary: 'Giai đoạn hợp nhất và củng cố năng lực phòng thủ với Cổ Loa là trung tâm.',
    bulletPoints: ['An Dương Vương', 'Thành Cổ Loa', 'Nỏ thần trong ký ức văn hóa'],
    image: detailImage,
    theme: 'Nhà nước hợp nhất'
  },
  {
    id: 'nha-tran',
    title: 'Nhà Trần',
    period: '1225 - 1400',
    summary: 'Thời kỳ quân dân Đại Việt nhiều lần chiến thắng Nguyên Mông và phát triển văn trị.',
    bulletPoints: ['Kháng chiến chống Nguyên Mông', 'Hưng Đạo Đại Vương', 'Hào khí Đông A'],
    image: timelineImage,
    theme: 'Hào khí Đông A'
  },
  {
    id: 'nha-le',
    title: 'Nhà Lê',
    period: '1428 - 1789',
    summary: 'Từ khởi nghĩa Lam Sơn đến hệ thống luật pháp và hành chính chặt chẽ.',
    bulletPoints: ['Lê Lợi giành độc lập', 'Bộ luật Hồng Đức', 'Phát triển Nho học'],
    image: detailImage,
    theme: 'Kỷ cương và phục hưng'
  },
  {
    id: 'nha-nguyen',
    title: 'Nhà Nguyễn',
    period: '1802 - 1945',
    summary: 'Triều đại quân chủ cuối cùng với trung tâm quyền lực và văn hiến tại Huế.',
    bulletPoints: ['Gia Long thống nhất đất nước', 'Kinh thành Huế', 'Di sản cung đình'],
    image: timelineImage,
    theme: 'Trật tự cung đình'
  },
  {
    id: 'khang-chien-chong-phap',
    title: 'Kháng chiến chống Pháp',
    period: '1858 - 1954',
    summary: 'Một thế kỷ đấu tranh giành độc lập culminates tại Điện Biên Phủ.',
    bulletPoints: ['Phong trào Cần Vương', 'Cách mạng Tháng Tám', 'Chiến thắng Điện Biên Phủ'],
    image: detailImage,
    theme: 'Kháng chiến giải phóng'
  },
  {
    id: 'khang-chien-chong-my',
    title: 'Kháng chiến chống Mỹ',
    period: '1954 - 1975',
    summary: 'Cuộc chiến lâu dài dẫn đến thống nhất đất nước và khép lại chia cắt.',
    bulletPoints: ['Đồng khởi', 'Tổng tiến công Mậu Thân', 'Mùa xuân 1975'],
    image: timelineImage,
    theme: 'Thống nhất non sông'
  }
];
