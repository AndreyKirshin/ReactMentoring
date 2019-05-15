import React from 'react';
import MovieCard from '../movieCard/movieCard';
import MovieList from '../movieList/movieList';

const MoviePage = ({match}) => (
    <React.Fragment>
        <MovieCard id={match.params.id} />
        <MovieList />} 
    </React.Fragment>
)

export default MoviePage;