import { apiGet } from '../../../shared/api-client';
import { homeImages } from './home.assets';

export async function getHomeHero() {
  const [locations, periods, characters] = await Promise.all([
    apiGet('/locations', { limit: 100 }),
    apiGet('/periods', { limit: 100 }),
    apiGet('/characters', { limit: 100 })
  ]);

  return {
    eyebrow: 'Hành trình ngàn năm',
    title: 'Việt Sử Ký Sơ',
    quote: 'Chạm để hiểu Việt Nam - lịch sử sống trong từng dữ liệu được kết nối.',
    description: `Khám phá ${locations.length} địa danh, ${periods.length} thời kỳ và ${characters.length} nhân vật.`,
    ctaLabel: 'Khám phá ngay',
    ctaRoute: '/map',
    backdropImage: homeImages.hero
  };
}

export async function getHomeFeatures() {
  const [locations, periods, characters] = await Promise.all([
    apiGet('/locations', { limit: 100 }),
    apiGet('/periods', { limit: 100 }),
    apiGet('/characters', { limit: 100 })
  ]);

  return [
    {
      id: 'map',
      title: 'Bản đồ lịch sử Việt Nam',
      description: `${locations.length} địa danh đang được cập nhật từ backend.`,
      route: '/map',
      image: homeImages.map,
      size: 'wide'
    },
    {
      id: 'character',
      title: 'Nhân vật lịch sử',
      description: `${characters.length} nhân vật lịch sử trong cơ sở dữ liệu.`,
      route: '/characters',
      image: homeImages.character,
      size: 'compact'
    },
    {
      id: 'timeline',
      title: 'Dòng thời gian lịch sử',
      description: `${periods.length} thời kỳ được sắp xếp theo mốc thời gian.`,
      route: '/timeline',
      image: homeImages.timeline,
      size: 'compact'
    },
    {
      id: 'search',
      title: 'Tìm kiếm thông tin',
      description: 'Tra cứu địa danh, nhân vật, sự kiện và thời kỳ từ backend.',
      route: '/search',
      image: homeImages.search,
      size: 'wide'
    }
  ];
}
