import { ActionButton } from '../../../components/ui/action-button';
import { InfoTag } from '../../../components/ui/info-tag';
import { PanelCard } from '../../../components/ui/panel-card';
import { SectionShell } from '../../../components/ui/section-shell';

function NotFoundView() {
  return (
    <SectionShell className="py-20">
      <PanelCard className="text-center">
        <h1 className="font-display text-4xl text-parchment">Không tìm thấy nhân vật</h1>
        <p className="mt-4 text-stone-300">Slug bạn truy cập không khớp dữ liệu nhân vật hiện có.</p>
        <div className="mt-6">
          <ActionButton to="/characters">Quay lại danh sách</ActionButton>
        </div>
      </PanelCard>
    </SectionShell>
  );
}

export function CharacterDetailView({ character }) {
  if (character === undefined) {
    return null;
  }

  if (!character) {
    return <NotFoundView />;
  }

  return (
    <SectionShell className="py-12">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <PanelCard className="p-3">
          <img alt={character.name} className="h-full w-full rounded-sm object-cover" src={character.portrait} />
        </PanelCard>

        <div className="flex flex-col justify-center">
          <InfoTag tone="rose">{character.era}</InfoTag>
          <h1 className="mt-5 font-display text-5xl text-parchment sm:text-6xl">{character.name}</h1>
          <p className="mt-3 text-xl text-brass">{character.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-stone-300">{character.summary}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <PanelCard>
              <p className="text-[10px] uppercase tracking-[0.28em] text-brass">Di sản tinh thần</p>
              <p className="mt-3 font-display text-3xl text-parchment">{character.legacy[0]}</p>
            </PanelCard>
            <PanelCard>
              <p className="text-[10px] uppercase tracking-[0.28em] text-brass">Danh hiệu</p>
              <p className="mt-3 font-display text-3xl text-parchment">{character.title}</p>
            </PanelCard>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-amber-200/10 pt-10">
        <div className="text-center">
          <h2 className="font-display text-5xl text-parchment">Biên Niên Sử Cuộc Đời</h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {character.timeline.map((item) => (
            <div key={item.year}>
              <p className="text-xs uppercase tracking-[0.28em] text-brass">{item.year}</p>
              <h3 className="mt-3 font-display text-3xl text-parchment">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <PanelCard className="mt-12">
        <h2 className="font-display text-5xl text-parchment">Di Sản & Trước Tác</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl text-parchment">Tác phẩm</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-300">
              {character.works.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-3xl text-parchment">Di sản</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-300">
              {character.legacy.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <blockquote className="mt-8 border-l-2 border-roseclay pl-4 font-display text-xl italic leading-9 text-roseclay">
          “{character.quote}”
        </blockquote>
      </PanelCard>
    </SectionShell>
  );
}
