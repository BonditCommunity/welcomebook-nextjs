import { Error } from './error';

export interface Response<T> {
    result?: T;
    error?: Error;
}
