'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/common/use-fetch';
import { UserInfoReq } from '../vm/req/user-info';
import { Response } from '@/api/common/vm/res/response';
import { CommonUserInfoRes } from '../vm/res/common-user-info';
import { tryAPI } from '@/api/@helpers';
import { domain } from './@constants';

export const useUpdateUserInfo = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        params: UserInfoReq,
    ): Promise<Response<CommonUserInfoRes>> => {
        setLoading(true);
        const result = await tryAPI<CommonUserInfoRes>(() => {
            return fetchAPI(`${domain}`, {
                method: 'PUT',
                body: JSON.stringify(params),
            });
        });
        setLoading(false);
        return result;
    };

    return {
        loading,
        fetch,
    };
};
