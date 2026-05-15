import { historicalCharacters } from './character.data';

export function getCharacters() {
  return historicalCharacters;
}

export function getCharacterBySlug(slug) {
  return historicalCharacters.find((character) => character.slug === slug);
}
