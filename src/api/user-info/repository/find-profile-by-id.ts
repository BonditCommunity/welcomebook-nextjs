'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/common/use-fetch';
import { FindProfileByIdReq } from '../vm/req/find-profile-by-id';
import { Response } from '@/api/common/vm/res/response';
import { UserInfoRes } from '../vm/res/user-info';
import { tryAPI } from '@/api/@helpers';
import { domain } from './@constants';

export const useFindProfileById = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async ({
        id,
    }: FindProfileByIdReq): Promise<Response<UserInfoRes>> => {
        setLoading(true);
        const result = await tryAPI<UserInfoRes>(() => {
            return fetchAPI(`${domain}/${id}`);
        });
        setLoading(false);
        return result;
    };

    return {
        loading,
        fetch,
    };
};
