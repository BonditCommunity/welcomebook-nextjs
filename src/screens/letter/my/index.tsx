'use client';

import React from 'react';

import { Screen } from '@/components/layout/screen';
import { Stickers } from './@components/stickers';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { useTheme } from '@/hooks/common/use-theme';

export function MyLetter() {
    const { theme } = useTheme();

    return (
        <Screen
            sx={{
                position: 'relative',
                overflow: 'hidden',
            }}>
            <Stickers />
            <div
                style={{
                    backgroundColor: colorWithAlpha(
                        theme.background.default,
                        0.06,
                    ),
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 3,
                    backdropFilter: 'blur(10px)',
                }}></div>
        </Screen>
    );
}
