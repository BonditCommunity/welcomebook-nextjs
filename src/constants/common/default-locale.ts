import merge from 'lodash/merge';
import { enUS as enUSAdapter } from 'date-fns/locale';
import { enUS as enUSCore } from '@mui/material/locale';
import { enUS as enUSDate } from '@mui/x-date-pickers/locales';

import { Locale } from '@/@types';

export const DEFAULT_LOCALE: Locale = {
    value: 'en',
    system: merge(enUSDate, enUSCore),
    adapter: enUSAdapter,
};
