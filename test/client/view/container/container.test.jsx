import React from 'react';
import { mount, shallow } from 'enzyme';
import { Container as NonConnected } from '../../../../src/client/view/container/container';
import Container from '../../../../src/client/view/container/container';
import Search from '../../../../src/client/view/search/search';
import MovieList from '../../../../src/client/view/movieList/movieList';
import MovieItem from '../../../../src/client/view/movieItem/movieItem';
import MovieCard from '../../../../src/client/view/movieCard/movieCard';
import SearchByButton from '../../../../src/client/view/searchByButton/searchByButton';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { dataTest, movieTest } from '../../../recources/testData';

describe('Container component', () => {


    let data;
    let movie;
    let component;
    let nonConnectedComponent;
    let store;
    const mockStore = configureStore();
    const initialState = {
        movies: {
            data: {
                data: dataTest
            }
        }
    }
    beforeAll(() => {
        data = dataTest,

        movie = movieTest,

        store = mockStore(initialState),

        component = shallow(
            <Provider store={store}>
              <Container />
            </Provider>
        ).dive({ context: { store } }).dive({ context: { store } }),

        nonConnectedComponent = mount(<NonConnected/>)
    });

    it('should render Container component', () => {
        expect(component.length).toEqual(1);
    });

    it('should Prop matches with initialState', () => {
        expect(component.prop('output')).toEqual(initialState.output);
    });
  

    it('should render Search component inside if currentMovie is not defined', () => {
        expect(nonConnectedComponent.find(Search).length).toBe(1);
    });

    it('should set search value to state when some word is input', () => {
        const event = {target: {value: "test"}};

        nonConnectedComponent.find(Search).find('input.search-input').simulate('change', event);
       expect(nonConnectedComponent.state('searchValue')).toBe('test');
    });

    it('should set currentMovieId to state when corresponding instance of MovieItem component is clicked', () => {
        nonConnectedComponent.setProps({movies: data});
        
        const item = nonConnectedComponent.find(MovieList).find(MovieItem).filterWhere(item => item.props().id === "nice-movie").first();
        item.find('a').simulate('click');
        expect(nonConnectedComponent.state('currentMovieId')).toBe("nice-movie");
    });

    it('should render MovieCard component inside when any Movie Item is clicked', () => {
        nonConnectedComponent.setProps({movies: data});
        
        const item = nonConnectedComponent.find(MovieList).find(MovieItem).filterWhere(item => item.props().id === "nice-movie").first();
        item.find('a').simulate('click');
        expect(nonConnectedComponent.find(MovieCard).length).toBe(1);
    });

    it('Should render search component when the search button on movie card is clecked', () => {
        nonConnectedComponent.setState({currentMovie: movie})
        nonConnectedComponent.find(MovieCard).find('button').simulate('click');
        expect(nonConnectedComponent.find(Search).length).toBe(1);
    });
})