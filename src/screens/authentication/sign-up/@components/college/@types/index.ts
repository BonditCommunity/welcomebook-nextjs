import { HTMLAttributes } from 'react';

import { CollegeRes } from '@/api/college/entity/college';

export interface CollegeProps extends HTMLAttributes<HTMLElement> {
    college: CollegeRes;
}
