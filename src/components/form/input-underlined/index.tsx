'use client';

import React, { forwardRef } from 'react';
import MuiTextField from '@mui/material/TextField';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputClasses } from '@mui/material/Input';

import { InputProps } from '../@types';
import { useTheme } from '@/hooks/common/use-theme';
import { typography } from '@/theme/typography';

export const InputUnderlined = forwardRef<HTMLDivElement, InputProps>(
    (
        {
            sx,
            type = 'text',
            fullWidth = true,
            hiddenLabel = true,
            regex,
            hiddenError = false,
            ...props
        },
        ref,
    ) => {
        const { theme } = useTheme();

        return (
            <MuiTextField
                ref={ref}
                type={type}
                variant={'standard'}
                fullWidth={fullWidth}
                hiddenLabel={hiddenLabel}
                error={!hiddenError ? props.error : false}
                {...props}
                sx={{
                    [`& .${inputBaseClasses.input}`]: {
                        ...typography.IH1,
                        color: theme.form.base.text,
                        padding: 0,
                        '&::placeholder': {
                            ...typography.IH1,
                            color: theme.form.base.placeholder,
                        },
                        [`&.${inputClasses.disabled}`]: {
                            color: theme.form.base.text,
                            WebkitTextFillColor: theme.form.base.text,
                        },
                    },
                    [`& .${inputClasses.underline}`]: {
                        [`&:hover:not(.${inputClasses.focused})`]: {
                            '&:before': {
                                borderColor: `${theme.form.underlined.border} !important`,
                            },
                        },
                        '&::after': {
                            borderBottomColor: theme.form.underlined.border,
                        },
                    },
                    ...sx,
                }}
            />
        );
    },
);
InputUnderlined.displayName = 'InputUnderlined';
