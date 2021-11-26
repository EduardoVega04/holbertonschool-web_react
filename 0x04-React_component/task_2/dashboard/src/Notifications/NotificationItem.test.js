import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import React from 'react';

describe('<NotificationItem />', () => {
    it('Renders the first component without crashing', () => {
        const wrapper = shallow(<NotificationItem type="default" value="New course available" />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the second component without crashing', () => {
        const wrapper = shallow(<NotificationItem type="urgent" value="New resume available" />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the third component without crashing', () => {
        const wrapper = shallow(<NotificationItem type="urgent" html={getLatestNotification()} />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Verify that by passing dummy type and value props, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.render().text()).toEqual("test");
    });

    it('Verify that by passing a dummy html prop, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
    });

    it('spy as the markAsRead property and Check that when simulating a click on the component, the spy is called with the right ID argument', () => {
        const wrapper = shallow(<NotificationItem type='default' value='test' id={1} />);
        const markAsRead = wrapper.instance().markAsRead = jest.fn();
        wrapper.find('li').first().simulate('click');
        markAsRead(1);
        expect(markAsRead).toHaveBeenCalled();
        expect(markAsRead).toHaveBeenCalledWith(1);
    });
});