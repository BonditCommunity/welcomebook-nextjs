'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const FBody2 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.FBody2,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
FBody2.displayName = 'FBody2';
