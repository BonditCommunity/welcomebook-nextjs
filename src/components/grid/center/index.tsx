'use client';

import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export const Center: React.FC<BoxProps> = ({ children, ...props }) => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            {...props}>
            {children}
        </Box>
    );
};
