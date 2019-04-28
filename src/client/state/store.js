import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const initialState = { movies: {searchBy: 'title'} };
const sagaMiddleware = createSagaMiddleware();
const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(sagaMiddleware),
    devToolsMiddleware
));

sagaMiddleware.run(rootSaga);

export default store;