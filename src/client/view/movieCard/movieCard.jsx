import React from 'react';
import './movieCard.less';

const MovieCard = ({ movie, backToSearch }) => (
    <div>
        <div className="movie-card-back-to-search"><button onClick={backToSearch}>Search</button></div>
        <div className="movie-card-columns">
            <div className="movie-card-left-column">
                <img src={movie.poster_path} alt={movie.title} ></img>
            </div>
            <div className="movie-card-right-column">
                <p className="movie-card-title">{movie.title}</p>
                <p>{movie.vote_average}</p>
                <div>
                    <span>{movie.release_date}</span>
                    <span className="movie-card-runtime">{movie.runtime} min</span>
                </div>
                <p>{movie.overview}</p>
            </div>
        </div>        
    </div>
)

export default MovieCard;