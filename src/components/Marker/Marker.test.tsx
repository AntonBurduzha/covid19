import * as React from 'react';

import { shallow } from 'enzyme';
import { fakePayload } from 'modules';
import { Marker, MarkerProps } from './';

describe('Marker', () => {
    const onClickSpy = jest.fn();
    const stopPropagationSpy = jest.fn();
    const props: MarkerProps = {
        onClick: onClickSpy,
        country: fakePayload[0],
        lat: 0,
        lng: 0,
    };
    const wrapper = shallow(<Marker {...props} />);

    it('should render Marker without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render root <div> with default class', () => {
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div').hasClass('marker')).toBe(true);
        expect(wrapper.find('div').hasClass('marker-small')).toBe(true);
    });

    it('should render root <div> with medium class', () => {
        wrapper.setProps({ ...props, country: { ...props.country, cases: 300 } });
        expect(wrapper.find('div').hasClass('marker-medium')).toBe(true);
    });

    it('should render root <div> with large class', () => {
        wrapper.setProps({ ...props, country: { ...props.country, cases: 1000 } });
        expect(wrapper.find('div').hasClass('marker-large')).toBe(true);
    });

    it('should render root <div> with xlarge class', () => {
        wrapper.setProps({ ...props, country: { ...props.country, cases: 50000 } });
        expect(wrapper.find('div').hasClass('marker-xlarge')).toBe(true);
    });

    it('should call onClick prop with stopPropagation', () => {
        wrapper.setProps({ ...props });
        wrapper.find('div').simulate('click', { stopPropagation: stopPropagationSpy });
        expect(onClickSpy).toHaveBeenCalled();
        expect(onClickSpy).toHaveBeenCalledTimes(1);
        expect(onClickSpy).toHaveBeenCalledWith(props.country);
        expect(stopPropagationSpy).toHaveBeenCalled();
        expect(stopPropagationSpy).toHaveBeenCalledTimes(1);
    });

    it('should render root <div> with right text', () => {
        expect(wrapper.find('div').text()).toBe(props.country.cases.toLocaleString());
    });
});
