'use client';

import { useState } from 'react';

import { MyPageRes } from '../vm/res/my-page';
import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';

export const useFindByFirebaseUid = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async (): Promise<Response<MyPageRes>> => {
        setLoading(true);
        const result = await tryAPI<MyPageRes>(() => {
            return fetchAPI(`${domain}`);
        });
        setLoading(false);
        return result;
    };

    return {
        loading,
        fetch,
    };
};
