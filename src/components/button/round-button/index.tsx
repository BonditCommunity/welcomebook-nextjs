'use client';

import React from 'react';
import Button from '@mui/material/Button';

import { RoundButtonProps } from './@types';
import { IBody1 } from '@/components/typography/IBody1';
import { FH3 } from '@/components/typography/FH3';
import { Row } from '@/components/grid/row';
import { useTheme } from '@/hooks/common/use-theme';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { dropShadow } from '@/theme/shadow';

export const RoundButton: React.FC<RoundButtonProps> = ({
    sx,
    size = 'lg',
    color = 'rounded',
    text,
    renderPrefix,
    ...props
}) => {
    const { theme } = useTheme();

    const Text = size === 'lg' ? FH3 : IBody1;

    return (
        <Button
            {...props}
            sx={{
                backgroundColor: theme.button[color].background,
                padding: size === 'lg' ? '20px 0px' : '10px 15px',
                borderRadius: 9999,
                boxShadow: dropShadow,
                '&:hover': {
                    backgroundColor: colorWithAlpha(
                        theme.button[color].background,
                        0.9,
                    ),
                },
                ...sx,
            }}>
            <Row alignItems={'center'}>
                {renderPrefix?.()}
                <Text color={theme.button[color].text} textAlign={'center'}>
                    {text}
                </Text>
            </Row>
        </Button>
    );
};
