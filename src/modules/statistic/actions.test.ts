import * as actions from './actions';
import { fakePayload } from './constants';

describe('Statistic actions', () => {
    it('should check getStatistic action creator', () => {
        const expectedAction = { type: 'GET_STATISTIC_FETCH' };
        expect(actions.getStatistic()).toEqual(expectedAction);
    });

    it('should check getStatisticData action creator', () => {
        const expectedAction = { type: 'GET_STATISTIC_DATA', payload: fakePayload };
        expect(actions.getStatisticData(fakePayload)).toEqual(expectedAction);
    });

    it('should check getStatisticError action creator', () => {
        const expectedAction = { type: 'GET_STATISTIC_ERROR' };
        expect(actions.getStatisticError()).toEqual(expectedAction);
    });
});
