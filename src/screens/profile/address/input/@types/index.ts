import { z } from 'zod';

import { schema } from '../@constants';

export type Schema = z.infer<typeof schema>;
