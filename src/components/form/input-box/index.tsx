'use client';

import React, { useMemo } from 'react';
import MuiTextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { inputBaseClasses } from '@mui/material/InputBase';
import { CSSObject } from '@mui/material/styles';
import { Controller, useFormContext } from 'react-hook-form';

import { InputBoxProps } from './@types';
import { useTheme } from '@/hooks/common/use-theme';
import { typography } from '@/theme/typography';
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

    const styles = useMemo<{
        focused: CSSObject;
        hover: CSSObject;
    }>(() => {
        return {
            focused: {
                backgroundColor: theme.form.outlined.background.focused[color],
                borderRadius: '15px',
                transition: createTransition('background-color'),
                borderWidth: color === 'black' ? 2 : 1,
                borderColor: theme.form.outlined.border.focused[color],
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderWidth: color === 'black' ? 2 : 1,
                    borderColor: theme.form.outlined.border.focused[color],
                },
            },
            hover: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.form.outlined.border.hover[color],
                },
            },
        };
    }, [color, theme]);

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
                        ...(field.value && styles.focused),
                        [`& .${inputBaseClasses.input}`]: {
                            ...typography.FH4,
                            color: theme.form.outlined.text,
                            letterSpacing: '-0.32px',
                            borderRadius: '15px',
                            paddingTop: '15px !important',
                            paddingBottom: '15px !important',
                            paddingLeft: props.InputProps?.startAdornment
                                ? '10px !important'
                                : '20px !important',
                            paddingRight: props.InputProps?.endAdornment
                                ? '10px !important'
                                : '20px !important',
                            '&::placeholder': {
                                ...typography.IBody1,
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
                        [`& .${outlinedInputClasses.focused}`]: styles.focused,
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
                        '&:hover': styles.hover,
                        [`& .${outlinedInputClasses.adornedStart}`]: {
                            paddingLeft: 20,
                            '&:hover': styles.hover,
                        },
                        [`& .${outlinedInputClasses.adornedEnd}`]: {
                            paddingRight: 20,
                            '&:hover': styles.hover,
                        },
                        ...sx,
                    }}
                />
            )}
        />
    );
};
