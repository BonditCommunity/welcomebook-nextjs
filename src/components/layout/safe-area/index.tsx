'use client';

import React from 'react';

import { FCProps } from '@/@types';
import { spacing } from '@/theme/spacing';

export const SafeArea: React.FC<FCProps> = ({ style, children }) => {
    return (
        <div
            style={{
                paddingTop: spacing.header.height,
                ...style,
            }}>
            {children}
        </div>
    );
};
