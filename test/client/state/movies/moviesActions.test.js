import { 
    moviesActionTypes, 
    fetchMovies, 
    fetchMoviesSuccess, 
    changeSearchBy
} from '../../../../src/client/state/movies/moviesActions';
import { dataTest } from '../../../recources/testData';

describe('Movies actions test', () => {
  it('should create an action to fetch movies', () => {
      const payload = {
          search: '123',
          searchBy: 'title'
      }
      const expectedAction = {
        type: moviesActionTypes.MOVIES_FETCH,
        payload
      }
      expect(fetchMovies(payload)).toEqual(expectedAction);
  });

  it('should create an action to fetch movies success', () => {
      const payload = dataTest;
      const expectedAction = {
        type: moviesActionTypes.MOVIES_FETCH_SUCCESS,
        payload
      }
      expect(fetchMoviesSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to cheange searchBy', () => {
      const payload = {searchBy: 'title'};
      const expectedAction = {
        type: moviesActionTypes.CHANGE_SEARCHBY,
        payload
      }
      expect(changeSearchBy(payload)).toEqual(expectedAction);
  });
})


