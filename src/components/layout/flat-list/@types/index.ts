import { CSSProperties, ReactNode } from 'react';

import { ComponentProps } from '@/@types';

export interface ListRenderItem<T> {
    (props: { item: T; index: number }): ReactNode;
}

export interface GetItemContainerStyle {
    (index: number): CSSProperties;
}

export interface FlatListProps<T> extends ComponentProps {
    data: T[];
    offset?: number;
    numColumns?: number;
    renderItem: ListRenderItem<T>;
    keyExtractor: (item: T, index: number) => string;
    getItemContainerStyle?: GetItemContainerStyle;
    onEndReached?: () => void;
}
