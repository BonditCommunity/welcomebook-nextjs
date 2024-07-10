'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { INTER } from '../@constants';
import { Font } from '@/theme/@enums';

export const IBody2 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    fontFamily: INTER,
                    fontWeight: Font.Regular,
                    fontSize: 16,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
IBody2.displayName = 'IBody2';
