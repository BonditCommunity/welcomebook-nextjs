'use client';

import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

import { ChildrenProps } from '@/@types';

export const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <AppRouterCacheProvider
            options={{
                key: 'css',
            }}>
            <CssBaseline />
            {children}
        </AppRouterCacheProvider>
    );
};
