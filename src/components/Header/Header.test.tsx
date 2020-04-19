import * as React from 'react';

import { shallow } from 'enzyme';
import moment from 'moment';
import { Header } from './';

describe('Header', () => {
    const wrapper = shallow(<Header />);

    it('should render Header without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('render two <span>', () => {
        expect(wrapper.find('span')).toHaveLength(2);
    });

    it('render title in the first <span>', () => {
        const title = 'COVID-19 Status';
        expect(wrapper.find('span').first().text()).toEqual(title);
    });

    it('render current date in the second <span>', () => {
        const date = moment().format('DD MMMM YYYY');
        expect(wrapper.find('span').at(1).text()).toEqual(date);
    });
});
