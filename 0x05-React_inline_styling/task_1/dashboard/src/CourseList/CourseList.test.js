import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { StyleSheetTestUtils } from "aphrodite";

describe('<CourseList />', () => {
    const listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('Renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find(CourseListRow).length).toEqual(5);
    });

    it('Renders correctly if you pass an empty array', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.find(CourseListRow).length).toEqual(3);
    });

    it('Renders correctly if you don’t pass the listCourses property', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow).length).toEqual(3);
    });
});