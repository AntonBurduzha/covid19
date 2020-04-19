import { AppState } from '..';
import { StatisticState } from './types';

export const selectStatistic = (state: AppState): StatisticState['statistic'] => state.statistic.statistic;

export const selectLoadingStatistic = (state: AppState): boolean => state.statistic.loading;
