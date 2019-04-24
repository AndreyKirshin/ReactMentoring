import React from 'react';
import { shallow } from 'enzyme';
import BuggyButton from './buggyButton';


describe('BuggyButton component', () => {

    it('should be render correctly', () => {
        const component = shallow(
            <BuggyButton />);
        expect(component).toMatchSnapshot();
    });
});