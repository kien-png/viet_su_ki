import { describe, expect, it } from 'vitest';
import { getRevealClassName, getRevealStyle } from '../components/motion/reveal.helpers';

describe('reveal motion helpers', () => {
  it('builds a delay style from milliseconds', () => {
    expect(getRevealStyle(240, false)).toEqual({
      transitionDelay: '240ms'
    });
  });

  it('removes delay when motion is reduced', () => {
    expect(getRevealStyle(240, true)).toEqual({
      transitionDelay: '0ms'
    });
  });

  it('maps directional reveals to css class names', () => {
    expect(getRevealClassName('up')).toContain('reveal-up');
    expect(getRevealClassName('left')).toContain('reveal-left');
    expect(getRevealClassName('scale')).toContain('reveal-scale');
  });
});
