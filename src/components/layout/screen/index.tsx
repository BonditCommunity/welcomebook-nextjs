'use client';

import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

import { toPx } from '@/helpers/common/to-px';
import { spacing } from '@/theme/spacing';

export const Screen: React.FC<BoxProps> = ({ sx, children, ...props }) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                paddingLeft: toPx(spacing.screen.padding.horizontal),
                paddingRight: toPx(spacing.screen.padding.horizontal),
                ...sx,
            }}
            {...props}>
            {children}
        </Box>
    );
};
