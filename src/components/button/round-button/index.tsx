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
import { FH2 } from '@/components/typography/FH2';

export const RoundButton: React.FC<RoundButtonProps> = ({
    sx,
    size = 'lg',
    color = 'primary',
    text,
    disabled,
    renderPrefix,
    ...props
}) => {
    const { theme } = useTheme();

    const Text = size === 'xl' ? FH2 : size === 'lg' ? FH3 : IBody1;

    return (
        <Button
            disabled={disabled}
            {...props}
            sx={{
                textTransform: 'none',
                backgroundColor:
                    theme.button[disabled ? 'disabled' : color].background,
                borderRadius: 9999,
                boxShadow: dropShadow,
                '&:hover': {
                    backgroundColor: colorWithAlpha(
                        theme.button[disabled ? 'disabled' : color].background,
                        0.9,
                    ),
                },
                ...(size !== 'xl' && {
                    padding: size === 'lg' ? '20px 0px' : '10px 15px',
                }),
                ...(size === 'xl' && {
                    height: 100,
                }),
                ...sx,
            }}>
            <Row alignItems={'center'}>
                {renderPrefix?.()}
                <Text
                    color={theme.button[disabled ? 'disabled' : color].text}
                    textAlign={'center'}>
                    {text}
                </Text>
            </Row>
        </Button>
    );
};
