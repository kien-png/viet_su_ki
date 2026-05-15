import { useEffect, useState } from 'react';
import { getLocationBySlug } from '../model/location.service';
import { MapDetailView } from '../view/map-detail.view';

export function MapDetailController({ locationSlug }) {
  const [location, setLocation] = useState();

  useEffect(() => {
    let active = true;

    getLocationBySlug(locationSlug)
      .then((data) => {
        if (active) {
          setLocation(data);
        }
      })
      .catch(() => {
        if (active) {
          setLocation(null);
        }
      });

    return () => {
      active = false;
    };
  }, [locationSlug]);

  return <MapDetailView location={location} />;
}
