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

export interface Size {
    width: number;
    height: number;
}

export interface Asset extends Size {
    src: string;
}

export type ThemeType = 'light' | 'dark';

export interface JwtPayload {
    email: string;
    name: string;
    jti: string;
}

export interface Country {
    value: string;
    label: string;
    number: string;
}
