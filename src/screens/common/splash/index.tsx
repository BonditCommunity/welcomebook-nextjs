'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { imgLoading } from '@/assets/images';
import { Center } from '@/components/grid/center';
import { sizing } from './@constants';
import { FBody3 } from '@/components/typography/FBody3';
import { useTheme } from '@/hooks/common/use-theme';

export function Splash() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Center
            style={{
                height: '100dvh',
            }}>
            <Center
                style={{
                    width: sizing.icon,
                    height: sizing.icon,
                }}>
                <img
                    src={imgLoading.src}
                    width={sizing.icon}
                    height={sizing.icon}
                    style={{
                        animation: 'loading 1s steps(8) infinite',
                    }}
                />
                <FBody3
                    color={theme.text.primary}
                    textAlign={'center'}
                    style={{
                        position: 'absolute',
                    }}>
                    {t('splashText')}
                </FBody3>
            </Center>
        </Center>
    );
}
