'use client';

import { useEffect } from 'react';

import { UseScrollProps } from './@types';
import { useVisible } from '../use-visible';

export const useScroll = ({ offset = 0, onEndReached }: UseScrollProps) => {
    const { ref, rootRef, visible } = useVisible({ offset });

    useEffect(() => {
        if (visible) {
            onEndReached();
        }
    }, [visible]);

    return {
        ref,
        rootRef,
    };
};
