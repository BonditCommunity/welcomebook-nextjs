import { CSSProperties } from 'react';

import { Asset } from '@/@types';

export interface Sticker {
    img: Asset;
    containerStyle?: CSSProperties;
    textStyle?: CSSProperties;
}
