'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

import { FCProps } from '@/@types';
import { ThemeProvider } from '@/theme/provider';
import { LocalizationProvider } from '@/i18n/provider';

export const Layout: React.FC<Pick<FCProps, 'children'>> = ({ children }) => {
    return (
        <RecoilRoot>
            <ThemeProvider>
                <LocalizationProvider>
                    <main>{children}</main>
                </LocalizationProvider>
            </ThemeProvider>
        </RecoilRoot>
    );
};
