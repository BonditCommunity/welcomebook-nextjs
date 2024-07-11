'use client';

import { Theme, Components } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { typography } from '../typography';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
    styleOverrides: {
        root: ({ ownerState, theme }) => ({
            ...(ownerState.color !== 'secondary' && {
                backgroundColor: theme.palette.form.textfield.background,
            }),
        }),
        input: ({ theme }) => ({
            ...typography.FH4,
            color: theme.palette.form.textfield.text,
            '&::placeholder': {
                ...typography.IBody1,
                color: theme.palette.form.textfield.placeholder,
            },
        }),
    },
};

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
    styleOverrides: {
        root: ({ ownerState, theme }) => ({
            borderRadius: 15,
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
