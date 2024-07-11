'use client';

import { z } from 'zod';

import { i18n } from '@/i18n';
import { errors } from '@/messages/error';

export const schema = z.object({
    message: z
        .string()
        .min(1, { message: i18n.t(errors.form.required.message.message) }),
    name: z
        .string()
        .min(1, { message: i18n.t(errors.form.required.message.name) }),
});
