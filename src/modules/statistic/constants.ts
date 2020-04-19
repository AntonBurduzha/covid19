export const GET_STATISTIC_FETCH = 'GET_STATISTIC_FETCH';
export const GET_STATISTIC_DATA = 'GET_STATISTIC_DATA';
export const GET_STATISTIC_ERROR = 'GET_STATISTIC_ERROR';

export const fakePayload = [
    {
        updated: 0,
        country: '',
        countryInfo: {
            _id: 0,
            iso2: '',
            iso3: '',
            lat: 0,
            long: 0,
            flag: '',
        },
        cases: 0,
        todayCases: 0,
        deaths: 0,
        todayDeaths: 0,
        recovered: 0,
        active: 0,
        critical: 0,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        tests: 0,
        testsPerOneMillion: 0,
    },
];
