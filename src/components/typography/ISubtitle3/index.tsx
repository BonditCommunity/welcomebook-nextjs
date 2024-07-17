'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const ISubtitle3 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.ISubtitle3,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
ISubtitle3.displayName = 'ISubtitle3';
