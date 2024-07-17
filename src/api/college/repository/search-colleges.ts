'use client';

import { useState } from 'react';

import { SearchCollegesReq, SearchCollegesRes } from '../dto/search-colleges';
import { Response } from '@/api/common/dto/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';

export const searchColleges = () => {
    const { fetchAPI } = useFetch();

    const [params, setParams] = useState<SearchCollegesReq>();

    const fetch = async ({
        keyword,
        page,
        size,
    }: SearchCollegesReq): Promise<Response<SearchCollegesRes>> => {
        setParams({
            keyword,
            page,
            size,
        });
        return tryAPI<SearchCollegesRes>(() => {
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
