import Header from "./Header";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders img tag properly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img[alt="Holberton logo"]').exists()).toEqual(true);
    });

    it('Renders h1 tag properly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
});
