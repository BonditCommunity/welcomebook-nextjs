'use client';

import { useState } from 'react';

import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';
import { PreOrderPaymentReq, PreOrderRes } from '../dto/pre-order';

export const createPreFund = () => {
    const { fetchAPI } = useFetch();
    const [loading, setLoading] = useState<boolean>(false);
    const fetch = async (
        params: PreOrderPaymentReq,
    ): Promise<Response<PreOrderRes>> => {
        setLoading(true);
        const result = await tryAPI<PreOrderRes>(() => {
            return fetchAPI(`${domain}/fund/pre`, {
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
