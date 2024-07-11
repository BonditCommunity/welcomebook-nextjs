'use client';

import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export const Col: React.FC<BoxProps> = ({ children, ...props }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} {...props}>
            {children}
        </Box>
    );
};
