'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { INTER } from '../@constants';
import { Font } from '@/theme/@enums';

export const IBody1 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    fontFamily: INTER,
                    fontWeight: Font.Medium,
                    fontSize: 19,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
IBody1.displayName = 'IBody1';
