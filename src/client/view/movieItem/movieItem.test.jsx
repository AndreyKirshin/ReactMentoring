
import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieItem from './movieItem';

describe('MovieItem component', () => {

    let movie;
    let onClick;
    beforeAll(() => {
        movie = {
            id: "000",
            title: "111",
            vote_average: 222,
            release_date: "333",
            runtime: 444,
            overview: "555",
            poster_path: "666",
            genres: ["777", "888"]
        };
        onClick = jest.fn();

    });

    it('should be render correctly', () => {
        const component = shallow(
            <MovieItem
                id={movie.id} 
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
                genres={movie.genres}
                onClick={onClick} 
            />);
        expect(component).toMatchSnapshot();
    });

    it('should be call onClick', () => {
        const component = mount(
            <MovieItem
                id={movie.id} 
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
                genres={movie.genres}
                onClick={onClick} 
            />);
        const link = component.find('a').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

})