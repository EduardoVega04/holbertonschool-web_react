// npm run test
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import Notifications from './Notifications';
import React from 'react';

describe('<Notifications />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders three list items (li)', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul').children().length).toEqual(3);
    });

    it('Renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').render().text()).toEqual("Here is the list of notifications");
    });
});