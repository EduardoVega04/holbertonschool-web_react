// npm run test
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import Notifications from './Notifications';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders three NotificationItem', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).length).toEqual(3);
    });

    it('Renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications p').render().text()).toEqual("Here is the list of notifications");
    });

    it('Verify that the first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).at(0).html()).toEqual(
            '<li data-notification-type="default">New course available</li>');
    });

    it('Renders a paragraph with the text "Your notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem p').render().text()).toEqual('Your notifications');
    });

    it('Does not display the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).exists()).toEqual(false);
    });

    it('Does not display div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('div.Notifications').exists()).toEqual(false);
    });

    it('Displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).exists()).toEqual(true);
    });

    it('Displays div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications').exists()).toEqual(true);
    });
});