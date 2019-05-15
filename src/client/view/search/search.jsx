import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../state/movies/moviesActions';
import SearchByButton from '../searchByButton/searchByButton';
import './search.less';
import { Link } from "react-router-dom";

class Search extends React.Component {

    constructor() {
        super();
        this.state = { searchBy: 'title' };
    }

    getMoviesInComponent = () => {
        if(this.props.searchValue && this.props.searchBy) {
            this.props.getMovies({
                search: this.props.searchValue,
                searchBy: this.props.searchBy
            });
        }  
    }

    componentDidMount() {
        this.getMoviesInComponent();
    }


    componentDidUpdate(prevProps) {
        this.getMoviesInComponent();
    }

    handleChangeSearchValue = (event) => {
        this.setState({searchValue: event.target.value});
    }

    render() {
        return(
            <div>
                <label>
                    <p>FIND YOUR MOVIE:</p>
                    <input className="search-input" type="text" onChange={this.handleChangeSearchValue} defaultValue={this.props.searchValue}/>
                </label>
                <div className="search-button-panel">
                <div>
                    <span>SEARCH BY</span>
                    <SearchByButton name={'TITLE'} toggle={() => {this.setState({ searchBy: 'title' })}} isActive={this.state.searchBy === 'title'} />
                    <SearchByButton name={'GENRE'} toggle={() => {this.setState({ searchBy: 'genre' })}} isActive={this.state.searchBy === 'genre'} />
                </div>
                    <button className="search-submit-button" ><Link to={`/search?q=${this.state.searchValue}&searchBy=${this.state.searchBy}`}>Search@</Link></button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMovies: data => dispatch(fetchMovies(data)),
});

export default connect(null, mapDispatchToProps)(Search);