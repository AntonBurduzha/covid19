import { createStore } from 'redux';
import { appReducer } from '..';
import { selectLoadingStatistic, selectStatistic } from './selectors';

describe('Statistic selectors', () => {
    const state = createStore(appReducer).getState();

    it('should select loading flag', () => {
        expect(selectLoadingStatistic(state)).toEqual(state.statistic.loading);
    });

    it('should select statistic', () => {
        expect(selectStatistic(state)).toEqual(state.statistic.statistic);
    });
});
