import { ReactNode } from 'react';

import { ButtonProps } from '../../@types';

export type RoundButtonProps = ButtonProps & {
    size?: 'sm' | 'lg' | 'xl';
    border?: boolean;
    renderPrefix?: () => ReactNode;
};
