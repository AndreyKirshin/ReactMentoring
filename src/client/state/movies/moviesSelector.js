import get from 'lodash/get';
import { createSelector } from 'reselect';

const getMovies = state => get(state, 'movies.data.data');

const moviesSelector = {
  movies: state => getMovies(state),
  searchBy: createSelector([getMovies], movies => get(movies, 'movies.searchBy')),
};

export default moviesSelector;
