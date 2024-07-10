'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

import translationsEn from './locales/en.json';
import { DEFAULT_LOCALE } from '@/constants/common/locale';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .use(resourcesToBackend((lang: string) => import(`./locales/${lang}.json`)))
    .init({
        resources: {
            en: { translations: translationsEn },
        },
        lng: DEFAULT_LOCALE.value,
        fallbackLng: DEFAULT_LOCALE.value,
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            caches: ['cookie'],
        },
    });

export { i18n };
