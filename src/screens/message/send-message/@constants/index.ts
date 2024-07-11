'use client';

import { z } from 'zod';
import { File } from 'buffer';

import { i18n } from '@/i18n';
import { ERRORS } from '@/messages/error';

export const schema = z.object({
    message: z
        .string()
        .min(1, { message: i18n.t(ERRORS.FORM.REQUIRED.MESSAGE.MESSAGE) }),
    name: z
        .string()
        .min(1, { message: i18n.t(ERRORS.FORM.REQUIRED.MESSAGE.NAME) }),
    // image: z.instanceof(File).nullable(),
});
