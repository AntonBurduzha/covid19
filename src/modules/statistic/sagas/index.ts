// tslint:disable-next-line
import { takeLatest } from 'redux-saga/effects';
import { GET_STATISTIC_FETCH } from '../constants';
import { getStatisticSaga } from './getStatisticSaga';

export function* rootStatisticSaga() {
    yield takeLatest(GET_STATISTIC_FETCH, getStatisticSaga);
}
