'use client';

import { useState } from 'react';

import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';
import { PreOrderPaymentReq, PreOrderRes } from '../dto/pre-order';
import { PaymentIntentRes, PaymentReq } from '../dto/payment-intent';

export const createStripePaymentIntent = () => {
    const { fetchAPI } = useFetch();
    const [loading, setLoading] = useState<boolean>(false);
    const fetch = async (
        params: PaymentReq,toUserInfoId: number
    ): Promise<Response<PaymentIntentRes>> => {
        setLoading(true);
        const result = await tryAPI<PaymentIntentRes>(() => {
            return fetchAPI(`${domain}/fund/stripe/${toUserInfoId}`, {
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
