'use client';

import React from 'react';

import { IndicatorProps } from './@types';
import { useTheme } from '@/hooks/common/use-theme';
import { sizing } from '../../@constants';

export const Indicator: React.FC<IndicatorProps> = ({ style, selected }) => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                backgroundColor: selected
                    ? theme.icon.white
                    : theme.icon.caption,
                width: sizing.slide.indicator.size,
                height: sizing.slide.indicator.size,
                borderRadius: 9999,
                transition: 'background-color 0.3s',
                ...style,
            }}
        />
    );
};
