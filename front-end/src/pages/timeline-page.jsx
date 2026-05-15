import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import { TimelineSection } from '../modules/timeline';

export function TimelinePage() {
  return (
    <main>
      <Navbar />
      <TimelineSection />
      <Footer />
    </main>
  );
}
