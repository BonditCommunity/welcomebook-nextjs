'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/common/use-fetch';
import { UpdateWishListReq } from '../vm/req/update-wish-list';
import { Response } from '@/api/common/vm/res/response';
import { UpdateWishListRes } from '../vm/res/update-wish-list';
import { tryAPI } from '@/api/@helpers';
import { domain } from './@constants';

export const useUpdateWishList = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        params: UpdateWishListReq,
    ): Promise<Response<UpdateWishListRes>> => {
        setLoading(true);
        const result = await tryAPI<UpdateWishListRes>(() => {
            return fetchAPI(`${domain}`, {
                method: 'PUT',
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
