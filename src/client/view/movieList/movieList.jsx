import React from 'react';
import './movieList.less';
import MovieItem from '../movieItem/movieItem';

const MovieList = ({ data, onClick }) => (
    <div className="movie-list" >
        {
            data.map(movie => 
                <div key={movie.id} >
                    <MovieItem
                        id={movie.id} 
                        title={movie.title}
                        release_date={movie.release_date}
                        poster_path={movie.poster_path}
                        genres={movie.genres}
                        onClick={onClick} 
                    />
                </div>    
            )
        }
    </div>
);

export default MovieList;