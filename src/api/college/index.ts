'use client';

import { useFetch } from '@/hooks/common/use-fetch';
import { apiVersion } from '../@constants';
import { SearchCollegeReq, SearchCollegeRes } from './dto/search-college';

const domain = `api/${apiVersion}/college`;

export const collegeRepository = () => {
    const { fetchAPI } = useFetch();

    const searchCollege = async ({
        keyword,
        page,
        size,
    }: SearchCollegeReq): Promise<SearchCollegeRes> => {
        const response = await fetchAPI(
            `${domain}/all/search?keyword=${keyword}&page=${page}&size=${size}`,
        );
        return response.json();
    };

    return {
        searchCollege,
    };
};
