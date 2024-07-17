'use client';

import { useTranslation } from 'react-i18next';

import { useFetch } from '@/hooks/common/use-fetch';
import { apiVersion } from '../@constants';
import { SearchCollegeReq, SearchCollegeRes } from './dto/search-college';
import { Response } from '../common/dto/response';
import { errors } from '@/messages/error';

const domain = `api/${apiVersion}/college`;

export const collegeRepository = () => {
    const { t } = useTranslation();

    const { fetchAPI } = useFetch();

    const searchCollege = async ({
        keyword,
        page,
        size,
    }: SearchCollegeReq): Promise<Response<SearchCollegeRes>> => {
        try {
            const response = await fetchAPI(
                `${domain}/all/search?keyword=${keyword}&page=${page}&size=${size}`,
            );
            return {
                result: await response.json(),
            };
        } catch {
            return {
                error: {
                    text: t(errors.common),
                },
            };
        }
    };

    return {
        searchCollege,
    };
};
