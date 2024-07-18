'use client';

import { useState } from 'react';

import { Response } from '@/api/common/dto/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';
import { PreOrderPaymentReq, PreOrderRes } from '../dto/pre-order';

export const createPreFund = () => {
    const { fetchAPI } = useFetch();

    const [params, setParams] = useState<PreOrderPaymentReq>();

    const fetch = async ({
        paymentMethod,
        currency,
        currencySymbol,
        totalPrice,
    }: PreOrderPaymentReq): Promise<Response<PreOrderRes>> => {
        setParams({
            paymentMethod,
            currency,
            currencySymbol,
            totalPrice,
        });
        return tryAPI<PreOrderRes>(() => {
            return fetchAPI(`${domain}/fund/pre`, {
                method: 'POST',
                body: JSON.stringify({
                    paymentMethod,
                    currency,
                    currencySymbol,
                    totalPrice,
                }),
            });
        });
    };

    return {
        params,
        fetch,
    };
};
