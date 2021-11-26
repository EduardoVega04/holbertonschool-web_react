import CourseListRow from "./CourseListRow";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { StyleSheetTestUtils } from "aphrodite";

describe('<CourseListRow />', () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('Renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
        expect(wrapper.find('th[colSpan="2"]').exists()).toEqual(true);
    });

    it('Renders two cells when textSecondCell is present and isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="hbtn" />);
        expect(wrapper.find('th').length).toEqual(2);
    });

    it('Renders correctly two td elements within a tr element and isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="hbtn" />);
        expect(wrapper.find('td').length).toEqual(2);
    });
});