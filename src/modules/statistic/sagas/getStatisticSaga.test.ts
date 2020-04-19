import MockAdapter from 'axios-mock-adapter';
import { mockNetworkError, setupMockAxios, setupMockStore } from 'helpers';
import { MockStoreEnhanced } from 'redux-mock-store';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootSaga } from '../..';
import { getStatistic, getStatisticData, getStatisticError } from '../actions';
import { fakePayload } from '../constants';

describe('Get CurrentUser saga', () => {
    let store: MockStoreEnhanced;
    let sagaMiddleware: SagaMiddleware<{}>;
    let mockAxios: MockAdapter;

    beforeEach(() => {
        mockAxios = setupMockAxios();
        sagaMiddleware = createSagaMiddleware();
        store = setupMockStore(sagaMiddleware)();
        sagaMiddleware.run(rootSaga);
    });

    afterEach(() => {
        mockAxios.reset();
    });

    const SUCCESS_RES_CODE = 200;

    const mockGetCurrentUserData = () => {
        mockAxios.onGet('/countries.json').reply(SUCCESS_RES_CODE, fakePayload);
    };

    const expectedActionsFetch = [getStatistic(), getStatisticData(fakePayload)];

    const expectedActionsNetworkError = [getStatistic(), getStatisticError()];

    it('should get covid statistic in success flow', async () => {
        mockGetCurrentUserData();
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                if (actions.length === expectedActionsFetch.length) {
                    expect(actions).toEqual(expectedActionsFetch);
                    resolve();
                }
            });
        });

        store.dispatch(getStatistic());

        return promise;
    });

    it('should trigger network error', async () => {
        mockNetworkError(mockAxios);
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                if (actions.length === expectedActionsNetworkError.length) {
                    expect(actions).toEqual(expectedActionsNetworkError);
                    resolve();
                }
            });
        });
        store.dispatch(getStatistic());

        return promise;
    });
});
