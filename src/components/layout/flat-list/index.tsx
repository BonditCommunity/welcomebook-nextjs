'use client';

import React, { useEffect } from 'react';

import { FlatListProps } from './@types';
import { useVisible } from '@/hooks/common/use-visible';
import { Row } from '@/components/grid/row';

export const FlatList = <T extends any>({
    data,
    offset = 0,
    numColumns = 1,
    renderItem,
    keyExtractor,
    getItemContainerStyle,
    onEndReached,
    ...props
}: FlatListProps<T>) => {
    const { ref, visible } = useVisible({ offset });

    useEffect(() => {
        if (visible) {
            onEndReached?.();
        }
    }, [visible]);

    if (numColumns > 1) {
        let list: T[][] = [];
        for (let i = 0; i < Math.ceil(data.length / numColumns); i++) {
            let row: T[] = [];
            for (let j = 0; j < numColumns; j++) {
                row.push(data[i * numColumns + j]);
            }
            list.push(row);
        }
        return (
            <div {...props}>
                {list.map((row, i) => {
                    return (
                        <Row key={i}>
                            {row.map((item, j) => {
                                const index = i * numColumns + j;
                                if (!item) {
                                    return (
                                        <div
                                            key={`${i}-${index}`}
                                            style={getItemContainerStyle?.(
                                                index,
                                            )}
                                        />
                                    );
                                }
                                return (
                                    <div
                                        key={`${i}-${keyExtractor(
                                            item,
                                            index,
                                        )}`}
                                        style={getItemContainerStyle?.(index)}>
                                        {renderItem({ item, index })}
                                    </div>
                                );
                            })}
                        </Row>
                    );
                })}
                <div ref={ref} />
            </div>
        );
    }
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
