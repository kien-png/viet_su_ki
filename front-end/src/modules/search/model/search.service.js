import { apiGet } from '../../../shared/api-client';
import { homeImages } from '../../home/model/home.assets';

export function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Ä‘/g, 'd')
    .trim();
}

function mapResult(item) {
  const type = item.type === 'period' ? 'timeline' : item.type;
  const routeByType = {
    character: `/characters/${item.slug}`,
    event: '/timeline',
    location: `/map/${item.slug}`,
    timeline: '/timeline'
  };

  return {
    id: `${type}-${item.id}`,
    title: item.title,
    summary: item.summary || '',
    type,
    meta: item.slug || '',
    route: routeByType[type] || '/search',
    image: homeImages[type === 'location' ? 'map' : type] || homeImages.search
  };
}

export async function searchHistory(keyword, activeType = 'all') {
  const normalizedKeyword = normalizeText(keyword);
  const backendType = activeType === 'all' ? undefined : activeType === 'timeline' ? 'period' : activeType;

  if (!normalizedKeyword) {
    return [];
  }

  const results = await apiGet('/search', { q: normalizedKeyword, type: backendType });

  return results.map(mapResult);
}
