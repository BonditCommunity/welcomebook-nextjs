'use client';

import React from 'react';
import MuiTextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

import { TextFieldProps } from './@types';

export const TextField: React.FC<TextFieldProps> = ({
    name,
    helperText,
    type = 'text',
    ...props
}) => {
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
                    fullWidth={true}
                    hiddenLabel={true}
                    value={
                        type === 'number' && field.value === 0
                            ? ''
                            : field.value
                    }
                    onChange={event => {
                        if (type === 'number') {
                            field.onChange(Number(event.target.value));
                        } else {
                            field.onChange(event.target.value);
                        }
                    }}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    {...props}
                />
            )}
        />
    );
};
