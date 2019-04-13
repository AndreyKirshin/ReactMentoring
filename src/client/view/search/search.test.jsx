
import React from 'react';
import { shallow } from 'enzyme';
import Search from './search';

describe('Search component', () => {

    let onChangeSearchValue;
    let onSearch;
    let searchByTitleToggle;
    let searchByGenreToggle;
    let searchBy;

    beforeAll(() => {
        onChangeSearchValue = jest.fn();
        onSearch = jest.fn();
        searchByTitleToggle = jest.fn();
        searchByGenreToggle = jest.fn();
        searchBy = 'title';
    });

    it('should be render correctly', () => {
        const component = shallow(
            <Search 
                onChangeSearchValue={onChangeSearchValue} 
                onSearch={onSearch} 
                searchByTitleToggle={searchByTitleToggle}
                searchByGenreToggle={searchByGenreToggle}
                searchBy={searchBy}
            />);
        expect(component).toMatchSnapshot();
    });
});