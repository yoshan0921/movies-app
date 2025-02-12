export type Content = {
  id: number; // All
  title?: string; // Movie
  name?: string; // TV Show
  poster_path?: string; // Movie, TV Show
  profile_path?: string; // Person
  popularity?: number; // All
  release_date?: string; // Movie
  first_air_date?: string; // TV Show
  overview?: string; // Movie, TV Show
  biography?: string; // Person
  media_type: 'movie' | 'tv' | 'person'; // Only multi has media_type
};
