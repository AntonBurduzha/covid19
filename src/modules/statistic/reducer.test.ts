import * as actions from './actions';
import { fakePayload } from './constants';
import { initialStatisticState, statisticReducer } from './reducer';

describe('Statistic reducer test', () => {
    it('should handle GET_STATISTIC_DATA', () => {
        const expectedState = {
            ...initialStatisticState,
            loading: false,
            statistic: fakePayload,
        };

        expect(statisticReducer(initialStatisticState, actions.getStatisticData(fakePayload))).toEqual(expectedState);
    });

    it('should handle GET_STATISTIC_ERROR', () => {
        const expectedState = {
            ...initialStatisticState,
            loading: false,
            statistic: [],
        };

        expect(statisticReducer(initialStatisticState, actions.getStatisticError())).toEqual(expectedState);
    });
});
