'use client';

import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { FREDOKA } from '../@constants';
import { Font } from '@/theme/@enums';

export const FTitle = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Typography
                ref={ref}
                sx={{
                    fontFamily: FREDOKA,
                    fontWeight: Font.SemiBold,
                    fontSize: 70,
                    ...sx,
                }}
                {...props}>
                {children}
            </Typography>
        );
    },
);
FTitle.displayName = 'FTitle';
