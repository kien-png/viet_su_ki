import { useEffect, useMemo, useState } from 'react';
import { getLocations } from '../model/location.service';
import { MapOverviewView } from '../view/map-overview.view';

export function MapPageController() {
  const [locations, setLocations] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState();

  useEffect(() => {
    let active = true;

    getLocations()
      .then((data) => {
        if (active) {
          setLocations(data);
          setSelectedLocationId(data[0]?.id);
        }
      })
      .catch(() => {
        if (active) {
          setLocations([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const selectedLocation = useMemo(() => {
    return locations.find((loc) => loc.id === selectedLocationId) || locations[0];
  }, [selectedLocationId, locations]);

  if (!selectedLocation) {
    return null;
  }

  return (
    <MapOverviewView
      locations={locations}
      selectedLocation={selectedLocation}
      selectedLocationId={selectedLocationId}
      onSelectLocation={setSelectedLocationId}
    />
  );
}
