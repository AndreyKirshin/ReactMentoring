import { call, fork, put, take, all } from 'redux-saga/effects';
import { moviesActionTypes, fetchMovies, fetchMoviesSuccess, fetchMoviesFailure } from './moviesActions';
import { loadMovies } from '../../infrastructure/movieService';

export function* onSearchMovies() {
    while(true){
        const { payload } = yield take('MOVIES_FETCH');

        if (payload) {
            const response = yield call(loadMovies, payload);
            if (response) {
                yield put(fetchMoviesSuccess(response.data));
            } else {
                yield put(fetchMoviesFailure());
            }
        }
    }
}

export function* initSaga() {
    yield all([
        fork(onSearchMovies)
    ]);
}
  
