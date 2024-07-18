import { HTMLAttributes } from 'react';

import { CollegeRes } from '@/api/college/vm/res/college';

export interface CollegeProps extends HTMLAttributes<HTMLElement> {
    college: CollegeRes;
}
