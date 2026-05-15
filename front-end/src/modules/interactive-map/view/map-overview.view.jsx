import { ActionButton } from '../../../components/ui/action-button';
import { InfoTag } from '../../../components/ui/info-tag';
import { PanelCard } from '../../../components/ui/panel-card';
import { SectionShell } from '../../../components/ui/section-shell';
import { VietnamMapInteractiveView } from './vietnam-map-interactive.view';

export function MapOverviewView({ locations, selectedLocation, selectedLocationId, onSelectLocation }) {
  return (
    <SectionShell className="py-8 md:py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Bản đồ tương tác bên trái */}
        <PanelCard className="relative min-h-[500px] p-6 lg:min-h-[600px]">
          <VietnamMapInteractiveView
            locations={locations}
            selectedLocationId={selectedLocationId}
            onSelectLocation={onSelectLocation}
          />
        </PanelCard>

        {/* Panel thông tin bên phải */}
        <PanelCard className="flex flex-col justify-between p-6">
          <div>
            <InfoTag tone="rose">{selectedLocation.title}</InfoTag>
            <h1 className="mt-4 font-display text-3xl text-parchment lg:text-4xl">{selectedLocation.name}</h1>
            <p className="mt-4 text-sm italic leading-7 text-stone-300">"{selectedLocation.quote}"</p>

            <div className="mt-6 border-t border-amber-200/10 pt-6">
              <div className="flex items-center gap-2 text-xs text-brass">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                <span className="uppercase tracking-wider">Sự kiện {selectedLocation.period}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-stone-300">{selectedLocation.description}</p>
            </div>

            {/* Hình ảnh kiến trúc */}
            {selectedLocation.featuredImage && (
              <div className="mt-6">
                <img
                  alt={`Kiến trúc ${selectedLocation.name}`}
                  className="h-48 w-full rounded-lg object-cover"
                  src={selectedLocation.featuredImage}
                />
                <p className="mt-2 text-xs text-stone-400">Kiến trúc Kinh Thành {selectedLocation.name}</p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <ActionButton to={`/map/${selectedLocation.slug}`} variant="rose" className="w-full">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              Chi tiết lịch sử
            </ActionButton>
          </div>
        </PanelCard>
      </div>
    </SectionShell>
  );
}
