'use client';

import React from 'react';

import { ProductComponentProps } from '../@types';
import { ProductStatus } from '@/api/product/vm/enum/product-status';
import { color } from '@/theme/theme';
import { sizing } from '@/screens/wishlist/wishlist/@constants';

export const Status: React.FC<ProductComponentProps> = ({
    product,
    ...props
}) => {
    return (
        <div {...props}>
            <div
                style={{
                    width: sizing.product.status.size,
                    height: sizing.product.status.size,
                    borderRadius: 9999,
                    backgroundColor:
                        product.status === ProductStatus.SOLDOUT
                            ? color.red.default
                            : color.green.default,
                }}
            />
        </div>
    );
};
