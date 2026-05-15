import { getLocations } from '../model/location.service';
import { MapOverviewView } from '../view/map-overview.view';

export function MapPageController() {
  const locations = getLocations();
  const featuredLocation = locations[0];

  return <MapOverviewView featuredLocation={featuredLocation} locations={locations} />;
}
