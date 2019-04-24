
import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchByButton from './searchByButton';

describe('SearchByButton component', () => {

    let name;
    let toggle;
    let isActive;
    
    beforeAll(() => {
        name = 'TITLE';
        toggle = jest.fn();
        isActive = true;
    });

    it('should be render correctly', () => {
        const component = shallow(
            <SearchByButton 
                name={name} 
                toggle={toggle} 
                isActive={isActive} 
            />);
        expect(component).toMatchSnapshot();
    });

    it('should be render with class search-by-active if isActive is true', () => {
        const component = shallow(
            <SearchByButton 
                name={name} 
                toggle={toggle} 
                isActive={isActive} 
            />);
        expect(component.hasClass('search-by-active')).toBe(true);
    });
})