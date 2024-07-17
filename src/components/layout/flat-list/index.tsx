'use client';

import React, { useEffect } from 'react';

import { FlatListProps } from './@types';
import { useVisible } from '@/hooks/common/use-visible';

export const FlatList = <T extends any>({
    data,
    offset = 0,
    renderItem,
    keyExtractor,
    onEndReached,
    ...props
}: FlatListProps<T>) => {
    const { ref, visible } = useVisible({ offset });

    useEffect(() => {
        if (visible) {
            onEndReached?.();
        }
    }, [visible]);

    return (
        <div {...props}>
            {data.map((item, index) => {
                return (
                    <div key={keyExtractor(item, index)}>
                        {renderItem({ item, index })}
                    </div>
                );
            })}
            <div ref={ref} />
        </div>
    );
};
