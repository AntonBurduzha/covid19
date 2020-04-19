import * as React from 'react';

import { CountryStatistic } from 'modules';

export interface InfoBoxProps {
    data: CountryStatistic;
    lat: number;
    lng: number;
}

const InfoBox: React.FunctionComponent<InfoBoxProps> = ({ data }) => {
    const onClickInfoBox = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div className="info-box-wrapper" onClick={onClickInfoBox}>
            <ul>
                <li>
                    <span className="info-box-heading">{data.country}</span>
                    <img className="info-box-wrapper-flag" src={data.countryInfo.flag} alt="flag" />
                </li>
                <li>
                    <span className="info-box-wrapper-title">Cases: &nbsp;</span>
                    {data.cases.toLocaleString()}
                </li>
                <li>
                    <span className="info-box-wrapper-title">Today's Cases: &nbsp;</span>
                    {data.todayCases.toLocaleString()}
                </li>
                <li>
                    <span className="info-box-wrapper-title">Deaths: &nbsp;</span>
                    {data.deaths.toLocaleString()}
                </li>
                <li>
                    <span className="info-box-wrapper-title">Today's Deaths: &nbsp;</span>
                    {data.todayDeaths.toLocaleString()}
                </li>
                <li>
                    <span className="info-box-wrapper-title">Recovered: &nbsp;</span>
                    {data.recovered.toLocaleString()}
                </li>
                <li>
                    <span className="info-box-wrapper-title">Active: &nbsp;</span>
                    {data.active.toLocaleString()}
                </li>
                <li>
                    <span className="info-box-wrapper-title">Critical: &nbsp;</span>
                    {data.critical.toLocaleString()}
                </li>
                <li>
                    <span className="info-box-wrapper-title">Cases Per Million: &nbsp;</span>
                    {data.casesPerOneMillion.toLocaleString()}
                </li>
            </ul>
        </div>
    );
};

export { InfoBox };
