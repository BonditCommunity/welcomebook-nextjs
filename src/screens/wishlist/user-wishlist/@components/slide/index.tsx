'use client';

import React from 'react';
import { SlideProps } from './@types';
import { sizing, slideHeight } from '../../@constants';
import { Product } from './@components/product';

export const Slide: React.FC<SlideProps> = ({ products }) => {
    return (
        <div
            style={{
                flex: '0 0 100%',
                height: slideHeight,
                paddingLeft: 55,
                paddingRight: 55,
            }}>
            {products.map((product, index) => {
                return (
                    <Product
                        key={product.id}
                        product={product}
                        style={{
                            ...(index > 0 && {
                                marginTop: sizing.product.gap,
                            }),
                        }}
                    />
                );
            })}
        </div>
    );
};
