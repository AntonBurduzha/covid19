import { combineReducers } from 'redux';
// tslint:disable-next-line
import { all, call } from 'redux-saga/effects';
import { rootStatisticSaga, statisticReducer, StatisticState } from './statistic';

export * from './statistic';

export interface AppState {
    statistic: StatisticState;
}

export const appReducer = combineReducers({
    statistic: statisticReducer,
});

export function* rootSaga() {
    yield all([call(rootStatisticSaga)]);
}
