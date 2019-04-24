import React from 'react';
import { mount } from 'enzyme';
import Container from './container';
import Search from '../search/search';
import MovieList from '../movieList/movieList';
import MovieItem from '../movieItem/movieItem';
import MovieCard from '../movieCard/movieCard';
import SearchByButton from '../searchByButton/searchByButton';

describe('Container component', () => {

    let data;
    let movie;
    beforeAll(() => {
        data = [{
            id: "nice-movie",
            title: "111",
            vote_average: 222,
            release_date: "333",
            runtime: 444,
            overview: "555",
            poster_path: "666",
            genres: ["777", "888"]
        },
        {
            id: "bad-movie",
            title: "111",
            vote_average: 222,
            release_date: "333",
            runtime: 444,
            overview: "555",
            poster_path: "666",
            genres: ["777", "888"]
        }];

        movie = {
            id: "000",
            title: "111",
            vote_average: 222,
            release_date: "333",
            runtime: 444,
            overview: "555",
            poster_path: "666",
            genres: ["777", "888"]
        }
    });
    

    it('should render Search component inside if currentMovie is not defined', () => {
        const component = mount(
            <Container/>);
        expect(component.find(Search).length).toBe(1);
    });

    it('should set search value to state when some word is input', () => {
        const component = mount(<Container/>);
        const event = {target: {value: "test"}};

       component.find(Search).find('input.search-input').simulate('change', event);
       expect(component.state('searchValue')).toBe('test');
    });

    it('should set currentMovieId to state when corresponding instance of MovieItem component is clicked', () => {
        const component = mount(<Container/>);
        component.setState({data: data});
        
        const item = component.find(MovieList).find(MovieItem).filterWhere(item => item.props().id === "nice-movie").first();
        item.find('a').simulate('click');
        expect(component.state('currentMovieId')).toBe("nice-movie");
    });

    it('should render MovieCard component inside when any Movie Item is clicked', () => {
        const component = mount(<Container/>);
        component.setState({data: data});
        
        const item = component.find(MovieList).find(MovieItem).filterWhere(item => item.props().id === "nice-movie").first();
        item.find('a').simulate('click');
        expect(component.find(MovieCard).length).toBe(1);
    });

    it('Should set searchBy valued genre to state when corresponding button is clicked', () => {
        const component = mount(<Container/>);
        const button = component.find(Search).find(SearchByButton).filterWhere(button => button.props().name === 'GENRE').first();
        button.simulate('click');
        expect(component.state('searchBy')).toBe('genre');
    });
    
    it('Should set searchBy valued title to state when corresponding button is clicked', () => {
        const component = mount(<Container/>);
        const button = component.find(Search).find(SearchByButton).filterWhere(button => button.props().name === 'TITLE').first();
        button.simulate('click');
        expect(component.state('searchBy')).toBe('title');
    });

    it('Should render search component when the search button on movie card is clecked', () => {
        const component = mount(<Container/>);
        component.setState({currentMovie: movie})
        component.find(MovieCard).find('button').simulate('click');
        expect(component.find(Search).length).toBe(1);
    });
})