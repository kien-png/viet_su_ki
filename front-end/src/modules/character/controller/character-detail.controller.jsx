import { getCharacterBySlug } from '../model/character.service';
import { CharacterDetailView } from '../view/character-detail.view';

export function CharacterDetailController({ characterSlug }) {
  const character = getCharacterBySlug(characterSlug);

  return <CharacterDetailView character={character} />;
}
