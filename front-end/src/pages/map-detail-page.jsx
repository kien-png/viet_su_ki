import { useParams } from 'react-router-dom';
import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import { InteractiveMapDetailSection } from '../modules/interactive-map';

export function MapDetailPage() {
  const { locationSlug = '' } = useParams();

  return (
    <main>
      <Navbar />
      <InteractiveMapDetailSection locationSlug={locationSlug} />
      <Footer />
    </main>
  );
}
