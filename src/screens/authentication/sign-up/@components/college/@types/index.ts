import { HTMLAttributes } from 'react';

import { College } from '@/api/college/entity/college';

export interface CollegeProps extends HTMLAttributes<HTMLElement> {
    college: College;
}
