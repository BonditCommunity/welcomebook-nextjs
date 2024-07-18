'use client';

import { useState } from 'react';

import { SearchReq } from '@/api/common/vm/req/search';
import { Page } from '@/api/common/vm/res/page';
import { ProductRes } from '../vm/res/product';
import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';

export const useSearchProducts = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);
    const [params, setParams] = useState<SearchReq>();

    const fetch = async ({
        keyword,
        page,
        size,
    }: SearchReq): Promise<Response<Page<ProductRes>>> => {
        setLoading(true);
        setParams({
            keyword,
            page,
            size,
        });
        const result = await tryAPI<Page<ProductRes>>(() => {
            return fetchAPI(
                `${domain}/all/search?keyword=${keyword}&page=${page}&size=${size}`,
            );
        });
        setLoading(false);
        return result;
    };

    return {
        loading,
        params,
        fetch,
    };
};
