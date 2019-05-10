import keyMirror from 'keymirror';

export const moviesActionTypes = keyMirror({
    MOVIES_FETCH: null,
    MOVIES_FETCH_SUCCESS: null,
    MOVIES_FETCH_FAIURE: null,

    CHANGE_SEARCHBY: null
});

export const fetchMovies = data => ({
    type: moviesActionTypes.MOVIES_FETCH,
    payload: data
});

export const fetchMoviesSuccess = data => ({
    type: moviesActionTypes.MOVIES_FETCH_SUCCESS,
    payload: data
});

export const fetchMoviesFailure = data => ({
    type: moviesActionTypes.MOVIES_FETCH_FAIURE
});

export const changeSearchBy = data => ({
    type: moviesActionTypes.CHANGE_SEARCHBY,
    payload: data
});