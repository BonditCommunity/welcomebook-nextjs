'use client';

import React from 'react';
import MuiTextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { Controller, useFormContext } from 'react-hook-form';

import { InputBoxProps } from './@types';
import { useTheme } from '@/hooks/common/use-theme';
import { inputBaseClasses } from '@mui/material';
import { typography } from '@/theme/typography';
import { Typography } from '@/theme/@enums';
import { createTransition } from '../@helper';

export const InputBox: React.FC<InputBoxProps> = ({
    sx,
    name,
    color = 'default',
    type = 'text',
    fullWidth = true,
    hiddenLabel = true,
    helperText,
    regex,
    hiddenError = false,
    ...props
}) => {
    const { theme } = useTheme();
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <MuiTextField
                    {...field}
                    type={type}
                    variant={'outlined'}
                    fullWidth={fullWidth}
                    hiddenLabel={hiddenLabel}
                    value={
                        type === 'number' && field.value === 0
                            ? ''
                            : field.value
                    }
                    onChange={event => {
                        if (regex && !regex.test(event.target.value)) return;
                        if (type === 'number') {
                            field.onChange(Number(event.target.value));
                        } else {
                            field.onChange(event.target.value);
                        }
                    }}
                    error={!hiddenError ? !!error : false}
                    helperText={
                        !hiddenError
                            ? error?.message ?? helperText
                            : helperText ?? undefined
                    }
                    {...props}
                    sx={{
                        backgroundColor: theme.form.outlined.background[color],
                        borderRadius: '15px',
                        [`& .${inputBaseClasses.input}`]: {
                            ...typography.IH3,
                            color: theme.form.outlined.text,
                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: props.InputProps?.startAdornment
                                ? 10
                                : 20,
                            paddingRight: props.InputProps?.endAdornment
                                ? 10
                                : 20,
                            '&::placeholder': {
                                ...typography[
                                    props.multiline
                                        ? Typography.IH1
                                        : Typography.IH3
                                ],
                                color: theme.form.outlined.placeholder[color],
                            },
                            [`&.${outlinedInputClasses.disabled}`]: {
                                color: theme.form.outlined.text,
                                WebkitTextFillColor: theme.form.outlined.text,
                            },
                        },
                        [`& .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: theme.form.outlined.border[color],
                            borderWidth: color === 'black' ? 2 : 1,
                            borderRadius: '15px',
                            transition: createTransition('border-color'),
                        },
                        [`& .${outlinedInputClasses.focused}`]: {
                            backgroundColor:
                                theme.form.outlined.background.focused[color],
                            borderRadius: '15px',
                            transition: createTransition('background-color'),
                            [`& .${outlinedInputClasses.notchedOutline}`]: {
                                borderWidth: color === 'black' ? 2 : 1,
                                borderColor:
                                    theme.form.outlined.border.focused[color],
                            },
                        },
                        [`& .${outlinedInputClasses.error}`]: {
                            [`& .${outlinedInputClasses.notchedOutline}`]: {
                                borderWidth: color === 'black' ? 2 : 1,
                                borderColor: theme.form.base.error,
                            },
                        },
                        [`& .${outlinedInputClasses.disabled}`]: {
                            [`& .${outlinedInputClasses.notchedOutline}`]: {
                                borderWidth: color === 'black' ? 2 : 1,
                                borderColor: theme.form.outlined.border[color],
                            },
                        },
                        '&:hover': {
                            [`& .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor:
                                    theme.form.outlined.border.hover[color],
                            },
                        },
                        ...sx,
                    }}
                />
            )}
        />
    );
};
