'use client';

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';

import { ChildrenProps } from '@/@types';
import { AuthContext } from './context';
import { firebase } from '@/firebase';

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [token, setToken] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase, async user => {
            if (user) {
                setToken(await user.getIdToken());
            } else {
                const credentail = await signInAnonymously(firebase);
                setToken(await credentail.user.getIdToken());
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ token, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
