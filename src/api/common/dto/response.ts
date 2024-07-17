import { Error } from '../entity/error';

export interface Response<T> {
    result?: T;
    error?: Error;
}
