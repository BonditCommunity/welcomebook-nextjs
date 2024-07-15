'use client';

import { useAuth } from '@/contexts/authentication/hook';

export function useFetch() {
    const { token } = useAuth();

    const fetchAPI = (route: string, init?: RequestInit) =>
        fetch(
            `${process.env.WELCOMEBOOK_SERVER_URL}${
                route.startsWith('/') ? route : `/${route}`
            }`,
            {
                ...init,
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && {
                        Authorization: `Bearer ${token}`,
                    }),
                    ...init?.headers,
                },
            },
        );

    return {
        fetchAPI,
    };
}
