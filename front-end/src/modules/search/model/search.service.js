import { getCharacters } from '../../character/model/character.service';
import { getLocations } from '../../interactive-map/model/location.service';
import { getTimelinePeriods } from '../../timeline/model/timeline.service';

export function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .trim();
}

function getSearchIndex() {
  const locationItems = getLocations().flatMap((location) => {
    const baseItem = {
      id: location.id,
      title: location.name,
      summary: location.summary,
      type: 'location',
      meta: `${location.region} ${location.province} ${location.searchTags.join(' ')}`,
      route: `/map/${location.slug}`,
      image: location.featuredImage
    };

    const eventItems = location.timelineMoments.map((moment) => ({
      id: `${location.id}-${moment.year}`,
      title: `${moment.title} (${moment.year})`,
      summary: moment.description,
      type: 'event',
      meta: `${location.name} ${location.title}`,
      route: `/map/${location.slug}`,
      image: location.featuredImage
    }));

    return [baseItem, ...eventItems];
  });

  const characterItems = getCharacters().map((character) => ({
    id: character.id,
    title: character.name,
    summary: character.summary,
    type: 'character',
    meta: `${character.title} ${character.era}`,
    route: `/characters/${character.slug}`,
    image: character.portrait
  }));

  const timelineItems = getTimelinePeriods().map((period) => ({
    id: period.id,
    title: period.title,
    summary: period.summary,
    type: 'timeline',
    meta: `${period.period} ${period.theme} ${period.bulletPoints.join(' ')}`,
    route: '/timeline',
    image: period.image
  }));

  return [...locationItems, ...characterItems, ...timelineItems];
}

export function searchHistory(keyword, activeType = 'all') {
  const normalizedKeyword = normalizeText(keyword);
  const allItems = getSearchIndex();

  // Nếu không có keyword, trả về tất cả items theo type
  if (!normalizedKeyword) {
    return activeType === 'all' ? allItems : allItems.filter((item) => item.type === activeType);
  }

  return allItems.filter((item) => {
    const isTypeMatch = activeType === 'all' || item.type === activeType;
    const searchableText = normalizeText(`${item.title} ${item.summary} ${item.meta}`);

    return isTypeMatch && searchableText.includes(normalizedKeyword);
  });
}
