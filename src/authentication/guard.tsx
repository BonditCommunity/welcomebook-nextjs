'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { ChildrenProps } from '@/@types';
import { useAuth } from './hook';
import { routes } from '@/routes';

export const LoginRequired: React.FC<ChildrenProps> = ({ children }) => {
    const router = useRouter();

    const { user } = useAuth();

    useEffect(() => {
        if (!user || user.isAnonymous) {
            router.replace(routes.home);
        }
    }, [user]);

    if (!user || user.isAnonymous) return null;
    return children;
};
