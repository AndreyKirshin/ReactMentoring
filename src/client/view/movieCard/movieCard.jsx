import React from 'react';
import './movieCard.less';
import MovieInfo from '../movieInfo/movieInfo';

const MovieCard = ({ movie, backToSearch }) => (
    <div>
        <div className="movie-card-back-to-search"><button onClick={backToSearch}>Search</button></div>
        <div className="movie-card-columns">
            <div className="movie-card-left-column">
                <img src={movie.poster_path} alt={movie.title} ></img>
            </div>
            <div className="movie-card-right-column">
                <MovieInfo 
                    title={movie.title} 
                    vote_average={movie.vote_average} 
                    release_date={movie.release_date} 
                    runtime={movie.runtime}
                    overview={movie.overview} 
                />
            </div>
        </div>        
    </div>
)

export default MovieCard;