'use client';

import { Theme, Components } from '@mui/material/styles';

import { typography } from '../typography';
import { Typography } from '../@enums';
import { inputClasses } from '@mui/material/Input';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
    styleOverrides: {
        input: ({ ownerState, theme }) => ({
            ...typography.IH3,
            color: theme.palette.form.base.text,
            '&::placeholder': {
                ...typography[
                    ownerState.multiline ? Typography.IH1 : Typography.IH3
                ],
                color: theme.palette.form.base.placeholder,
            },
        }),
    },
};

export const MuiInput: Components<Theme>['MuiInput'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            [`&:hover:not(.${inputClasses.focused})`]: {
                '&:before': {
                    borderColor: theme.palette.form.underlined.border,
                },
            },
        }),
        input: {
            padding: 0,
            ...typography.IH1,
        },
        underline: ({ theme }) => ({
            '&::after': {
                borderBottomColor: theme.palette.form.underlined.border,
            },
        }),
    },
};
