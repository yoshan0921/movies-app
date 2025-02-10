import {Content} from '../types/Content';
import {API_KEY, BASE_URL, SEARCH_ENDPOINTS} from '../constants/Api';

const fetchContentListWithKeyword = async (path: string, keyword: string): Promise<Content[]> => {
  try {
    console.log(`${BASE_URL}/${path}?query=${keyword}&api_key=${API_KEY}&page=1`);
    const response = await fetch(`${BASE_URL}/${path}?query=${keyword}&api_key=${API_KEY}&page=1`);
    const data = await response.json();
    return data.results ?? [];
  } catch (error) {
    console.error(`Error fetching content list:`, error);
    return [];
  }
};

export const fetchMovieByKeyword = (keyword: string) =>
  fetchContentListWithKeyword(SEARCH_ENDPOINTS.MOVIE, keyword);
export const fetchTVShowByKeyword = (keyword: string) =>
  fetchContentListWithKeyword(SEARCH_ENDPOINTS.TV, keyword);
export const fetchMultiByKeyword = (keyword: string) =>
  fetchContentListWithKeyword(SEARCH_ENDPOINTS.MULTI, keyword);
