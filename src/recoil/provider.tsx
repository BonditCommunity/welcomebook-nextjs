'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

import { ChildrenProps } from '@/@types';

export const RecoilProvider: React.FC<ChildrenProps> = ({ children }) => {
    return <RecoilRoot>{children}</RecoilRoot>;
};
