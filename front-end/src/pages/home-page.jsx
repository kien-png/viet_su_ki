import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import { HomeSection } from '../modules/home';

export function HomePage() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <Footer />
    </main>
  );
}
