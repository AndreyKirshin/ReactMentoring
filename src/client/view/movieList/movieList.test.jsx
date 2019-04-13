
import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieList from './movieList';
import MovieItem from '../movieItem/movieItem';

describe('MovieList component', () => {

    let data;
    let onClick;
    beforeAll(() => {
        data = [{
            id: "000",
            title: "111",
            vote_average: 222,
            release_date: "333",
            runtime: 444,
            overview: "555",
            poster_path: "666",
            genres: ["777", "888"]
        },
        {
            id: "001",
            title: "111",
            vote_average: 222,
            release_date: "333",
            runtime: 444,
            overview: "555",
            poster_path: "666",
            genres: ["777", "888"]
        }];
        onClick = jest.fn();

    });

    it('should be render correctly', () => {
        const component = shallow(
            <MovieList
                data={data}
                onClick={onClick} 
            />);
        expect(component).toMatchSnapshot();
    });

    it('should be render two components - MovieItem', () => {
        
        const component = mount(<MovieList
            data={data}
            onClick={onClick} 
        />);
        expect(component.find(MovieItem).length).toBe(2);
    });

})