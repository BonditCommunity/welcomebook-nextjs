'use client';

import { useState } from 'react';

import { FundInMyPageRes } from '../vm/res/fund-in-my-page';
import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';

export const useFindAllFundsByUserInfoId = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        userInfoId: number,
    ): Promise<Response<FundInMyPageRes>> => {
        setLoading(true);
        const result = await tryAPI<FundInMyPageRes>(() => {
            return fetchAPI(`${domain}/all/${userInfoId}`);
        });
        setLoading(false);
        return result;
    };

    return {
        loading,
        fetch,
    };
};
