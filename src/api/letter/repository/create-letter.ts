'use client';

import { useState } from 'react';

import { CreateLetterReq } from '../vm/req/create-letter';
import { LetterRes } from '../vm/res/letter';
import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';

export const useCreateLetter = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (
        params: CreateLetterReq,
    ): Promise<Response<LetterRes>> => {
        setLoading(true);
        const result = await tryAPI<LetterRes>(() => {
            return fetchAPI(`${domain}`, {
                method: 'POST',
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
