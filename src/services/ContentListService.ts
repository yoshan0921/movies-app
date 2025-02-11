import {Content} from '../types/Content';
import {API_KEY, BASE_URL, MOVIE_ENDPOINTS, TVSHOW_ENDPOINTS} from '../constants/Api';

const fetchContentList = async (path: string, page: number): Promise<Content[]> => {
  try {
    console.log(`${BASE_URL}/${path}?api_key=${API_KEY}&page=${page}`);
    const response = await fetch(`${BASE_URL}/${path}?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return data.results ?? [];
  } catch (error) {
    console.error(`Error fetching content list:`, error);
    return [];
  }
};

export const fetchPopularMovieList = (page: number) =>
  fetchContentList(MOVIE_ENDPOINTS.POPULAR, page);
export const fetchNowPlayingMovieList = (page: number) =>
  fetchContentList(MOVIE_ENDPOINTS.NOW_PLAYING, page);
export const fetchTopRatedMovieList = (page: number) =>
  fetchContentList(MOVIE_ENDPOINTS.TOP_RATED, page);
export const fetchUpcomingMovieList = (page: number) =>
  fetchContentList(MOVIE_ENDPOINTS.UPCOMING, page);

export const fetchAiringTodayTVShowList = (page: number) =>
  fetchContentList(TVSHOW_ENDPOINTS.AIRING_TODAY, page);
export const fetchOnTheAirTVShowList = (page: number) =>
  fetchContentList(TVSHOW_ENDPOINTS.ON_THE_AIR, page);
export const fetchPopularTVShowList = (page: number) =>
  fetchContentList(TVSHOW_ENDPOINTS.POPULAR, page);
export const fetchTopRatedTVShowList = (page: number) =>
  fetchContentList(TVSHOW_ENDPOINTS.TOP_RATED, page);
