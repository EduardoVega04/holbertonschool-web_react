import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from "aphrodite";

describe('Test BodySectionWithMarginBottom.js', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('Render without crashing', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title' />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Render correctly a BodySection component and that the props are passed correctly to the child component', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title'><p>test children node</p></BodySectionWithMarginBottom>)
        expect(wrapper.find('div#bodySectionWithMargin').exists()).toEqual(true);
        expect(wrapper.children().length).toEqual(1);
        expect(wrapper.find(BodySection).length).toEqual(1);
        expect(wrapper.find(BodySection).children().length).toEqual(1);
        expect(wrapper.find(BodySection).props().title).toEqual('test title');
        expect(wrapper.find('p').length).toEqual(1);
        expect(wrapper.find('p').text()).toEqual('test children node');
    })
});