import {useEffect, useState} from 'react';
import {Content} from '../types/Content';
import {
  fetchPopularMovieList,
  fetchNowPlayingMovieList,
  fetchTopRatedMovieList,
  fetchUpcomingMovieList,
  fetchAiringTodayTVShowList,
  fetchOnTheAirTVShowList,
  fetchPopularTVShowList,
  fetchTopRatedTVShowList,
} from '../services/ContentListService';

const useFetchContent = (fetchFunction: () => Promise<Content[]>) => {
  const [items, setItems] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setItems(result);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchFunction]);

  return {items, loading};
};

export const usePopularMovieList = () => useFetchContent(fetchPopularMovieList);
export const useNowPlayingMovieList = () => useFetchContent(fetchNowPlayingMovieList);
export const useTopRatedMovieList = () => useFetchContent(fetchTopRatedMovieList);
export const useUpcomingMovieList = () => useFetchContent(fetchUpcomingMovieList);

export const useAiringTodayTVShowList = () => useFetchContent(fetchAiringTodayTVShowList);
export const useOnTheAirTVShowList = () => useFetchContent(fetchOnTheAirTVShowList);
export const usePopularTVShowList = () => useFetchContent(fetchPopularTVShowList);
export const useTopRatedTVShowList = () => useFetchContent(fetchTopRatedTVShowList);
