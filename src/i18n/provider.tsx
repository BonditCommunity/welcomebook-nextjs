'use client';

import 'dayjs/locale/en';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { I18nProviderProps } from './@types';
import { localeState } from '@/recoil/atoms/common/locale';
import { i18n } from './index';
import { SUPPORTED_LOCALE } from '@/constants/common/locale';

export const I18nProvider: React.FC<I18nProviderProps> = ({
    children,
    lang,
}) => {
    const [locale, setLocale] = useRecoilState(localeState);

    useEffect(() => {
        if (lang !== locale.value) {
            const index = SUPPORTED_LOCALE.findIndex(
                item => item.value === lang,
            );
            if (SUPPORTED_LOCALE[index]) {
                setLocale(SUPPORTED_LOCALE[index]);
            }
        }
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={locale.adapter}>
                {children}
            </LocalizationProvider>
        </I18nextProvider>
    );
};
