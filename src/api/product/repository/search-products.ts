'use client';

import { useState } from 'react';

import { SearchProductsReq, SearchProductsRes } from '../dto/search-products';
import { Response } from '@/api/common/dto/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';

export const searchProducts = () => {
    const { fetchAPI } = useFetch();

    const [params, setParams] = useState<SearchProductsReq>();

    const fetch = async ({
        keyword,
        page,
        size,
    }: SearchProductsReq): Promise<Response<SearchProductsRes>> => {
        setParams({
            keyword,
            page,
            size,
        });
        return tryAPI<SearchProductsRes>(() => {
            return fetchAPI(
                `${domain}/all/search?keyword=${keyword}&page=${page}&size=${size}`,
            );
        });
    };

    return {
        params,
        fetch,
    };
};
