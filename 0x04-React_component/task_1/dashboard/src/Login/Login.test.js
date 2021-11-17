import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import Login from "./Login";

describe('<Login />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders two input tags properly', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toEqual(2);
    });

    it('Renders two label tags properly', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label').length).toEqual(2);
    });
});
