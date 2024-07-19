import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material/Button';

export type RoundButtonProps = Pick<
    ButtonProps,
    'type' | 'disabled' | 'onClick' | 'sx'
> & {
    size?: 'sm' | 'lg';
    color?: 'default' | 'rounded';
    text: string;
    renderPrefix?: () => ReactNode;
};
