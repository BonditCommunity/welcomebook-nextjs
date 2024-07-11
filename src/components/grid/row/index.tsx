'use client';

import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export const Row: React.FC<BoxProps> = ({ children, ...props }) => {
    return (
        <Box display={'flex'} flexDirection={'row'} {...props}>
            {children}
        </Box>
    );
};
