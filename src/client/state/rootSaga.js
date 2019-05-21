import { fork, all } from 'redux-saga/effects';
import { initSaga as moviesSaga } from './movies/moviesSaga';
import { initSaga as movieSaga } from './movie/movieSaga';

export default function* rootSaga() {
  yield all([
    fork(moviesSaga),
    fork(movieSaga),
  ]);
}
