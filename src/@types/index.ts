import { CSSProperties, ReactNode } from 'react';

export interface ComponentProps {
    style?: CSSProperties;
}

export interface ChildrenProps {
    children?: ReactNode;
}

export interface FCProps extends ComponentProps, ChildrenProps {}

export interface Locale {
    value: string;
    system: any;
    adapter: any;
}
