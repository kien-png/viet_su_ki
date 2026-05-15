import { useEffect, useState } from 'react';
import { searchHistory } from '../model/search.service';
import { SearchView } from '../view/search.view';

export function SearchController() {
  const [keyword, setKeyword] = useState('');
  const [activeType, setActiveType] = useState('all');
  const [results, setResults] = useState([]);

  useEffect(() => {
    let active = true;

    searchHistory(keyword, activeType)
      .then((data) => {
        if (active) {
          setResults(data);
        }
      })
      .catch(() => {
        if (active) {
          setResults([]);
        }
      });

    return () => {
      active = false;
    };
  }, [activeType, keyword]);

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
