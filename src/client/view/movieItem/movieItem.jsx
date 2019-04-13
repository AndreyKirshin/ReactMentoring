import React from 'react';
import './movieItem.less';

const MovieItem = ({ id, title, release_date, poster_path, genres, onClick }) => (
    <div className="movie-list-item" id={id}>
        <a href="#" onClick={onClick.bind(null, id)}>
            <img src={poster_path} alt={title} ></img>
        </a>
        
        <div className="movie-list-item-capture">
            <p>{title}</p>
            <p>{release_date}</p>
        </div>
        <div>{genres.join(', ')}</div>
    </div>
);

export default MovieItem;