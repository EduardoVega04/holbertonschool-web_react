import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from "aphrodite";

describe('Test BodySection.js', () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('Render without crashing', () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Render correctly the children and one h2 element', () => {
        const wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
        expect(wrapper.find('h2').length).toEqual(1);
        expect(wrapper.find('h2').text()).toEqual('test title');
        expect(wrapper.find('p').length).toEqual(1);
        expect(wrapper.find('p').text()).toEqual('test children node');
    });
});