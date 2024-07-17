'use client';

import { useEffect, useRef, useState } from 'react';

import { UseVisibleProps } from './@types';

export const useVisible = (props?: UseVisibleProps) => {
    const ref = useRef<any>(null);
    const containerRef = useRef<any>(null);
    const observer = useRef<IntersectionObserver>();

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            {
                root: containerRef.current,
                rootMargin: `0px 0px ${props?.offset ?? 0}px`,
            },
        );
        observer.current.observe(ref.current);
        return () => {
            observer.current?.disconnect();
        };
    }, []);

    return {
        ref,
        containerRef,
        visible,
    };
};
