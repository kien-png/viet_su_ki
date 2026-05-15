import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  getLocationBySlug,
  getLocations
} from '../modules/interactive-map/model/location.service';
import {
  getCharacterBySlug,
  getCharacters
} from '../modules/character/model/character.service';

const location = {
  id: 1,
  address: 'Hue',
  description: 'Kinh do nha Nguyen',
  images: [],
  latitude: 16.4637,
  longitude: 107.5909,
  name: 'Hue',
  slug: 'hue',
  summary: 'Co do Hue',
  _count: { events: 1 }
};

const character = {
  id: 2,
  birthYear: 1228,
  deathYear: 1300,
  description: 'Danh tuong nha Tran',
  events: [],
  images: [],
  name: 'Tran Hung Dao',
  period: { name: 'Nha Tran' },
  slug: 'tran-hung-dao',
  summary: 'Danh tuong'
};

describe('slug services', () => {
  beforeEach(() => {
    global.fetch = vi.fn((url) =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            success: true,
            data: String(url).includes('/characters') ? [character] : [location]
          })
      })
    );
  });

  it('returns all locations and maps backend location fields', async () => {
    const locations = await getLocations();

    expect(locations.length).toBe(1);
    expect(locations[0]).toMatchObject({ name: 'Hue', slug: 'hue' });
  });

  it('finds a location by slug from backend', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, data: location })
    });

    await expect(getLocationBySlug('hue')).resolves.toMatchObject({ name: 'Hue' });
  });

  it('returns all characters and maps backend character fields', async () => {
    const characters = await getCharacters();

    expect(characters.length).toBe(1);
    expect(characters[0]).toMatchObject({ name: 'Tran Hung Dao', slug: 'tran-hung-dao' });
  });

  it('finds a character by slug from backend', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, data: character })
    });

    await expect(getCharacterBySlug('tran-hung-dao')).resolves.toMatchObject({ name: 'Tran Hung Dao' });
  });
});
