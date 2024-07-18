'use client';

import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

import { spacing } from '@/theme/spacing';

export const SafeArea: React.FC<BoxProps> = ({ sx, children, ...props }) => {
    return (
        <Box
            sx={{
                paddingTop: spacing.header.height,
                ...sx,
            }}
            {...props}>
            {children}
        </Box>
    );
};
