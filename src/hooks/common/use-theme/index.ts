'use client';

import { useTheme as useMuiTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ThemeType } from '@/@types';

export function useTheme() {
    const theme = useMuiTheme();
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return {
        theme: theme.palette,
        type: isDarkMode ? ('dark' as ThemeType) : ('light' as ThemeType),
    };
}
