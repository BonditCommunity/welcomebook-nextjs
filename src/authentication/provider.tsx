'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';

import { ChildrenProps } from '@/@types';
import { AuthContext } from './context';
import { firebase } from '@/firebase';
import { routes } from '@/routes';
import { loginRequiredPath } from './@constants';

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [user, setUser] = useState<User>();
    const [renderable, setRenderable] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const guard = () => {
            if (!user) return;
            if (loginRequiredPath.includes(pathname)) {
                if (user.isAnonymous) {
                    router.replace(routes.home);
                    return;
                }
            } else if (pathname === routes.home) {
                if (!user.isAnonymous) {
                    router.replace(routes.wishlist.root);
                }
            }
            setRenderable(true);
        };
        guard();
    }, [pathname, user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase, async user => {
            if (user) {
                setUser(user);
            } else {
                const credential = await signInAnonymously(firebase);
                setUser(credential.user);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {renderable && children}
        </AuthContext.Provider>
    );
};
