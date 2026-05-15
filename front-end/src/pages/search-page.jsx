import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import { SearchSection } from '../modules/search';

export function SearchPage() {
  return (
    <main>
      <Navbar />
      <SearchSection />
      <Footer />
    </main>
  );
}
