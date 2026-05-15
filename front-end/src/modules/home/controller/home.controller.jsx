import { useEffect, useState } from 'react';
import { getHomeFeatures, getHomeHero } from '../model/home.service';
import { HomeView } from '../view/home.view';

export function HomeController() {
  const [hero, setHero] = useState();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    let active = true;

    Promise.all([getHomeHero(), getHomeFeatures()])
      .then(([nextHero, nextFeatures]) => {
        if (active) {
          setHero(nextHero);
          setFeatures(nextFeatures);
        }
      })
      .catch(() => {
        if (active) {
          setFeatures([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (!hero) {
    return null;
  }

  return <HomeView features={features} hero={hero} />;
}
