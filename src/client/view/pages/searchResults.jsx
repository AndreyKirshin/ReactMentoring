import React from 'react';
import Search from '../search/search';
import PerformSearch from '../search/performSearch';
import MovieList from '../movieList/movieList';

class SearchResults extends React.Component {
    render() {
        const params = new URLSearchParams(this.props.location.search);

        return (
            <div>
                <Search searchValue={params.get('q')} searchBy={params.get('searchBy')}/>
                {/* <PerformSearch searchValue={params.get('q')} searchBy={params.get('searchBy')} /> */}
                <MovieList />
            </div>
        )
    }
}

export default SearchResults;