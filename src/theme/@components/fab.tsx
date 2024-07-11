import type { Theme, Components } from '@mui/material/styles';

export const MuiFab: Components<Theme>['MuiFab'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            width: 60,
            height: 60,
            borderRadius: 9999,
            color: theme.palette.form.upload.background,
            backgroundColor: theme.palette.form.upload.background,
            boxShadow: 'none',
            '&:active': {
                boxShadow: 'none',
            },
        }),
    },
};