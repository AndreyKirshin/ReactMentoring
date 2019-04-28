import React from 'react';
import MovieList from '../movieList/movieList';
import Search from '../search/search';
import MovieCard from '../movieCard/movieCard';
import BuggyButton from '../buggyButton/buggyButton';
import './container.less';
import { connect } from 'react-redux';
import { fetchMovies, changeSearchBy } from '../../state/movies/moviesActions';
import moviesSelector from '../../state/movies/moviesSelector';


export class Container extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
        this.handleOnSearch = this.handleOnSearch.bind(this);
        this.handleBackToSearch = this.handleBackToSearch.bind(this);
        this.handleClickOnMovie = this.handleClickOnMovie.bind(this);
    }

    handleChangeSearchValue(event) {
        this.setState({searchValue: event.target.value});
    }

    handleOnSearch(event) {
        if(this.state.searchValue){
            this.props.doSearch({
                search: this.state.searchValue,
                searchBy: this.props.searchBy
            });
        }
        event.preventDefault();
    }

    handleBackToSearch() {
        this.setState({currentMovie: undefined});
        this.setState({searchValue: undefined});
    }

    findMovie = (movies, id) => {
        if (movies) {
            return movies.filter(movie => movie.id === id)[0];
        }
        return null;
    }

    handleClickOnMovie(id) {
        console.log(id);
        this.setState({currentMovie: this.findMovie(this.props.movies, id)});
        this.setState({currentMovieId: id});
    }

    searchByTitleToggle = () => {
        this.props.setSearchBy({searchBy: 'title'});
    }

    searchByGenreToggle = () => {
        this.props.setSearchBy({searchBy: 'genre'});
    }

    render() {
        const { movies, searchBy } = this.props;
        return (
            <div className="container">
                {
                    (this.state.currentMovie) ?
                    (<MovieCard movie={this.state.currentMovie} backToSearch={this.handleBackToSearch} />) :
                    (<Search 
                        onChangeSearchValue={this.handleChangeSearchValue} 
                        onSearch={this.handleOnSearch} 
                        searchByTitleToggle={this.searchByTitleToggle}
                        searchByGenreToggle={this.searchByGenreToggle}
                        searchBy={searchBy}
                    />)
                }
                <BuggyButton />
                {movies && !!movies.length && <MovieList data={movies} onClick={this.handleClickOnMovie} />}
                {this.state.searchValue && movies && movies.length === 0 && <h1>No search result</h1>}
                {!this.state.searchValue && <h1>Please, start searching</h1>}
            </div>
        )
    }

};

const mapStateToProps = state => ({
    movies: moviesSelector.movies(state),
    searchBy: moviesSelector.searchBy(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    doSearch: data => dispatch(fetchMovies(data)),
    setSearchBy: data => dispatch(changeSearchBy(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);