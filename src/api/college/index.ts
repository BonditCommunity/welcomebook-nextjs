'use client';

import { useFetch } from '@/hooks/common/use-fetch';
import { apiVersion } from '../@constants';
import { SearchCollegesReq, SearchCollegesRes } from './dto/search-colleges';
import { Response } from '../common/dto/response';
import { tryAPI } from '../@helpers';

const domain = `api/${apiVersion}/college`;

export const collegeRepository = () => {
    const { fetchAPI } = useFetch();

    const searchColleges = async ({
        keyword,
        page,
        size,
    }: SearchCollegesReq): Promise<Response<SearchCollegesRes>> => {
        return tryAPI<SearchCollegesRes>(() => {
            return fetchAPI(
                `${domain}/all/search?keyword=${keyword}&page=${page}&size=${size}`,
            );
        });
    };

    return {
        searchColleges,
    };
};
