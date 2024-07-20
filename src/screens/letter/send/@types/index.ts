import { z } from 'zod';

import { schema } from '../@constants';

export type SendLetterParams = {
    id: string;
};

export type Schema = z.infer<typeof schema>;
