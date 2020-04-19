import { GET_STATISTIC_DATA, GET_STATISTIC_ERROR } from './constants';
import { StatisticAction, StatisticState } from './types';

export const initialStatisticState: StatisticState = {
    loading: true,
    statistic: [],
};

export const statisticReducer = (state = initialStatisticState, action: StatisticAction) => {
    switch (action.type) {
        case GET_STATISTIC_DATA:
            return { ...state, loading: false, statistic: action.payload };
        case GET_STATISTIC_ERROR:
            return { ...state, loading: false, statistic: [] };
        default:
            return { ...state };
    }
};
