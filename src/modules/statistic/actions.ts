import { GET_STATISTIC_DATA, GET_STATISTIC_ERROR, GET_STATISTIC_FETCH } from './constants';
import { GetStatisticData, GetStatisticError, GetStatisticFetch } from './types';

export const getStatistic = (): GetStatisticFetch => ({
    type: GET_STATISTIC_FETCH,
});

export const getStatisticData = (payload: GetStatisticData['payload']): GetStatisticData => ({
    type: GET_STATISTIC_DATA,
    payload,
});

export const getStatisticError = (): GetStatisticError => ({
    type: GET_STATISTIC_ERROR,
});
