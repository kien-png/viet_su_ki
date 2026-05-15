const markerPresets = {
  selected: { radius: 7, glowRadius: 16, tone: 'selected' },
  capital: { radius: 6, glowRadius: 12, tone: 'capital' },
  muted: { radius: 5, glowRadius: 10, tone: 'muted' }
};

const islandLabels = [
  { id: 'hoang-sa', label: 'Hoàng Sa', coordinates: [114.7, 16.5] },
  { id: 'truong-sa', label: 'Trường Sa', coordinates: [113.8, 10.1] }
];

export function getMarkerPresentation(isSelected, locationType) {
  if (isSelected) {
    return markerPresets.selected;
  }

  if (locationType === 'capital') {
    return markerPresets.capital;
  }

  return markerPresets.muted;
}

export function getIslandLabels() {
  return islandLabels;
}
