'use client';

import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { FCProps } from '@/@types';
import { i18n } from '@/i18n';

export const Layout: React.FC<Pick<FCProps<HTMLDivElement>, 'children'>> = ({
    children,
}) => {
    return (
        <I18nextProvider i18n={i18n}>
            <main>{children}</main>
        </I18nextProvider>
    );
};
