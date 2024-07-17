'use client';

import { apiVersion } from '../@constants';
import { useFetch } from '@/hooks/common/use-fetch';
import { Response } from '../common/dto/response';
import { SignInReq, SignInRes } from './dto/sign-in';
import { tryAPI } from '../@helpers';

const domain = `api/${apiVersion}/auth`;

export const authenticationRepository = () => {
    const { fetchAPI } = useFetch();

    const signIn = async ({
        snsType,
        snsToken,
    }: SignInReq): Promise<Response<SignInRes>> => {
        return tryAPI(() => {
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
        signIn,
    };
};
