'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { FREDOKA } from '../@constants';
import { Font } from '@/theme/@enums';

export const FH3 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    fontFamily: FREDOKA,
                    fontWeight: Font.SemiBold,
                    fontSize: 25,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
FH3.displayName = 'FH3';
