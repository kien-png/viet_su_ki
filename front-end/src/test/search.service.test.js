import { beforeEach, describe, expect, it, vi } from 'vitest';
import { normalizeText, searchHistory } from '../modules/search/model/search.service';

describe('search service', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          success: true,
          data: [
            {
              id: 1,
              slug: 'bach-dang',
              summary: 'Song lich su',
              title: 'Bach Dang',
              type: 'location'
            }
          ]
        })
    });
  });

  it('normalizes Vietnamese text with accents', () => {
    expect(normalizeText('Bạch Đằng')).toBe('bach dang');
  });

  it('finds matching records from backend', async () => {
    const results = await searchHistory('bach dang');

    expect(results.length).toBe(1);
    expect(results[0]).toMatchObject({
      route: '/map/bach-dang',
      title: 'Bach Dang',
      type: 'location'
    });
  });

  it('passes the active type to backend', async () => {
    await searchHistory('nguyen', 'character');

    expect(String(global.fetch.mock.calls[0][0])).toContain('type=character');
  });
});
