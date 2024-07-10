'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { FREDOKA } from '../@constants';
import { Font } from '@/theme/@enums';

export const FH4 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    fontFamily: FREDOKA,
                    fontWeight: Font.SemiBold,
                    fontSize: 20,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
FH4.displayName = 'FH4';
