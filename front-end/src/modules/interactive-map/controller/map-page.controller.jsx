import { useMemo, useState } from 'react';
import { getLocationBySlug, getLocations } from '../model/location.service';
import { MapOverviewView } from '../view/map-overview.view';

export function MapPageController() {
  const locations = getLocations();
  const [selectedLocationId, setSelectedLocationId] = useState(locations[0]?.id);

  const selectedLocation = useMemo(() => {
    return locations.find((loc) => loc.id === selectedLocationId) || locations[0];
  }, [selectedLocationId, locations]);

  return (
    <MapOverviewView
      locations={locations}
      selectedLocation={selectedLocation}
      selectedLocationId={selectedLocationId}
      onSelectLocation={setSelectedLocationId}
    />
  );
}
