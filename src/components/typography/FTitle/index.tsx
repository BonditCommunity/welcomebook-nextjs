'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const FTitle = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.FTitle,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
FTitle.displayName = 'FTitle';
