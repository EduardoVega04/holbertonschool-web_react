import Footer from "./Footer";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { getFullYear, getFooterCopy } from "../utils/utils";
import React from 'react';

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy(1)}`);
    });
});
