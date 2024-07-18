import { Error } from '@/api/common/vm/res/error';
import { i18n } from '@/i18n';
import { parseTParams } from './parse-t-params';

export function parseError(error: Error): string {
    return i18n.t(error.text, parseTParams(error.params));
}
