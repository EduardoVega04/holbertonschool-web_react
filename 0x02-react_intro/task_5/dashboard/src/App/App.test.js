// npm run test
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import App from './App';
import React from 'react';

describe('<App />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').exists()).toEqual(true);
    });

    it('Renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').exists()).toEqual(true);
    });

    it('Renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').exists()).toEqual(true);
    });
});