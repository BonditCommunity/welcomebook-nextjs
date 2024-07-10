import { ReactNode } from 'react';

export interface ChildrenProps {
    children?: ReactNode;
}

export interface Locale {
    value: string;
    system: any;
    adapter: any;
}
