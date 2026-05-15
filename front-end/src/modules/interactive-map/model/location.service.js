import { historicalLocations } from './location.data';

export function getLocations() {
  return historicalLocations;
}

export function getLocationBySlug(slug) {
  return historicalLocations.find((location) => location.slug === slug);
}
