import React from 'react';
import './movieInfo.less';

const MovieInfo = ({ title, vote_average, release_date, runtime, overview}) => (
    <div>
        <p className="movie-info-title">{title}</p>
        <p>{vote_average}</p>
        <div>
            <span>{release_date}</span>
            <span className="movie-info-runtime">{runtime} min</span>
        </div>
        <p>{overview}</p>
    </div>
)

export default MovieInfo;