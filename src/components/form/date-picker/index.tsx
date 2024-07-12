'use client';

import React from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField';
import dayjs from 'dayjs';

import { DatePickerProps } from './@types';

export const DatePicker: React.FC<DatePickerProps> = ({
    name,
    slotProps,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <MobileDatePicker
                    {...field}
                    value={field.value ? dayjs(field.value) : null}
                    orientation={'portrait'}
                    closeOnSelect={true}
                    disablePast={true}
                    onChange={date => {
                        if (!date) return;
                        field.onChange(date.toDate());
                    }}
                    slotProps={{
                        textField: {
                            fullWidth: true,
                            variant: 'outlined',
                            hiddenLabel: true,
                            error: !!error,
                            helperText:
                                error?.message ??
                                (slotProps?.textField as TextFieldProps)
                                    ?.helperText,
                            ...slotProps?.textField,
                        },
                        ...slotProps,
                    }}
                    {...props}
                />
            )}
        />
    );
};
