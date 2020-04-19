import { AxiosResponse } from 'axios';

export interface RequestOptions {
    apiVersion: 'rest' | 'graphql';
}

export type RequestMethod = (
    config: RequestOptions,
) => (url: string, body?: RequestBody) => Promise<AxiosResponse['data']>;

export interface ApiWrapper {
    get: RequestMethod;
    post: RequestMethod;
    patch: RequestMethod;
    put: RequestMethod;
    delete: RequestMethod;
}

export interface JsonBody {
    // tslint:disable-next-line no-any
    [key: string]: any;
}

export type RequestBody = JsonBody | FormData;
export type HTTPMethod = 'get' | 'post' | 'delete' | 'put' | 'patch';

export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}
