
import React from 'react';
import { shallow } from 'enzyme';
import MovieInfo from './movieInfo';

describe('MovieInfo component', () => {

    let movie;
    beforeAll(() => {
        movie = {
            title: "111",
            vote_average: 222,
            release_date: "333",
            runtime: 444,
            overview: "555"
        }
    });

    it('should be render correctly', () => {
        const component = shallow(
        <MovieInfo 
            title={movie.title} 
            vote_average={movie.vote_average} 
            release_date={movie.release_date} 
            runtime={movie.runtime}
            overview={movie.overview} 
        />);
        expect(component).toMatchSnapshot();
    });

});