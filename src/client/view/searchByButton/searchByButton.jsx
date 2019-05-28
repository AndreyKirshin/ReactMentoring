import React from 'react';
import styled from 'styled-components'

const SearchByButton = ({ name, toggle, isActive }) => {

  const Button = styled.button`
    background: ${isActive ? "palevioletred" : "white"};
    color: ${isActive ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  
  return <Button onClick={toggle}>{name}</Button>;
};

export default SearchByButton;
