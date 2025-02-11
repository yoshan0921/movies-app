export type Content = {
  id: number;
  title?: string; // Movie
  name?: string; // TV Show
  poster_path?: string;
  popularity?: number;
  release_date?: string; // Movie
  first_air_date?: string; // TV Show
  overview?: string;
  media_type?: 'movie' | 'tv'; // Only multi has media_type
};
