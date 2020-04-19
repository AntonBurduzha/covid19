import { API, RequestOptions } from 'api';
// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { getStatisticData, getStatisticError } from '..';

const requestOptions: RequestOptions = {
    apiVersion: 'rest',
};

export function* getStatisticSaga() {
    try {
        const { data } = yield call(API.get(requestOptions), '/countries.json');

        yield put(getStatisticData(data));
    } catch (error) {
        yield put(getStatisticError());
    }
}
