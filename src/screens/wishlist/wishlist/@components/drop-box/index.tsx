'use client';

import React from 'react';

import { ComponentProps } from '@/@types';
import { Center } from '@/components/grid/center';
import { useTheme } from '@/hooks/common/use-theme';
import { Svg } from '@/components/image/svg';
import { iconHeart } from '@/assets/icons';
import { dropShadow } from '@/theme/shadow';
import { sizing } from '../../@constants';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';

export const DropBox: React.FC<ComponentProps> = ({ ...props }) => {
    const { theme } = useTheme();

    return (
        <Center
            sx={{
                cursor: 'pointer',
                width: sizing.dropBox.container,
                height: sizing.dropBox.container,
                borderRadius: 9999,
                backgroundColor: colorWithAlpha(theme.background.black, 0.8),
                borderWidth: sizing.dropBox.border,
                borderColor: theme.border.default,
                borderStyle: 'solid',
                boxShadow: dropShadow,
            }}
            {...props}>
            <Svg
                src={iconHeart}
                color={theme.icon.white}
                width={sizing.dropBox.icon}
                height={sizing.dropBox.icon}
            />
        </Center>
    );
};
