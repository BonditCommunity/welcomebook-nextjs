import { HTMLAttributes } from 'react';

import { School } from '../../../@types';

export interface SchoolProps extends HTMLAttributes<HTMLElement> {
    key: any;
    school: School;
}
