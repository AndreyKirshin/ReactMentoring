import React from 'react';
import './searchByButton.less'

const SearchByButton = ({ name, toggle, isActive }) => {
    const buttonColor = isActive ? 'search-by-active' : 'search-by-inactive';
    return <button className={`search-by ${buttonColor}`} onClick={toggle}>{name}</button>
}

export default SearchByButton;

