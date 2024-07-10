'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { INTER } from '../@constants';
import { Font } from '@/theme/@enums';

export const IH3 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    fontFamily: INTER,
                    fontWeight: Font.Bold,
                    fontSize: 17,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
IH3.displayName = 'IH3';
