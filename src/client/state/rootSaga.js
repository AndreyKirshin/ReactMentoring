import { fork, all } from 'redux-saga/effects';
import { initSaga as moviesSaga } from './movies/moviesSaga';

export default function* rootSaga() {
    yield all([
      fork(moviesSaga)
    ]);
}
  