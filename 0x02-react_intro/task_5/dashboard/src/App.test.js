// npm run test
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').exists()).toEqual(true);
    });

    it('Renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').exists()).toEqual(true);
    });

    it('Renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').exists()).toEqual(true);
    });
});