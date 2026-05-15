import { useEffect, useState } from 'react';
import { getCharacterBySlug } from '../model/character.service';
import { CharacterDetailView } from '../view/character-detail.view';

export function CharacterDetailController({ characterSlug }) {
  const [character, setCharacter] = useState();

  useEffect(() => {
    let active = true;

    getCharacterBySlug(characterSlug)
      .then((data) => {
        if (active) {
          setCharacter(data);
        }
      })
      .catch(() => {
        if (active) {
          setCharacter(null);
        }
      });

    return () => {
      active = false;
    };
  }, [characterSlug]);

  return <CharacterDetailView character={character} />;
}
