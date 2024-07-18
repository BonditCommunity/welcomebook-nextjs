import { ReactNode } from 'react';

import { ComponentProps } from '@/@types';

export interface HeaderProps extends ComponentProps {
    title: string;
    renderAction?: () => ReactNode;
}
