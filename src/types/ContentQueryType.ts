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

export type ContentQueryType = TVShowQueryType | MovieQueryType;
