import { getLocationBySlug } from '../model/location.service';
import { MapDetailView } from '../view/map-detail.view';

export function MapDetailController({ locationSlug }) {
  const location = getLocationBySlug(locationSlug);

  return <MapDetailView location={location} />;
}
