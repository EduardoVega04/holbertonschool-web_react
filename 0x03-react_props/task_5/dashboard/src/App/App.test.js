// npm run test
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import App from './App';
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the Notifications component', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the Header component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the Login component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the Footer component', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Checks that CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).exists()).toEqual(false);
    });
});

describe('<App />', () => {
    it('Should not render the Login component when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login).exists()).toEqual(false);
    });

    it('Should render the CourseList component when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList).exists()).toEqual(true);
    });
});
