'use client';

import { useTheme as useMuiTheme } from '@mui/material/styles';

export function useTheme() {
    const theme = useMuiTheme();

    return {
        theme: theme.palette,
    };
}
