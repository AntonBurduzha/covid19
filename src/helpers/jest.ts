import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Middleware } from 'redux';
import configureMockStore from 'redux-mock-store';

export const setupMockStore = (appMiddleware: Middleware) => configureMockStore([appMiddleware]);

export const setupMockAxios = () => {
    return new MockAdapter(Axios);
};

// tslint:disable-next-line:no-any
export const mockNetworkError = (mockAxios: any) => {
    mockAxios.onAny().networkError();
};
