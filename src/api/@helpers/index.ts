import { i18n } from '@/i18n';
import { Response } from '../common/vm/res/response';
import { errors } from '@/messages/error';

export async function tryAPI<T>(
    callback: () => Promise<globalThis.Response>,
): Promise<Response<T>> {
    try {
        const response = await callback();
        if (response.status === 200) {
            return {
                result: await response.json(),
            };
        }
        console.log(await response.json());
        return {
            error: {
                text: i18n.t(errors.common),
            },
        };
    } catch {
        return {
            error: {
                text: i18n.t(errors.common),
            },
        };
    }
}
