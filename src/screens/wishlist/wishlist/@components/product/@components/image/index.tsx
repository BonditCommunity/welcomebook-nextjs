'use client';

import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import { ProductComponentProps } from '../@types';
import { sizing } from '@/screens/wishlist/wishlist/@constants';
import { Image as LazyImage } from '@/components/image/image/image';

export const Image: React.FC<ProductComponentProps> = ({ style, product }) => {
    const { attributes, listeners, transform, setNodeRef } = useDraggable({
        id: product.id,
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={{
                width: sizing.product.image,
                height: sizing.product.image,
                transform: CSS.Translate.toString(transform),
                touchAction: 'none',
                ...(transform && {
                    zIndex: 9999,
                    transform: CSS.Translate.toString(transform),
                }),
                ...style,
            }}>
            <LazyImage
                src={product.imageUrl}
                width={sizing.product.image}
                height={sizing.product.image}
                style={{
                    objectFit: 'contain',
                }}
            />
        </div>
    );
};
