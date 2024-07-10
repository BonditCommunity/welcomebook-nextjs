import type { Theme, Components } from '@mui/material/styles';

export const MuiTypography: Components<Theme>['MuiTypography'] = {
    styleOverrides: {
        root: ({ theme }) => ({ color: theme.palette.text.default }),
    },
};
