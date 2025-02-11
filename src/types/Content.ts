export type Content = {
  id: number;
  title?: string; // Movie has title instead of name
  name?: string; // TVShow has name instead of title
  poster_path?: string;
  popularity?: number;
  release_date?: string;
  overview?: string;
  media_type?: 'movie' | 'tv'; // Only multi has media_type
};
