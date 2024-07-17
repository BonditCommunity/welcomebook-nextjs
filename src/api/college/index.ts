'use client';

import { useFetch } from '@/hooks/common/use-fetch';
import { apiVersion } from '../@constants';
import { SearchCollegeReq, SearchCollegeRes } from './dto/search-college';
import { Response } from '../common/dto/response';
import { tryAPI } from '../@helpers';

const domain = `api/${apiVersion}/college`;

export const collegeRepository = () => {
    const { fetchAPI } = useFetch();

    const searchCollege = async ({
        keyword,
        page,
        size,
    }: SearchCollegeReq): Promise<Response<SearchCollegeRes>> => {
        return tryAPI<SearchCollegeRes>(() => {
            return fetchAPI(
                `${domain}/all/search?keyword=${keyword}&page=${page}&size=${size}`,
            );
        });
    };

    return {
        searchCollege,
    };
};
