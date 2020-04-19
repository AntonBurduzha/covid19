import * as React from 'react';

import { shallow } from 'enzyme';
import { AppLayout, Props } from './App';
import { fakePayload } from './modules';

describe('AppLayout', () => {
    const getStatisticSpy = jest.fn();
    const props: Props = {
        getStatistic: getStatisticSpy,
        statistic: [],
        isLoading: true,
    };
    const wrapper = shallow(<AppLayout {...props} />);

    it('should render App without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call getStatistic action', () => {
        expect(getStatisticSpy).toHaveBeenCalled();
        expect(getStatisticSpy).toHaveBeenCalledTimes(1);
    });

    it('should render empty container', () => {
        expect(wrapper.isEmptyRender()).toBe(true);
    });

    it('should has empty statistic', () => {
        expect(wrapper.instance().props.statistic).toHaveLength(0);
    });

    it('should render Header', () => {
        wrapper.setProps({ ...props, isLoading: false, statistic: fakePayload });
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('should has statistic with 1 note', () => {
        expect(wrapper.instance().props.statistic).toHaveLength(1);
    });

    it('should render GlobalMap', () => {
        expect(wrapper.find('GlobalMap')).toHaveLength(1);
    });
});
