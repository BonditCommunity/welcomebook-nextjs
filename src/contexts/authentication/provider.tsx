'use client';

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

import { ChildrenProps } from '@/@types';
import { AuthContext } from './context';
import { firebase } from '@/firebase';

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [token, setToken] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase, async user => {
            setUser(user ?? undefined);
            if (user) {
                setToken(await user.getIdToken());
            } else {
                setToken(undefined);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
