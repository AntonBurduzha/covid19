import * as React from 'react';

import { CountryStatistic } from 'modules';

export const MARKER_SIZE = {
    SMALL: 100,
    MEDIUM: 500,
    LARGE: 2000,
};

export interface MarkerProps {
    country: CountryStatistic;
    lat: number;
    lng: number;
    onClick: (country: CountryStatistic) => void;
}

const Marker: React.FunctionComponent<MarkerProps> = ({ country, onClick }) => {
    const getMarkerSize = (): string => {
        if (country.cases < MARKER_SIZE.SMALL) {
            return 'small';
        } else if (country.cases < MARKER_SIZE.MEDIUM) {
            return 'medium';
        } else if (country.cases < MARKER_SIZE.LARGE) {
            return 'large';
        }

        return 'xlarge';
    };

    const onMarkerClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClick(country);
    };

    return (
        <div className={`marker marker-${getMarkerSize()}`} onClick={onMarkerClick}>
            {country.cases.toLocaleString()}
        </div>
    );
};

export { Marker };
