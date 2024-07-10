'use client';

import React from 'react';
import Box from '@mui/material/Box';

import { SheetProps } from './@types';
import { spacing } from '@/theme/spacing';
import { useTheme } from '@/hooks/common/use-theme';

export const Sheet: React.FC<SheetProps> = ({
    sx,
    children,
    type = 'default',
    ...props
}) => {
    const { theme } = useTheme();

    return (
        <Box
            sx={{
                paddingTop: 35,
            }}>
            <Box
                sx={{
                    backgroundColor: theme.sheet.background[type],
                    minHeight: 'calc(100vh - 35px)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10,
                    paddingLeft: spacing.screen.padding.horizontal,
                    paddingRight: spacing.screen.padding.horizontal,
                    ...sx,
                }}
                {...props}>
                <Box
                    sx={{
                        width: 65,
                        height: 5,
                        backgroundColor: theme.sheet.handle,
                        borderRadius: 9999,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
                {children}
            </Box>
        </Box>
    );
};
