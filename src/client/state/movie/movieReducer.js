import { handleActions } from 'redux-actions';
import { movieActionTypes } from './movieActions';

const INITIAL_STATE = {
    data: {}
};

export default handleActions(
    {
        [movieActionTypes.MOVIE_FETCH]: state => ({
            ...state
        }),
        [movieActionTypes.MOVIE_FETCH_SUCCESS]: (state, action) => ({
            ...state,
            data: action.payload
        }),
        [movieActionTypes.MOVIE_FETCH_FAILURE]: state => ({
            ...state
        })
    },
    INITIAL_STATE
);