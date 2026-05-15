import { Link } from 'react-router-dom';
import { ActionButton } from '../../../components/ui/action-button';
import { InfoTag } from '../../../components/ui/info-tag';
import { PanelCard } from '../../../components/ui/panel-card';
import { SectionShell } from '../../../components/ui/section-shell';

export function MapOverviewView({ featuredLocation, locations }) {
  return (
    <SectionShell className="py-8 md:py-12">
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
        <PanelCard className="p-4">
          <div className="rounded-sm border border-amber-200/10 bg-[radial-gradient(circle_at_top,_rgba(17,28,44,0.95),_rgba(5,5,6,0.98)_70%)] p-4">
            <img
              alt={featuredLocation.name}
              className="h-full w-full rounded-sm object-cover"
              src={featuredLocation.mapImage}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-[0.24em] text-stone-400">
            <span>◈ Kinh đô / trung tâm</span>
            <span>◇ Di tích khảo cổ</span>
          </div>
        </PanelCard>

        <PanelCard className="flex flex-col justify-between">
          <div>
            <InfoTag tone="rose">{featuredLocation.title}</InfoTag>
            <h1 className="mt-4 font-display text-4xl text-parchment">{featuredLocation.name}</h1>
            <p className="mt-4 text-sm italic leading-7 text-stone-300">{featuredLocation.quote}</p>
            <div className="mt-6 border-t border-amber-200/10 pt-6">
              <p className="text-sm leading-7 text-stone-300">{featuredLocation.description}</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <PanelCard className="p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-brass">Hoàng đế sáng lập</p>
                <p className="mt-2 font-display text-2xl text-parchment">{featuredLocation.rulers[0]}</p>
              </PanelCard>
              <PanelCard className="p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-brass">Di sản nổi bật</p>
                <p className="mt-2 font-display text-2xl text-parchment">Kinh thành Huế</p>
              </PanelCard>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton to={`/map/${featuredLocation.slug}`} variant="ghost">
              Tham quan 3D
            </ActionButton>
            <ActionButton to={`/map/${featuredLocation.slug}`} variant="rose">
              Chi tiết lịch sử
            </ActionButton>
          </div>
        </PanelCard>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {locations.map((location) => (
          <Link key={location.id} to={`/map/${location.slug}`}>
            <PanelCard className="h-full transition hover:-translate-y-1 hover:border-amber-200/30">
              <InfoTag>{location.region}</InfoTag>
              <h2 className="mt-4 font-display text-2xl text-parchment">{location.name}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">{location.summary}</p>
            </PanelCard>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
