import get from 'lodash/get';

const movieSelector = {
  movie: state => get(state, 'movie.data'),
};

export default movieSelector;
