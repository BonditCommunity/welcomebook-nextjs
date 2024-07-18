'use client';

import { useState } from 'react';

import { SignInReq } from '../vm/req/sign-in';
import { SignInRes } from '../vm/res/sign-in';
import { Response } from '@/api/common/vm/res/response';
import { tryAPI } from '@/api/@helpers';
import { useFetch } from '@/hooks/common/use-fetch';
import { domain } from './@constants';

export const useSignIn = () => {
    const { fetchAPI } = useFetch();

    const [params, setParams] = useState<SignInReq>();

    const fetch = async ({
        snsType,
        snsToken,
    }: SignInReq): Promise<Response<SignInRes>> => {
        setParams({
            snsType,
            snsToken,
        });
        return tryAPI<SignInRes>(() => {
            return fetchAPI(`${domain}/sign-in/custom`, {
                method: 'POST',
                body: JSON.stringify({
                    snsToken,
                    snsType,
                }),
            });
        });
    };

    return {
        params,
        fetch,
    };
};
