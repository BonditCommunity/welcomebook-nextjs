'use client';

import { useFetch } from '@/hooks/common/use-fetch';
import { apiVersion } from '../@constants';
import { SearchProductsReq, SearchProductsRes } from './dto/search-products';
import { Response } from '../common/dto/response';
import { tryAPI } from '../@helpers';

const domain = `api/${apiVersion}/product`;

export const productRepository = () => {
    const { fetchAPI } = useFetch();

    const searchProducts = async ({
        keyword,
        page,
        size,
    }: SearchProductsReq): Promise<Response<SearchProductsRes>> => {
        return tryAPI<SearchProductsRes>(() => {
            return fetchAPI(
                `${domain}/all/search?keyword=${keyword}&page=${page}&size=${size}`,
            );
        });
    };

    return {
        searchProducts,
    };
};
