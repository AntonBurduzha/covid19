import * as React from 'react';

import { shallow } from 'enzyme';
import GoogleMapReact from 'google-map-react';
import { fakePayload } from 'modules';
import { InfoBox, Marker } from '../';
import { GlobalMap, GlobalMapProps } from './';

describe('GlobalMap', () => {
    const props: GlobalMapProps = {
        statistic: fakePayload,
    };
    const wrapper = shallow(<GlobalMap {...props} />);
    const country = props.statistic[0];

    it('should render GlobalMap without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render root <div> with default class', () => {
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div').hasClass('main-wrapper')).toBe(true);
    });

    it('should handle click on root <div>', () => {
        wrapper.setState({ selectedCountry: country, showInfoBox: true });
        expect(wrapper.state('selectedCountry')).toEqual(country);
        expect(wrapper.state('showInfoBox')).toEqual(true);
        wrapper.find('div').simulate('click');
        expect(wrapper.state('selectedCountry')).toEqual({});
        expect(wrapper.state('showInfoBox')).toEqual(false);
    });

    it('should render GoogleMapReact component', () => {
        expect(wrapper.find(GoogleMapReact)).toHaveLength(1);
    });

    it('should render InfoBox component', () => {
        expect(wrapper.find(InfoBox)).toHaveLength(0);
        wrapper.setState({ selectedCountry: country, showInfoBox: true });
        expect(wrapper.find(InfoBox)).toHaveLength(1);
        wrapper.find('div').simulate('click');
        expect(wrapper.find(InfoBox).isEmptyRender()).toBe(true);
    });

    it('should render Marker component', () => {
        expect(wrapper.find(Marker)).toHaveLength(1);
    });

    it('should handle click on Marker component', () => {
        wrapper.find(Marker).first().prop('onClick')(country);
        expect(wrapper.state('selectedCountry')).toEqual(country);
        expect(wrapper.state('showInfoBox')).toEqual(true);
    });
});
