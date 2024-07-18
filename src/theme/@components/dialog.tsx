import type { Theme, Components } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const MuiDialog: Components<Theme>['MuiDialog'] = {
    styleOverrides: {
        paper: ({ theme }) => ({
            backgroundColor: theme.palette.dialog.background,
            borderRadius: 20,
        }),
    },
};

export const MuiDialogActions: Components<Theme>['MuiDialogActions'] = {
    defaultProps: { disableSpacing: true },
    styleOverrides: {
        root: ({ theme }) => ({
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 20,
            borderColor: theme.palette.dialog.action.default.border,
            borderWidth: 4,
            backgroundColor: theme.palette.dialog.action.default.text,
            '& > :not(:first-of-type)': {
                marginLeft: 10,
            },
        }),
    },
};
