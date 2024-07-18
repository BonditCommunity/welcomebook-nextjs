'use client';

import React from 'react';

import { AuthContext } from './context';
import { ChildrenProps } from '@/@types';
import { Splash } from '@/screens/common/splash';

export const AuthConsumer: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <AuthContext.Consumer>
            {auth => (auth.loading ? <Splash /> : children)}
        </AuthContext.Consumer>
    );
};
