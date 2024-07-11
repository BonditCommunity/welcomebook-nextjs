'use client';

import React from 'react';
import { FormProvider } from 'react-hook-form';

import { FormProps } from './@types';

export const Form: React.FC<FormProps> = ({
    style,
    children,
    methods,
    onSubmit,
}) => {
    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit} noValidate={true} style={style}>
                {children}
            </form>
        </FormProvider>
    );
};
