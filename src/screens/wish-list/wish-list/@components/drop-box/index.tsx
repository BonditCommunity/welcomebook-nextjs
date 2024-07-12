'use client';

import React from 'react';

import { ComponentProps } from '@/@types';
import { Center } from '@/components/grid/center';
import { useTheme } from '@/hooks/common/use-theme';
import { Svg } from '@/components/image/svg';
import { iconHeart } from '@/assets/icons';
import { dropShadow } from '@/theme/shadow';
import { size } from '../../@constants';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';

export const DropBox: React.FC<ComponentProps> = ({ ...props }) => {
    const { theme } = useTheme();

    return (
        <Center
            sx={{
                cursor: 'pointer',
                width: size.dropBox.container,
                height: size.dropBox.container,
                borderRadius: 9999,
                backgroundColor: colorWithAlpha(theme.background.gray, 0.9),
                borderWidth: size.dropBox.border,
                borderColor: colorWithAlpha(theme.background.default, 0.7),
                borderStyle: 'solid',
                boxShadow: dropShadow,
            }}
            {...props}>
            <Svg
                src={iconHeart}
                color={theme.icon.white}
                width={size.dropBox.icon}
                height={size.dropBox.icon}
            />
        </Center>
    );
};
