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
            if (loginRequiredPath.includes(pathname)) {
                if (!user || user.isAnonymous) {
                    router.replace(routes.home);
                    return;
                }
            }
            setRenderable(true);
        };
        guard();
    }, [pathname, user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase, async user => {
            if (user) {
                if (!user.isAnonymous) {
                    router.replace(routes.wishlist.root);
                }
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
