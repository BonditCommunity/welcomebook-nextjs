'use client';

import React from 'react';
import Button from '@mui/material/Button';

import { RoundButtonProps } from './@types';
import { IBody1 } from '@/components/typography/IBody1';
import { FH3 } from '@/components/typography/FH3';
import { Row } from '@/components/grid/row';
import { useTheme } from '@/hooks/common/use-theme';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';

export const RoundButton: React.FC<RoundButtonProps> = ({
    sx,
    size = 'lg',
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
                backgroundColor: theme.button.rounded.background,
                padding: size === 'lg' ? '20px 0px' : '10px 15px',
                borderRadius: 9999,
                '&:hover': {
                    backgroundColor: colorWithAlpha(
                        theme.button.rounded.background,
                        0.9,
                    ),
                },
                ...sx,
            }}>
            <Row alignItems={'center'}>
                {renderPrefix?.()}
                <Text color={theme.button.rounded.text} textAlign={'center'}>
                    {text}
                </Text>
            </Row>
        </Button>
    );
};
