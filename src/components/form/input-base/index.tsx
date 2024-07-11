'use client';

import React from 'react';
import MuiInputBase from '@mui/material/InputBase';
import { Controller, useFormContext } from 'react-hook-form';

import { InputBaseProps } from './@types';

export const InputBase: React.FC<InputBaseProps> = ({
    name,
    type = 'text',
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <MuiInputBase
                    {...field}
                    type={type}
                    fullWidth={true}
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
                    {...props}
                />
            )}
        />
    );
};
