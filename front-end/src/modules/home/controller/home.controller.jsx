import { getHomeFeatures, getHomeHero } from '../model/home.service';
import { HomeView } from '../view/home.view';

export function HomeController() {
  const hero = getHomeHero();
  const features = getHomeFeatures();

  return <HomeView features={features} hero={hero} />;
}
