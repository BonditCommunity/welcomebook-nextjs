'use client';

import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import { ImageProps } from './@types';
import { sizing } from '@/screens/wishlist/wishlist/@constants';

export const Image: React.FC<ImageProps> = ({ product }) => {
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
                backgroundImage: `url(${product.imageUrl})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: CSS.Translate.toString(transform),
                ...(transform && {
                    zIndex: 9999,
                    transform: CSS.Translate.toString(transform),
                }),
            }}
        />
    );
};
