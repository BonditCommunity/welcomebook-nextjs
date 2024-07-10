'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { FCProps } from '@/@types';
import { localeState } from '@/recoil/atoms/common/locale';
import { i18n } from './index';

export function LocalizationProvider({ children }: Pick<FCProps, 'children'>) {
    const locale = useRecoilValue(localeState);

    useEffect(() => {
        i18n.changeLanguage(locale.value);
    }, [locale]);

    return (
        <I18nextProvider i18n={i18n}>
            <MuiLocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={locale.adapter}>
                {children}
            </MuiLocalizationProvider>
        </I18nextProvider>
    );
}
