import { apiGet } from '../../../shared/api-client';
import { firstImage, formatYearRange } from '../../../shared/format';
import { getCharacterAssets } from './character.assets';

function mapCharacter(character) {
  const assets = getCharacterAssets(character.slug);
  const eventTitles = character.events?.map((item) => item.event?.title).filter(Boolean) || [];
  const image = firstImage(character.images, assets.portrait);

  return {
    id: character.id,
    name: character.name,
    slug: character.slug,
    era: formatYearRange(character.birthYear, character.deathYear),
    title: character.period?.name || 'Nhân vật lịch sử',
    summary: character.summary || character.description || 'Đang cập nhật nội dung.',
    portrait: image,
    cardImage: firstImage(character.images, assets.cardImage),
    quote: character.summary || 'Dữ liệu được lấy từ backend.',
    timeline: (character.timelines?.length
      ? character.timelines
      : eventTitles.map((title, index) => ({
          year: character.events[index]?.event?.startYear,
          title,
          description: character.events[index]?.event?.summary
        }))
    ).map((item) => ({
      year: item.year || 'Đang cập nhật',
      title: item.title,
      description: item.description || 'Đang cập nhật nội dung.'
    })),
    legacy: eventTitles.length ? eventTitles : [character.period?.name || 'Di sản lịch sử'],
    works: [character.description, ...eventTitles].filter(Boolean),
    relatedLocationSlugs: character.events?.map((item) => item.event?.location?.slug).filter(Boolean) || []
  };
}

export async function getCharacters() {
  const characters = await apiGet('/characters', { limit: 100 });

  return characters.map(mapCharacter);
}

export async function getCharacterBySlug(slug) {
  const character = await apiGet(`/characters/${slug}`);

  return mapCharacter(character);
}
