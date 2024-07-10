'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const IBody2 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.IBody2,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
IBody2.displayName = 'IBody2';
