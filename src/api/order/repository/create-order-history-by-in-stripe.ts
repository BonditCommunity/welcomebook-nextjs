'use client';

import { useState } from 'react';

import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';
import { PreOrderPaymentReq, PreOrderRes } from '../dto/pre-order';
import { PaymentIntentRes, PaymentReq } from '../dto/payment-intent';
import { StripePaymentReq, StripePaymentRes } from '../dto/stripe-payment';

export const createOrderHistoryByInStripe = () => {
    const { fetchAPI } = useFetch();

    const [params, setParams] = useState<StripePaymentReq>();

    const fetch = async ({
        orderUid,
        currencyCode,
        currencySymbol,
        totalPrice,
        purchaseId,
        transactionDate,
    }: StripePaymentReq): Promise<Response<StripePaymentRes>> => {
        setParams({
            orderUid,
            currencyCode,
            currencySymbol,
            totalPrice,
            purchaseId,
            transactionDate,
        });
        return tryAPI<StripePaymentRes>(() => {
            return fetchAPI(`${domain}/fund/complete`, {
                method: 'POST',
                body: JSON.stringify({
                    orderUid,
                    currencyCode,
                    currencySymbol,
                    totalPrice,
                    purchaseId,
                    transactionDate,
                }),
            });
        });
    };

    return {
        params,
        fetch,
    };
};
