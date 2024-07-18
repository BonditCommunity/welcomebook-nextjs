'use client';

import React from 'react';

import { ProductProps } from './@types';
import { useTheme } from '@/hooks/common/use-theme';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { maxlines } from '@/theme/styles';

export const Product: React.FC<ProductProps> = ({ style, product }) => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                height: 265,
                backgroundColor: theme.background.primary,
                ...style,
            }}>
            <ISubtitle2
                color={theme.text.white}
                textAlign={'center'}
                sx={{
                    ...maxlines(2),
                }}>
                {product.productName}
            </ISubtitle2>
        </div>
    );
};
