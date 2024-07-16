'use client';

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';

import { ChildrenProps } from '@/@types';
import { AuthContext } from './context';
import { firebase } from '@/firebase';

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase, async user => {
            if (user) {
                console.log(user);
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
