'use client';

import React from 'react';
import Button from '@mui/material/Button';

import { SquareButtonProps } from './@types';
import { FH3 } from '@/components/typography/FH3';
import { useTheme } from '@/hooks/common/use-theme';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { dropShadow } from '@/theme/shadow';
import { FH4 } from '@/components/typography/FH4';

export const SquareButton: React.FC<SquareButtonProps> = ({
    sx,
    size = 'lg',
    color = 'default',
    text,
    disabled,
    shadow,
    ...props
}) => {
    const { theme } = useTheme();

    const Text = size === 'lg' ? FH3 : FH4;

    return (
        <Button
            disabled={disabled}
            {...props}
            sx={{
                width: '100%',
                backgroundColor:
                    theme.button[disabled ? 'disabled' : color].background,
                padding: size === 'lg' ? '20px 0px' : '15px 0px',
                borderRadius: '20px',
                '&:hover': {
                    backgroundColor: colorWithAlpha(
                        theme.button[disabled ? 'disabled' : color].background,
                        0.9,
                    ),
                },
                textTransform: 'none',
                ...(shadow && {
                    boxShadow: dropShadow,
                }),
                ...sx,
            }}>
            <Text
                color={theme.button[disabled ? 'disabled' : color].text}
                textAlign={'center'}>
                {text}
            </Text>
        </Button>
    );
};
