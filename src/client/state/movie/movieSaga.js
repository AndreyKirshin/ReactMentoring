import {
  call, fork, put, take, all,
} from 'redux-saga/effects';
import {
  movieActionTypes, fetchMovie, fetchMovieSuccess, fetchMovieFailure,
} from './movieActions';
import { loadMovie } from '../../infrastructure/movieService';

export function* onGethMovie() {
  while (true) {
    const { payload } = yield take('MOVIE_FETCH');

    if (payload) {
      const response = yield call(loadMovie, payload);

      if (response) {
        yield put(fetchMovieSuccess(response.data));
      } else {
        yield put(fetchMovieFailure());
      }
    }
  }
}

export function* initSaga() {
  yield all([
    fork(onGethMovie),
  ]);
}
