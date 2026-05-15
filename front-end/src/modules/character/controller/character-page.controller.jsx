import { getCharacters } from '../model/character.service';
import { CharacterListView } from '../view/character-list.view';

export function CharacterPageController() {
  const characters = getCharacters();

  return <CharacterListView characters={characters} />;
}
