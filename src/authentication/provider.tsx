'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';

import { ChildrenProps } from '@/@types';
import { AuthContext } from './context';
import { firebase } from '@/firebase';
import { loginRequiredRoutes, routes } from '@/routes';

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);

    const guard = (user: User) => {
        if (loginRequiredRoutes.includes(pathname)) {
            if (user.isAnonymous) {
                router.replace(routes.home);
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        if (user) {
            guard(user);
        }
    }, [pathname, user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase, async user => {
            if (user) {
                setUser(user);
            } else {
                const { user } = await signInAnonymously(firebase);
                setUser(user);
            }
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
