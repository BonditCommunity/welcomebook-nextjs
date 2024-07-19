'use client';

import React from 'react';
import MuiInputBase from '@mui/material/InputBase';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputClasses } from '@mui/material/Input';

import { InputProps } from './@types';
import { useTheme } from '@/hooks/common/use-theme';
import { typography } from '@/theme/typography';
import { Typography } from '@/theme/@enums';

export const Input: React.FC<InputProps> = ({
    sx,
    type = 'text',
    fullWidth = true,
    regex,
    hiddenError = false,
    ...props
}) => {
    const { theme } = useTheme();

    return (
        <MuiInputBase
            type={type}
            fullWidth={fullWidth}
            onChange={event => {
                if (regex && !regex.test(event.target.value)) return;
                props.onChange?.(event);
            }}
            error={!hiddenError ? props.error : false}
            {...props}
            sx={{
                [`& .${inputBaseClasses.input}`]: {
                    ...typography.IH3,
                    color: theme.form.base.text,
                    '&::placeholder': {
                        ...typography[
                            props.multiline ? Typography.IH1 : Typography.IH3
                        ],
                        color: theme.form.base.placeholder,
                    },
                    [`&.${inputClasses.disabled}`]: {
                        color: theme.form.base.text,
                        WebkitTextFillColor: theme.form.base.text,
                    },
                },
                ...sx,
            }}
        />
    );
};
