'use client';

import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

import { FCProps } from '@/@types';

export const ThemeProvider: React.FC<Pick<FCProps, 'children'>> = ({
    children,
}) => {
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
