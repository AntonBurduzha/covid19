import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';
import { Request, RequestOptions } from './types';

const getAPI = () => ({
    rest: 'https://api.whereiscovid.info',
    graphql: '',
});

const buildRequest = (request: Request, configData: RequestOptions) => {
    const { body, method, url } = request;
    const { apiVersion } = configData;
    const api = getAPI();

    const contentType = body instanceof FormData ? 'multipart/form-data' : 'application/json';

    const headers = {
        'content-type': contentType,
    };

    const apiUrl = api[apiVersion];

    const requestConfig: AxiosRequestConfig = {
        baseURL: apiUrl,
        data: body,
        headers,
        method,
        url,
    };

    return requestConfig;
};

export const defaultResponse: Partial<AxiosError['response']> = {
    status: 500,
    data: {
        error: 'Server error',
    },
};

export const formatError = (responseError: AxiosError) => {
    const response = responseError.response || defaultResponse;
    const errors = response.data && (response.data.errors || [response.data.error]);

    return {
        code: response.status,
        message: errors,
    };
};

export const makeRequest = async (request: Request, configData: RequestOptions) => {
    const requestConfig = buildRequest(request, configData);

    return new Promise((resolve, reject) => {
        const axiosRequest: AxiosPromise = axios(requestConfig);
        axiosRequest.then(resolve).catch((error: AxiosError) => {
            reject(formatError(error));
        });
    });
};
