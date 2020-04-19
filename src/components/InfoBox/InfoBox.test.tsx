import * as React from 'react';

import { shallow } from 'enzyme';
import { fakePayload } from 'modules';
import { InfoBox, InfoBoxProps } from './';

describe('InfoBox', () => {
    const stopPropagationSpy = jest.fn();
    const props: InfoBoxProps = {
        data: fakePayload[0],
        lat: 0,
        lng: 0,
    };
    const wrapper = shallow(<InfoBox {...props} />);

    it('should render InfoBox without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render root <div> with default class', () => {
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div').hasClass('info-box-wrapper')).toBe(true);
    });

    it('should simulate click with calling stopPropagation', () => {
        wrapper.find('div').simulate('click', { stopPropagation: stopPropagationSpy });
        expect(stopPropagationSpy).toHaveBeenCalled();
        expect(stopPropagationSpy).toHaveBeenCalledTimes(1);
    });

    it('should render <ul> with <li> inside itself', () => {
        expect(wrapper.find('ul')).toHaveLength(1);
        expect(wrapper.find('li')).toHaveLength(9);
    });

    it('should render first <li> with <span> and <img> inside itself', () => {
        expect(wrapper.find('li').first().childAt(0).type()).toEqual('span');
        expect(wrapper.find('li').first().childAt(0).text()).toEqual(props.data.country);
        expect(wrapper.find('li').first().childAt(0).hasClass('info-box-heading')).toBe(true);
        expect(wrapper.find('li').first().childAt(1).type()).toEqual('img');
        expect(wrapper.find('li').first().childAt(1).hasClass('info-box-wrapper-flag')).toBe(true);
    });

    it('should render 8 <span> tags with info-box-wrapper-title className', () => {
        expect(wrapper.find('.info-box-wrapper-title')).toHaveLength(8);
    });
});
