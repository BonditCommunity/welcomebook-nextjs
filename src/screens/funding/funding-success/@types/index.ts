import { z } from 'zod';

import { schema } from '../@constants';

export type FundingSuccessParams = {
    id: string;
};

export type Schema = z.infer<typeof schema>;
