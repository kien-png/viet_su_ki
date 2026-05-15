import { useState } from 'react';
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

const ITEMS_PER_PAGE = 4;

export function SearchView({ activeType, keyword, onKeywordChange, onTypeChange, results }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán phân trang
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentResults = results.slice(startIndex, endIndex);

  // Reset về trang 1 khi thay đổi filter hoặc keyword
  const handleTypeChange = (type) => {
    setCurrentPage(1);
    onTypeChange(type);
  };

  const handleKeywordChange = (value) => {
    setCurrentPage(1);
    onKeywordChange(value);
  };

  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(12,10,9,0.95),_rgba(5,5,6,0.98)_52%,_rgba(5,5,7,1)_100%)]">
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
              onChange={(event) => handleKeywordChange(event.target.value)}
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
            <button onClick={() => handleKeywordChange('Trần Hưng Đạo')} type="button">
              Trần Hưng Đạo
            </button>
            <button onClick={() => handleKeywordChange('Điện Biên Phủ')} type="button">
              Điện Biên Phủ
            </button>
            <button onClick={() => handleKeywordChange('Huế')} type="button">
              Huế
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
                  onClick={() => handleTypeChange(item.value)}
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
                Tìm thấy {results.length} kết quả {keyword && `cho "${keyword}"`}
              </p>
              <InfoTag>{activeType === 'all' ? 'Tổng hợp' : activeType}</InfoTag>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {currentResults.map((result, index) => (
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

            {/* Phân trang */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  className="rounded-lg border border-amber-200/20 bg-black/40 px-4 py-2 text-sm text-stone-300 transition hover:border-amber-200/40 hover:text-parchment disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  type="button"
                >
                  Trước
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`h-10 w-10 rounded-lg border text-sm transition ${
                        currentPage === page
                          ? 'border-brass bg-brass/20 text-brass'
                          : 'border-amber-200/20 bg-black/40 text-stone-300 hover:border-amber-200/40 hover:text-parchment'
                      }`}
                      onClick={() => setCurrentPage(page)}
                      type="button"
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className="rounded-lg border border-amber-200/20 bg-black/40 px-4 py-2 text-sm text-stone-300 transition hover:border-amber-200/40 hover:text-parchment disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  type="button"
                >
                  Sau
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </SectionShell>
    </div>
  );
}
