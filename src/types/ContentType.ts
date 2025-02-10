export type ContentType = 'movie' | 'tv' | 'multi';

export type ContentQueryType = TVShowQueryType | MovieQueryType;

export type MovieQueryType =
  | 'popularMovies'
  | 'nowPlayingMovies'
  | 'topRatedMovies'
  | 'upcomingMovies';

export type TVShowQueryType =
  | 'airingTodayTVShows'
  | 'onTheAirTVShows'
  | 'popularTVShows'
  | 'topRatedTVShows';
