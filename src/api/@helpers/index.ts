import { i18n } from '@/i18n';
import { Response } from '../common/dto/response';
import { errors } from '@/messages/error';

export async function tryAPI<T>(
    callback: () => Promise<globalThis.Response>,
): Promise<Response<T>> {
    try {
        const response = await callback();
        return {
            result: await response.json(),
        };
    } catch {
        return {
            error: {
                text: i18n.t(errors.common),
            },
        };
    }
}
