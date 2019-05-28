
export const movieActionTypes = {
  MOVIE_FETCH: 'MOVIE_FETCH',
  MOVIE_FETCH_SUCCESS: 'MOVIE_FETCH_SUCCESS',
  MOVIE_FETCH_FAIURE: 'MOVIE_FETCH_FAIURE',
};

export const fetchMovie = id => ({
  type: movieActionTypes.MOVIE_FETCH,
  payload: id,
});

export const fetchMovieSuccess = data => ({
  type: movieActionTypes.MOVIE_FETCH_SUCCESS,
  payload: data,
});

export const fetchMovieFailure = data => ({
  type: movieActionTypes.MOVIE_FETCH_FAIURE,
});
