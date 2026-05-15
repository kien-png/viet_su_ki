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
    title: character.period?.name || 'Nhan vat lich su',
    summary: character.summary || character.description || 'Dang cap nhat noi dung.',
    portrait: image,
    cardImage: firstImage(character.images, assets.cardImage),
    quote: character.summary || 'Du lieu duoc lay tu backend.',
    timeline: (character.timelines?.length
      ? character.timelines
      : eventTitles.map((title, index) => ({
          year: character.events[index]?.event?.startYear,
          title,
          description: character.events[index]?.event?.summary
        }))
    ).map((item) => ({
      year: item.year || 'Dang cap nhat',
      title: item.title,
      description: item.description || 'Dang cap nhat noi dung.'
    })),
    legacy: eventTitles.length ? eventTitles : [character.period?.name || 'Di san lich su'],
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
