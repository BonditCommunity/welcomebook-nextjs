import { CSSProperties, ReactNode } from 'react';

export interface ComponentProps {
    style?: CSSProperties;
}

export interface FCProps extends ComponentProps {
    children?: ReactNode;
}
