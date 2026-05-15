import { describe, expect, it } from 'vitest';
import { normalizeText, searchHistory } from '../modules/search/model/search.service';

describe('search service', () => {
  it('normalizes Vietnamese text with accents', () => {
    expect(normalizeText('Bạch Đằng')).toBe('bach dang');
  });

  it('finds matching records without accents', () => {
    const results = searchHistory('bach dang');

    expect(results.length).toBeGreaterThan(0);
    expect(results.some((item) => item.title.includes('Bạch Đằng'))).toBe(true);
  });

  it('filters results by type', () => {
    const results = searchHistory('nguyen', 'character');

    expect(results.every((item) => item.type === 'character')).toBe(true);
  });
});
