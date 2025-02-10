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

export const useFetchContent = (type: ContentQueryType) => {
  const [items, setItems] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let fetchFunction: () => Promise<Content[]>;

        switch (type) {
          case 'popularMovies':
            fetchFunction = fetchPopularMovieList;
            break;
          case 'nowPlayingMovies':
            fetchFunction = fetchNowPlayingMovieList;
            break;
          case 'topRatedMovies':
            fetchFunction = fetchTopRatedMovieList;
            break;
          case 'upcomingMovies':
            fetchFunction = fetchUpcomingMovieList;
            break;
          case 'airingTodayTVShows':
            fetchFunction = fetchAiringTodayTVShowList;
            break;
          case 'onTheAirTVShows':
            fetchFunction = fetchOnTheAirTVShowList;
            break;
          case 'popularTVShows':
            fetchFunction = fetchPopularTVShowList;
            break;
          case 'topRatedTVShows':
            fetchFunction = fetchTopRatedTVShowList;
            break;
          default:
            console.error('Invalid content type');
            return;
        }
        const result = await fetchFunction();
        setItems(result);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

  return {items, loading};
};
