import merge from 'lodash/merge';
import { enUS as enUSCore } from '@mui/material/locale';
import { enUS as enUSDate } from '@mui/x-date-pickers/locales';

import { Locale } from '@/@types';

export const SUPPORTED_LOCALE: Locale[] = [
    {
        value: 'en',
        adapter: 'en',
        system: merge(enUSDate, enUSCore),
    },
];

export const DEFAULT_LOCALE: Locale = SUPPORTED_LOCALE[0];
