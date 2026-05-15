import homeHeroImage from '../../../assets/images/wikimedia/home_hero_hue.jpg';
import featureCharacterImage from '../../../assets/images/wikimedia/home_feature_character_tran_hung_dao.jpg';
import featureMapImage from '../../../assets/images/wikimedia/home_feature_map_hue_citadel.jpg';
import featureSearchImage from '../../../assets/images/wikimedia/home_feature_search_ho_chi_minh.jpg';
import featureTimelineImage from '../../../assets/images/wikimedia/home_feature_timeline_bach_dang.jpg';

export const homeHero = {
  eyebrow: 'Hành trình ngàn năm',
  title: 'Việt Sử Kí Số',
  quote: 'Chạm để hiểu Việt Nam - Lịch sử không còn nằm trong sách mà sống trong từng cú chạm.',
  description:
    'Khám phá lịch sử Việt Nam qua bản đồ số, timeline, nhân vật lịch sử và hệ thống tìm kiếm trực quan. Mỗi màn hình là một cánh cửa mở vào chiều sâu văn hóa Việt.',
  ctaLabel: 'Khám phá ngay',
  ctaRoute: '/map',
  backdropImage: homeHeroImage
};

export const homeFeatures = [
  {
    id: 'map',
    title: 'Bản đồ lịch sử Việt Nam',
    description: 'Khám phá địa danh với lớp thông tin văn hóa, nhân vật và cột mốc lịch sử.',
    route: '/map',
    image: featureMapImage,
    size: 'wide'
  },
  {
    id: 'character',
    title: 'Nhân vật lịch sử',
    description: 'Tìm hiểu về những con người đã định hình vận mệnh dân tộc.',
    route: '/characters',
    image: featureCharacterImage,
    size: 'compact'
  },
  {
    id: 'timeline',
    title: 'Dòng thời gian lịch sử',
    description: 'Theo dõi chuyển động của dân tộc qua các thời kỳ và triều đại lớn.',
    route: '/timeline',
    image: featureTimelineImage,
    size: 'compact'
  },
  {
    id: 'search',
    title: 'Tìm kiếm thông tin',
    description: 'Tra cứu theo địa danh, nhân vật, sự kiện và dấu mốc thời đại.',
    route: '/search',
    image: featureSearchImage,
    size: 'wide'
  }
];
