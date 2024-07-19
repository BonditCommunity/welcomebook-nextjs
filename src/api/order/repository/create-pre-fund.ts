'use client';

import { useState } from 'react';

import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';
import { PreOrderPaymentReq } from '../vm/req/pre-order-payment';
import { PreOrderRes } from '../vm/res/pre-order';

export const useCreatePreFund = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        params: PreOrderPaymentReq,
        userInfoId: number,
    ): Promise<Response<PreOrderRes>> => {
        setLoading(true);
        const result = await tryAPI<PreOrderRes>(() => {
            return fetchAPI(`${domain}/fund/pre/${userInfoId}`, {
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
