'use client';

import React, { forwardRef } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export const Row = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, ...props }, ref) => {
        return (
            <Box ref={ref} display={'flex'} flexDirection={'row'} {...props}>
                {children}
            </Box>
        );
    },
);
