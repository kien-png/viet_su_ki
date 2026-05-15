import { Route, Routes } from 'react-router-dom';
import { CharacterDetailPage } from '../pages/character-detail-page';
import { CharacterPage } from '../pages/character-page';
import { HomePage } from '../pages/home-page';
import { MapDetailPage } from '../pages/map-detail-page';
import { MapPage } from '../pages/map-page';
import { SearchPage } from '../pages/search-page';
import { TimelinePage } from '../pages/timeline-page';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<MapPage />} path="/map" />
      <Route element={<MapDetailPage />} path="/map/:locationSlug" />
      <Route element={<TimelinePage />} path="/timeline" />
      <Route element={<CharacterPage />} path="/characters" />
      <Route element={<CharacterDetailPage />} path="/characters/:characterSlug" />
      <Route element={<SearchPage />} path="/search" />
    </Routes>
  );
}
