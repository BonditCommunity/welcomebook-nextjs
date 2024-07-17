'use client';

import React, { forwardRef } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export const Col = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, ...props }, ref) => {
        return (
            <Box ref={ref} display={'flex'} flexDirection={'column'} {...props}>
                {children}
            </Box>
        );
    },
);
