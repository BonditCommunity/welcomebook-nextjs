import { ReactNode } from 'react';

import { ComponentProps } from '@/@types';

export interface ListRenderItem<T> {
    (props: { item: T; index: number }): ReactNode;
}

export interface FlatListProps<T> extends ComponentProps {
    data: T[];
    offset?: number;
    renderItem: ListRenderItem<T>;
    keyExtractor: (item: T, index: number) => string;
    onEndReached?: () => void;
}
