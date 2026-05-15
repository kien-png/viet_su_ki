export function getRevealStyle(delay = 0, reduceMotion = false) {
  return {
    transitionDelay: reduceMotion ? '0ms' : `${delay}ms`
  };
}

export function getRevealClassName(direction = 'up') {
  const directions = {
    up: 'reveal-up',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale'
  };

  return `reveal-base ${directions[direction] || directions.up}`;
}
