import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';

describe('<CourseList />', () => {
    it('Renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow).length).toEqual(5);
    });
});