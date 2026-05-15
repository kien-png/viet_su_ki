import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import { InteractiveMapSection } from '../modules/interactive-map';

export function MapPage() {
  return (
    <main>
      <Navbar />
      <InteractiveMapSection />
      <Footer />
    </main>
  );
}
