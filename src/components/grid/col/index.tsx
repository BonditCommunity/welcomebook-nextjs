'use client';

import React from 'react';

import { FCProps } from '@/@types';
import { combineClassName } from '@/helpers/layout/combine-class-name';
import { COL } from './@constants';

export const Col: React.FC<FCProps<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={combineClassName(COL, className)} {...props}>
            {children}
        </div>
    );
};
