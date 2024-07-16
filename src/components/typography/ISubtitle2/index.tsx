'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const ISubtitle2 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.ISubtitle2,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
ISubtitle2.displayName = 'ISubtitle2';
