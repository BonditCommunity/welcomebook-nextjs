'use client';

import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import { Controller, useFormContext } from 'react-hook-form';

import { CheckboxProps } from './@types';

export const Checkbox: React.FC<CheckboxProps> = ({ name, ...props }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <MuiCheckbox {...field} checked={field.value} {...props} />
            )}
        />
    );
};
