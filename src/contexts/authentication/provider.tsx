'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';

import { ChildrenProps } from '@/@types';
import { AuthContext } from './context';
import { firebase } from '@/firebase';
import { routes } from '@/routes';

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
    const router = useRouter();

    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase, async user => {
            if (user) {
                if (!user.isAnonymous) {
                    router.replace(routes.wishlist);
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
            {children}
        </AuthContext.Provider>
    );
};
