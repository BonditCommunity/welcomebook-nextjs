'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const FBody1 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.FBody1,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
FBody1.displayName = 'FBody1';
