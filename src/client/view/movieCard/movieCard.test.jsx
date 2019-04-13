import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieCard from './movieCard';

describe('MovieCard component', () => {

    let movie;
    let backToSearch;
    beforeAll(() => {
        movie = {
            title: "111",
            vote_average: 222,
            release_date: "333",
            runtime: 444,
            overview: "555"
        }
        backToSearch = jest.fn();
    });

    it('should be render correctly', () => {
        const component = shallow(
            <MovieCard 
                movie={movie} 
                backToSearch={backToSearch} 
            />);
        expect(component).toMatchSnapshot();
    });

    it('should be call backToSearch', () => {
        const component = mount(
            <MovieCard 
                movie={movie} 
                backToSearch={backToSearch} 
            />);
        const link = component.find('button').simulate('click');
        expect(backToSearch).toHaveBeenCalled();
    });
})