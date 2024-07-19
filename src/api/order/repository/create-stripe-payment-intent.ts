'use client';

import { useState } from 'react';

import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';
import { PaymentReq } from '../vm/req/payment';
import { PaymentIntentRes } from '../vm/res/payment-intent';

export const useCreateStripePaymentIntent = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        params: PaymentReq,
        userInfoId: number,
    ): Promise<Response<PaymentIntentRes>> => {
        setLoading(true);
        const result = await tryAPI<PaymentIntentRes>(() => {
            return fetchAPI(`${domain}/fund/stripe/${userInfoId}`, {
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
