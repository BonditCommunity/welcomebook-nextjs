'use client';

import { useAuth } from '@/contexts/authentication/hook';

export function useFetch() {
    const { token } = useAuth();

    const fetchAPI = async (route: string, init?: RequestInit) => {
        return fetch(
            `${process.env.NEXT_PUBLIC_API_URL}${
                route.startsWith('/') ? route.slice(1) : route
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
    };

    return {
        fetchAPI,
    };
}
