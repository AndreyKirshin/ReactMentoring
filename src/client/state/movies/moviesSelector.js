import get from 'lodash/get';

const getMovies = state => get(state, 'movies.searchBy');

const moviesSelector = {
    movies: state => get(state, 'movies.data.data'),
    searchBy: state => getMovies(state)
};

export default moviesSelector;