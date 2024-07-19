'use client';

import { Theme, Components } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

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
                    borderColor: theme.palette.form.standard.border,
                },
            },
        }),
        input: {
            padding: 0,
            ...typography.IH1,
        },
        underline: ({ theme }) => ({
            '&::after': {
                borderBottomColor: theme.palette.form.standard.border,
            },
        }),
    },
};

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
    styleOverrides: {
        root: ({ ownerState, theme }) => ({
            color: 'yellow',
            borderRadius: 15,
            [`&.${outlinedInputClasses.focused}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.palette.form.outlined.border,
                },
            },
            [`&.${outlinedInputClasses.error}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.palette.form.base.error,
                },
            },
            [`&.${outlinedInputClasses.disabled}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    ...(ownerState.color !== 'secondary' && {
                        borderColor: 'transparent',
                    }),
                },
            },
            '&:hover': {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.palette.form.outlined.border,
                },
            },
        }),
        input: ({ ownerState, theme }) => ({
            paddingTop: '15px !important',
            paddingBottom: '15px !important',
            paddingLeft: ownerState.startAdornment
                ? '10px !important'
                : '20px !important',
            paddingRight: ownerState.endAdornment
                ? '10px !important'
                : '20px !important',
            ...typography.FH4,
            color: theme.palette.form.outlined.text,
            '&::placeholder': {
                ...typography.IBody1,
                color:
                    ownerState.color === 'secondary'
                        ? theme.palette.form.outlined.placeholder
                        : theme.palette.form.outlined.placeholder,
            },
            [`&.${outlinedInputClasses.disabled}`]: {
                color: theme.palette.form.outlined.text,
                WebkitTextFillColor: theme.palette.form.outlined.text,
            },
        }),
        notchedOutline: ({ ownerState, theme }) => ({
            borderWidth: ownerState.color === 'secondary' ? 2 : 1,
            borderColor:
                ownerState.color === 'secondary'
                    ? theme.palette.form.outlined.border.default
                    : 'transparent',
            transition: theme.transitions.create(['border-color'], {
                duration: theme.transitions.duration.shortest,
            }),
        }),
        adornedStart: {
            paddingLeft: 20,
        },
        adornedEnd: {
            paddingRight: 20,
        },
    },
};
