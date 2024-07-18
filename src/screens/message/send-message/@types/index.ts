import { z } from 'zod';

import { schema } from '../@constants';

export type SendMessageParams = {
    id: string;
};

export type Schema = z.infer<typeof schema>;
