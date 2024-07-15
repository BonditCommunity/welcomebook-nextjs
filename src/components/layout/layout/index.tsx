'use client';

import React from 'react';

import { ChildrenProps } from '@/@types';
import { spacing } from '@/theme/spacing';

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <main
            style={{
                width: '100%',
                minWidth: spacing.screen.minWidth,
                maxWidth: spacing.screen.maxWidth,
                margin: '0 auto',
            }}>
            {children}
        </main>
    );
};
