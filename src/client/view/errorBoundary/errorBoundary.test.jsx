
import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './errorBoundary';

describe('ErrorBoundary component', () => {
    it('should be render correctly', () => {
        const component = shallow(<ErrorBoundary />);
        component.setState({error: "Test Error", errorInfo: "Test Error Info"})
        expect(component.find('details').text()).toBe("Test Error");
    });
})