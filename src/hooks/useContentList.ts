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
import {ContentQueryType} from '../types/ContentType';

const fetchFunctions: {[key in ContentQueryType]: (page: number) => Promise<Content[]>} = {
  popularMovies: fetchPopularMovieList,
  nowPlayingMovies: fetchNowPlayingMovieList,
  topRatedMovies: fetchTopRatedMovieList,
  upcomingMovies: fetchUpcomingMovieList,
  airingTodayTVShows: fetchAiringTodayTVShowList,
  onTheAirTVShows: fetchOnTheAirTVShowList,
  popularTVShows: fetchPopularTVShowList,
  topRatedTVShows: fetchTopRatedTVShowList,
};

export const useFetchContent = (type: ContentQueryType, page: number = 1) => {
  const [items, setItems] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchFunction = fetchFunctions[type];
        if (!fetchFunction) {
          console.error('Invalid content type');
          return;
        }
        const result = await fetchFunction(page);
        setItems(result);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type, page]);

  return {items, loading};
};
