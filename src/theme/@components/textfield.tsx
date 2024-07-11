'use client';

import { Theme, Components } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { typography } from '../typography';
import { Typography } from '../@enums';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
    styleOverrides: {
        input: ({ ownerState, theme }) => ({
            ...typography.IH3,
            maxHeight: 300,
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

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
    styleOverrides: {
        root: ({ ownerState, theme }) => ({
            borderRadius: 15,
            ...(ownerState.color !== 'secondary' && {
                backgroundColor: theme.palette.form.textfield.background,
            }),
            [`&.${outlinedInputClasses.focused}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderWidth: 1,
                    borderColor: theme.palette.form.textfield.border,
                },
            },
            [`&.${outlinedInputClasses.error}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderWidth: 1,
                    borderColor: theme.palette.form.textfield.error,
                },
            },
            [`&.${outlinedInputClasses.disabled}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: 'transparent',
                },
            },
            '&:hover': {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor:
                        ownerState.color === 'secondary'
                            ? theme.palette.form.textfield.border
                            : 'transparent',
                },
            },
        }),
        input: ({ ownerState, theme }) => ({
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: ownerState.startAdornment ? 10 : 30,
            paddingRight: ownerState.endAdornment ? 10 : 30,
            ...typography.FH4,
            color: theme.palette.form.textfield.text,
            '&::placeholder': {
                ...typography.IBody1,
                color: theme.palette.form.textfield.placeholder,
            },
            [`&.${outlinedInputClasses.disabled}`]: {
                color: theme.palette.form.textfield.text,
                WebkitTextFillColor: theme.palette.form.textfield.text,
            },
        }),
        notchedOutline: ({ ownerState, theme }) => ({
            borderColor:
                ownerState.color === 'secondary'
                    ? theme.palette.form.textfield.border
                    : 'transparent',
            transition: theme.transitions.create(['border-color'], {
                duration: theme.transitions.duration.shortest,
            }),
        }),
    },
};
