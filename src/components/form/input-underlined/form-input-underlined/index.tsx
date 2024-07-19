'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { InputProps } from '../../@types';
import { InputUnderlined } from '..';

export const FormInputUnderlined: React.FC<InputProps> = ({
    sx,
    name,
    type = 'text',
    fullWidth = true,
    hiddenLabel = true,
    helperText,
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
                <InputUnderlined
                    {...field}
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
                />
            )}
        />
    );
};
