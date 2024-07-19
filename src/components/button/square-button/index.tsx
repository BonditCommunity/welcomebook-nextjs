'use client';

import React from 'react';
import Button from '@mui/material/Button';

import { ButtonProps } from '../@types';
import { FH3 } from '@/components/typography/FH3';
import { useTheme } from '@/hooks/common/use-theme';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';

export const SquareButton: React.FC<ButtonProps> = ({
    sx,
    color = 'primary',
    text,
    ...props
}) => {
    const { theme } = useTheme();

    return (
        <Button
            {...props}
            sx={{
                width: '100%',
                backgroundColor: theme.button[color].background,
                padding: '20px 0px',
                borderRadius: '20px',
                '&:hover': {
                    backgroundColor: colorWithAlpha(
                        theme.button[color].background,
                        0.9,
                    ),
                },
                textTransform: 'none',
                ...sx,
            }}>
            <FH3 color={theme.button[color].text} textAlign={'center'}>
                {text}
            </FH3>
        </Button>
    );
};
