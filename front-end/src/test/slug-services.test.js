import { describe, expect, it } from 'vitest';
import {
  getLocationBySlug,
  getLocations
} from '../modules/interactive-map/model/location.service';
import {
  getCharacterBySlug,
  getCharacters
} from '../modules/character/model/character.service';

describe('slug services', () => {
  it('returns all locations and finds hue by slug', () => {
    expect(getLocations().length).toBeGreaterThanOrEqual(3);
    expect(getLocationBySlug('co-do-hue')?.name).toBe('Cố đô Huế');
  });

  it('returns all characters and finds tran hung dao by slug', () => {
    expect(getCharacters().length).toBeGreaterThanOrEqual(3);
    expect(getCharacterBySlug('tran-hung-dao')?.name).toBe('Trần Hưng Đạo');
  });
});
