import { combineReducers } from 'redux';
import movies from './movies/moviesReducer';
import movie from './movie/movieReducer';

export default combineReducers({
  movies,
  movie,
});
