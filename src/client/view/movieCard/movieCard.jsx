import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './movieCard.less';
import MovieInfo from '../movieInfo/movieInfo';
import { fetchMovie } from '../../state/movie/movieActions';
import movieSelector from '../../state/movie/movieSelector';

class MovieCard extends React.Component {

    getMovieInComponent = () => {
        this.props.getMovie(this.props.id);
    }

    componentDidMount() {
        this.getMovieInComponent();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.id !== this.props.id) {
            this.getMovieInComponent();
        }
    }

    render() {
        const movie = this.props.movie;
        return (
            <div>
                <div className="movie-card-back-to-search"><Link to='/'>Search</Link></div>
                { movie &&
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
                }     
            </div>
        )
    }
}


const mapStateToProps = state => ({
    movie: movieSelector.movie(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMovie: data => dispatch(fetchMovie(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);