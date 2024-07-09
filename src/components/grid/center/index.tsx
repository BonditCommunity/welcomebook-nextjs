'use client';

import React from 'react';

import { FCProps } from '@/@types';
import { combineClassName } from '@/helpers/layout/combine-class-name';
import { CENTER } from './@constants';

export const Center: React.FC<FCProps<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={combineClassName(CENTER, className)} {...props}>
            {children}
        </div>
    );
};
