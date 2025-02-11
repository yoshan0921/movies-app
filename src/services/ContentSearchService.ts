import {Content} from '../types/Content';
import {API_KEY, BASE_URL, SEARCH_ENDPOINTS} from '../constants/Api';

const fetchContentListWithKeyword = async (
  path: string,
  keyword: string,
  page: number,
): Promise<Content[]> => {
  try {
    console.log(`${BASE_URL}/${path}?query=${keyword}&api_key=${API_KEY}&page=${page}`);
    const response = await fetch(
      `${BASE_URL}/${path}?query=${keyword}&api_key=${API_KEY}&page=${page}`,
    );
    const data = await response.json();
    return data.results ?? [];
  } catch (error) {
    console.error(`Error fetching content list:`, error);
    return [];
  }
};

export const fetchMovieByKeyword = (keyword: string, page: number) =>
  fetchContentListWithKeyword(SEARCH_ENDPOINTS.MOVIE, keyword, page);
export const fetchTVShowByKeyword = (keyword: string, page: number) =>
  fetchContentListWithKeyword(SEARCH_ENDPOINTS.TV, keyword, page);
export const fetchMultiByKeyword = (keyword: string, page: number) =>
  fetchContentListWithKeyword(SEARCH_ENDPOINTS.MULTI, keyword, page);
