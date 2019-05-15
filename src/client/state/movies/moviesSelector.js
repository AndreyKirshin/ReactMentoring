import get from 'lodash/get';

const getMovies = state => get(state, 'movies.data.data');

const moviesSelector = {
    movies: state => getMovies(state),
    searchBy: state => get(state, 'movies.searchBy'),
    movie: (state, id) => getMovies(state).filter(movie => id === movie.id)[0]
};

export default moviesSelector;