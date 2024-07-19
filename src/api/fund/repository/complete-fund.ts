'use client';

import { useState } from 'react';

import { FundReq } from '../vm/req/fund';
import { FundRes } from '../vm/res/fund';
import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';

export const useCompleteFund = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (params: FundReq): Promise<Response<FundRes>> => {
        setLoading(true);
        const result = await tryAPI<FundRes>(() => {
            return fetchAPI(`${domain}/complete`, {
                method: 'POST',
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
