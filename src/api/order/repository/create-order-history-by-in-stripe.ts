'use client';

import { useState } from 'react';
import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';
import { StripePaymentReq } from '../vm/req/stripe-payment';
import { StripePaymentRes } from '../vm/res/stripe-payment';

export const useCreateOrderHistoryByInStripe = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        params: StripePaymentReq,
        userInfoId: number,
    ): Promise<Response<StripePaymentRes>> => {
        setLoading(true);
        const result = await tryAPI<StripePaymentRes>(() => {
            return fetchAPI(`${domain}/fund/complete/${userInfoId}`, {
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
