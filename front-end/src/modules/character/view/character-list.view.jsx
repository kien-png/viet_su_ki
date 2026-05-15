import { Link } from 'react-router-dom';
import { InfoTag } from '../../../components/ui/info-tag';
import { PanelCard } from '../../../components/ui/panel-card';
import { SectionShell } from '../../../components/ui/section-shell';

export function CharacterListView({ characters }) {
  return (
    <SectionShell className="py-12">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-brass">Gương mặt lịch sử</p>
        <h1 className="mt-4 font-display text-5xl text-parchment sm:text-6xl">Nhân vật lịch sử</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-300">
          Chạm vào từng gương mặt để mở ra những lát cắt về tư tưởng, quyết sách và di sản còn sống tới hôm nay.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {characters.map((character) => (
          <Link key={character.id} to={`/characters/${character.slug}`}>
            <PanelCard className="h-full overflow-hidden p-0 transition hover:-translate-y-1 hover:border-amber-200/30">
              <img alt={character.name} className="h-80 w-full object-cover" src={character.cardImage} />
              <div className="p-6">
                <InfoTag>{character.era}</InfoTag>
                <h2 className="mt-4 font-display text-4xl text-parchment">{character.name}</h2>
                <p className="mt-2 text-sm text-roseclay">{character.title}</p>
                <p className="mt-4 text-sm leading-7 text-stone-300">{character.summary}</p>
              </div>
            </PanelCard>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
