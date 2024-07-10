import { atom } from 'recoil';

import { Locale } from '@/@types';
import { DEFAULT_LOCALE } from '@/constants/common/default-locale';

export const localeState = atom<Locale>({
    key: 'localeState',
    default: DEFAULT_LOCALE,
});
