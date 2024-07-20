import { CSSProperties } from 'react';

import { Asset } from '@/@types';

export interface Sticker {
    img: Asset;
    style?: CSSProperties;
}
