import { apiGet } from '../../../shared/api-client';
import { homeImages } from './home.assets';

export async function getHomeHero() {
  const [locations, periods, characters] = await Promise.all([
    apiGet('/locations', { limit: 100 }),
    apiGet('/periods', { limit: 100 }),
    apiGet('/characters', { limit: 100 })
  ]);

  return {
    eyebrow: 'Hanh trinh ngan nam',
    title: 'Viet Su Ki So',
    quote: 'Cham de hieu Viet Nam - lich su song trong tung du lieu duoc ket noi.',
    description: `Kham pha ${locations.length} dia danh, ${periods.length} thoi ky va ${characters.length} nhan vat tu backend.`,
    ctaLabel: 'Kham pha ngay',
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
      title: 'Ban do lich su Viet Nam',
      description: `${locations.length} dia danh dang duoc cap nhat tu backend.`,
      route: '/map',
      image: homeImages.map,
      size: 'wide'
    },
    {
      id: 'character',
      title: 'Nhan vat lich su',
      description: `${characters.length} nhan vat lich su trong co so du lieu.`,
      route: '/characters',
      image: homeImages.character,
      size: 'compact'
    },
    {
      id: 'timeline',
      title: 'Dong thoi gian lich su',
      description: `${periods.length} thoi ky duoc sap xep theo moc thoi gian.`,
      route: '/timeline',
      image: homeImages.timeline,
      size: 'compact'
    },
    {
      id: 'search',
      title: 'Tim kiem thong tin',
      description: 'Tra cuu dia danh, nhan vat, su kien va thoi ky tu backend.',
      route: '/search',
      image: homeImages.search,
      size: 'wide'
    }
  ];
}
