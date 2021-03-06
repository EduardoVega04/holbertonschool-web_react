import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import BodySection from './BodySection';

describe('Test BodySection.js', () => {
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