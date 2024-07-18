'use client';

import { useAuth } from '@/authentication/hook';

export function useFetch() {
    const { user } = useAuth();

    const fetchAPI = async (route: string, init?: RequestInit) => {
        const token = user ? await user.getIdToken() : '';
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
