import { enUS as enUSCore } from '@mui/material/locale';
import { enUS as enUSDate } from '@mui/x-date-pickers/locales';

import { Locale } from '@/@types';

export const supportedLocale: Locale[] = [
    {
        value: 'en',
        adapter: 'en',
        system: {
            components: {
                ...enUSCore.components,
                ...enUSDate.components,
            },
        },
    },
];

export const DEFAULT_LOCALE: Locale = supportedLocale[0];
