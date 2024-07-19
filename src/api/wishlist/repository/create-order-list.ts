'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/common/use-fetch';
import { OrderListReq } from '../vm/req/create-order-list';
import { Response } from '@/api/common/vm/res/response';
import { CommonOrderListRes } from '../vm/res/common-order-list';
import { tryAPI } from '@/api/@helpers';
import { domain } from './@constants';

export const useCreateOrderList = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        params: OrderListReq,
    ): Promise<Response<CommonOrderListRes>> => {
        setLoading(true);
        const result = await tryAPI<CommonOrderListRes>(() => {
            return fetchAPI(`${domain}/order`, {
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
