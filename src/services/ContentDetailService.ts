import {Content} from '../types/Content';
import {ContentType} from '../types/ContentType';
import {API_KEY, BASE_URL} from '../constants/Api';

export const fetchContentDetail = async (
  contentType: ContentType,
  contentId: number,
): Promise<Content> => {
  try {
    console.log(`${BASE_URL}/${contentType}/${contentId}?api_key=${API_KEY}`);
    const response = await fetch(`${BASE_URL}/${contentType}/${contentId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching content detail:', error);
    throw error;
  }
};
