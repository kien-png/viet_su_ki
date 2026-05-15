import { describe, expect, it } from 'vitest';
import { getIslandLabels, getMarkerPresentation } from '../modules/interactive-map/model/map-config.service';

describe('map config service', () => {
  it('returns highlighted marker values for the selected location', () => {
    expect(getMarkerPresentation(true, 'capital')).toMatchObject({
      radius: 7,
      glowRadius: 16,
      tone: 'selected'
    });
  });

  it('returns toned-down marker values for non-selected archaeological locations', () => {
    expect(getMarkerPresentation(false, 'archaeological')).toMatchObject({
      radius: 5,
      glowRadius: 10,
      tone: 'muted'
    });
  });

  it('provides fixed island labels for Hoang Sa and Truong Sa', () => {
    expect(getIslandLabels().map((item) => item.id)).toEqual(['hoang-sa', 'truong-sa']);
  });
});
