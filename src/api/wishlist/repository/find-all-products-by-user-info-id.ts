'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/common/use-fetch';
import { Response } from '@/api/common/vm/res/response';
import { WishListRes } from '../vm/res/wish-list';
import { tryAPI } from '@/api/@helpers';
import { domain } from './@constants';

export const useFindAllProductsByUserInfoId = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        userInfoId: number,
    ): Promise<Response<WishListRes>> => {
        setLoading(true);
        const result = await tryAPI<WishListRes>(() => {
            return fetchAPI(`${domain}/${userInfoId}`);
        });
        setLoading(false);
        return result;
    };

    return {
        loading,
        fetch,
    };
};
