'use client';

import { useState } from 'react';
import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';
import { StripePaymentReq, StripePaymentRes } from '../dto/stripe-payment';

export const createOrderHistoryByInStripe = () => {
    const { fetchAPI } = useFetch();
    const [loading, setLoading] = useState<boolean>(false);
    const fetch = async (
        params: StripePaymentReq,
    ): Promise<Response<StripePaymentRes>> => {
        setLoading(true);
        const result = await tryAPI<StripePaymentRes>(() => {
            return fetchAPI(`${domain}/fund/complete`, {
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


// export const createOrderHistoryByInStripe = () => {
//     const { fetchAPI } = useFetch();

//     const [params, setParams] = useState<StripePaymentReq>();

//     const fetch = async ({
//         orderUid,
//         currencyCode,
//         currencySymbol,
//         totalPrice,
//         purchaseId,
//         transactionDate,
//     }: StripePaymentReq): Promise<Response<StripePaymentRes>> => {
//         setParams({
//             orderUid,
//             currencyCode,
//             currencySymbol,
//             totalPrice,
//             purchaseId,
//             transactionDate,
//         });
//         return tryAPI<StripePaymentRes>(() => {
//             return fetchAPI(`${domain}/fund/complete`, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     orderUid,
//                     currencyCode,
//                     currencySymbol,
//                     totalPrice,
//                     purchaseId,
//                     transactionDate,
//                 }),
//             });
//         });
//     };

//     return {
//         params,
//         fetch,
//     };
// };