'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { FREDOKA } from '../@constants';
import { Font } from '@/theme/@enums';

export const FBody1 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    fontFamily: FREDOKA,
                    fontWeight: Font.Medium,
                    fontSize: 25,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
FBody1.displayName = 'FBody1';
