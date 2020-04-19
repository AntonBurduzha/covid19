import { GET_STATISTIC_DATA, GET_STATISTIC_ERROR, GET_STATISTIC_FETCH } from './constants';

interface Country {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
}

export interface CountryStatistic {
    updated: number;
    country: string;
    countryInfo: Country;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
}

export interface StatisticState {
    loading: boolean;
    statistic: CountryStatistic[];
}

export interface GetStatisticFetch {
    type: typeof GET_STATISTIC_FETCH;
}

export interface GetStatisticData {
    type: typeof GET_STATISTIC_DATA;
    payload: CountryStatistic[];
}

export interface GetStatisticError {
    type: typeof GET_STATISTIC_ERROR;
}

export type StatisticAction = GetStatisticFetch | GetStatisticData | GetStatisticError;
