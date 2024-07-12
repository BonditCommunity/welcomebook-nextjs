'use client';

import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

import { spacing } from '@/theme/spacing';

export const Screen: React.FC<BoxProps> = ({ sx, children, ...props }) => {
    return (
        <Box
            sx={{
                minHeight: '100dvh',
                paddingLeft: spacing.screen.padding.horizontal,
                paddingRight: spacing.screen.padding.horizontal,
                ...sx,
            }}
            {...props}>
            {children}
        </Box>
    );
};
