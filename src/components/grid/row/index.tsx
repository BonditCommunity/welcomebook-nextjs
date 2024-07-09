'use client';

import React from 'react';

import { FCProps } from '@/@types';
import { combineClassName } from '@/helpers/layout/combine-class-name';
import { ROW } from './@constants';

export const Row: React.FC<FCProps<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={combineClassName(ROW, className)} {...props}>
            {children}
        </div>
    );
};
