'use client';

import React, { forwardRef } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export const Center = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, ...props }, ref) => {
        return (
            <Box
                ref={ref}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                {...props}>
                {children}
            </Box>
        );
    },
);
Center.displayName = 'Center';
