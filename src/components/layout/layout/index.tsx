'use client';

import React from 'react';

import { ChildrenProps } from '@/@types';

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return <main>{children}</main>;
};
