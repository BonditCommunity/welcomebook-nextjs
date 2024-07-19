'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { InputProps } from '../@types';
import { Input } from '..';

export const FormInput: React.FC<InputProps> = ({
    name,
    type = 'text',
    fullWidth = true,
    regex,
    hiddenError = false,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Input
                    {...field}
                    type={type}
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
                    {...props}
                />
            )}
        />
    );
};
