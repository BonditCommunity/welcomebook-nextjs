import {
    CSSProperties,
    DetailedHTMLProps,
    HTMLAttributes,
    ReactNode,
} from 'react';

export interface ComponentProps<T>
    extends DetailedHTMLProps<HTMLAttributes<T>, T> {
    style?: CSSProperties;
}

export interface FCProps<T> extends ComponentProps<T> {
    children?: ReactNode;
}
