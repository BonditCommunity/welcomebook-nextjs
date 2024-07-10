'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { typography } from '@/theme/typography';

export const IBody1 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    ...typography.IBody1,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
IBody1.displayName = 'IBody1';
