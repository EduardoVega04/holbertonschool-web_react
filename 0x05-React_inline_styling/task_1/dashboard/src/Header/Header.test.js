import Header from "./Header";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { StyleSheetTestUtils } from "aphrodite";

describe('<Header />', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

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
