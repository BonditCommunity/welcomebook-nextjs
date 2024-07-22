'use client';

import React, { useEffect, useState } from 'react';

import { stickers } from '../../@constants';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { color } from '@/theme/theme';
import { useFindAllLetter } from '@/api/letter/repository/find-all-letter';
import { LetterRes } from '@/api/letter/vm/res/letter';
import { FBody3 } from '@/components/typography/FBody3';
import { Center } from '@/components/grid/center';

export const Stickers: React.FC = () => {
    const { fetch } = useFindAllLetter();

    const [letters, setLetters] = useState<LetterRes[]>([]);

    useEffect(() => {
        const initialize = async () => {
            const { result } = await fetch({
                keyword: '',
                page: 0,
                size: stickers.length,
            });
            if (result) {
                setLetters(result.content);
            }
        };
        initialize();
    }, []);

    return letters.map((letter, index) => {
        const sticker = stickers[index];
        return (
            <Center
                key={index}
                style={{
                    backgroundImage: `url(${sticker.img.src})`,
                    backgroundSize: 'contain',
                    filter: `drop-shadow(0px 4px 4px ${colorWithAlpha(
                        color.black.default,
                        0.25,
                    )})`,
                    overflow: 'hidden',
                    ...sticker.containerStyle,
                }}>
                <FBody3
                    style={{
                        overflow: 'hidden',
                        ...sticker.textStyle,
                    }}>
                    {letter.content}
                </FBody3>
            </Center>
        );
    });
};
