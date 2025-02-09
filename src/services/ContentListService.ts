import {Content} from '../types/Content';
import {API_KEY, BASE_URL, MOVIE_ENDPOINTS, TVSHOW_ENDPOINTS} from '../constants/Api';

const fetchContentList = async (path: string): Promise<Content[]> => {
  try {
    const response = await fetch(`${BASE_URL}/${path}?api_key=${API_KEY}&page=1`);
    const data = await response.json();
    return data.results ?? [];
  } catch (error) {
    console.error(`Error fetching content list:`, error);
    return [];
  }
};

export const fetchPopularMovieList = () => fetchContentList(MOVIE_ENDPOINTS.POPULAR);
export const fetchNowPlayingMovieList = () => fetchContentList(MOVIE_ENDPOINTS.NOW_PLAYING);
export const fetchTopRatedMovieList = () => fetchContentList(MOVIE_ENDPOINTS.TOP_RATED);
export const fetchUpcomingMovieList = () => fetchContentList(MOVIE_ENDPOINTS.UPCOMING);

export const fetchAiringTodayTVShowList = () => fetchContentList(TVSHOW_ENDPOINTS.AIRING_TODAY);
export const fetchOnTheAirTVShowList = () => fetchContentList(TVSHOW_ENDPOINTS.ON_THE_AIR);
export const fetchPopularTVShowList = () => fetchContentList(TVSHOW_ENDPOINTS.POPULAR);
export const fetchTopRatedTVShowList = () => fetchContentList(TVSHOW_ENDPOINTS.TOP_RATED);
