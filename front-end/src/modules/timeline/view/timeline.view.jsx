import { Reveal } from '../../../components/motion/reveal';
import { PanelCard } from '../../../components/ui/panel-card';
import { SectionShell } from '../../../components/ui/section-shell';

export function TimelineView({ periods }) {
  return (
    <SectionShell className="py-12">
      <Reveal className="text-center">
        <h1 className="font-display text-5xl text-parchment sm:text-6xl">Dòng Thời Gian Lịch Sử</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-300">
          Từ thuở dựng nước đến các cuộc kháng chiến vệ quốc, mỗi thời kỳ là một tầng trầm tích của bản sắc Việt.
        </p>
      </Reveal>

      <div className="relative mt-12 space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-amber-200/20 md:space-y-10 md:before:left-1/2">
        {periods.map((period, index) => (
          <Reveal
            key={period.id}
            className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
            delay={index * 120}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <PanelCard className="pl-10 md:pl-5">
              <p className="text-xs uppercase tracking-[0.28em] text-brass">{period.theme}</p>
              <h2 className="mt-3 font-display text-4xl text-parchment">{period.title}</h2>
              <p className="mt-2 text-sm text-roseclay">{period.period}</p>
              <p className="mt-4 text-sm leading-7 text-stone-300">{period.summary}</p>
              <ul className="mt-5 space-y-2 text-sm leading-7 text-stone-300">
                {period.bulletPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </PanelCard>

            <PanelCard className="p-3">
              <img alt={period.title} className="h-full min-h-[250px] w-full rounded-sm object-cover" src={period.image} />
            </PanelCard>

            <span className="absolute left-1 top-8 h-6 w-6 rounded-full border border-brass/60 bg-[#12110d] md:left-1/2 md:-translate-x-1/2" />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
