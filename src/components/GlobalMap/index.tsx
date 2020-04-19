import * as React from 'react';

import { InfoBox, Marker } from 'components';
import GoogleMapReact from 'google-map-react';
import { CountryStatistic } from 'modules';

const GOOGLE_MAP_CREDENTIALS = {
    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
    language: 'en',
};

const centerCoordinates = { lat: 30, lng: 0 };

export interface GlobalMapProps {
    statistic: CountryStatistic[];
}

interface State {
    selectedCountry: CountryStatistic;
    showInfoBox: boolean;
}

class GlobalMap extends React.PureComponent<GlobalMapProps, State> {
    public state = {
        selectedCountry: {} as CountryStatistic,
        showInfoBox: false,
    };

    public render() {
        return (
            <div className="main-wrapper" onClick={this.onClearCountry}>
                <GoogleMapReact
                    defaultCenter={centerCoordinates}
                    // tslint:disable-next-line:no-magic-numbers
                    defaultZoom={2}
                    bootstrapURLKeys={GOOGLE_MAP_CREDENTIALS}
                    onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}
                >
                    {this.renderMarkers()}
                    {this.renderInfoBox()}
                </GoogleMapReact>
            </div>
        );
    }

    public apiIsLoaded = (map, maps) => {
        // const { statistic } = this.props;
        // const ua = statistic.find(s => s.country === 'Ukraine');
        const geocoder = new maps.Geocoder();

        geocoder.geocode({ address: 'Ukraine' }, (results, status) => {
            if (status === 'OK') {
                window.console.log(results);
                map.fitBounds(results[0].geometry.bounds);
            }
        });
    };

    public renderInfoBox = () => {
        const { selectedCountry, showInfoBox } = this.state;
        if (!showInfoBox) {
            return null;
        }

        return (
            <InfoBox
                data={selectedCountry}
                lat={selectedCountry!.countryInfo.lat}
                lng={selectedCountry!.countryInfo.long}
            />
        );
    };

    public renderMarkers = () => {
        const { statistic } = this.props;

        return statistic.map(country => {
            return (
                <Marker
                    key={country.country}
                    lat={country.countryInfo.lat}
                    lng={country.countryInfo.long}
                    country={country}
                    onClick={this.onClickCountry}
                />
            );
        });
    };

    private onClickCountry = (country: CountryStatistic) => {
        this.setState({ selectedCountry: country, showInfoBox: true });
    };

    private onClearCountry = () => {
        this.setState({ selectedCountry: {} as CountryStatistic, showInfoBox: false });
    };
}

export { GlobalMap };
