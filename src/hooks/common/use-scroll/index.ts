'use client';

import { useEffect } from 'react';

import { UseScrollProps } from './@types';
import { useVisible } from '../use-visible';

export const useScroll = ({ onEndReached, ...props }: UseScrollProps) => {
    const { ref, containerRef, visible } = useVisible(props);

    useEffect(() => {
        if (visible) {
            onEndReached();
        }
    }, [visible]);

    return {
        ref,
        containerRef,
    };
};
