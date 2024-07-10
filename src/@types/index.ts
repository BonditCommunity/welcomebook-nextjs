import { CSSProperties, ReactNode } from 'react';

export interface ComponentProps {
    style?: CSSProperties;
}

export interface FCProps extends ComponentProps {
    children?: ReactNode;
}

export interface Locale {
    value: string;
    system: any;
    adapter: any;
}
