'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const ISubtitle1 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.ISubtitle1,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
ISubtitle1.displayName = 'ISubtitle1';
