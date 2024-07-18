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

    const [params, setParams] = useState<PaymentReq>();

    const fetch = async ({
        orderUid,
        amount,
        currency,
        putSourceId,
    }: PaymentReq, toUserInfoId: number): Promise<Response<PaymentIntentRes>> => {
        setParams({
            orderUid,
            amount,
            currency,
            putSourceId,
        });
        return tryAPI<PaymentIntentRes>(() => {
            return fetchAPI(`${domain}/fund/stripe/${toUserInfoId}`, {
                method: 'POST',
                body: JSON.stringify({
                    orderUid,
                    amount,
                    currency,
                    putSourceId,
                }),
            });
        });
    };

    return {
        params,
        fetch,
    };
};
