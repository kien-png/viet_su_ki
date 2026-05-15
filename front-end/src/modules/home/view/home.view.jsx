import { ActionButton } from '../../../components/ui/action-button';
import { Reveal } from '../../../components/motion/reveal';
import { PanelCard } from '../../../components/ui/panel-card';
import { SectionShell } from '../../../components/ui/section-shell';

function getFeatureGridClass(size) {
  if (size === 'wide') {
    return 'md:col-span-2';
  }

  if (size === 'tall') {
    return 'md:row-span-2';
  }

  return '';
}

export function HomeView({ hero, features }) {
  return (
    <>
      <section
        className="relative overflow-hidden border-b border-amber-200/10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 8, 7, 0.18), rgba(8, 8, 7, 0.94)), url(${hero.backdropImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <SectionShell className="flex min-h-[72vh] items-center justify-center py-24 text-center">
          <div className="max-w-4xl">
            <Reveal delay={80}>
              <p className="text-xs uppercase tracking-[0.44em] text-brass">{hero.eyebrow}</p>
            </Reveal>
            <Reveal delay={220}>
              <h1 className="mt-6 font-display text-5xl uppercase text-parchment sm:text-6xl">
                {hero.title}
              </h1>
            </Reveal>
            <Reveal delay={360} direction="left">
              <p className="mx-auto mt-8 max-w-3xl border-l border-brass pl-6 text-left font-display text-2xl italic leading-10 text-roseclay sm:text-center sm:border-l-0 sm:pl-0">
                {hero.quote}
              </p>
            </Reveal>
            <Reveal delay={500}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-300">
                {hero.description}
              </p>
            </Reveal>
            <Reveal className="mt-10" delay={620} direction="scale">
              <ActionButton to={hero.ctaRoute}>{hero.ctaLabel}</ActionButton>
            </Reveal>
          </div>
        </SectionShell>
      </section>

      <SectionShell className="py-14">
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {features.map((feature) => (
            <Reveal
              key={feature.id}
              className={getFeatureGridClass(feature.size)}
              delay={120 + feature.id.length * 40}
              direction="up"
            >
              <PanelCard className="group relative min-h-[240px] overflow-hidden p-0">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(4, 4, 4, 0.92)), url(${feature.image})`
                  }}
                />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <h2 className="font-display text-3xl text-parchment">{feature.title}</h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-stone-300">{feature.description}</p>
                  <div className="mt-6">
                    <ActionButton to={feature.route} variant="ghost">
                      Khám phá
                    </ActionButton>
                  </div>
                </div>
              </PanelCard>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
