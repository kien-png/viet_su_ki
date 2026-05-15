import { ActionButton } from '../../../components/ui/action-button';
import { Reveal } from '../../../components/motion/reveal';
import { InfoTag } from '../../../components/ui/info-tag';
import { PanelCard } from '../../../components/ui/panel-card';
import { SectionShell } from '../../../components/ui/section-shell';

function NotFoundView() {
  return (
    <SectionShell className="py-20">
      <PanelCard className="text-center">
        <h1 className="font-display text-4xl text-parchment">Không tìm thấy địa danh</h1>
        <p className="mt-4 text-stone-300">Slug bạn truy cập không khớp dữ liệu lịch sử hiện có.</p>
        <div className="mt-6">
          <ActionButton to="/map">Quay lại bản đồ</ActionButton>
        </div>
      </PanelCard>
    </SectionShell>
  );
}

export function MapDetailView({ location }) {
  if (location === undefined) {
    return null;
  }

  if (!location) {
    return <NotFoundView />;
  }

  return (
    <>
      <section
        className="border-b border-amber-200/10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 8, 7, 0.16), rgba(8, 8, 7, 0.96)), url(${location.featuredImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <SectionShell className="py-16 sm:py-24">
          <Reveal delay={100}>
            <InfoTag>{location.period}</InfoTag>
          </Reveal>
          <Reveal delay={240}>
            <h1 className="mt-6 font-display text-5xl uppercase text-parchment sm:text-6xl">
              {location.name}
            </h1>
          </Reveal>
          <Reveal delay={380} direction="left">
            <p className="mt-4 font-display text-2xl italic text-roseclay">{location.title}</p>
          </Reveal>
        </SectionShell>
      </section>

      <SectionShell className="space-y-10 py-12">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal as="div" direction="left">
            <h2 className="font-display text-4xl text-parchment">Di sản thế giới văn hiến</h2>
            <p className="mt-5 text-sm leading-8 text-stone-300">{location.description}</p>
          </Reveal>
          <Reveal delay={140} direction="scale">
            <PanelCard className="p-3">
              <img alt={location.name} className="h-full w-full rounded-sm object-cover" src={location.featuredImage} />
            </PanelCard>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {location.stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 100} direction="up">
              <PanelCard>
                <p className="text-[10px] uppercase tracking-[0.28em] text-brass">{item.label}</p>
                <p className="mt-3 font-display text-3xl text-parchment">{item.value}</p>
              </PanelCard>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal className="text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-brass">Dấu mốc lịch sử</p>
            <h2 className="mt-3 font-display text-4xl text-parchment">Biên niên địa danh</h2>
          </Reveal>
          <div className="relative mt-10 space-y-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-amber-200/20 md:before:left-1/2">
            {location.timelineMoments.map((moment, index) => (
              <Reveal
                key={moment.year}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
                delay={index * 120}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="pl-10 md:pl-0">
                  <p className="text-sm text-brass">{moment.year}</p>
                  <h3 className="mt-2 font-display text-3xl text-parchment">{moment.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">{moment.description}</p>
                </div>
                <div />
                <span className="absolute left-0 top-2 h-6 w-6 rounded-full border border-brass/60 bg-[#12110d] md:left-1/2 md:-translate-x-1/2" />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h2 className="font-display text-4xl text-parchment">Góc nhìn kiến trúc</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {location.architectureGallery.map((item, index) => (
              <Reveal key={item.id} delay={index * 120} direction="scale">
                <PanelCard className="p-3">
                  <img alt={item.title} className="h-48 w-full rounded-sm object-cover" src={item.image} />
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-stone-300">{item.title}</p>
                </PanelCard>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
