import { useParams } from 'react-router-dom';
import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import { CharacterDetailSection } from '../modules/character';

export function CharacterDetailPage() {
  const { characterSlug = '' } = useParams();

  return (
    <main>
      <Navbar />
      <CharacterDetailSection characterSlug={characterSlug} />
      <Footer />
    </main>
  );
}
