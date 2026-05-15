import { useEffect, useState } from 'react';
import { getCharacters } from '../model/character.service';
import { CharacterListView } from '../view/character-list.view';

export function CharacterPageController() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let active = true;

    getCharacters()
      .then((data) => {
        if (active) {
          setCharacters(data);
        }
      })
      .catch(() => {
        if (active) {
          setCharacters([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return <CharacterListView characters={characters} />;
}
