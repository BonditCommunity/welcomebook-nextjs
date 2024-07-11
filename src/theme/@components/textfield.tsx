'use client';

import { Theme, Components } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { typography } from '../typography';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: theme.palette.form.textfield.background,
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
        root: ({ theme }) => ({
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
        }),
        input: ({ theme }) => ({
            padding: '15px 30px',
            [`&.${outlinedInputClasses.disabled}`]: {
                color: theme.palette.form.textfield.text,
                WebkitTextFillColor: theme.palette.form.textfield.text,
            },
        }),
        notchedOutline: ({ theme }) => ({
            borderColor: 'transparent',
            transition: theme.transitions.create(['border-color'], {
                duration: theme.transitions.duration.shortest,
            }),
        }),
    },
};
