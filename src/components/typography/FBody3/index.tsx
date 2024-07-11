'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const FBody3 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.FBody3,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
FBody3.displayName = 'FBody3';
