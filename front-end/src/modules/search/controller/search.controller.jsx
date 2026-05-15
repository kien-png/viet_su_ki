import { useMemo, useState } from 'react';
import { searchHistory } from '../model/search.service';
import { SearchView } from '../view/search.view';

export function SearchController() {
  const [keyword, setKeyword] = useState('Bạch Đằng');
  const [activeType, setActiveType] = useState('all');

  const results = useMemo(() => searchHistory(keyword, activeType), [activeType, keyword]);

  return (
    <SearchView
      activeType={activeType}
      keyword={keyword}
      onKeywordChange={setKeyword}
      onTypeChange={setActiveType}
      results={results}
    />
  );
}
