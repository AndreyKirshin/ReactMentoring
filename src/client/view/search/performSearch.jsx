import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../state/movies/moviesActions';

class PerformSearch extends React.Component {

    getMoviesInComponent = () => {
        this.props.getMovies({
            search: this.props.searchValue,
            searchBy: this.props.searchBy
        });
    }

    componentDidMount() {
        this.getMoviesInComponent();
    }


    componentDidUpdate(prevProps) {
        this.getMoviesInComponent();
    }

    render() {
        return (
            <h1>Perform Search</h1>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    getMovies: data => dispatch(fetchMovies(data)),
});

export default connect(null, mapDispatchToProps)(PerformSearch);