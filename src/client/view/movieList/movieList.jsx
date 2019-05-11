import React from 'react';
import { connect } from 'react-redux';
import './movieList.less';
import MovieItem from '../movieItem/movieItem';
import moviesSelector from '../../state/movies/moviesSelector';

const MovieList = ({ movies }) => (
    <div className="movie-list" >
        {
            movies && movies.map(movie => 
                <div key={movie.id} >
                    <MovieItem
                        id={movie.id} 
                        title={movie.title}
                        release_date={movie.release_date}
                        poster_path={movie.poster_path}
                        genres={movie.genres}
                    />
                </div>    
            )
        }
    </div>
);

const mapStateToProps = state => ({
    movies: moviesSelector.movies(state)
});

export default connect(mapStateToProps)(MovieList);