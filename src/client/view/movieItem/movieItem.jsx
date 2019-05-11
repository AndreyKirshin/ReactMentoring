import React from 'react';
import { Link } from "react-router-dom";
import './movieItem.less';

const MovieItem = ({ id, title, release_date, poster_path, genres }) => (
    <div className="movie-list-item" id={id}>
        <Link to={{
            pathname: `/film/${id}`
        }} replace>
            <img src={poster_path} alt={title} ></img>
        </Link>
        
        <div className="movie-list-item-capture">
            <p>{title}</p>
            <p>{release_date}</p>
        </div>
        <div>{genres.join(', ')}</div>
    </div>
);

export default MovieItem;