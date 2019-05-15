

export const moviesActionTypes = {
    MOVIES_FETCH: 'MOVIES_FETCH',
    MOVIES_FETCH_SUCCESS: 'MOVIES_FETCH_SUCCESS',
    MOVIES_FETCH_FAIURE: 'MOVIES_FETCH_FAIURE',

    CHANGE_SEARCHBY: 'CHANGE_SEARCHBY'
};

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