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
import { supportedLocale } from '@/constants/common/locale';

export const I18nProvider: React.FC<I18nProviderProps> = ({
    children,
    lang,
}) => {
    const [locale, setLocale] = useRecoilState(localeState);

    useEffect(() => {
        if (lang !== locale.value) {
            const index = supportedLocale.findIndex(
                item => item.value === lang,
            );
            if (supportedLocale[index]) {
                setLocale(supportedLocale[index]);
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
