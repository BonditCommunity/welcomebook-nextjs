'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/common/use-fetch';
import { ImageUploadReq } from '../vm/req/image-upload';
import { Response } from '@/api/common/vm/res/response';
import { ImageUploadRes } from '../vm/res/image-upload';
import { tryAPI } from '@/api/@helpers';
import { domain } from './@constants';

export const useImageUpload = () => {
    const { fetchAPI } = useFetch();

    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async ({
        file,
    }: ImageUploadReq): Promise<Response<ImageUploadRes>> => {
        setLoading(true);
        const body = new FormData();
        body.append('image', file, file.name);
        const result = await tryAPI<ImageUploadRes>(() => {
            return fetchAPI(
                `${domain}/image/upload/single`,
                {
                    method: 'POST',
                    body,
                },
                true,
            );
        });
        setLoading(false);
        return result;
    };

    return {
        loading,
        fetch,
    };
};
