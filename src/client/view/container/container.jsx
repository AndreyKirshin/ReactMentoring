import React from 'react';
import data from './data.json';
import movie from './movie.json';
import MovieList from '../movieList/movieList';
import Search from '../search/search';
import MovieCard from '../movieCard/movieCard';
import BuggyButton from '../buggyButton/buggyButton';

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = data;

        this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
        this.handleOnSearch = this.handleOnSearch.bind(this);
        this.handleBackToSearch = this.handleBackToSearch.bind(this);
        this.handleClickOnMovie = this.handleClickOnMovie.bind(this);
        
    }

    handleChangeSearchValue(event) {
        this.setState({searchValue: event.target.value});
    }

    handleOnSearch(event) {
        console.log(this.state.searchValue);
        this.doSearch(this.state.searchValue);
        event.preventDefault();
    }

    handleBackToSearch() {
        this.setState({currentMovie: undefined});
    }

    handleClickOnMovie(id) {
        console.log(id);
        this.setState({currentMovie: movie});
    }

    doSearch(searchValue) {
        console.log(`I'm searchimg ${searchValue}`);
    }

    render() {
        return (
            <>
                {
                    (this.state.currentMovie) ?
                    (<MovieCard movie={this.state.currentMovie} backToSearch={this.handleBackToSearch} />) :
                    (<Search onChangeSearchValue={this.handleChangeSearchValue} onSearch={this.handleOnSearch} testError={this.handleErrorTest}/>)
                }
                <BuggyButton />
                <MovieList data={this.state.data} onClick={this.handleClickOnMovie} />
            </>
        )
    }

}