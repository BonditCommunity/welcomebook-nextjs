import { ReactNode } from 'react';

import { ButtonProps } from '../../@types';

export type RoundButtonProps = ButtonProps & {
    size?: 'sm' | 'lg';
    renderPrefix?: () => ReactNode;
};
