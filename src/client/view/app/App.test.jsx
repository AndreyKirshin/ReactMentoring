
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {

    it('should be render correctly', () => {
        const component = shallow(
            <App />);
        expect(component).toMatchSnapshot();
    });
});