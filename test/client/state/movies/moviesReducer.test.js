import moviesReducer from '../../../../src/client/state/movies/moviesReducer';
import { dataTest } from '../../../recources/testData';

describe('movies reducer', () => {
    it('should return the initial state', () => {
      expect(moviesReducer(undefined, {})).toEqual(
        {
           data: {}
        }
      )
    })
  
    it('should handle MOVIES_FETCH_SUCCESS', () => {
      expect(
        moviesReducer([], {
          type: 'MOVIES_FETCH_SUCCESS',
          payload: dataTest
        })
      ).toEqual(
        {
          data: dataTest
        }
      )
    })
      
    it('should handle CHANGE_SEARCHBY', () => {
        expect(
          moviesReducer([], {
            type: 'MOVIES_FETCH_SUCCESS',
            payload: {searchBy: 'title'}
          })
        ).toEqual(
          {
            data: {searchBy: 'title'}
          }
        )
    })
})