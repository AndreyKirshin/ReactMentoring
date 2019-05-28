import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState, winObj) => {
  const devToolsMiddleware = winObj ? winObj.__REDUX_DEVTOOLS_EXTENSION__() : null;
  const store = devToolsMiddleware
    ? createStore(rootReducer, initialState, compose(
      applyMiddleware(sagaMiddleware),
      devToolsMiddleware,
    ))
    : createStore(rootReducer, initialState, compose(
      applyMiddleware(sagaMiddleware),
    ));


  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
};
