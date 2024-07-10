import { CSSProperties, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

export interface ComponentProps {
    sx?: SxProps<Theme>;
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
