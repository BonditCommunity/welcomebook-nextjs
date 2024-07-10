'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ChildrenProps } from '@/@types';
import { localeState } from '@/recoil/atoms/common/locale';
import { dark, light } from './theme';
import { MuiTypography } from './@components/typography';
import { MuiButton } from './@components/button';

export const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
    const locale = useRecoilValue(localeState);

    const theme = extendTheme({
        components: {
            MuiTypography,
            MuiButton,
            ...locale.system.components,
        },
        spacing: (value: number) => `${value}px`,
        colorSchemes: {
            light: {
                palette: light,
            },
            dark: {
                palette: dark,
            },
        },
    });

    return (
        <AppRouterCacheProvider
            options={{
                key: 'css',
            }}>
            <CssVarsProvider theme={theme} defaultMode={'system'}>
                <CssBaseline />
                {children}
            </CssVarsProvider>
        </AppRouterCacheProvider>
    );
};
