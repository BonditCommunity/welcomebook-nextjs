import { TOptions } from 'i18next';

export function parseTParams(params?: string): TOptions {
    return params ? JSON.parse(params) : undefined;
}
