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
import {ContentQueryType} from '../types/ContentQueryType';

export const useFetchContent = (type: ContentQueryType) => {
  const [items, setItems] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

// import {useEffect, useState} from 'react';
// import {Content} from '../types/Content';
// import {
//   fetchPopularMovieList,
//   fetchNowPlayingMovieList,
//   fetchTopRatedMovieList,
//   fetchUpcomingMovieList,
//   fetchAiringTodayTVShowList,
//   fetchOnTheAirTVShowList,
//   fetchPopularTVShowList,
//   fetchTopRatedTVShowList,
// } from '../services/ContentListService';

// const useFetchContent = (fetchFunction: () => Promise<Content[]>) => {
//   const [items, setItems] = useState<Content[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetchFunction();
//         setItems(result);
//       } catch (error) {
//         console.error('Error fetching content:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [fetchFunction]);

//   return {items, loading};
// };

// export const usePopularMovieList = () => useFetchContent(fetchPopularMovieList);
// export const useNowPlayingMovieList = () => useFetchContent(fetchNowPlayingMovieList);
// export const useTopRatedMovieList = () => useFetchContent(fetchTopRatedMovieList);
// export const useUpcomingMovieList = () => useFetchContent(fetchUpcomingMovieList);

// export const useAiringTodayTVShowList = () => useFetchContent(fetchAiringTodayTVShowList);
// export const useOnTheAirTVShowList = () => useFetchContent(fetchOnTheAirTVShowList);
// export const usePopularTVShowList = () => useFetchContent(fetchPopularTVShowList);
// export const useTopRatedTVShowList = () => useFetchContent(fetchTopRatedTVShowList);
