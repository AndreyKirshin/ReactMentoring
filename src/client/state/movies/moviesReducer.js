import { handleActions } from 'redux-actions';
import { moviesActionTypes } from './moviesActions';

const INITIAL_STATE = {
    data: {}
};

export default handleActions(
    {
        [moviesActionTypes.MOVIES_FETCH]: state => ({
            ...state
        }),
        [moviesActionTypes.MOVIES_FETCH_SUCCESS]: (state, action) => ({
            ...state,
            data: action.payload
        }),
        [moviesActionTypes.MOVIES_FETCH_FAILURE]: state => ({
            ...state
        }),
        [moviesActionTypes.CHANGE_SEARCHBY]: (state, action) => ({
            ...state,
            searchBy: action.payload.searchBy
        })
    },
    INITIAL_STATE
);