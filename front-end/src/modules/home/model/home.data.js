import homeImage from '../../../assets/images/home.png';
import characterImage from '../../../assets/images/historical_figure.png';
import mapImage from '../../../assets/images/map.png';
import searchImage from '../../../assets/images/search.png';
import timelineImage from '../../../assets/images/timeline.png';

export const homeHero = {
  eyebrow: 'Hành trình ngàn năm',
  title: 'Việt Sử Kí Số',
  quote: 'Chạm để hiểu Việt Nam - Lịch sử không còn nằm trong sách mà sống trong từng cú chạm.',
  description:
    'Khám phá lịch sử Việt Nam qua bản đồ số, timeline, nhân vật lịch sử và hệ thống tìm kiếm trực quan. Mỗi màn hình là một cánh cửa mở vào chiều sâu văn hóa Việt.',
  ctaLabel: 'Khám phá ngay',
  ctaRoute: '/map',
  backdropImage: homeImage
};

export const homeFeatures = [
  {
    id: 'map',
    title: 'Bản đồ lịch sử Việt Nam',
    description: 'Khám phá địa danh với lớp thông tin văn hóa, nhân vật và cột mốc lịch sử.',
    route: '/map',
    image: mapImage,
    size: 'wide'
  },
  {
    id: 'character',
    title: 'Nhân vật lịch sử',
    description: 'Tìm hiểu về những con người đã định hình vận mệnh dân tộc.',
    route: '/characters',
    image: characterImage,
    size: 'tall'
  },
  {
    id: 'timeline',
    title: 'Dòng thời gian lịch sử',
    description: 'Theo dõi chuyển động của dân tộc qua các thời kỳ và triều đại lớn.',
    route: '/timeline',
    image: timelineImage,
    size: 'compact'
  },
  {
    id: 'search',
    title: 'Tìm kiếm thông tin',
    description: 'Tra cứu theo địa danh, nhân vật, sự kiện và dấu mốc thời đại.',
    route: '/search',
    image: searchImage,
    size: 'wide'
  }
];
