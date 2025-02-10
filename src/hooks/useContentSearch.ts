import {useEffect, useState, useRef} from 'react';
import {Content} from '../types/Content';
import {
  fetchMovieByKeyword,
  fetchTVShowByKeyword,
  fetchMultiByKeyword,
} from '../services/ContentSearchService';
import {ContentType} from '../types/ContentType';

export const useFetchContent = (type: ContentType, keyword: string) => {
  const [items, setItems] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  const prevType = useRef<ContentType | null>(null);
  const prevKeyword = useRef<string | null>(null);

  useEffect(() => {
    if (!keyword) {
      return;
    }

    if (prevType.current === type && prevKeyword.current === keyword) {
      console.log('Same search parameters, skipping fetch');
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        let fetchFunction: (keyword: string) => Promise<Content[]>;

        switch (type) {
          case 'movie':
            fetchFunction = fetchMovieByKeyword;
            break;
          case 'tv':
            fetchFunction = fetchTVShowByKeyword;
            break;
          case 'multi':
            fetchFunction = fetchMultiByKeyword;
            break;
          default:
            console.error('Invalid content type');
            return;
        }
        const result = await fetchFunction(keyword);
        setItems(result);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    prevType.current = type;
    prevKeyword.current = keyword;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, keyword]);

  return {items, loading};
};
