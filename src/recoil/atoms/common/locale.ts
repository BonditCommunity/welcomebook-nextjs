import dayjs from 'dayjs';

import { Locale } from '@/@types';
import { DEFAULT_LOCALE } from '@/constants/common/locale';
import { persistentAtom } from '../@helper';
import { i18n } from '@/i18n';

export const localeState = persistentAtom<Locale>({
    key: 'localeState',
    defaultValue: DEFAULT_LOCALE,
    onChange: locale => {
        dayjs.locale(locale.adapter);
        i18n.changeLanguage(locale.value);
    },
});
