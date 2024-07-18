'use client';

import { useFetch } from '@/hooks/common/use-fetch';
import { UserInfoReq } from '../vm/req/user-info';
import { Response } from '@/api/common/vm/res/response';
import { CommonUserInfoRes } from '../vm/res/common-user-info';
import { tryAPI } from '@/api/@helpers';
import { domain } from './@constants';

export const useUpdateUserInfo = () => {
    const { fetchAPI } = useFetch();

    const fetch = async (
        params: UserInfoReq,
    ): Promise<Response<CommonUserInfoRes>> => {
        return tryAPI<CommonUserInfoRes>(() => {
            return fetchAPI(`${domain}`, {
                method: 'PUT',
                body: JSON.stringify(params),
            });
        });
    };

    return {
        fetch,
    };
};
