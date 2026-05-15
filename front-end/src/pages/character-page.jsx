import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import { CharacterSection } from '../modules/character';

export function CharacterPage() {
  return (
    <main>
      <Navbar />
      <CharacterSection />
      <Footer />
    </main>
  );
}
