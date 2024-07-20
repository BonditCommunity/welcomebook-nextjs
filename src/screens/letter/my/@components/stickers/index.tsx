'use client';

import React from 'react';

import { stickers } from '../../@constants';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { color } from '@/theme/theme';

export const Stickers: React.FC = () => {
    return stickers.map((sticker, index) => {
        return (
            <img
                key={index}
                src={sticker.img.src}
                style={{
                    filter: `drop-shadow(0px 4px 4px ${colorWithAlpha(
                        color.black.default,
                        0.25,
                    )})`,
                    ...sticker.style,
                }}
            />
        );
    });
};
