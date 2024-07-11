'use client';

import React from 'react';
import {
    LazyLoadImage,
    LazyLoadImageProps,
} from 'react-lazy-load-image-component';

export const Image: React.FC<LazyLoadImageProps> = ({
    style,
    wrapperProps,
    width,
    height,
    ...props
}) => {
    return (
        <LazyLoadImage
            effect={'blur'}
            width={width}
            height={height}
            {...props}
            wrapperProps={{
                style: {
                    transitionDelay: '1s',
                    width,
                    height,
                    ...wrapperProps?.style,
                },
                ...wrapperProps,
            }}
            style={{
                objectFit: 'cover',
                ...style,
            }}
        />
    );
};
