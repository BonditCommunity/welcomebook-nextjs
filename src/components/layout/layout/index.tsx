'use client';

import React from 'react';

import { ChildrenProps } from '@/@types';

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <main
            style={{
                minWidth: 320,
                maxWidth: 450,
                margin: '0 auto',
            }}>
            {children}
        </main>
    );
};
