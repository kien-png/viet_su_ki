import { Link } from 'react-router-dom';
import { Reveal } from '../../../components/motion/reveal';
import { InfoTag } from '../../../components/ui/info-tag';
import { PanelCard } from '../../../components/ui/panel-card';
import { SectionShell } from '../../../components/ui/section-shell';

const filterItems = [
  { label: 'Tất cả kết quả', value: 'all' },
  { label: 'Địa điểm', value: 'location' },
  { label: 'Nhân vật', value: 'character' },
  { label: 'Thời kỳ', value: 'timeline' },
  { label: 'Sự kiện', value: 'event' }
];

export function SearchView({ activeType, keyword, onKeywordChange, onTypeChange, results }) {
  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(55,88,121,0.9),_rgba(5,8,14,0.98)_42%,_rgba(5,5,7,1)_100%)]">
      <SectionShell className="py-14">
        <Reveal className="text-center">
          <h1 className="font-display text-5xl text-parchment sm:text-6xl">Tìm Kiếm Thông Tin Lịch Sử</h1>
          <Reveal
            as="div"
            className="mx-auto mt-8 max-w-3xl rounded-sm border border-amber-200/15 bg-[#15120d]/95 p-4 shadow-glow"
            delay={180}
            direction="scale"
          >
            <input
              className="w-full bg-transparent font-display text-2xl text-parchment outline-none placeholder:text-stone-500"
              onChange={(event) => onKeywordChange(event.target.value)}
              placeholder="Nhập địa danh, nhân vật hoặc sự kiện..."
              value={keyword}
            />
          </Reveal>
          <Reveal
            as="div"
            className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.24em] text-stone-300"
            delay={280}
          >
            <span>gợi ý:</span>
            <button onClick={() => onKeywordChange('Bạch Đằng')} type="button">
              Bạch Đằng
            </button>
            <button onClick={() => onKeywordChange('Trần Hưng Đạo')} type="button">
              Trần Hưng Đạo
            </button>
            <button onClick={() => onKeywordChange('Điện Biên Phủ')} type="button">
              Điện Biên Phủ
            </button>
          </Reveal>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.28fr_1fr]">
          <Reveal as="aside" direction="left">
            <h2 className="text-sm uppercase tracking-[0.28em] text-brass">Bộ lọc</h2>
            <div className="mt-4 space-y-3">
              {filterItems.map((item) => (
                <button
                  key={item.value}
                  className={`block text-left text-sm transition ${activeType === item.value ? 'text-parchment' : 'text-stone-400 hover:text-parchment'}`}
                  onClick={() => onTypeChange(item.value)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" delay={120}>
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm italic text-stone-300">
                Tìm thấy {results.length} kết quả cho “{keyword}”
              </p>
              <InfoTag>{activeType === 'all' ? 'Tổng hợp' : activeType}</InfoTag>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {results.map((result, index) => (
                <Reveal key={result.id} delay={index * 90} direction="up">
                  <Link to={result.route}>
                    <PanelCard className="h-full overflow-hidden p-0 transition hover:-translate-y-1 hover:border-amber-200/30">
                      <img alt={result.title} className="h-52 w-full object-cover" src={result.image} />
                      <div className="p-5">
                        <InfoTag tone="rose">{result.type}</InfoTag>
                        <h3 className="mt-4 font-display text-3xl text-parchment">{result.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-300">{result.summary}</p>
                      </div>
                    </PanelCard>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </div>
  );
}
