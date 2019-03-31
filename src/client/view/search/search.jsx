import React from 'react';

const Search = ({ onChangeSearchValue, onSearch, searchByTitle, searchByGenre }) => (
    <form onSubmit={onSearch}>
        <label>
          <p>FIND YOUR MOVIE:</p>
          <input type="text" onChange={onChangeSearchValue} />
        </label>
        <div>
          {/* <span>SEARCH BY</span>
          <button onClick={searchByTitle}>TITLE</button>
          <button onClick={searchByGenre}>GENRE</button> */}
        </div>
        <input type="submit" value="Search" />
    </form>
)

export default Search;