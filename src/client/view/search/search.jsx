import React from 'react';
import SearchByButton from '../searchByButton/searchByButton';
import './search.less';

const Search = ({ onChangeSearchValue, onSearch, searchByTitleToggle, searchByGenreToggle, searchBy }) => (
    <div>
        <label>
          <p>FIND YOUR MOVIE:</p>
          <input className="search-input" type="text" onChange={onChangeSearchValue} />
        </label>
        <div className="search-button-panel">
          <div>
            <span>SEARCH BY</span>
            <SearchByButton name={'TITLE'} toggle={searchByTitleToggle} isActive={searchBy === 'title'} />
            <SearchByButton name={'GENRE'} toggle={searchByGenreToggle} isActive={searchBy === 'genre'} />
          </div>
          <button className="search-submit-button" onClick={onSearch}>Search</button>
        </div>
    </div>
)

export default Search;