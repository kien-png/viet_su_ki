# Viet Su Ki Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Viet Su Ki So frontend as a multi-route React application that follows the repo MVC rules and matches the provided design mocks.

**Architecture:** The app uses `react-router-dom` for real navigation, shared layout components for global chrome, and per-feature MVC modules for data, controller logic, and views. Mock data stays inside model folders, page files remain thin route shells, and reusable visual primitives live under `src/components`.

**Tech Stack:** React 19, JavaScript, Vite, React Router DOM, Tailwind CSS, Vitest, Testing Library, ESLint

---

## File Structure

- Modify: `front-end/package.json`
- Create: `front-end/postcss.config.js`
- Create: `front-end/src/routes/app-router.jsx`
- Create: `front-end/src/pages/home-page.jsx`
- Create: `front-end/src/pages/map-page.jsx`
- Create: `front-end/src/pages/map-detail-page.jsx`
- Create: `front-end/src/pages/timeline-page.jsx`
- Create: `front-end/src/pages/character-page.jsx`
- Create: `front-end/src/pages/character-detail-page.jsx`
- Create: `front-end/src/pages/search-page.jsx`
- Create: `front-end/src/components/layout/navbar.jsx`
- Create: `front-end/src/components/layout/footer.jsx`
- Create: `front-end/src/components/ui/action-button.jsx`
- Create: `front-end/src/components/ui/info-tag.jsx`
- Create: `front-end/src/components/ui/panel-card.jsx`
- Create: `front-end/src/components/ui/section-shell.jsx`
- Create: `front-end/src/modules/home/model/home.data.js`
- Create: `front-end/src/modules/home/model/home.service.js`
- Create: `front-end/src/modules/home/view/home.view.jsx`
- Create: `front-end/src/modules/home/controller/home.controller.jsx`
- Create: `front-end/src/modules/home/index.js`
- Create: `front-end/src/modules/interactive-map/model/location.data.js`
- Create: `front-end/src/modules/interactive-map/model/location.service.js`
- Create: `front-end/src/modules/interactive-map/view/map-overview.view.jsx`
- Create: `front-end/src/modules/interactive-map/view/map-detail.view.jsx`
- Create: `front-end/src/modules/interactive-map/controller/map-page.controller.jsx`
- Create: `front-end/src/modules/interactive-map/controller/map-detail.controller.jsx`
- Create: `front-end/src/modules/interactive-map/index.js`
- Create: `front-end/src/modules/timeline/model/timeline.data.js`
- Create: `front-end/src/modules/timeline/model/timeline.service.js`
- Create: `front-end/src/modules/timeline/view/timeline.view.jsx`
- Create: `front-end/src/modules/timeline/controller/timeline.controller.jsx`
- Create: `front-end/src/modules/timeline/index.js`
- Create: `front-end/src/modules/character/model/character.data.js`
- Create: `front-end/src/modules/character/model/character.service.js`
- Create: `front-end/src/modules/character/view/character-list.view.jsx`
- Create: `front-end/src/modules/character/view/character-detail.view.jsx`
- Create: `front-end/src/modules/character/controller/character-page.controller.jsx`
- Create: `front-end/src/modules/character/controller/character-detail.controller.jsx`
- Create: `front-end/src/modules/character/index.js`
- Create: `front-end/src/modules/search/model/search.service.js`
- Create: `front-end/src/modules/search/view/search.view.jsx`
- Create: `front-end/src/modules/search/controller/search.controller.jsx`
- Create: `front-end/src/modules/search/index.js`
- Modify: `front-end/src/App.jsx`
- Modify: `front-end/src/main.jsx`
- Modify: `front-end/src/index.css`
- Delete or stop using: `front-end/src/App.css`
- Create: `front-end/src/test/search.service.test.js`
- Create: `front-end/src/test/slug-services.test.js`
- Modify: `front-end/vite.config.js`

### Task 1: Tooling And App Shell

**Files:**
- Modify: `front-end/package.json`
- Create: `front-end/postcss.config.js`
- Modify: `front-end/src/main.jsx`
- Modify: `front-end/src/App.jsx`
- Modify: `front-end/src/index.css`
- Modify: `front-end/vite.config.js`

- [ ] **Step 1: Add the failing dependency expectations to package config**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "test": "vitest run"
  },
  "dependencies": {
    "react-router-dom": "^7.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.0.0",
    "tailwindcss": "^4.0.0",
    "vitest": "^3.0.0"
  }
}
```

- [ ] **Step 2: Install packages and verify the repo resolves**

Run: `npm install`
Expected: install completes without unresolved dependency errors

- [ ] **Step 3: Add the router shell and Tailwind entry**

```jsx
// src/App.jsx
import { AppRouter } from './routes/app-router';

export default function App() {
  return <AppRouter />;
}
```

```jsx
// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
};
```

- [ ] **Step 4: Add the shared root theme styles**

```css
@import 'tailwindcss';

:root {
  color: #f4ecd8;
  background:
    radial-gradient(circle at top, rgba(33, 52, 73, 0.82), rgba(10, 10, 8, 0.96) 38%),
    linear-gradient(180deg, #14130f, #070706);
  font-family: 'Georgia', 'Times New Roman', serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #0d0c09;
}

#root {
  min-height: 100vh;
}
```

- [ ] **Step 5: Run a production build to verify the shell still compiles**

Run: `npm run build`
Expected: build succeeds and emits a Vite production bundle

### Task 2: Write Service Tests First

**Files:**
- Create: `front-end/src/test/search.service.test.js`
- Create: `front-end/src/test/slug-services.test.js`

- [ ] **Step 1: Write failing tests for normalize and search behavior**

```js
import { describe, expect, it } from 'vitest';
import { normalizeText, searchHistory } from '../modules/search/model/search.service';

describe('search service', () => {
  it('normalizes Vietnamese text with accents', () => {
    expect(normalizeText('Bạch Đằng')).toBe('bach dang');
  });

  it('finds matching records without accents', () => {
    const results = searchHistory('bach dang');
    expect(results.some((item) => item.title.includes('Bạch Đằng'))).toBe(true);
  });
});
```

- [ ] **Step 2: Write failing tests for slug lookup services**

```js
import { describe, expect, it } from 'vitest';
import {
  getLocationBySlug,
  getLocations
} from '../modules/interactive-map/model/location.service';
import {
  getCharacterBySlug,
  getCharacters
} from '../modules/character/model/character.service';

describe('slug services', () => {
  it('returns all locations and finds hue by slug', () => {
    expect(getLocations().length).toBeGreaterThanOrEqual(3);
    expect(getLocationBySlug('co-do-hue')?.name).toBe('Cố đô Huế');
  });

  it('returns all characters and finds tran hung dao by slug', () => {
    expect(getCharacters().length).toBeGreaterThanOrEqual(3);
    expect(getCharacterBySlug('tran-hung-dao')?.name).toBe('Trần Hưng Đạo');
  });
});
```

- [ ] **Step 3: Run the tests to verify they fail for missing modules**

Run: `npm run test -- src/test/search.service.test.js src/test/slug-services.test.js`
Expected: FAIL with module-not-found or missing export errors

### Task 3: Build Mock Data And Passing Services

**Files:**
- Create: `front-end/src/modules/interactive-map/model/location.data.js`
- Create: `front-end/src/modules/interactive-map/model/location.service.js`
- Create: `front-end/src/modules/timeline/model/timeline.data.js`
- Create: `front-end/src/modules/timeline/model/timeline.service.js`
- Create: `front-end/src/modules/character/model/character.data.js`
- Create: `front-end/src/modules/character/model/character.service.js`
- Create: `front-end/src/modules/home/model/home.data.js`
- Create: `front-end/src/modules/home/model/home.service.js`
- Create: `front-end/src/modules/search/model/search.service.js`

- [ ] **Step 1: Add the minimum location dataset and services**

```js
// src/modules/interactive-map/model/location.service.js
import { historicalLocations } from './location.data';

export function getLocations() {
  return historicalLocations;
}

export function getLocationBySlug(slug) {
  return historicalLocations.find((location) => location.slug === slug);
}
```

- [ ] **Step 2: Add the minimum character dataset and services**

```js
// src/modules/character/model/character.service.js
import { historicalCharacters } from './character.data';

export function getCharacters() {
  return historicalCharacters;
}

export function getCharacterBySlug(slug) {
  return historicalCharacters.find((character) => character.slug === slug);
}
```

- [ ] **Step 3: Add timeline and home services**

```js
// src/modules/timeline/model/timeline.service.js
import { historicalTimeline } from './timeline.data';

export function getTimelinePeriods() {
  return historicalTimeline;
}
```

```js
// src/modules/home/model/home.service.js
import { homeFeatures, homeHero } from './home.data';

export function getHomeHero() {
  return homeHero;
}

export function getHomeFeatures() {
  return homeFeatures;
}
```

- [ ] **Step 4: Implement search aggregation and normalization**

```js
export function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .trim();
}
```

```js
export function searchHistory(keyword, activeType = 'all') {
  const normalizedKeyword = normalizeText(keyword);
  if (!normalizedKeyword) return [];

  return getSearchIndex()
    .filter((item) => activeType === 'all' || item.type === activeType)
    .filter((item) => normalizeText(`${item.title} ${item.summary} ${item.meta}`).includes(normalizedKeyword));
}
```

- [ ] **Step 5: Run the service tests and verify both pass**

Run: `npm run test -- src/test/search.service.test.js src/test/slug-services.test.js`
Expected: PASS with all assertions green

### Task 4: Router, Layout, And Shared UI

**Files:**
- Create: `front-end/src/routes/app-router.jsx`
- Create: `front-end/src/pages/home-page.jsx`
- Create: `front-end/src/pages/map-page.jsx`
- Create: `front-end/src/pages/map-detail-page.jsx`
- Create: `front-end/src/pages/timeline-page.jsx`
- Create: `front-end/src/pages/character-page.jsx`
- Create: `front-end/src/pages/character-detail-page.jsx`
- Create: `front-end/src/pages/search-page.jsx`
- Create: `front-end/src/components/layout/navbar.jsx`
- Create: `front-end/src/components/layout/footer.jsx`
- Create: `front-end/src/components/ui/action-button.jsx`
- Create: `front-end/src/components/ui/info-tag.jsx`
- Create: `front-end/src/components/ui/panel-card.jsx`
- Create: `front-end/src/components/ui/section-shell.jsx`

- [ ] **Step 1: Add route definitions**

```jsx
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home-page';
import { MapPage } from '../pages/map-page';
import { MapDetailPage } from '../pages/map-detail-page';
import { TimelinePage } from '../pages/timeline-page';
import { CharacterPage } from '../pages/character-page';
import { CharacterDetailPage } from '../pages/character-detail-page';
import { SearchPage } from '../pages/search-page';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/map/:locationSlug" element={<MapDetailPage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/characters" element={<CharacterPage />} />
      <Route path="/characters/:characterSlug" element={<CharacterDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
```

- [ ] **Step 2: Add shared layout components**

```jsx
// navbar.jsx
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/map', label: 'Bản đồ' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/characters', label: 'Nhân vật' }
];
```

```jsx
// footer.jsx
export function Footer() {
  return (
    <footer className="border-t border-amber-200/15 px-6 py-10 text-sm text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">{/* content */}</div>
    </footer>
  );
}
```

- [ ] **Step 3: Add reusable UI primitives**

```jsx
export function ActionButton({ children, to, variant = 'primary' }) {
  const classes =
    variant === 'ghost'
      ? 'border border-amber-200/20 bg-transparent text-stone-100'
      : 'bg-[#be8f63] text-[#1d140f]';
  return to ? <Link className={classes} to={to}>{children}</Link> : <button className={classes}>{children}</button>;
}
```

- [ ] **Step 4: Run lint to verify the shared shell is structurally valid**

Run: `npm run lint`
Expected: no syntax or unused import errors in shell files

### Task 5: Home And Timeline Modules

**Files:**
- Create: `front-end/src/modules/home/view/home.view.jsx`
- Create: `front-end/src/modules/home/controller/home.controller.jsx`
- Create: `front-end/src/modules/home/index.js`
- Create: `front-end/src/modules/timeline/view/timeline.view.jsx`
- Create: `front-end/src/modules/timeline/controller/timeline.controller.jsx`
- Create: `front-end/src/modules/timeline/index.js`
- Modify: `front-end/src/pages/home-page.jsx`
- Modify: `front-end/src/pages/timeline-page.jsx`

- [ ] **Step 1: Build the home controller and view**

```jsx
export function HomeController() {
  const hero = getHomeHero();
  const features = getHomeFeatures();

  return <HomeView hero={hero} features={features} />;
}
```

- [ ] **Step 2: Build the timeline controller and view**

```jsx
export function TimelineController() {
  const periods = getTimelinePeriods();
  return <TimelineView periods={periods} />;
}
```

- [ ] **Step 3: Wire pages to shared layout**

```jsx
export function HomePage() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 4: Run build to verify these two route pages compile**

Run: `npm run build`
Expected: build succeeds with `/` and `/timeline` routes bundled

### Task 6: Map And Character Modules

**Files:**
- Create: `front-end/src/modules/interactive-map/view/map-overview.view.jsx`
- Create: `front-end/src/modules/interactive-map/view/map-detail.view.jsx`
- Create: `front-end/src/modules/interactive-map/controller/map-page.controller.jsx`
- Create: `front-end/src/modules/interactive-map/controller/map-detail.controller.jsx`
- Create: `front-end/src/modules/interactive-map/index.js`
- Create: `front-end/src/modules/character/view/character-list.view.jsx`
- Create: `front-end/src/modules/character/view/character-detail.view.jsx`
- Create: `front-end/src/modules/character/controller/character-page.controller.jsx`
- Create: `front-end/src/modules/character/controller/character-detail.controller.jsx`
- Create: `front-end/src/modules/character/index.js`
- Modify: `front-end/src/pages/map-page.jsx`
- Modify: `front-end/src/pages/map-detail-page.jsx`
- Modify: `front-end/src/pages/character-page.jsx`
- Modify: `front-end/src/pages/character-detail-page.jsx`

- [ ] **Step 1: Add the map overview controller and view**

```jsx
export function MapPageController() {
  const locations = getLocations();
  const featuredLocation = locations[0];

  return <MapOverviewView locations={locations} featuredLocation={featuredLocation} />;
}
```

- [ ] **Step 2: Add the map detail controller and view**

```jsx
export function MapDetailController({ locationSlug }) {
  const location = getLocationBySlug(locationSlug);
  return <MapDetailView location={location} />;
}
```

- [ ] **Step 3: Add the character list and detail controllers**

```jsx
export function CharacterPageController() {
  return <CharacterListView characters={getCharacters()} />;
}
```

```jsx
export function CharacterDetailController({ characterSlug }) {
  return <CharacterDetailView character={getCharacterBySlug(characterSlug)} />;
}
```

- [ ] **Step 4: Run lint and targeted tests after map/character wiring**

Run: `npm run lint`
Expected: no controller/view import rule violations or syntax errors

### Task 7: Search Module And Navigation Wiring

**Files:**
- Create: `front-end/src/modules/search/view/search.view.jsx`
- Create: `front-end/src/modules/search/controller/search.controller.jsx`
- Create: `front-end/src/modules/search/index.js`
- Modify: `front-end/src/pages/search-page.jsx`

- [ ] **Step 1: Add the search controller**

```jsx
import { useMemo, useState } from 'react';

export function SearchController() {
  const [keyword, setKeyword] = useState('Bạch Đằng');
  const [activeType, setActiveType] = useState('all');

  const results = useMemo(() => searchHistory(keyword, activeType), [keyword, activeType]);

  return (
    <SearchView
      keyword={keyword}
      activeType={activeType}
      results={results}
      onKeywordChange={setKeyword}
      onTypeChange={setActiveType}
    />
  );
}
```

- [ ] **Step 2: Add result cards that navigate to real routes**

```jsx
const route = result.route || '/timeline';
<Link to={route}>Xem chi tiết</Link>
```

- [ ] **Step 3: Run the service tests and a full build**

Run: `npm run test -- src/test/search.service.test.js src/test/slug-services.test.js`
Expected: PASS

Run: `npm run build`
Expected: PASS

### Task 8: Final Polish And Verification

**Files:**
- Modify: `front-end/src/index.css`
- Modify: any page or view files requiring spacing, responsive, or contrast fixes discovered during verification

- [ ] **Step 1: Remove starter leftovers**

```txt
Stop importing react/vite starter assets.
Delete `src/App.css` if it is no longer referenced.
```

- [ ] **Step 2: Run the full verification set**

Run: `npm run test`
Expected: PASS

Run: `npm run lint`
Expected: PASS

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Manually verify route coverage**

Check:
- `/`
- `/map`
- `/map/co-do-hue`
- `/timeline`
- `/characters`
- `/characters/tran-hung-dao`
- `/search`

Expected: every route renders the intended layout with navbar, footer, and design-consistent styling
